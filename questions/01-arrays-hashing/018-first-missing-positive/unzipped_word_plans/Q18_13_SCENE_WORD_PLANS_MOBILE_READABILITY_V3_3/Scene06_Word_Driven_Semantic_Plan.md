# Q18 · Scene 06 — Full HashSet Trace

**SCENE:** 06 / 13
**QUESTION:** Q18 First Missing Positive · LeetCode 41 · Arrays & Hashing
**BEAT TYPE:** TRACE · HASHSET
**SCRIPT SOURCE:** `08_FINAL_ELEVENLABS_NARRATION.md`, Phase-08 restarted approved wording (SHA256 in handoff)
**TRACE SOURCE:** `05_VERIFIED_TRACES.md` + `05_TRACE_MACHINE_CHECKED.json` from restarted phase ZIP
**AUDIO FILE:** PENDING FINAL AUDIO
**SYNC FILE:** PENDING FINAL AUDIO
**FPS:** PENDING FINAL AUDIO
**TOTAL FRAMES:** PENDING FINAL AUDIO
**PEDAGOGICAL GOAL:** Show 8 input insert attempts, one duplicate, 5 membership probes; never imply set storage order.
**TRACE STEP IDS:** SET-001, SET-002, SET-003, SET-004, SET-005, SET-006, SET-007, SET-008, SET-009, SET-010, SET-011, SET-012, SET-013
**DATA STRUCTURE:** array + HashSet unordered-membership
**PRIMARY HERO:** ArrayTrackV2 x155..1261 y332..458, 8 slots126×126 gap14, indices y288..321, input pointer below y483..558
**SUPPORT LEFT:** state rail x150..610 y636..810
**SUPPORT RIGHT:** open unordered membership field x1390..1840 y270..805
**TRACE PRIMARY STRUCTURE ZONE:** x155..1261 y288..585
**TRACE VARIABLE STATE RAIL:** x150..610 y620..815
**TRACE LIVE CALCULATION STAGE:** candidate/member decision x710..1290 y625..810
**TRACE AUXILIARY STRUCTURE ZONE:** x1390..1840 y270..805 (no black card, no buckets)
**TRACE ANSWER / RESULT ZONE:** x730..1280 y840..924
**REUSE:** ArrayTrackV2, PointerLaneV2, ChalkText, RoughCurve, RoughLine; Captions after exact sync
**EXTEND:** NONE approved by default; only request a backward-compatible kit extension if already-audited primitives prove insufficient during implementation.
**CREATE:** Local question-scene state orchestration only; no new shared primitive, no invented kit API.
**DO NOT TOUCH:** shared `theme`, existing other question implementations, dark `HashSetTable` table, dark `ChalkCodeEditorV2` default UI.
**MOTION SEMANTICS:** cause → compare/query → authorized state reaction → (true audio pause only) → swap/insert/pointer move if narration says → settle; no decorative motion.
**MORPH SEMANTICS:** stable slot identities; use value MOVE for swap, source persists; no path morph or fake data morph.
**SVG SEMANTICS:** `RoughLine` arrows only for spoken semantic relations; deterministic paths, source→destination direction; timing awaits sync.
**TRANSITION IN:** Previous scene teaching state clears or hands off using conceptual continuity; Q18 source same exact data wherever algorithm execution starts.
**TRANSITION OUT:** clear temporary arrows/callouts; preserve source identity only when useful to next scene; no guessed transition frames.
**FORBIDDEN:** guessed MP3/word IDs/frames; premature answer; dark teaching panels; tiny debug chips; extra example; UI dashboard; reflowed slots; fake set bucket order.

## 1. Source, stage and composition contract

- **Authoring space:** 1920×1080, green `theme.boardBg`; use `fonts.hand` for teacher chalk and `fonts.mono` for source code/numbers. Use tokens `theme.chalkText / chalkDim / pivot / cyan / good / warn` only for true state. Never invent new brand colors.
- **Scene label reserve:** x80..1840, y90..190. **Primary board stage:** x100..1820, y210..825. **Lower meaning/results:** x145..1820 y640..930. **Caption exclusion:** x100..1820 y960..1040, no teachable content behind subtitles.
- **Exact geometry ownership:** primary `ArrayTrackV2 x155..1261 y332..458, 8 slots126×126 gap14, indices y288..321, input pointer below y483..558`; left `state rail x150..610 y636..810`; right `open unordered membership field x1390..1840 y270..805`; active structure `x155..1261 y288..585`; variables `x150..610 y620..815`; live decision `candidate/member decision x710..1290 y625..810`; auxiliary `x1390..1840 y270..805 (no black card, no buckets)`; answer `x730..1280 y840..924`.
- **Layout clearance check:** 8×126 + 7×14 =1106; right boundary starts 129px after array track; captions y960..1040. Optical positions are precise design coordinates but NOT a claim that Remotion has been screenshot-tested. Preserve invisible space for future values so no shift occurs when revealed.
- **Causal order:** one primary teaching motion at a time, optionally one direct supporting reaction. All values/answers derive from verified source. Suppress any state not yet spoken.
- **Hold:** only if actual later sync indicates real pause; otherwise no fabricated hold. No incidental camera zoom or bounce.

### Verified kit/API ledger

| Kit component | Verified repository path | Actual API / state intent | Role / enter / persist / cleanup | Decision |
|---|---|---|---|---|
| `ArrayTrackV2` | `kit/components/array/ArrayTrackV2.tsx` | `elements`, `slotWidth`, `slotHeight`, `gap`, `maxWidth`, `showIndices`, `indexPlacement`, `pointers`, `swap`, `highlightedIndices`, `style` | Use fixed slot shells and stable index labels; pointers/semantic states configured from approved trace; enter on its exact speech phrase; persist through relevant causal beat; clear transient focus at next beat | REUSE |
| `PointerLaneV2` | `kit/components/array/PointerLaneV2.tsx` | `pointers[{id,label,index,color?,lane?}]`, `count`, `slotWidth`, `gap`, `placement` — via ArrayTrackV2 | Attach i / candidate-search pointer outside slots; keep slot positions constant; enter on its exact speech phrase; persist through relevant causal beat; clear transient focus at next beat | REUSE |
| `ChalkText` | `kit/components/ChalkText.tsx` | `children`, `startFrame`, `charFrames?`, `fontSize?`, `color?`, `font?`, `cursor?`, `style?`; frame props are PENDING SYNC | Write concept, variable, code or conclusion directly on the board using shared chalk typography; enter on its exact speech phrase; persist through relevant causal beat; clear transient focus at next beat | REUSE |
| `RoughCurve` | `kit/components/RoughCurve.tsx` | `points:[x,y][]`, `width?`, `height?`, `startFrame?`, `durationInFrames?`, `stroke?`, `seed?` | Represent unordered membership boundary or narrated growth only; never a generic graph dashboard; enter on its exact speech phrase; persist through relevant causal beat; clear transient focus at next beat | REUSE |
| `RoughLine` | `kit/components/RoughLine.tsx` | `shape:{kind:line\|arrow\|circle,...}`, `width`, `height`, `startFrame?`, `durationInFrames?`, `stroke?`, `seed?` — timing PENDING SYNC | Draw only currently narrated comparison/home relation or underline; enter on its exact speech phrase; persist through relevant causal beat; clear transient focus at next beat | REUSE |
| `Captions` | `kit/components/Captions.tsx` | `words:{word,start,end}[]`, `fps?`, `bottom?`, `fontSize?`, `maxWords?`, `maxWidth?` — POST SYNC ONLY | Post-sync exact word captions only; no fake words/time; enter on its exact speech phrase; persist through relevant causal beat; clear transient focus at next beat | REUSE post-audio |

### Scene-specific semantic implementation contract

**ArrayTrack implementation detail:** eight elements, `slotWidth=126`, `slotHeight=126`, `gap=14`, total 1106, wrapper x155, highlight input index only as it is narrated.

**Set field geometry (semantic identities, not storage positions):** fixed centers 3→(1512,344), 4→(1695,392), −1→(1450,487), 1→(1700,524), 10→(1510,617), 0→(1750,646), 2→(1600,734); each round chalk member diameter 82±6 and label 34–42px; positions are deliberately irregular. Only reveal a token after its successful insert. Duplicate 1 focuses existing token instead of creating an eighth.

**Set boundary:** transparent hand-drawn `RoughCurve` around x1370..1840 y275..810. No buckets, row numbers, sorted interpretation, dark `HashSetTable` window or fabricated hash iteration order. `HashSetTable.tsx` is semantically a bucket implementation display and is deliberately DO NOT TOUCH. Compose generic chalk/rough primitives into an unordered membership field per `docs/structures/02-hash-set.md`.

### Membership field positioning map

| Member | Fixed center (px) | Reveal owner |
|---|---|---|
| `3` | (1512,344) | `SET-001` |
| `4` | (1695,392) | `SET-002` |
| `-1` | (1450,487) | `SET-003` |
| `1` | (1700,524) | `SET-004` |
| `10` | (1510,617) | `SET-006` |
| `0` | (1750,646) | `SET-007` |
| `2` | (1600,734) | `SET-008` |

## 2. Exact narration → semantic word-anchor plan

**Anchor identity:** `Snn:Axxx` is a *semantic* identity, not `Wxxxx`. Each spoken phrase is quoted exactly from the approved script in source order. No audio exists at this stage. Every trigger awaits the exact matching word span after final sync.

### S06:A001 · `Start with an empty set.`

- **ANCHOR ID:** `S06:A001`; occurrence #1, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Start with an empty set.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 06, sentence 001 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Initialize empty unordered membership field, zero member tokens.
- **CENTER-STAGE HERO:** ArrayTrackV2 x155..1261 y332..458, 8 slots126×126 gap14, indices y288..321, input pointer below y483..558 — current attention: array center + unordered set field right.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Array unchanged; membership tokens from completed SET insert steps only; insertion order is not rendered as table order; machine trace source for exact membership at this anchor.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughCurve`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **COLLISION CHECK:** Active zone `x155..1261 y288..585`; supports `x150..610 y620..815` + `candidate/member decision x710..1290 y625..810`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S06:A002 · `Read our original array from left to right.`

- **ANCHOR ID:** `S06:A002`; occurrence #2, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Read our original array from left to right.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 06, sentence 002 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Focus original master input read order; not set storage order.
- **CENTER-STAGE HERO:** ArrayTrackV2 x155..1261 y332..458, 8 slots126×126 gap14, indices y288..321, input pointer below y483..558 — current attention: array center + unordered set field right.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Array unchanged; membership tokens from completed SET insert steps only; insertion order is not rendered as table order; machine trace source for exact membership at this anchor.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughCurve`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **COLLISION CHECK:** Active zone `x155..1261 y288..585`; supports `x150..610 y620..815` + `candidate/member decision x710..1290 y625..810`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S06:A003 · `Index zero has three … add three.`

- **ANCHOR ID:** `S06:A003`; occurrence #3, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Index zero has three … add three.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 06, sentence 003 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Read source index 0 holding `3`; membership already present=false. Insert member `3` in its permanently assigned unordered field position.
- **CENTER-STAGE HERO:** ArrayTrackV2 x155..1261 y332..458, 8 slots126×126 gap14, indices y288..321, input pointer below y483..558 — current attention: array center + unordered set field right.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Insertion focus pivot; confirmed unique member good; duplicate equality warn. There are no indexed set slots.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Reveal one round member token in its fixed semantic location; input array does not mutate.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Set before (membership only)=[]; set after=[3]; cardinality=1; source read index=0. This sorted diagnostic representation must NOT dictate the displayed token order.
- **TRACE STEP IDS:** `SET-001`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughCurve`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** INSERT / QUERY → resolve member identity; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **COLLISION CHECK:** Active zone `x155..1261 y288..585`; supports `x150..610 y620..815` + `candidate/member decision x710..1290 y625..810`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S06:A004 · `Index one has four … add four.`

- **ANCHOR ID:** `S06:A004`; occurrence #4, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Index one has four … add four.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 06, sentence 004 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Read source index 1 holding `4`; membership already present=false. Insert member `4` in its permanently assigned unordered field position.
- **CENTER-STAGE HERO:** ArrayTrackV2 x155..1261 y332..458, 8 slots126×126 gap14, indices y288..321, input pointer below y483..558 — current attention: array center + unordered set field right.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Insertion focus pivot; confirmed unique member good; duplicate equality warn. There are no indexed set slots.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Reveal one round member token in its fixed semantic location; input array does not mutate.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Set before (membership only)=[3]; set after=[3, 4]; cardinality=2; source read index=1. This sorted diagnostic representation must NOT dictate the displayed token order.
- **TRACE STEP IDS:** `SET-002`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughCurve`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** INSERT / QUERY → resolve member identity; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **COLLISION CHECK:** Active zone `x155..1261 y288..585`; supports `x150..610 y620..815` + `candidate/member decision x710..1290 y625..810`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S06:A005 · `Index two has minus one … add minus one.`

- **ANCHOR ID:** `S06:A005`; occurrence #5, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Index two has minus one … add minus one.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 06, sentence 005 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Read source index 2 holding `-1`; membership already present=false. Insert member `-1` in its permanently assigned unordered field position.
- **CENTER-STAGE HERO:** ArrayTrackV2 x155..1261 y332..458, 8 slots126×126 gap14, indices y288..321, input pointer below y483..558 — current attention: array center + unordered set field right.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Insertion focus pivot; confirmed unique member good; duplicate equality warn. There are no indexed set slots.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Reveal one round member token in its fixed semantic location; input array does not mutate.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Set before (membership only)=[3, 4]; set after=[-1, 3, 4]; cardinality=3; source read index=2. This sorted diagnostic representation must NOT dictate the displayed token order.
- **TRACE STEP IDS:** `SET-003`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughCurve`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** INSERT / QUERY → resolve member identity; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **COLLISION CHECK:** Active zone `x155..1261 y288..585`; supports `x150..610 y620..815` + `candidate/member decision x710..1290 y625..810`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S06:A006 · `Index three has one … add one.`

- **ANCHOR ID:** `S06:A006`; occurrence #6, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Index three has one … add one.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 06, sentence 006 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Read source index 3 holding `1`; membership already present=false. Insert member `1` in its permanently assigned unordered field position.
- **CENTER-STAGE HERO:** ArrayTrackV2 x155..1261 y332..458, 8 slots126×126 gap14, indices y288..321, input pointer below y483..558 — current attention: array center + unordered set field right.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Insertion focus pivot; confirmed unique member good; duplicate equality warn. There are no indexed set slots.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Reveal one round member token in its fixed semantic location; input array does not mutate.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Set before (membership only)=[-1, 3, 4]; set after=[-1, 1, 3, 4]; cardinality=4; source read index=3. This sorted diagnostic representation must NOT dictate the displayed token order.
- **TRACE STEP IDS:** `SET-004`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughCurve`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** INSERT / QUERY → resolve member identity; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **COLLISION CHECK:** Active zone `x155..1261 y288..585`; supports `x150..610 y620..815` + `candidate/member decision x710..1290 y625..810`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S06:A007 · `Index four has another one.`

- **ANCHOR ID:** `S06:A007`; occurrence #7, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Index four has another one.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 06, sentence 007 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Focus duplicate incoming 1 and existing 1 before resolving equality.
- **CENTER-STAGE HERO:** ArrayTrackV2 x155..1261 y332..458, 8 slots126×126 gap14, indices y288..321, input pointer below y483..558 — current attention: array center + unordered set field right.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Array unchanged; membership tokens from completed SET insert steps only; insertion order is not rendered as table order; machine trace source for exact membership at this anchor.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughCurve`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **COLLISION CHECK:** Active zone `x155..1261 y288..585`; supports `x150..610 y620..815` + `candidate/member decision x710..1290 y625..810`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S06:A008 · `One is already present … so the set stays unchanged.`

- **ANCHOR ID:** `S06:A008`; occurrence #8, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “One is already present … so the set stays unchanged.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 06, sentence 008 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Read source index 4 holding `1`; membership already present=true. Duplicate — focus existing `1` only, no new member.
- **CENTER-STAGE HERO:** ArrayTrackV2 x155..1261 y332..458, 8 slots126×126 gap14, indices y288..321, input pointer below y483..558 — current attention: array center + unordered set field right.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Insertion focus pivot; confirmed unique member good; duplicate equality warn. There are no indexed set slots.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Focus the existing member token and retract attempted duplicate; member set unchanged.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Set before (membership only)=[-1, 1, 3, 4]; set after=[-1, 1, 3, 4]; cardinality=4; source read index=4. This sorted diagnostic representation must NOT dictate the displayed token order.
- **TRACE STEP IDS:** `SET-005`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughCurve`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** INSERT / QUERY → resolve member identity; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **COLLISION CHECK:** Active zone `x155..1261 y288..585`; supports `x150..610 y620..815` + `candidate/member decision x710..1290 y625..810`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S06:A009 · `Index five has ten … add ten.`

- **ANCHOR ID:** `S06:A009`; occurrence #9, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Index five has ten … add ten.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 06, sentence 009 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Read source index 5 holding `10`; membership already present=false. Insert member `10` in its permanently assigned unordered field position.
- **CENTER-STAGE HERO:** ArrayTrackV2 x155..1261 y332..458, 8 slots126×126 gap14, indices y288..321, input pointer below y483..558 — current attention: array center + unordered set field right.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Insertion focus pivot; confirmed unique member good; duplicate equality warn. There are no indexed set slots.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Reveal one round member token in its fixed semantic location; input array does not mutate.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Set before (membership only)=[-1, 1, 3, 4]; set after=[-1, 1, 3, 4, 10]; cardinality=5; source read index=5. This sorted diagnostic representation must NOT dictate the displayed token order.
- **TRACE STEP IDS:** `SET-006`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughCurve`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** INSERT / QUERY → resolve member identity; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **COLLISION CHECK:** Active zone `x155..1261 y288..585`; supports `x150..610 y620..815` + `candidate/member decision x710..1290 y625..810`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S06:A010 · `Index six has zero … add zero.`

- **ANCHOR ID:** `S06:A010`; occurrence #10, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Index six has zero … add zero.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 06, sentence 010 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Read source index 6 holding `0`; membership already present=false. Insert member `0` in its permanently assigned unordered field position.
- **CENTER-STAGE HERO:** ArrayTrackV2 x155..1261 y332..458, 8 slots126×126 gap14, indices y288..321, input pointer below y483..558 — current attention: array center + unordered set field right.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Insertion focus pivot; confirmed unique member good; duplicate equality warn. There are no indexed set slots.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Reveal one round member token in its fixed semantic location; input array does not mutate.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Set before (membership only)=[-1, 1, 3, 4, 10]; set after=[-1, 0, 1, 3, 4, 10]; cardinality=6; source read index=6. This sorted diagnostic representation must NOT dictate the displayed token order.
- **TRACE STEP IDS:** `SET-007`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughCurve`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** INSERT / QUERY → resolve member identity; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **COLLISION CHECK:** Active zone `x155..1261 y288..585`; supports `x150..610 y620..815` + `candidate/member decision x710..1290 y625..810`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S06:A011 · `Index seven has two … add two.`

- **ANCHOR ID:** `S06:A011`; occurrence #11, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Index seven has two … add two.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 06, sentence 011 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Read source index 7 holding `2`; membership already present=false. Insert member `2` in its permanently assigned unordered field position.
- **CENTER-STAGE HERO:** ArrayTrackV2 x155..1261 y332..458, 8 slots126×126 gap14, indices y288..321, input pointer below y483..558 — current attention: array center + unordered set field right.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Insertion focus pivot; confirmed unique member good; duplicate equality warn. There are no indexed set slots.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Reveal one round member token in its fixed semantic location; input array does not mutate.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Set before (membership only)=[-1, 0, 1, 3, 4, 10]; set after=[-1, 0, 1, 2, 3, 4, 10]; cardinality=7; source read index=7. This sorted diagnostic representation must NOT dictate the displayed token order.
- **TRACE STEP IDS:** `SET-008`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughCurve`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** INSERT / QUERY → resolve member identity; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **COLLISION CHECK:** Active zone `x155..1261 y288..585`; supports `x150..610 y620..815` + `candidate/member decision x710..1290 y625..810`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S06:A012 · `All eight positions are processed.`

- **ANCHOR ID:** `S06:A012`; occurrence #12, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “All eight positions are processed.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 06, sentence 012 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Confirm all eight inputs processed; stop input pointer.
- **CENTER-STAGE HERO:** ArrayTrackV2 x155..1261 y332..458, 8 slots126×126 gap14, indices y288..321, input pointer below y483..558 — current attention: array center + unordered set field right.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Array unchanged; membership tokens from completed SET insert steps only; insertion order is not rendered as table order; machine trace source for exact membership at this anchor.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughCurve`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **COLLISION CHECK:** Active zone `x155..1261 y288..585`; supports `x150..610 y620..815` + `candidate/member decision x710..1290 y625..810`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S06:A013 · `There are seven distinct values in the set.`

- **ANCHOR ID:** `S06:A013`; occurrence #13, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “There are seven distinct values in the set.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 06, sentence 013 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Count seven distinct tokens (not eight); no numeric output candidate yet.
- **CENTER-STAGE HERO:** ArrayTrackV2 x155..1261 y332..458, 8 slots126×126 gap14, indices y288..321, input pointer below y483..558 — current attention: array center + unordered set field right.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Array unchanged; membership tokens from completed SET insert steps only; insertion order is not rendered as table order; machine trace source for exact membership at this anchor.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughCurve`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **COLLISION CHECK:** Active zone `x155..1261 y288..585`; supports `x150..610 y620..815` + `candidate/member decision x710..1290 y625..810`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S06:A014 · `Now candidate one … membership check: present.`

- **ANCHOR ID:** `S06:A014`; occurrence #14, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Now candidate one … membership check: present.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 06, sentence 014 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** QUERY member `1` in unordered set field; resolve PRESENT at the spoken phrase.
- **CENTER-STAGE HERO:** ArrayTrackV2 x155..1261 y332..458, 8 slots126×126 gap14, indices y288..321, input pointer below y483..558 — current attention: array center + unordered set field right.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Candidate theme.cyan; PRESENT theme.good; ABSENT theme.warn; set remains unordered.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Draw a short query relation from candidate `1` to existing member; only focus/reaction; do not insert, reorder, or rescan the source array.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Membership=[-1, 0, 1, 2, 3, 4, 10]; probe candidate=1; found=true; token positions and cardinality unchanged.
- **TRACE STEP IDS:** `SET-009`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughCurve`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** INSERT / QUERY → resolve member identity; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **COLLISION CHECK:** Active zone `x155..1261 y288..585`; supports `x150..610 y620..815` + `candidate/member decision x710..1290 y625..810`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S06:A015 · `Candidate two … present.`

- **ANCHOR ID:** `S06:A015`; occurrence #15, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Candidate two … present.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 06, sentence 015 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** QUERY member `2` in unordered set field; resolve PRESENT at the spoken phrase.
- **CENTER-STAGE HERO:** ArrayTrackV2 x155..1261 y332..458, 8 slots126×126 gap14, indices y288..321, input pointer below y483..558 — current attention: array center + unordered set field right.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Candidate theme.cyan; PRESENT theme.good; ABSENT theme.warn; set remains unordered.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Draw a short query relation from candidate `2` to existing member; only focus/reaction; do not insert, reorder, or rescan the source array.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Membership=[-1, 0, 1, 2, 3, 4, 10]; probe candidate=2; found=true; token positions and cardinality unchanged.
- **TRACE STEP IDS:** `SET-010`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughCurve`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** INSERT / QUERY → resolve member identity; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **COLLISION CHECK:** Active zone `x155..1261 y288..585`; supports `x150..610 y620..815` + `candidate/member decision x710..1290 y625..810`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S06:A016 · `Candidate three … present.`

- **ANCHOR ID:** `S06:A016`; occurrence #16, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Candidate three … present.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 06, sentence 016 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** QUERY member `3` in unordered set field; resolve PRESENT at the spoken phrase.
- **CENTER-STAGE HERO:** ArrayTrackV2 x155..1261 y332..458, 8 slots126×126 gap14, indices y288..321, input pointer below y483..558 — current attention: array center + unordered set field right.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Candidate theme.cyan; PRESENT theme.good; ABSENT theme.warn; set remains unordered.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Draw a short query relation from candidate `3` to existing member; only focus/reaction; do not insert, reorder, or rescan the source array.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Membership=[-1, 0, 1, 2, 3, 4, 10]; probe candidate=3; found=true; token positions and cardinality unchanged.
- **TRACE STEP IDS:** `SET-011`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughCurve`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** INSERT / QUERY → resolve member identity; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **COLLISION CHECK:** Active zone `x155..1261 y288..585`; supports `x150..610 y620..815` + `candidate/member decision x710..1290 y625..810`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S06:A017 · `Candidate four … present.`

- **ANCHOR ID:** `S06:A017`; occurrence #17, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Candidate four … present.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 06, sentence 017 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** QUERY member `4` in unordered set field; resolve PRESENT at the spoken phrase.
- **CENTER-STAGE HERO:** ArrayTrackV2 x155..1261 y332..458, 8 slots126×126 gap14, indices y288..321, input pointer below y483..558 — current attention: array center + unordered set field right.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Candidate theme.cyan; PRESENT theme.good; ABSENT theme.warn; set remains unordered.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Draw a short query relation from candidate `4` to existing member; only focus/reaction; do not insert, reorder, or rescan the source array.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Membership=[-1, 0, 1, 2, 3, 4, 10]; probe candidate=4; found=true; token positions and cardinality unchanged.
- **TRACE STEP IDS:** `SET-012`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughCurve`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** INSERT / QUERY → resolve member identity; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **COLLISION CHECK:** Active zone `x155..1261 y288..585`; supports `x150..610 y620..815` + `candidate/member decision x710..1290 y625..810`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S06:A018 · `Candidate five … not present.`

- **ANCHOR ID:** `S06:A018`; occurrence #18, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Candidate five … not present.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 06, sentence 018 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** QUERY member `5` in unordered set field; resolve ABSENT at the spoken phrase.
- **CENTER-STAGE HERO:** ArrayTrackV2 x155..1261 y332..458, 8 slots126×126 gap14, indices y288..321, input pointer below y483..558 — current attention: array center + unordered set field right.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Candidate theme.cyan; PRESENT theme.good; ABSENT theme.warn; set remains unordered.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Draw a short query relation from candidate `5` to set boundary; only focus/reaction; do not insert, reorder, or rescan the source array.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Membership=[-1, 0, 1, 2, 3, 4, 10]; probe candidate=5; found=false; token positions and cardinality unchanged.
- **TRACE STEP IDS:** `SET-013`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughCurve`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** INSERT / QUERY → resolve member identity; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **COLLISION CHECK:** Active zone `x155..1261 y288..585`; supports `x150..610 y620..815` + `candidate/member decision x710..1290 y625..810`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S06:A019 · `This is the first missing positive.`

- **ANCHOR ID:** `S06:A019`; occurrence #19, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “This is the first missing positive.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 06, sentence 019 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** On first failed probe, reveal first missing positive label, do not mutate set.
- **CENTER-STAGE HERO:** ArrayTrackV2 x155..1261 y332..458, 8 slots126×126 gap14, indices y288..321, input pointer below y483..558 — current attention: array center + unordered set field right.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Array unchanged; membership tokens from completed SET insert steps only; insertion order is not rendered as table order; machine trace source for exact membership at this anchor.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughCurve`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **COLLISION CHECK:** Active zone `x155..1261 y288..585`; supports `x150..610 y620..815` + `candidate/member decision x710..1290 y625..810`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S06:A020 · `Return five.`

- **ANCHOR ID:** `S06:A020`; occurrence #20, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Return five.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 06, sentence 020 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Reveal RETURN 5 (only after SET-013 MISS).
- **CENTER-STAGE HERO:** ArrayTrackV2 x155..1261 y332..458, 8 slots126×126 gap14, indices y288..321, input pointer below y483..558 — current attention: array center + unordered set field right.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Array unchanged; membership tokens from completed SET insert steps only; insertion order is not rendered as table order; machine trace source for exact membership at this anchor.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughCurve`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **COLLISION CHECK:** Active zone `x155..1261 y288..585`; supports `x150..610 y620..815` + `candidate/member decision x710..1290 y625..810`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S06:A021 · `We got the same answer … but never rescanned the original array for every candidate.`

- **ANCHOR ID:** `S06:A021`; occurrence #21, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “We got the same answer … but never rescanned the original array for every candidate.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 06, sentence 021 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Contrast one input scan plus set lookups with repeated original-array rescans, without replay.
- **CENTER-STAGE HERO:** ArrayTrackV2 x155..1261 y332..458, 8 slots126×126 gap14, indices y288..321, input pointer below y483..558 — current attention: array center + unordered set field right.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Array unchanged; membership tokens from completed SET insert steps only; insertion order is not rendered as table order; machine trace source for exact membership at this anchor.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughCurve`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future insertion or probe result; HashSet membership field never implies order, buckets, index, or sorted keys.
- **COLLISION CHECK:** Active zone `x155..1261 y288..585`; supports `x150..610 y620..815` + `candidate/member decision x710..1290 y625..810`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

## 3. Exit contract and critical visual states

- **ENTRY:** Before any phrase, reserve geometry internally but render future values/invariants/answer hidden.
- **FIRST IMPORTANT STATE:** First concept/input at first matching spoken anchor.
- **FIRST DECISION / QUERY:** First narrated comparison/probe/guard; source remains stable.
- **FIRST MUTATION:** Only at a verified mutation event for TRACE; N/A for purely conceptual/code scenes.
- **MOST COMPLEX STATE:** At the most crowded meaning, slot labels, pointer lanes, variable/calc and auxiliary set have fixed nonoverlapping spatial ownership.
- **FINAL STATE:** Only narrated conclusions exist, with persistent source truth.
- **TRANSITION OUT:** Clear transient arrows and current word highlight; preserve source identity when it makes next scene easier.

## 4. Scene-local verification and unresolved gates

- **Anchors audited:** 21 source-ordered phrases with non-overlapping source occurrence; audit file `Scene06_Audit.md`.
- **Trace events audited:** 13; exact machine event IDs listed above; none assigned in non-trace scene.
- **No unverified component APIs:** all names/props verified against GitHub `main` source; check file SHAs in master handoff if upstream changes.
- **Layout status:** specification geometry checked numerically; screenshot collision test is NOT POSSIBLE before Remotion implementation, so final visual signoff remains open.
- **Audio/sync:** pending; `Wxxxx`, FPS, exact frame ranges, glyph draws and pause classifications are NOT asserted.
- **Handoff gate:** this is a **PRE-AUDIO SEMANTIC PLAN**, not an approved post-audio frame plan. Antigravity must bind W IDs from real MP3 + validated sync and audit critical frames before implementation signoff.
