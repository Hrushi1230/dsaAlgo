# Q18 · Scene 10 — Full Optimal Cyclic Placement Trace

**SCENE:** 10 / 13
**QUESTION:** Q18 First Missing Positive · LeetCode 41 · Arrays & Hashing
**BEAT TYPE:** TRACE · IN-PLACE
**SCRIPT SOURCE:** `08_FINAL_ELEVENLABS_NARRATION.md`, Phase-08 restarted approved wording (SHA256 in handoff)
**TRACE SOURCE:** `05_VERIFIED_TRACES.md` + `05_TRACE_MACHINE_CHECKED.json` from restarted phase ZIP
**AUDIO FILE:** PENDING FINAL AUDIO
**SYNC FILE:** PENDING FINAL AUDIO
**FPS:** PENDING FINAL AUDIO
**TOTAL FRAMES:** PENDING FINAL AUDIO
**PEDAGOGICAL GOAL:** Execute exactly 25 optimal events including 4 swaps and first mismatch.
**TRACE STEP IDS:** OPT-001, OPT-002, OPT-003, OPT-004, OPT-005, OPT-006, OPT-007, OPT-008, OPT-009, OPT-010, OPT-011, OPT-012, OPT-013, OPT-014, OPT-015, OPT-016, OPT-017, OPT-018, OPT-019, OPT-020, OPT-021, OPT-022, OPT-023, OPT-024, OPT-025
**DATA STRUCTURE:** array + fixed slots
**PRIMARY HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610
**SUPPORT LEFT:** i, current, home x145..660 y642..815
**SUPPORT RIGHT:** decision x760..1440 y640..805 and answer x1480..1815 y839..926
**TRACE PRIMARY STRUCTURE ZONE:** x350..1546 y294..615
**TRACE VARIABLE STATE RAIL:** x145..660 y642..815
**TRACE LIVE CALCULATION STAGE:** x760..1440 y640..805
**TRACE AUXILIARY STRUCTURE ZONE:** N/A
**TRACE ANSWER / RESULT ZONE:** x1480..1815 y838..928
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
- **Exact geometry ownership:** primary `ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610`; left `i, current, home x145..660 y642..815`; right `decision x760..1440 y640..805 and answer x1480..1815 y839..926`; active structure `x350..1546 y294..615`; variables `x145..660 y642..815`; live decision `x760..1440 y640..805`; auxiliary `N/A`; answer `x1480..1815 y838..928`.
- **Layout clearance check:** track ends at y610 incl lanes; 32px+ gap to state y642; captions y960..1040. Optical positions are precise design coordinates but NOT a claim that Remotion has been screenshot-tested. Preserve invisible space for future values so no shift occurs when revealed.
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

### S10:A001 · `Our array has eight positions … indexed zero through seven.`

- **ANCHOR ID:** `S10:A001`; occurrence #1, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Our array has eight positions … indexed zero through seven.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 001 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Initialize unchanged 8-slot master input, indices 0..7 and placement pass, no swaps yet.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Array commits only completed swaps (0 so far); source stays fixed; authoritative post-swap state from OPT trace. Visible result hidden until mismatch narration.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A002 · `Start at index zero.`

- **ANCHOR ID:** `S10:A002`; occurrence #2, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Start at index zero.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 002 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Place active i pointer on slot 0, showing value `3`; full array state `[3, 4, -1, 1, 1, 10, 0, 2]` remains unchanged.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current pointer theme.pivot; source value chalkText.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Only pointer moves to next narrated index; no values move.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** i=0; actual=3; array=[3, 4, -1, 1, 1, 10, 0, 2]; no swap authorized.
- **TRACE STEP IDS:** `OPT-001`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A003 · `Its value is three.`

- **ANCHOR ID:** `S10:A003`; occurrence #3, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Its value is three.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 003 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Focus value 3 at i=0, source stationary until home identified.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Array commits only completed swaps (0 so far); source stays fixed; authoritative post-swap state from OPT trace. Visible result hidden until mismatch narration.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A004 · `Three belongs at index two, which currently contains minus one.`

- **ANCHOR ID:** `S10:A004`; occurrence #4, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Three belongs at index two, which currently contains minus one.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 004 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** “index two” → Identify home=2; “minus one” → Identify target=-1 (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Draw source 0→home 2 relation, reveal target -1, but no swap yet.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Array commits only completed swaps (0 so far); source stays fixed; authoritative post-swap state from OPT trace. Visible result hidden until mismatch narration.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A005 · `Swap them.`

- **ANCHOR ID:** `S10:A005`; occurrence #5, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Swap them.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 005 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** SWAP at fixed source index i=0: current `3` belongs home index 2 holding `-1`. Spoken swap authorizes value flight; after landing exact array `[-1, 4, 3, 1, 1, 10, 0, 2]`.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Source pivot → target cyan; landed in correct home good; other slots unchanged.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Use `ArrayTrackV2.swap` {idxA:i,idxB:target,progress: resolved by audio}; move VALUE occupants along separate paths, not slot shells or index labels. Commit new elements only after landing; recheck same i.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Before=[3, 4, -1, 1, 1, 10, 0, 2]; after=[-1, 4, 3, 1, 1, 10, 0, 2]; successful swap into home index 2; i=0 remains until guard resolves.
- **TRACE STEP IDS:** `OPT-002`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** SWAP → settle before next read; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A006 · `Three is now at index two … and minus one arrives at index zero.`

- **ANCHOR ID:** `S10:A006`; occurrence #6, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Three is now at index two … and minus one arrives at index zero.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 006 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Settle committed swapped array [-1,4,3,1,1,10,0,2]; source i=0 remains.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Array commits only completed swaps (1 so far); source stays fixed; authoritative post-swap state from OPT trace. Visible result hidden until mismatch narration.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A007 · `We check index zero again.`

- **ANCHOR ID:** `S10:A007`; occurrence #7, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “We check index zero again.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 007 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Point remains at i=0 to inspect incoming -1.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Array commits only completed swaps (1 so far); source stays fixed; authoritative post-swap state from OPT trace. Visible result hidden until mismatch narration.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A008 · `Minus one is outside one through eight … so stop there.`

- **ANCHOR ID:** `S10:A008`; occurrence #8, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Minus one is outside one through eight … so stop there.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 008 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** At i=0, value `-1` stops placement because `out_of_range`; do not swap or access an invalid home.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Blocked/invalid theme.warn; already home theme.good; no move.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Guard focus resolves, then pointer may advance only when later narration says next index.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** i=0; value=-1; guard reason=out_of_range; array=[-1, 4, 3, 1, 1, 10, 0, 2] unchanged.
- **TRACE STEP IDS:** `OPT-003`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A009 · `Move to index one.`

- **ANCHOR ID:** `S10:A009`; occurrence #9, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Move to index one.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 009 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Place active i pointer on slot 1, showing value `4`; full array state `[-1, 4, 3, 1, 1, 10, 0, 2]` remains unchanged.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current pointer theme.pivot; source value chalkText.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Only pointer moves to next narrated index; no values move.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** i=1; actual=4; array=[-1, 4, 3, 1, 1, 10, 0, 2]; no swap authorized.
- **TRACE STEP IDS:** `OPT-004`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A010 · `Its value is four.`

- **ANCHOR ID:** `S10:A010`; occurrence #10, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Its value is four.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 010 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** At i=1 focus value 4; no swap before target identified.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Array commits only completed swaps (1 so far); source stays fixed; authoritative post-swap state from OPT trace. Visible result hidden until mismatch narration.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A011 · `Four belongs at index three, which contains one.`

- **ANCHOR ID:** `S10:A011`; occurrence #11, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Four belongs at index three, which contains one.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 011 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** “index three” → Identify home=3; “contains one” → Identify target=1 (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Draw source1→home3 relationship, target value 1 visible.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Array commits only completed swaps (1 so far); source stays fixed; authoritative post-swap state from OPT trace. Visible result hidden until mismatch narration.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A012 · `Swap.`

- **ANCHOR ID:** `S10:A012`; occurrence #12, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Swap.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 012 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** SWAP at fixed source index i=1: current `4` belongs home index 3 holding `1`. Spoken swap authorizes value flight; after landing exact array `[-1, 1, 3, 4, 1, 10, 0, 2]`.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Source pivot → target cyan; landed in correct home good; other slots unchanged.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Use `ArrayTrackV2.swap` {idxA:i,idxB:target,progress: resolved by audio}; move VALUE occupants along separate paths, not slot shells or index labels. Commit new elements only after landing; recheck same i.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Before=[-1, 4, 3, 1, 1, 10, 0, 2]; after=[-1, 1, 3, 4, 1, 10, 0, 2]; successful swap into home index 3; i=1 remains until guard resolves.
- **TRACE STEP IDS:** `OPT-005`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** SWAP → settle before next read; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A013 · `Four reaches index three.`

- **ANCHOR ID:** `S10:A013`; occurrence #13, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Four reaches index three.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 013 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Settle state [-1,1,3,4,1,10,0,2] after OPT-005.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Array commits only completed swaps (2 so far); source stays fixed; authoritative post-swap state from OPT trace. Visible result hidden until mismatch narration.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A014 · `And now index one holds one.`

- **ANCHOR ID:** `S10:A014`; occurrence #14, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “And now index one holds one.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 014 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Focus incoming 1 at same i=1 after swap.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Array commits only completed swaps (2 so far); source stays fixed; authoritative post-swap state from OPT trace. Visible result hidden until mismatch narration.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A015 · `Stay at index one … because the arriving one also needs a home.`

- **ANCHOR ID:** `S10:A015`; occurrence #15, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Stay at index one … because the arriving one also needs a home.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 015 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Keep i=1; authorize no advance before checking arriving one.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Array commits only completed swaps (2 so far); source stays fixed; authoritative post-swap state from OPT trace. Visible result hidden until mismatch narration.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A016 · `One belongs at index zero, which holds minus one.`

- **ANCHOR ID:** `S10:A016`; occurrence #16, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “One belongs at index zero, which holds minus one.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 016 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** “index zero” → Identify home=0; “minus one” → Identify target=-1 (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Show target home=0 holding -1; draw relation without swapping yet.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Array commits only completed swaps (2 so far); source stays fixed; authoritative post-swap state from OPT trace. Visible result hidden until mismatch narration.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A017 · `Swap again.`

- **ANCHOR ID:** `S10:A017`; occurrence #17, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Swap again.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 017 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** SWAP at fixed source index i=1: current `1` belongs home index 0 holding `-1`. Spoken swap authorizes value flight; after landing exact array `[1, -1, 3, 4, 1, 10, 0, 2]`.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Source pivot → target cyan; landed in correct home good; other slots unchanged.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Use `ArrayTrackV2.swap` {idxA:i,idxB:target,progress: resolved by audio}; move VALUE occupants along separate paths, not slot shells or index labels. Commit new elements only after landing; recheck same i.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Before=[-1, 1, 3, 4, 1, 10, 0, 2]; after=[1, -1, 3, 4, 1, 10, 0, 2]; successful swap into home index 0; i=1 remains until guard resolves.
- **TRACE STEP IDS:** `OPT-006`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** SWAP → settle before next read; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A018 · `One reaches index zero.`

- **ANCHOR ID:** `S10:A018`; occurrence #18, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “One reaches index zero.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 018 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Settle state [1,-1,3,4,1,10,0,2] after OPT-006.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Array commits only completed swaps (3 so far); source stays fixed; authoritative post-swap state from OPT trace. Visible result hidden until mismatch narration.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A019 · `Minus one comes back to index one … so stop.`

- **ANCHOR ID:** `S10:A019`; occurrence #19, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Minus one comes back to index one … so stop.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 019 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** At i=1, value `-1` stops placement because `out_of_range`; do not swap or access an invalid home.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Blocked/invalid theme.warn; already home theme.good; no move.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Guard focus resolves, then pointer may advance only when later narration says next index.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** i=1; value=-1; guard reason=out_of_range; array=[1, -1, 3, 4, 1, 10, 0, 2] unchanged.
- **TRACE STEP IDS:** `OPT-007`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A020 · `Index two contains three … already in its home.`

- **ANCHOR ID:** `S10:A020`; occurrence #20, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Index two contains three … already in its home.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 020 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Place active i pointer on slot 2, showing value `3`; full array state `[1, -1, 3, 4, 1, 10, 0, 2]` remains unchanged.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current pointer theme.pivot; source value chalkText.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Only pointer moves to next narrated index; no values move.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** i=2; actual=3; array=[1, -1, 3, 4, 1, 10, 0, 2]; no swap authorized.
- **TRACE STEP IDS:** `OPT-008`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A021 · `No swap.`

- **ANCHOR ID:** `S10:A021`; occurrence #21, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “No swap.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 021 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** At i=2, value `3` stops placement because `already_home`; do not swap or access an invalid home.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Blocked/invalid theme.warn; already home theme.good; no move.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Guard focus resolves, then pointer may advance only when later narration says next index.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** i=2; value=3; guard reason=already_home; array=[1, -1, 3, 4, 1, 10, 0, 2] unchanged.
- **TRACE STEP IDS:** `OPT-009`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A022 · `Index three contains four … already in its home.`

- **ANCHOR ID:** `S10:A022`; occurrence #22, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Index three contains four … already in its home.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 022 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Place active i pointer on slot 3, showing value `4`; full array state `[1, -1, 3, 4, 1, 10, 0, 2]` remains unchanged.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current pointer theme.pivot; source value chalkText.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Only pointer moves to next narrated index; no values move.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** i=3; actual=4; array=[1, -1, 3, 4, 1, 10, 0, 2]; no swap authorized.
- **TRACE STEP IDS:** `OPT-010`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A023 · `No swap.`

- **ANCHOR ID:** `S10:A023`; occurrence #23, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “No swap.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 023 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** At i=3, value `4` stops placement because `already_home`; do not swap or access an invalid home.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Blocked/invalid theme.warn; already home theme.good; no move.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Guard focus resolves, then pointer may advance only when later narration says next index.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** i=3; value=4; guard reason=already_home; array=[1, -1, 3, 4, 1, 10, 0, 2] unchanged.
- **TRACE STEP IDS:** `OPT-011`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A024 · `Index four contains one.`

- **ANCHOR ID:** `S10:A024`; occurrence #24, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Index four contains one.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 024 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Place active i pointer on slot 4, showing value `1`; full array state `[1, -1, 3, 4, 1, 10, 0, 2]` remains unchanged.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current pointer theme.pivot; source value chalkText.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Only pointer moves to next narrated index; no values move.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** i=4; actual=1; array=[1, -1, 3, 4, 1, 10, 0, 2]; no swap authorized.
- **TRACE STEP IDS:** `OPT-012`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A025 · `Its home is index zero.`

- **ANCHOR ID:** `S10:A025`; occurrence #25, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Its home is index zero.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 025 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Draw relation from duplicate value 1 at i=4 to its home 0; no travel.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Array commits only completed swaps (3 so far); source stays fixed; authoritative post-swap state from OPT trace. Visible result hidden until mismatch narration.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A026 · `But index zero already contains one.`

- **ANCHOR ID:** `S10:A026`; occurrence #26, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “But index zero already contains one.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 026 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Compare source 1 to already stored 1 in slot0, establish equality.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Array commits only completed swaps (3 so far); source stays fixed; authoritative post-swap state from OPT trace. Visible result hidden until mismatch narration.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A027 · `This is a duplicate … so do not swap.`

- **ANCHOR ID:** `S10:A027`; occurrence #27, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “This is a duplicate … so do not swap.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 027 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** At i=4, value `1` stops placement because `duplicate_home_occupied`; do not swap or access an invalid home.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Blocked/invalid theme.warn; already home theme.good; no move.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Guard focus resolves, then pointer may advance only when later narration says next index.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** i=4; value=1; guard reason=duplicate_home_occupied; array=[1, -1, 3, 4, 1, 10, 0, 2] unchanged.
- **TRACE STEP IDS:** `OPT-013`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A028 · `Index five contains ten.`

- **ANCHOR ID:** `S10:A028`; occurrence #28, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Index five contains ten.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 028 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Place active i pointer on slot 5, showing value `10`; full array state `[1, -1, 3, 4, 1, 10, 0, 2]` remains unchanged.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current pointer theme.pivot; source value chalkText.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Only pointer moves to next narrated index; no values move.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** i=5; actual=10; array=[1, -1, 3, 4, 1, 10, 0, 2]; no swap authorized.
- **TRACE STEP IDS:** `OPT-014`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A029 · `Ten is larger than eight … so skip.`

- **ANCHOR ID:** `S10:A029`; occurrence #29, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Ten is larger than eight … so skip.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 029 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** At i=5, value `10` stops placement because `out_of_range`; do not swap or access an invalid home.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Blocked/invalid theme.warn; already home theme.good; no move.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Guard focus resolves, then pointer may advance only when later narration says next index.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** i=5; value=10; guard reason=out_of_range; array=[1, -1, 3, 4, 1, 10, 0, 2] unchanged.
- **TRACE STEP IDS:** `OPT-015`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A030 · `Index six contains zero.`

- **ANCHOR ID:** `S10:A030`; occurrence #30, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Index six contains zero.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 030 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Place active i pointer on slot 6, showing value `0`; full array state `[1, -1, 3, 4, 1, 10, 0, 2]` remains unchanged.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current pointer theme.pivot; source value chalkText.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Only pointer moves to next narrated index; no values move.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** i=6; actual=0; array=[1, -1, 3, 4, 1, 10, 0, 2]; no swap authorized.
- **TRACE STEP IDS:** `OPT-016`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A031 · `Zero is not positive … so skip.`

- **ANCHOR ID:** `S10:A031`; occurrence #31, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Zero is not positive … so skip.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 031 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** At i=6, value `0` stops placement because `out_of_range`; do not swap or access an invalid home.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Blocked/invalid theme.warn; already home theme.good; no move.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Guard focus resolves, then pointer may advance only when later narration says next index.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** i=6; value=0; guard reason=out_of_range; array=[1, -1, 3, 4, 1, 10, 0, 2] unchanged.
- **TRACE STEP IDS:** `OPT-017`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A032 · `Index seven contains two.`

- **ANCHOR ID:** `S10:A032`; occurrence #32, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Index seven contains two.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 032 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Place active i pointer on slot 7, showing value `2`; full array state `[1, -1, 3, 4, 1, 10, 0, 2]` remains unchanged.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current pointer theme.pivot; source value chalkText.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Only pointer moves to next narrated index; no values move.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** i=7; actual=2; array=[1, -1, 3, 4, 1, 10, 0, 2]; no swap authorized.
- **TRACE STEP IDS:** `OPT-018`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A033 · `Two belongs at index one … which currently holds minus one.`

- **ANCHOR ID:** `S10:A033`; occurrence #33, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Two belongs at index one … which currently holds minus one.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 033 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** “index one” → Identify home=1; “minus one” → Identify target=-1 (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Draw relation value2 at i=7→home 1 containing -1; no swap yet.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Array commits only completed swaps (3 so far); source stays fixed; authoritative post-swap state from OPT trace. Visible result hidden until mismatch narration.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A034 · `Swap.`

- **ANCHOR ID:** `S10:A034`; occurrence #34, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Swap.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 034 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** SWAP at fixed source index i=7: current `2` belongs home index 1 holding `-1`. Spoken swap authorizes value flight; after landing exact array `[1, 2, 3, 4, 1, 10, 0, -1]`.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Source pivot → target cyan; landed in correct home good; other slots unchanged.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Use `ArrayTrackV2.swap` {idxA:i,idxB:target,progress: resolved by audio}; move VALUE occupants along separate paths, not slot shells or index labels. Commit new elements only after landing; recheck same i.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Before=[1, -1, 3, 4, 1, 10, 0, 2]; after=[1, 2, 3, 4, 1, 10, 0, -1]; successful swap into home index 1; i=7 remains until guard resolves.
- **TRACE STEP IDS:** `OPT-019`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** SWAP → settle before next read; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A035 · `Two reaches index one, and minus one arrives at index seven.`

- **ANCHOR ID:** `S10:A035`; occurrence #35, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Two reaches index one, and minus one arrives at index seven.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 035 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Settle [1,2,3,4,1,10,0,-1] after OPT-019.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Array commits only completed swaps (4 so far); source stays fixed; authoritative post-swap state from OPT trace. Visible result hidden until mismatch narration.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A036 · `Check index seven again.`

- **ANCHOR ID:** `S10:A036`; occurrence #36, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Check index seven again.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 036 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Remain i=7 and inspect incoming -1.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Array commits only completed swaps (4 so far); source stays fixed; authoritative post-swap state from OPT trace. Visible result hidden until mismatch narration.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A037 · `Minus one cannot be placed … so the placement pass ends.`

- **ANCHOR ID:** `S10:A037`; occurrence #37, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Minus one cannot be placed … so the placement pass ends.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 037 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** At i=7, value `-1` stops placement because `out_of_range`; do not swap or access an invalid home.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Blocked/invalid theme.warn; already home theme.good; no move.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Guard focus resolves, then pointer may advance only when later narration says next index.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** i=7; value=-1; guard reason=out_of_range; array=[1, 2, 3, 4, 1, 10, 0, -1] unchanged.
- **TRACE STEP IDS:** `OPT-020`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A038 · `Our array is now … [1, 2, 3, 4, 1, 10, 0, -1].`

- **ANCHOR ID:** `S10:A038`; occurrence #38, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Our array is now … [1, 2, 3, 4, 1, 10, 0, -1].” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 038 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Reveal already derived settled array after all four swaps; no new mutation.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Array commits only completed swaps (4 so far); source stays fixed; authoritative post-swap state from OPT trace. Visible result hidden until mismatch narration.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A039 · `Now scan from left to right, checking each expected value.`

- **ANCHOR ID:** `S10:A039`; occurrence #39, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Now scan from left to right, checking each expected value.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 039 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Switch from placement pointer to verification scan pointer at i=0.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Array commits only completed swaps (4 so far); source stays fixed; authoritative post-swap state from OPT trace. Visible result hidden until mismatch narration.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A040 · `At index zero … expect one.`

- **ANCHOR ID:** `S10:A040`; occurrence #40, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “At index zero … expect one.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 040 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Final scan at i=0: expected `1` versus actual `1` → MATCH. Leave final return hidden until separately spoken.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current expected theme.cyan; match theme.good; mismatch theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Compare the two values at fixed index; on match focus good then later advance scan pointer; on mismatch stop at i=4.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Scan i=0, expected=1, actual=1, match=true, array unchanged=[1, 2, 3, 4, 1, 10, 0, -1].
- **TRACE STEP IDS:** `OPT-021`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A041 · `We have one.`

- **ANCHOR ID:** `S10:A041`; occurrence #41, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “We have one.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 041 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Resolve expected1==actual1 on scan 0; only then advance.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Array commits only completed swaps (4 so far); source stays fixed; authoritative post-swap state from OPT trace. Visible result hidden until mismatch narration.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A042 · `At index one … expect two.`

- **ANCHOR ID:** `S10:A042`; occurrence #42, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “At index one … expect two.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 042 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Final scan at i=1: expected `2` versus actual `2` → MATCH. Leave final return hidden until separately spoken.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current expected theme.cyan; match theme.good; mismatch theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Compare the two values at fixed index; on match focus good then later advance scan pointer; on mismatch stop at i=4.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Scan i=1, expected=2, actual=2, match=true, array unchanged=[1, 2, 3, 4, 1, 10, 0, -1].
- **TRACE STEP IDS:** `OPT-022`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A043 · `We have two.`

- **ANCHOR ID:** `S10:A043`; occurrence #43, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “We have two.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 043 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Resolve expected2==actual2 on scan 1; only then advance.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Array commits only completed swaps (4 so far); source stays fixed; authoritative post-swap state from OPT trace. Visible result hidden until mismatch narration.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A044 · `At index two … expect three.`

- **ANCHOR ID:** `S10:A044`; occurrence #44, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “At index two … expect three.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 044 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Final scan at i=2: expected `3` versus actual `3` → MATCH. Leave final return hidden until separately spoken.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current expected theme.cyan; match theme.good; mismatch theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Compare the two values at fixed index; on match focus good then later advance scan pointer; on mismatch stop at i=4.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Scan i=2, expected=3, actual=3, match=true, array unchanged=[1, 2, 3, 4, 1, 10, 0, -1].
- **TRACE STEP IDS:** `OPT-023`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A045 · `We have three.`

- **ANCHOR ID:** `S10:A045`; occurrence #45, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “We have three.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 045 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Resolve expected3==actual3 on scan 2; only then advance.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Array commits only completed swaps (4 so far); source stays fixed; authoritative post-swap state from OPT trace. Visible result hidden until mismatch narration.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A046 · `At index three … expect four.`

- **ANCHOR ID:** `S10:A046`; occurrence #46, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “At index three … expect four.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 046 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Final scan at i=3: expected `4` versus actual `4` → MATCH. Leave final return hidden until separately spoken.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current expected theme.cyan; match theme.good; mismatch theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Compare the two values at fixed index; on match focus good then later advance scan pointer; on mismatch stop at i=4.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Scan i=3, expected=4, actual=4, match=true, array unchanged=[1, 2, 3, 4, 1, 10, 0, -1].
- **TRACE STEP IDS:** `OPT-024`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A047 · `We have four.`

- **ANCHOR ID:** `S10:A047`; occurrence #47, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “We have four.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 047 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Resolve expected4==actual4 on scan 3; only then advance.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Array commits only completed swaps (4 so far); source stays fixed; authoritative post-swap state from OPT trace. Visible result hidden until mismatch narration.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A048 · `At index four … expect five.`

- **ANCHOR ID:** `S10:A048`; occurrence #48, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “At index four … expect five.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 048 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** “expect five” → Only now show expected=5 (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Final scan at i=4: expected `5` versus actual `1` → FIRST MISMATCH. Leave final return hidden until separately spoken.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current expected theme.cyan; match theme.good; mismatch theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Compare the two values at fixed index; on match focus good then later advance scan pointer; on mismatch stop at i=4.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Scan i=4, expected=5, actual=1, match=false, array unchanged=[1, 2, 3, 4, 1, 10, 0, -1].
- **TRACE STEP IDS:** `OPT-025`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A049 · `But we have one.`

- **ANCHOR ID:** `S10:A049`; occurrence #49, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “But we have one.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 049 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** “we have one” → Only now show actual=1 (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Compare expected5 to actual1, draw mismatch without output answer yet.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Array commits only completed swaps (4 so far); source stays fixed; authoritative post-swap state from OPT trace. Visible result hidden until mismatch narration.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A050 · `This is the first mismatch.`

- **ANCHOR ID:** `S10:A050`; occurrence #50, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “This is the first mismatch.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 050 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Mark first mismatch at index4 from observed comparison.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Array commits only completed swaps (4 so far); source stays fixed; authoritative post-swap state from OPT trace. Visible result hidden until mismatch narration.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A051 · `So five is the first missing positive.`

- **ANCHOR ID:** `S10:A051`; occurrence #51, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “So five is the first missing positive.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 051 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Reveal first missing positive=5 only after mismatch established.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Array commits only completed swaps (4 so far); source stays fixed; authoritative post-swap state from OPT trace. Visible result hidden until mismatch narration.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S10:A052 · `Return five.`

- **ANCHOR ID:** `S10:A052`; occurrence #52, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Return five.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 10, sentence 052 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Reveal RETURN 5, stop scan at index4.
- **CENTER-STAGE HERO:** ArrayTrackV2 x350..1546 y342..470, 8 slots132×128 gap20, index row y294, 2-lane pointer row y490..610 — current attention: main array and variable/calc/result lanes.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** No trace mutation on this narration bridge; maintain verified preceding array/set state and move focus only when authorized.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Array commits only completed swaps (4 so far); source stays fixed; authoritative post-swap state from OPT trace. Visible result hidden until mismatch narration.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `PointerLaneV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No future swapped array / expected-value mismatch / final 5. No move unless current phrase permits it; next i not shown before guard stop.
- **COLLISION CHECK:** Active zone `x350..1546 y294..615`; supports `x145..660 y642..815` + `x760..1440 y640..805`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

## 3. Exit contract and critical visual states

- **ENTRY:** Before any phrase, reserve geometry internally but render future values/invariants/answer hidden.
- **FIRST IMPORTANT STATE:** First concept/input at first matching spoken anchor.
- **FIRST DECISION / QUERY:** First narrated comparison/probe/guard; source remains stable.
- **FIRST MUTATION:** Only at a verified mutation event for TRACE; N/A for purely conceptual/code scenes.
- **MOST COMPLEX STATE:** At the most crowded meaning, slot labels, pointer lanes, variable/calc and auxiliary set have fixed nonoverlapping spatial ownership.
- **FINAL STATE:** Only narrated conclusions exist, with persistent source truth.
- **TRANSITION OUT:** Clear transient arrows and current word highlight; preserve source identity when it makes next scene easier.

## 4. Scene-local verification and unresolved gates

- **Anchors audited:** 52 source-ordered phrases with non-overlapping source occurrence; audit file `Scene10_Audit.md`.
- **Trace events audited:** 25; exact machine event IDs listed above; none assigned in non-trace scene.
- **No unverified component APIs:** all names/props verified against GitHub `main` source; check file SHAs in master handoff if upstream changes.
- **Layout status:** specification geometry checked numerically; screenshot collision test is NOT POSSIBLE before Remotion implementation, so final visual signoff remains open.
- **Audio/sync:** pending; `Wxxxx`, FPS, exact frame ranges, glyph draws and pause classifications are NOT asserted.
- **Handoff gate:** this is a **PRE-AUDIO SEMANTIC PLAN**, not an approved post-audio frame plan. Antigravity must bind W IDs from real MP3 + validated sync and audit critical frames before implementation signoff.
