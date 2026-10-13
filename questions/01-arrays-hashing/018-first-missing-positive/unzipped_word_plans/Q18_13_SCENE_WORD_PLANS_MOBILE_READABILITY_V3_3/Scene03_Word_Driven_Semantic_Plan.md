# Q18 · Scene 03 — Full Brute Force Trace

**SCENE:** 03 / 13
**QUESTION:** Q18 First Missing Positive · LeetCode 41 · Arrays & Hashing
**BEAT TYPE:** TRACE · BRUTE
**SCRIPT SOURCE:** `08_FINAL_ELEVENLABS_NARRATION.md`, Phase-08 restarted approved wording (SHA256 in handoff)
**TRACE SOURCE:** `05_VERIFIED_TRACES.md` + `05_TRACE_MACHINE_CHECKED.json` from restarted phase ZIP
**AUDIO FILE:** PENDING FINAL AUDIO
**SYNC FILE:** PENDING FINAL AUDIO
**FPS:** PENDING FINAL AUDIO
**TOTAL FRAMES:** PENDING FINAL AUDIO
**PEDAGOGICAL GOAL:** Show all 23 candidate comparisons and first failed candidate with unchanged input.
**TRACE STEP IDS:** BR-001, BR-002, BR-003, BR-004, BR-005, BR-006, BR-007, BR-008, BR-009, BR-010, BR-011, BR-012, BR-013, BR-014, BR-015, BR-016, BR-017, BR-018, BR-019, BR-020, BR-021, BR-022, BR-023
**DATA STRUCTURE:** array + fixed slots
**PRIMARY HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575
**SUPPORT LEFT:** candidate rail x145..650 y635..780
**SUPPORT RIGHT:** comparison x770..1430 y635..805; result x1480..1830 y835..920
**TRACE PRIMARY STRUCTURE ZONE:** x350..1546 y290..590
**TRACE VARIABLE STATE RAIL:** x145..650 y635..800
**TRACE LIVE CALCULATION STAGE:** x770..1430 y635..805
**TRACE AUXILIARY STRUCTURE ZONE:** N/A
**TRACE ANSWER / RESULT ZONE:** x1480..1830 y835..925
**REUSE:** ArrayTrackV2, PointerLaneV2, ChalkText, RoughLine; Captions after exact sync
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
- **Exact geometry ownership:** primary `ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575`; left `candidate rail x145..650 y635..780`; right `comparison x770..1430 y635..805; result x1480..1830 y835..920`; active structure `x350..1546 y290..590`; variables `x145..650 y635..800`; live decision `x770..1430 y635..805`; auxiliary `N/A`; answer `x1480..1830 y835..925`.
- **Layout clearance check:** 8×132 +7×20 =1196 px; pointer labels cannot cross variable rail y635; captions y960..1040. Optical positions are precise design coordinates but NOT a claim that Remotion has been screenshot-tested. Preserve invisible space for future values so no shift occurs when revealed.
- **Causal order:** one primary teaching motion at a time, optionally one direct supporting reaction. All values/answers derive from verified source. Suppress any state not yet spoken.
- **Hold:** only if actual later sync indicates real pause; otherwise no fabricated hold. No incidental camera zoom or bounce.

### Verified kit/API ledger

| Kit component | Verified repository path | Actual API / state intent | Role / enter / persist / cleanup | Decision |
|---|---|---|---|---|
| `ArrayTrackV2` | `kit/components/array/ArrayTrackV2.tsx` | `elements`, `slotWidth`, `slotHeight`, `gap`, `maxWidth`, `showIndices`, `indexPlacement`, `pointers`, `swap`, `highlightedIndices`, `style` | Use fixed slot shells and stable index labels; pointers/semantic states configured from approved trace; enter on its exact speech phrase; persist through relevant causal beat; clear transient focus at next beat | REUSE |
| `PointerLaneV2` | `kit/components/array/PointerLaneV2.tsx` | `pointers[{id,label,index,color?,lane?}]`, `count`, `slotWidth`, `gap`, `placement` — via ArrayTrackV2 | Attach i / candidate-search pointer outside slots; keep slot positions constant; enter on its exact speech phrase; persist through relevant causal beat; clear transient focus at next beat | REUSE |
| `ChalkText` | `kit/components/ChalkText.tsx` | `children`, `startFrame`, `charFrames?`, `fontSize?`, `color?`, `font?`, `cursor?`, `style?`; frame props are PENDING SYNC | Write concept, variable, code or conclusion directly on the board using shared chalk typography; enter on its exact speech phrase; persist through relevant causal beat; clear transient focus at next beat | REUSE |
| `RoughLine` | `kit/components/RoughLine.tsx` | `shape:{kind:line\|arrow\|circle,...}`, `width`, `height`, `startFrame?`, `durationInFrames?`, `stroke?`, `seed?` — timing PENDING SYNC | Draw only currently narrated comparison/home relation or underline; enter on its exact speech phrase; persist through relevant causal beat; clear transient focus at next beat | REUSE |
| `Captions` | `kit/components/Captions.tsx` | `words:{word,start,end}[]`, `fps?`, `bottom?`, `fontSize?`, `maxWords?`, `maxWidth?` — POST SYNC ONLY | Post-sync exact word captions only; no fake words/time; enter on its exact speech phrase; persist through relevant causal beat; clear transient focus at next beat | REUSE post-audio |

### Scene-specific semantic implementation contract

**ArrayTrack implementation detail:** supply eight stable `elements` and `slotWidth=132, slotHeight=128, gap=20, maxWidth>=1196, showIndices=true, indexPlacement="top"`; wrapper absolute-positioned at x350. For slot i, the nominal x is `350 + 152*i`; center x is `416 + 152*i`. The scene composer must inspect actual `ArrayTrackV2` index and pointer spacing; the coordinates name intended zone ownership, not pixel-verified output.

**Pointer detail:** use `pointers=[{id:"cursor",label:"i" or "scan", index:... , lane:0,color:theme.pivot}]` and `pointerPlacement="bottom"`; the pointer is associated with the track, not an independent floating badge.

## 2. Exact narration → semantic word-anchor plan

**Anchor identity:** `Snn:Axxx` is a *semantic* identity, not `Wxxxx`. Each spoken phrase is quoted exactly from the approved script in source order. No audio exists at this stage. Every trigger awaits the exact matching word span after final sync.

### S03:A001 · `The array stays unchanged.`

- **ANCHOR ID:** `S03:A001`; occurrence #1, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “The array stays unchanged.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 03, sentence 001 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Mount unchanged source array with stable indexed slots; do not evaluate candidate yet.
- **CENTER-STAGE HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** nums unchanged=[3, 4, -1, 1, 1, 10, 0, 2]; candidate=1 when introduced; confirmed=[]; all prior comparison decisions persist only as semantic confirmation, not tiny history chips.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **COLLISION CHECK:** Active zone `x350..1546 y290..590`; supports `x145..650 y635..800` + `x770..1430 y635..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S03:A002 · `Start with candidate one … and search from index zero.`

- **ANCHOR ID:** `S03:A002`; occurrence #2, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Start with candidate one … and search from index zero.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 03, sentence 002 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Reveal candidate 1, reset i to 0; put pointer under 0.
- **CENTER-STAGE HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** nums unchanged=[3, 4, -1, 1, 1, 10, 0, 2]; candidate=1 when introduced; confirmed=[]; all prior comparison decisions persist only as semantic confirmation, not tiny history chips.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **COLLISION CHECK:** Active zone `x350..1546 y290..590`; supports `x145..650 y635..800` + `x770..1430 y635..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S03:A003 · `Three is not one.`

- **ANCHOR ID:** `S03:A003`; occurrence #3, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Three is not one.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 03, sentence 003 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Focus slot 0 containing `3`; compare current candidate `1` with `3`; reveal MISS after the comparison is spoken.
- **CENTER-STAGE HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** HIT → theme.good; MISS → theme.warn; pointer/current value → theme.pivot.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Array is read-only; comparison moves search cursor right only at next narrated lookup. No mutation.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** candidate=1; index=0; actual=3; test `3 == 1`=false; confirmed candidates are only those with earlier HIT steps.
- **TRACE STEP IDS:** `BR-001`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** COMPARE → MISS; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **COLLISION CHECK:** Active zone `x350..1546 y290..590`; supports `x145..650 y635..800` + `x770..1430 y635..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S03:A004 · `Four is not one.`

- **ANCHOR ID:** `S03:A004`; occurrence #4, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Four is not one.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 03, sentence 004 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Focus slot 1 containing `4`; compare current candidate `1` with `4`; reveal MISS after the comparison is spoken.
- **CENTER-STAGE HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** HIT → theme.good; MISS → theme.warn; pointer/current value → theme.pivot.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Array is read-only; comparison moves search cursor right only at next narrated lookup. No mutation.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** candidate=1; index=1; actual=4; test `4 == 1`=false; confirmed candidates are only those with earlier HIT steps.
- **TRACE STEP IDS:** `BR-002`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** COMPARE → MISS; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **COLLISION CHECK:** Active zone `x350..1546 y290..590`; supports `x145..650 y635..800` + `x770..1430 y635..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S03:A005 · `Minus one is not one.`

- **ANCHOR ID:** `S03:A005`; occurrence #5, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Minus one is not one.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 03, sentence 005 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Focus slot 2 containing `-1`; compare current candidate `1` with `-1`; reveal MISS after the comparison is spoken.
- **CENTER-STAGE HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** HIT → theme.good; MISS → theme.warn; pointer/current value → theme.pivot.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Array is read-only; comparison moves search cursor right only at next narrated lookup. No mutation.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** candidate=1; index=2; actual=-1; test `-1 == 1`=false; confirmed candidates are only those with earlier HIT steps.
- **TRACE STEP IDS:** `BR-003`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** COMPARE → MISS; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **COLLISION CHECK:** Active zone `x350..1546 y290..590`; supports `x145..650 y635..800` + `x770..1430 y635..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S03:A006 · `At index three … we find one.`

- **ANCHOR ID:** `S03:A006`; occurrence #6, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “At index three … we find one.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 03, sentence 006 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Focus slot 3 containing `1`; compare current candidate `1` with `1`; reveal HIT after the comparison is spoken.
- **CENTER-STAGE HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** HIT → theme.good; MISS → theme.warn; pointer/current value → theme.pivot.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Array is read-only; comparison confirms candidate and halts this inner scan. No mutation.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** candidate=1; index=3; actual=1; test `1 == 1`=true; confirmed candidates are only those with earlier HIT steps.
- **TRACE STEP IDS:** `BR-004`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** COMPARE → HIT; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **COLLISION CHECK:** Active zone `x350..1546 y290..590`; supports `x145..650 y635..800` + `x770..1430 y635..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S03:A007 · `So candidate one is present.`

- **ANCHOR ID:** `S03:A007`; occurrence #7, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “So candidate one is present.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 03, sentence 007 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Mark candidate 1 confirmed only after successful comparison.
- **CENTER-STAGE HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** nums unchanged=[3, 4, -1, 1, 1, 10, 0, 2]; candidate=1 when introduced; confirmed=[1]; all prior comparison decisions persist only as semantic confirmation, not tiny history chips.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **COLLISION CHECK:** Active zone `x350..1546 y290..590`; supports `x145..650 y635..800` + `x770..1430 y635..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S03:A008 · `Stop this search.`

- **ANCHOR ID:** `S03:A008`; occurrence #8, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Stop this search.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 03, sentence 008 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Stop scan and hide transient compare mark; persist confirmed 1.
- **CENTER-STAGE HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** nums unchanged=[3, 4, -1, 1, 1, 10, 0, 2]; candidate=1 when introduced; confirmed=[1]; all prior comparison decisions persist only as semantic confirmation, not tiny history chips.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **COLLISION CHECK:** Active zone `x350..1546 y290..590`; supports `x145..650 y635..800` + `x770..1430 y635..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S03:A009 · `Now candidate two … start again at index zero.`

- **ANCHOR ID:** `S03:A009`; occurrence #9, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Now candidate two … start again at index zero.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 03, sentence 009 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Reveal candidate 2 and reset i=0; no future comparison.
- **CENTER-STAGE HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** nums unchanged=[3, 4, -1, 1, 1, 10, 0, 2]; candidate=1 when introduced; confirmed=[1]; all prior comparison decisions persist only as semantic confirmation, not tiny history chips.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **COLLISION CHECK:** Active zone `x350..1546 y290..590`; supports `x145..650 y635..800` + `x770..1430 y635..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S03:A010 · `Three is not two.`

- **ANCHOR ID:** `S03:A010`; occurrence #10, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Three is not two.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 03, sentence 010 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Focus slot 0 containing `3`; compare current candidate `2` with `3`; reveal MISS after the comparison is spoken.
- **CENTER-STAGE HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** HIT → theme.good; MISS → theme.warn; pointer/current value → theme.pivot.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Array is read-only; comparison moves search cursor right only at next narrated lookup. No mutation.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** candidate=2; index=0; actual=3; test `3 == 2`=false; confirmed candidates are only those with earlier HIT steps.
- **TRACE STEP IDS:** `BR-005`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** COMPARE → MISS; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **COLLISION CHECK:** Active zone `x350..1546 y290..590`; supports `x145..650 y635..800` + `x770..1430 y635..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S03:A011 · `Four is not two.`

- **ANCHOR ID:** `S03:A011`; occurrence #11, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Four is not two.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 03, sentence 011 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Focus slot 1 containing `4`; compare current candidate `2` with `4`; reveal MISS after the comparison is spoken.
- **CENTER-STAGE HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** HIT → theme.good; MISS → theme.warn; pointer/current value → theme.pivot.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Array is read-only; comparison moves search cursor right only at next narrated lookup. No mutation.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** candidate=2; index=1; actual=4; test `4 == 2`=false; confirmed candidates are only those with earlier HIT steps.
- **TRACE STEP IDS:** `BR-006`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** COMPARE → MISS; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **COLLISION CHECK:** Active zone `x350..1546 y290..590`; supports `x145..650 y635..800` + `x770..1430 y635..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S03:A012 · `Minus one is not two.`

- **ANCHOR ID:** `S03:A012`; occurrence #12, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Minus one is not two.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 03, sentence 012 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Focus slot 2 containing `-1`; compare current candidate `2` with `-1`; reveal MISS after the comparison is spoken.
- **CENTER-STAGE HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** HIT → theme.good; MISS → theme.warn; pointer/current value → theme.pivot.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Array is read-only; comparison moves search cursor right only at next narrated lookup. No mutation.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** candidate=2; index=2; actual=-1; test `-1 == 2`=false; confirmed candidates are only those with earlier HIT steps.
- **TRACE STEP IDS:** `BR-007`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** COMPARE → MISS; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **COLLISION CHECK:** Active zone `x350..1546 y290..590`; supports `x145..650 y635..800` + `x770..1430 y635..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S03:A013 · `The first one is not two.`

- **ANCHOR ID:** `S03:A013`; occurrence #13, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “The first one is not two.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 03, sentence 013 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Focus slot 3 containing `1`; compare current candidate `2` with `1`; reveal MISS after the comparison is spoken.
- **CENTER-STAGE HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** HIT → theme.good; MISS → theme.warn; pointer/current value → theme.pivot.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Array is read-only; comparison moves search cursor right only at next narrated lookup. No mutation.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** candidate=2; index=3; actual=1; test `1 == 2`=false; confirmed candidates are only those with earlier HIT steps.
- **TRACE STEP IDS:** `BR-008`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** COMPARE → MISS; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **COLLISION CHECK:** Active zone `x350..1546 y290..590`; supports `x145..650 y635..800` + `x770..1430 y635..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S03:A014 · `The second one is not two.`

- **ANCHOR ID:** `S03:A014`; occurrence #14, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “The second one is not two.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 03, sentence 014 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Focus slot 4 containing `1`; compare current candidate `2` with `1`; reveal MISS after the comparison is spoken.
- **CENTER-STAGE HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** HIT → theme.good; MISS → theme.warn; pointer/current value → theme.pivot.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Array is read-only; comparison moves search cursor right only at next narrated lookup. No mutation.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** candidate=2; index=4; actual=1; test `1 == 2`=false; confirmed candidates are only those with earlier HIT steps.
- **TRACE STEP IDS:** `BR-009`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** COMPARE → MISS; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **COLLISION CHECK:** Active zone `x350..1546 y290..590`; supports `x145..650 y635..800` + `x770..1430 y635..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S03:A015 · `Ten is not two.`

- **ANCHOR ID:** `S03:A015`; occurrence #15, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Ten is not two.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 03, sentence 015 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Focus slot 5 containing `10`; compare current candidate `2` with `10`; reveal MISS after the comparison is spoken.
- **CENTER-STAGE HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** HIT → theme.good; MISS → theme.warn; pointer/current value → theme.pivot.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Array is read-only; comparison moves search cursor right only at next narrated lookup. No mutation.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** candidate=2; index=5; actual=10; test `10 == 2`=false; confirmed candidates are only those with earlier HIT steps.
- **TRACE STEP IDS:** `BR-010`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** COMPARE → MISS; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **COLLISION CHECK:** Active zone `x350..1546 y290..590`; supports `x145..650 y635..800` + `x770..1430 y635..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S03:A016 · `Zero is not two.`

- **ANCHOR ID:** `S03:A016`; occurrence #16, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Zero is not two.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 03, sentence 016 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Focus slot 6 containing `0`; compare current candidate `2` with `0`; reveal MISS after the comparison is spoken.
- **CENTER-STAGE HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** HIT → theme.good; MISS → theme.warn; pointer/current value → theme.pivot.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Array is read-only; comparison moves search cursor right only at next narrated lookup. No mutation.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** candidate=2; index=6; actual=0; test `0 == 2`=false; confirmed candidates are only those with earlier HIT steps.
- **TRACE STEP IDS:** `BR-011`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** COMPARE → MISS; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **COLLISION CHECK:** Active zone `x350..1546 y290..590`; supports `x145..650 y635..800` + `x770..1430 y635..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S03:A017 · `At the last index … we find two.`

- **ANCHOR ID:** `S03:A017`; occurrence #17, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “At the last index … we find two.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 03, sentence 017 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Focus slot 7 containing `2`; compare current candidate `2` with `2`; reveal HIT after the comparison is spoken.
- **CENTER-STAGE HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** HIT → theme.good; MISS → theme.warn; pointer/current value → theme.pivot.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Array is read-only; comparison confirms candidate and halts this inner scan. No mutation.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** candidate=2; index=7; actual=2; test `2 == 2`=true; confirmed candidates are only those with earlier HIT steps.
- **TRACE STEP IDS:** `BR-012`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** COMPARE → HIT; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **COLLISION CHECK:** Active zone `x350..1546 y290..590`; supports `x145..650 y635..800` + `x770..1430 y635..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S03:A018 · `So two is present.`

- **ANCHOR ID:** `S03:A018`; occurrence #18, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “So two is present.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 03, sentence 018 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Mark candidate 2 confirmed after BR-012.
- **CENTER-STAGE HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** nums unchanged=[3, 4, -1, 1, 1, 10, 0, 2]; candidate=2 when introduced; confirmed=[1, 2]; all prior comparison decisions persist only as semantic confirmation, not tiny history chips.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **COLLISION CHECK:** Active zone `x350..1546 y290..590`; supports `x145..650 y635..800` + `x770..1430 y635..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S03:A019 · `Next, candidate three.`

- **ANCHOR ID:** `S03:A019`; occurrence #19, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Next, candidate three.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 03, sentence 019 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Reveal candidate 3 then reset i=0.
- **CENTER-STAGE HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** nums unchanged=[3, 4, -1, 1, 1, 10, 0, 2]; candidate=2 when introduced; confirmed=[1, 2]; all prior comparison decisions persist only as semantic confirmation, not tiny history chips.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **COLLISION CHECK:** Active zone `x350..1546 y290..590`; supports `x145..650 y635..800` + `x770..1430 y635..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S03:A020 · `At index zero … three is already there.`

- **ANCHOR ID:** `S03:A020`; occurrence #20, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “At index zero … three is already there.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 03, sentence 020 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Focus slot 0 containing `3`; compare current candidate `3` with `3`; reveal HIT after the comparison is spoken.
- **CENTER-STAGE HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** HIT → theme.good; MISS → theme.warn; pointer/current value → theme.pivot.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Array is read-only; comparison confirms candidate and halts this inner scan. No mutation.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** candidate=3; index=0; actual=3; test `3 == 3`=true; confirmed candidates are only those with earlier HIT steps.
- **TRACE STEP IDS:** `BR-013`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** COMPARE → HIT; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **COLLISION CHECK:** Active zone `x350..1546 y290..590`; supports `x145..650 y635..800` + `x770..1430 y635..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S03:A021 · `Found.`

- **ANCHOR ID:** `S03:A021`; occurrence #21, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Found.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 03, sentence 021 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Mark candidate 3 confirmed (BR-013).
- **CENTER-STAGE HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** nums unchanged=[3, 4, -1, 1, 1, 10, 0, 2]; candidate=3 when introduced; confirmed=[1, 2, 3]; all prior comparison decisions persist only as semantic confirmation, not tiny history chips.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **COLLISION CHECK:** Active zone `x350..1546 y290..590`; supports `x145..650 y635..800` + `x770..1430 y635..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S03:A022 · `Now candidate four.`

- **ANCHOR ID:** `S03:A022`; occurrence #22, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Now candidate four.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 03, sentence 022 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Reveal candidate 4 and reset i=0.
- **CENTER-STAGE HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** nums unchanged=[3, 4, -1, 1, 1, 10, 0, 2]; candidate=3 when introduced; confirmed=[1, 2, 3]; all prior comparison decisions persist only as semantic confirmation, not tiny history chips.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **COLLISION CHECK:** Active zone `x350..1546 y290..590`; supports `x145..650 y635..800` + `x770..1430 y635..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S03:A023 · `Index zero has three … not four.`

- **ANCHOR ID:** `S03:A023`; occurrence #23, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Index zero has three … not four.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 03, sentence 023 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Focus slot 0 containing `3`; compare current candidate `4` with `3`; reveal MISS after the comparison is spoken.
- **CENTER-STAGE HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** HIT → theme.good; MISS → theme.warn; pointer/current value → theme.pivot.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Array is read-only; comparison moves search cursor right only at next narrated lookup. No mutation.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** candidate=4; index=0; actual=3; test `3 == 4`=false; confirmed candidates are only those with earlier HIT steps.
- **TRACE STEP IDS:** `BR-014`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** COMPARE → MISS; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **COLLISION CHECK:** Active zone `x350..1546 y290..590`; supports `x145..650 y635..800` + `x770..1430 y635..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S03:A024 · `Index one has four … found.`

- **ANCHOR ID:** `S03:A024`; occurrence #24, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Index one has four … found.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 03, sentence 024 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Focus slot 1 containing `4`; compare current candidate `4` with `4`; reveal HIT after the comparison is spoken.
- **CENTER-STAGE HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** HIT → theme.good; MISS → theme.warn; pointer/current value → theme.pivot.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Array is read-only; comparison confirms candidate and halts this inner scan. No mutation.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** candidate=4; index=1; actual=4; test `4 == 4`=true; confirmed candidates are only those with earlier HIT steps.
- **TRACE STEP IDS:** `BR-015`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** COMPARE → HIT; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **COLLISION CHECK:** Active zone `x350..1546 y290..590`; supports `x145..650 y635..800` + `x770..1430 y635..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S03:A025 · `Now candidate five.`

- **ANCHOR ID:** `S03:A025`; occurrence #25, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Now candidate five.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 03, sentence 025 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Reveal candidate 5 and reset i=0.
- **CENTER-STAGE HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** nums unchanged=[3, 4, -1, 1, 1, 10, 0, 2]; candidate=4 when introduced; confirmed=[1, 2, 3, 4]; all prior comparison decisions persist only as semantic confirmation, not tiny history chips.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **COLLISION CHECK:** Active zone `x350..1546 y290..590`; supports `x145..650 y635..800` + `x770..1430 y635..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S03:A026 · `Search from the beginning again.`

- **ANCHOR ID:** `S03:A026`; occurrence #26, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Search from the beginning again.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 03, sentence 026 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Begin final complete scan, with no future misses premarked.
- **CENTER-STAGE HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** nums unchanged=[3, 4, -1, 1, 1, 10, 0, 2]; candidate=4 when introduced; confirmed=[1, 2, 3, 4]; all prior comparison decisions persist only as semantic confirmation, not tiny history chips.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **COLLISION CHECK:** Active zone `x350..1546 y290..590`; supports `x145..650 y635..800` + `x770..1430 y635..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S03:A027 · `Three … not five.`

- **ANCHOR ID:** `S03:A027`; occurrence #27, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Three … not five.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 03, sentence 027 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Focus slot 0 containing `3`; compare current candidate `5` with `3`; reveal MISS after the comparison is spoken.
- **CENTER-STAGE HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** HIT → theme.good; MISS → theme.warn; pointer/current value → theme.pivot.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Array is read-only; comparison moves search cursor right only at next narrated lookup. No mutation.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** candidate=5; index=0; actual=3; test `3 == 5`=false; confirmed candidates are only those with earlier HIT steps.
- **TRACE STEP IDS:** `BR-016`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** COMPARE → MISS; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **COLLISION CHECK:** Active zone `x350..1546 y290..590`; supports `x145..650 y635..800` + `x770..1430 y635..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S03:A028 · `Four … not five.`

- **ANCHOR ID:** `S03:A028`; occurrence #28, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Four … not five.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 03, sentence 028 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Focus slot 1 containing `4`; compare current candidate `5` with `4`; reveal MISS after the comparison is spoken.
- **CENTER-STAGE HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** HIT → theme.good; MISS → theme.warn; pointer/current value → theme.pivot.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Array is read-only; comparison moves search cursor right only at next narrated lookup. No mutation.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** candidate=5; index=1; actual=4; test `4 == 5`=false; confirmed candidates are only those with earlier HIT steps.
- **TRACE STEP IDS:** `BR-017`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** COMPARE → MISS; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **COLLISION CHECK:** Active zone `x350..1546 y290..590`; supports `x145..650 y635..800` + `x770..1430 y635..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S03:A029 · `Minus one … not five.`

- **ANCHOR ID:** `S03:A029`; occurrence #29, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Minus one … not five.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 03, sentence 029 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Focus slot 2 containing `-1`; compare current candidate `5` with `-1`; reveal MISS after the comparison is spoken.
- **CENTER-STAGE HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** HIT → theme.good; MISS → theme.warn; pointer/current value → theme.pivot.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Array is read-only; comparison moves search cursor right only at next narrated lookup. No mutation.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** candidate=5; index=2; actual=-1; test `-1 == 5`=false; confirmed candidates are only those with earlier HIT steps.
- **TRACE STEP IDS:** `BR-018`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** COMPARE → MISS; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **COLLISION CHECK:** Active zone `x350..1546 y290..590`; supports `x145..650 y635..800` + `x770..1430 y635..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S03:A030 · `One … not five.`

- **ANCHOR ID:** `S03:A030`; occurrence #30, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “One … not five.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 03, sentence 030 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Focus slot 3 containing `1`; compare current candidate `5` with `1`; reveal MISS after the comparison is spoken.
- **CENTER-STAGE HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** HIT → theme.good; MISS → theme.warn; pointer/current value → theme.pivot.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Array is read-only; comparison moves search cursor right only at next narrated lookup. No mutation.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** candidate=5; index=3; actual=1; test `1 == 5`=false; confirmed candidates are only those with earlier HIT steps.
- **TRACE STEP IDS:** `BR-019`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** COMPARE → MISS; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **COLLISION CHECK:** Active zone `x350..1546 y290..590`; supports `x145..650 y635..800` + `x770..1430 y635..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S03:A031 · `The second one … not five.`

- **ANCHOR ID:** `S03:A031`; occurrence #31, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “The second one … not five.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 03, sentence 031 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Focus slot 4 containing `1`; compare current candidate `5` with `1`; reveal MISS after the comparison is spoken.
- **CENTER-STAGE HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** HIT → theme.good; MISS → theme.warn; pointer/current value → theme.pivot.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Array is read-only; comparison moves search cursor right only at next narrated lookup. No mutation.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** candidate=5; index=4; actual=1; test `1 == 5`=false; confirmed candidates are only those with earlier HIT steps.
- **TRACE STEP IDS:** `BR-020`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** COMPARE → MISS; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **COLLISION CHECK:** Active zone `x350..1546 y290..590`; supports `x145..650 y635..800` + `x770..1430 y635..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S03:A032 · `Ten … not five.`

- **ANCHOR ID:** `S03:A032`; occurrence #32, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Ten … not five.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 03, sentence 032 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Focus slot 5 containing `10`; compare current candidate `5` with `10`; reveal MISS after the comparison is spoken.
- **CENTER-STAGE HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** HIT → theme.good; MISS → theme.warn; pointer/current value → theme.pivot.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Array is read-only; comparison moves search cursor right only at next narrated lookup. No mutation.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** candidate=5; index=5; actual=10; test `10 == 5`=false; confirmed candidates are only those with earlier HIT steps.
- **TRACE STEP IDS:** `BR-021`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** COMPARE → MISS; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **COLLISION CHECK:** Active zone `x350..1546 y290..590`; supports `x145..650 y635..800` + `x770..1430 y635..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S03:A033 · `Zero … not five.`

- **ANCHOR ID:** `S03:A033`; occurrence #33, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Zero … not five.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 03, sentence 033 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Focus slot 6 containing `0`; compare current candidate `5` with `0`; reveal MISS after the comparison is spoken.
- **CENTER-STAGE HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** HIT → theme.good; MISS → theme.warn; pointer/current value → theme.pivot.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Array is read-only; comparison moves search cursor right only at next narrated lookup. No mutation.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** candidate=5; index=6; actual=0; test `0 == 5`=false; confirmed candidates are only those with earlier HIT steps.
- **TRACE STEP IDS:** `BR-022`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** COMPARE → MISS; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **COLLISION CHECK:** Active zone `x350..1546 y290..590`; supports `x145..650 y635..800` + `x770..1430 y635..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S03:A034 · `Two … not five.`

- **ANCHOR ID:** `S03:A034`; occurrence #34, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Two … not five.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 03, sentence 034 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Focus slot 7 containing `2`; compare current candidate `5` with `2`; reveal MISS after the comparison is spoken.
- **CENTER-STAGE HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** HIT → theme.good; MISS → theme.warn; pointer/current value → theme.pivot.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Array is read-only; comparison moves search cursor right only at next narrated lookup. No mutation.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** candidate=5; index=7; actual=2; test `2 == 5`=false; confirmed candidates are only those with earlier HIT steps.
- **TRACE STEP IDS:** `BR-023`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** COMPARE → MISS; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **COLLISION CHECK:** Active zone `x350..1546 y290..590`; supports `x145..650 y635..800` + `x770..1430 y635..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S03:A035 · `We reached the end without finding five.`

- **ANCHOR ID:** `S03:A035`; occurrence #35, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “We reached the end without finding five.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 03, sentence 035 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** After eighth unsuccessful comparison, show candidate-5 MISS; no answer numeral yet.
- **CENTER-STAGE HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** nums unchanged=[3, 4, -1, 1, 1, 10, 0, 2]; candidate=5 when introduced; confirmed=[1, 2, 3, 4]; all prior comparison decisions persist only as semantic confirmation, not tiny history chips.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **COLLISION CHECK:** Active zone `x350..1546 y290..590`; supports `x145..650 y635..800` + `x770..1430 y635..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S03:A036 · `We have already found one, two, three, and four.`

- **ANCHOR ID:** `S03:A036`; occurrence #36, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “We have already found one, two, three, and four.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 03, sentence 036 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Persist confirmed candidates 1,2,3,4 from prior observed matches.
- **CENTER-STAGE HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** nums unchanged=[3, 4, -1, 1, 1, 10, 0, 2]; candidate=5 when introduced; confirmed=[1, 2, 3, 4]; all prior comparison decisions persist only as semantic confirmation, not tiny history chips.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **COLLISION CHECK:** Active zone `x350..1546 y290..590`; supports `x145..650 y635..800` + `x770..1430 y635..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S03:A037 · `So five is the first missing positive.`

- **ANCHOR ID:** `S03:A037`; occurrence #37, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “So five is the first missing positive.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 03, sentence 037 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Reveal first missing positive=5 as a conclusion only now.
- **CENTER-STAGE HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** nums unchanged=[3, 4, -1, 1, 1, 10, 0, 2]; candidate=5 when introduced; confirmed=[1, 2, 3, 4]; all prior comparison decisions persist only as semantic confirmation, not tiny history chips.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **COLLISION CHECK:** Active zone `x350..1546 y290..590`; supports `x145..650 y635..800` + `x770..1430 y635..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S03:A038 · `Return five.`

- **ANCHOR ID:** `S03:A038`; occurrence #38, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Return five.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 03, sentence 038 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Focus RETURN 5, freeze slot and candidate state.
- **CENTER-STAGE HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** nums unchanged=[3, 4, -1, 1, 1, 10, 0, 2]; candidate=5 when introduced; confirmed=[1, 2, 3, 4]; all prior comparison decisions persist only as semantic confirmation, not tiny history chips.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **COLLISION CHECK:** Active zone `x350..1546 y290..590`; supports `x145..650 y635..800` + `x770..1430 y635..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S03:A039 · `Notice the repeated work … the same positions were checked again for different candidates.`

- **ANCHOR ID:** `S03:A039`; occurrence #39, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Notice the repeated work … the same positions were checked again for different candidates.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 03, sentence 039 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Compare scan-start resets 0 for candidates 1..5 as already-established history; no extra algorithm execution.
- **CENTER-STAGE HERO:** ArrayTrackV2: values x350..1546 y340..468; 8 slots 132×128 gap20, indices y295..328; pointer below y490..575 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** nums unchanged=[3, 4, -1, 1, 1, 10, 0, 2]; candidate=5 when introduced; confirmed=[1, 2, 3, 4]; all prior comparison decisions persist only as semantic confirmation, not tiny history chips.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future candidates or lookups; no candidate 5 conclusion until current candidate 5 scan finishes.
- **COLLISION CHECK:** Active zone `x350..1546 y290..590`; supports `x145..650 y635..800` + `x770..1430 y635..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

## 3. Exit contract and critical visual states

- **ENTRY:** Before any phrase, reserve geometry internally but render future values/invariants/answer hidden.
- **FIRST IMPORTANT STATE:** First concept/input at first matching spoken anchor.
- **FIRST DECISION / QUERY:** First narrated comparison/probe/guard; source remains stable.
- **FIRST MUTATION:** Only at a verified mutation event for TRACE; N/A for purely conceptual/code scenes.
- **MOST COMPLEX STATE:** At the most crowded meaning, slot labels, pointer lanes, variable/calc and auxiliary set have fixed nonoverlapping spatial ownership.
- **FINAL STATE:** Only narrated conclusions exist, with persistent source truth.
- **TRANSITION OUT:** Clear transient arrows and current word highlight; preserve source identity when it makes next scene easier.

## 4. Scene-local verification and unresolved gates

- **Anchors audited:** 39 source-ordered phrases with non-overlapping source occurrence; audit file `Scene03_Audit.md`.
- **Trace events audited:** 23; exact machine event IDs listed above; none assigned in non-trace scene.
- **No unverified component APIs:** all names/props verified against GitHub `main` source; check file SHAs in master handoff if upstream changes.
- **Layout status:** specification geometry checked numerically; screenshot collision test is NOT POSSIBLE before Remotion implementation, so final visual signoff remains open.
- **Audio/sync:** pending; `Wxxxx`, FPS, exact frame ranges, glyph draws and pause classifications are NOT asserted.
- **Handoff gate:** this is a **PRE-AUDIO SEMANTIC PLAN**, not an approved post-audio frame plan. Antigravity must bind W IDs from real MP3 + validated sync and audit critical frames before implementation signoff.
