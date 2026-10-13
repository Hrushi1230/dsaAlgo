# Q18 · Scene 08 — Why HashSet Is Not Enough

**SCENE:** 08 / 13
**QUESTION:** Q18 First Missing Positive · LeetCode 41 · Arrays & Hashing
**BEAT TYPE:** LIMITATION BRIDGE
**SCRIPT SOURCE:** `08_FINAL_ELEVENLABS_NARRATION.md`, Phase-08 restarted approved wording (SHA256 in handoff)
**TRACE SOURCE:** `05_VERIFIED_TRACES.md` + `05_TRACE_MACHINE_CHECKED.json` from restarted phase ZIP
**AUDIO FILE:** PENDING FINAL AUDIO
**SYNC FILE:** PENDING FINAL AUDIO
**FPS:** PENDING FINAL AUDIO
**TOTAL FRAMES:** PENDING FINAL AUDIO
**PEDAGOGICAL GOAL:** Derive the O(n) extra-memory failure and question whether input positions can replace memory.
**TRACE STEP IDS:** N/A — non-trace, no algorithm execution
**DATA STRUCTURE:** array + HashSet unordered-membership
**PRIMARY HERO:** one central memory comparison x350..1600 y345..745; no cards
**SUPPORT LEFT:** external set concept x210..720 y395..720
**SUPPORT RIGHT:** original array fixed slots x1130..1760 y410..630 (context, no data mutation)
**TRACE PRIMARY STRUCTURE ZONE:** N/A; non-trace geometry described above
**TRACE VARIABLE STATE RAIL:** N/A
**TRACE LIVE CALCULATION STAGE:** N/A
**TRACE AUXILIARY STRUCTURE ZONE:** N/A
**TRACE ANSWER / RESULT ZONE:** N/A
**REUSE:** ChalkText, RoughLine, ArrayTrackV2; Captions after exact sync
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
- **Exact geometry ownership:** primary `one central memory comparison x350..1600 y345..745; no cards`; left `external set concept x210..720 y395..720`; right `original array fixed slots x1130..1760 y410..630 (context, no data mutation)`; active structure `N/A`; variables `N/A`; live decision `O(n) memory vs O(1) allowed x565..1370 y625..790`; auxiliary `concept-only, no HashSet insertion`; answer `optimal invariant hidden`.
- **Layout clearance check:** sequential ownership; no simultaneous full set+full array+equation at equal weight. Optical positions are precise design coordinates but NOT a claim that Remotion has been screenshot-tested. Preserve invisible space for future values so no shift occurs when revealed.
- **Causal order:** one primary teaching motion at a time, optionally one direct supporting reaction. All values/answers derive from verified source. Suppress any state not yet spoken.
- **Hold:** only if actual later sync indicates real pause; otherwise no fabricated hold. No incidental camera zoom or bounce.

### Verified kit/API ledger

| Kit component | Verified repository path | Actual API / state intent | Role / enter / persist / cleanup | Decision |
|---|---|---|---|---|
| `ChalkText` | `kit/components/ChalkText.tsx` | `children`, `startFrame`, `charFrames?`, `fontSize?`, `color?`, `font?`, `cursor?`, `style?`; frame props are PENDING SYNC | Write concept, variable, code or conclusion directly on the board using shared chalk typography; enter on its exact speech phrase; persist through relevant causal beat; clear transient focus at next beat | REUSE |
| `RoughLine` | `kit/components/RoughLine.tsx` | `shape:{kind:line\|arrow\|circle,...}`, `width`, `height`, `startFrame?`, `durationInFrames?`, `stroke?`, `seed?` — timing PENDING SYNC | Draw only currently narrated comparison/home relation or underline; enter on its exact speech phrase; persist through relevant causal beat; clear transient focus at next beat | REUSE |
| `ArrayTrackV2` | `kit/components/array/ArrayTrackV2.tsx` | `elements`, `slotWidth`, `slotHeight`, `gap`, `maxWidth`, `showIndices`, `indexPlacement`, `pointers`, `swap`, `highlightedIndices`, `style` | Use fixed slot shells and stable index labels; pointers/semantic states configured from approved trace; enter on its exact speech phrase; persist through relevant causal beat; clear transient focus at next beat | REUSE |
| `Captions` | `kit/components/Captions.tsx` | `words:{word,start,end}[]`, `fps?`, `bottom?`, `fontSize?`, `maxWords?`, `maxWidth?` — POST SYNC ONLY | Post-sync exact word captions only; no fake words/time; enter on its exact speech phrase; persist through relevant causal beat; clear transient focus at next beat | REUSE post-audio |

## 2. Exact narration → semantic word-anchor plan

**Anchor identity:** `Snn:Axxx` is a *semantic* identity, not `Wxxxx`. Each spoken phrase is quoted exactly from the approved script in source order. No audio exists at this stage. Every trigger awaits the exact matching word span after final sync.

### S08:A001 · `A HashSet gives expected linear time, but can hold up to n different numbers.`

- **ANCHOR ID:** `S08:A001`; occurrence #1, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “A HashSet gives expected linear time, but can hold up to n different numbers.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 08, sentence 001 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Reveal abstract HashSet containing up to n distinct members, with O(n) space not yet shown.
- **CENTER-STAGE HERO:** one central memory comparison x350..1600 y345..745; no cards — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Prior authorized statements and source array/membership/bound persist in stable home; derived future outcome remains hidden.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ChalkText`, `RoughLine`, `ArrayTrackV2`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **COLLISION CHECK:** Active zone `N/A`; supports `N/A` + `O(n) memory vs O(1) allowed x565..1370 y625..790`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S08:A002 · `That is O of n extra space … and the question allows only constant extra space.`

- **ANCHOR ID:** `S08:A002`; occurrence #2, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “That is O of n extra space … and the question allows only constant extra space.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 08, sentence 002 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Derive `O(n) extra` against `required O(1)` only as words reach both claims.
- **CENTER-STAGE HERO:** one central memory comparison x350..1600 y345..745; no cards — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Prior authorized statements and source array/membership/bound persist in stable home; derived future outcome remains hidden.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ChalkText`, `RoughLine`, `ArrayTrackV2`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **COLLISION CHECK:** Active zone `N/A`; supports `N/A` + `O(n) memory vs O(1) allowed x565..1370 y625..790`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S08:A003 · `So we cannot carry a separate set into the final solution.`

- **ANCHOR ID:** `S08:A003`; occurrence #3, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “So we cannot carry a separate set into the final solution.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 08, sentence 003 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Cross out separate storage concept; retain membership question.
- **CENTER-STAGE HERO:** one central memory comparison x350..1600 y345..745; no cards — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Prior authorized statements and source array/membership/bound persist in stable home; derived future outcome remains hidden.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ChalkText`, `RoughLine`, `ArrayTrackV2`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **COLLISION CHECK:** Active zone `N/A`; supports `N/A` + `O(n) memory vs O(1) allowed x565..1370 y625..790`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S08:A004 · `We still need to know which positive values exist.`

- **ANCHOR ID:** `S08:A004`; occurrence #4, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “We still need to know which positive values exist.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 08, sentence 004 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Put a large `which positives exist?` chalk question center.
- **CENTER-STAGE HERO:** one central memory comparison x350..1600 y345..745; no cards — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Prior authorized statements and source array/membership/bound persist in stable home; derived future outcome remains hidden.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ChalkText`, `RoughLine`, `ArrayTrackV2`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **COLLISION CHECK:** Active zone `N/A`; supports `N/A` + `O(n) memory vs O(1) allowed x565..1370 y625..790`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S08:A005 · `Could the original array positions hold that information for us … without another data structure?`

- **ANCHOR ID:** `S08:A005`; occurrence #5, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Could the original array positions hold that information for us … without another data structure?” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 08, sentence 005 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Move conceptual focus from external set to fixed source array slots without rearranging values.
- **CENTER-STAGE HERO:** one central memory comparison x350..1600 y345..745; no cards — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Prior authorized statements and source array/membership/bound persist in stable home; derived future outcome remains hidden.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ChalkText`, `RoughLine`, `ArrayTrackV2`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **COLLISION CHECK:** Active zone `N/A`; supports `N/A` + `O(n) memory vs O(1) allowed x565..1370 y625..790`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S08:A006 · `Yes.`

- **ANCHOR ID:** `S08:A006`; occurrence #6, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Yes.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 08, sentence 006 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Confirm possibility visually by highlighting empty internal slot-identity affordance; no value mapping yet.
- **CENTER-STAGE HERO:** one central memory comparison x350..1600 y345..745; no cards — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Prior authorized statements and source array/membership/bound persist in stable home; derived future outcome remains hidden.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ChalkText`, `RoughLine`, `ArrayTrackV2`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **COLLISION CHECK:** Active zone `N/A`; supports `N/A` + `O(n) memory vs O(1) allowed x565..1370 y625..790`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S08:A007 · `To do that, we first need one important bound.`

- **ANCHOR ID:** `S08:A007`; occurrence #7, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “To do that, we first need one important bound.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 08, sentence 007 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Reveal only `bound?` as next unresolved concept, then clear the set outline.
- **CENTER-STAGE HERO:** one central memory comparison x350..1600 y345..745; no cards — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Prior authorized statements and source array/membership/bound persist in stable home; derived future outcome remains hidden.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ChalkText`, `RoughLine`, `ArrayTrackV2`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **COLLISION CHECK:** Active zone `N/A`; supports `N/A` + `O(n) memory vs O(1) allowed x565..1370 y625..790`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

## 3. Exit contract and critical visual states

- **ENTRY:** Before any phrase, reserve geometry internally but render future values/invariants/answer hidden.
- **FIRST IMPORTANT STATE:** First concept/input at first matching spoken anchor.
- **FIRST DECISION / QUERY:** First narrated comparison/probe/guard; source remains stable.
- **FIRST MUTATION:** Only at a verified mutation event for TRACE; N/A for purely conceptual/code scenes.
- **MOST COMPLEX STATE:** At the most crowded meaning, slot labels, pointer lanes, variable/calc and auxiliary set have fixed nonoverlapping spatial ownership.
- **FINAL STATE:** Only narrated conclusions exist, with persistent source truth.
- **TRANSITION OUT:** Clear transient arrows and current word highlight; preserve source identity when it makes next scene easier.

## 4. Scene-local verification and unresolved gates

- **Anchors audited:** 7 source-ordered phrases with non-overlapping source occurrence; audit file `Scene08_Audit.md`.
- **Trace events audited:** 0; exact machine event IDs listed above; none assigned in non-trace scene.
- **No unverified component APIs:** all names/props verified against GitHub `main` source; check file SHAs in master handoff if upstream changes.
- **Layout status:** specification geometry checked numerically; screenshot collision test is NOT POSSIBLE before Remotion implementation, so final visual signoff remains open.
- **Audio/sync:** pending; `Wxxxx`, FPS, exact frame ranges, glyph draws and pause classifications are NOT asserted.
- **Handoff gate:** this is a **PRE-AUDIO SEMANTIC PLAN**, not an approved post-audio frame plan. Antigravity must bind W IDs from real MP3 + validated sync and audit critical frames before implementation signoff.
