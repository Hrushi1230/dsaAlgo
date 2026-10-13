# Q18 · Scene 09 — Optimal Idea: Use the Array as Its Own Presence Map

**SCENE:** 09 / 13
**QUESTION:** Q18 First Missing Positive · LeetCode 41 · Arrays & Hashing
**BEAT TYPE:** OPTIMAL IDEA
**SCRIPT SOURCE:** `08_FINAL_ELEVENLABS_NARRATION.md`, Phase-08 restarted approved wording (SHA256 in handoff)
**TRACE SOURCE:** `05_VERIFIED_TRACES.md` + `05_TRACE_MACHINE_CHECKED.json` from restarted phase ZIP
**AUDIO FILE:** PENDING FINAL AUDIO
**SYNC FILE:** PENDING FINAL AUDIO
**FPS:** PENDING FINAL AUDIO
**TOTAL FRAMES:** PENDING FINAL AUDIO
**PEDAGOGICAL GOAL:** Prove [1,n+1] bound, home(x)=x−1, while-recheck and guards, without executing swaps.
**TRACE STEP IDS:** N/A — non-trace, no algorithm execution
**DATA STRUCTURE:** array + fixed slots
**PRIMARY HERO:** home(x)=x−1 equation x570..1425 y350..570; master array x350..1546 y595..720, indexes outside
**SUPPORT LEFT:** bound 1..n+1 x190..770 y265..425
**SUPPORT RIGHT:** guard clauses x1200..1810 y725..875
**TRACE PRIMARY STRUCTURE ZONE:** N/A; non-trace geometry described above
**TRACE VARIABLE STATE RAIL:** N/A
**TRACE LIVE CALCULATION STAGE:** N/A
**TRACE AUXILIARY STRUCTURE ZONE:** N/A
**TRACE ANSWER / RESULT ZONE:** N/A
**REUSE:** ArrayTrackV2, RoughLine, ChalkText; Captions after exact sync
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
- **Exact geometry ownership:** primary `home(x)=x−1 equation x570..1425 y350..570; master array x350..1546 y595..720, indexes outside`; left `bound 1..n+1 x190..770 y265..425`; right `guard clauses x1200..1810 y725..875`; active structure `array x350..1546 y585..830`; variables `x235..770 y740..905`; live decision `home(x)=x−1 x570..1440 y330..565`; auxiliary `N/A`; answer `no numeric result, no swap execution`.
- **Layout clearance check:** idea text appears in order; equation large 58px; array 8 slots may use compact 90px only for conceptual target mapping, no second testcase. Optical positions are precise design coordinates but NOT a claim that Remotion has been screenshot-tested. Preserve invisible space for future values so no shift occurs when revealed.
- **Causal order:** one primary teaching motion at a time, optionally one direct supporting reaction. All values/answers derive from verified source. Suppress any state not yet spoken.
- **Hold:** only if actual later sync indicates real pause; otherwise no fabricated hold. No incidental camera zoom or bounce.

### Verified kit/API ledger

| Kit component | Verified repository path | Actual API / state intent | Role / enter / persist / cleanup | Decision |
|---|---|---|---|---|
| `ArrayTrackV2` | `kit/components/array/ArrayTrackV2.tsx` | `elements`, `slotWidth`, `slotHeight`, `gap`, `maxWidth`, `showIndices`, `indexPlacement`, `pointers`, `swap`, `highlightedIndices`, `style` | Use fixed slot shells and stable index labels; pointers/semantic states configured from approved trace; enter on its exact speech phrase; persist through relevant causal beat; clear transient focus at next beat | REUSE |
| `RoughLine` | `kit/components/RoughLine.tsx` | `shape:{kind:line\|arrow\|circle,...}`, `width`, `height`, `startFrame?`, `durationInFrames?`, `stroke?`, `seed?` — timing PENDING SYNC | Draw only currently narrated comparison/home relation or underline; enter on its exact speech phrase; persist through relevant causal beat; clear transient focus at next beat | REUSE |
| `ChalkText` | `kit/components/ChalkText.tsx` | `children`, `startFrame`, `charFrames?`, `fontSize?`, `color?`, `font?`, `cursor?`, `style?`; frame props are PENDING SYNC | Write concept, variable, code or conclusion directly on the board using shared chalk typography; enter on its exact speech phrase; persist through relevant causal beat; clear transient focus at next beat | REUSE |
| `Captions` | `kit/components/Captions.tsx` | `words:{word,start,end}[]`, `fps?`, `bottom?`, `fontSize?`, `maxWords?`, `maxWidth?` — POST SYNC ONLY | Post-sync exact word captions only; no fake words/time; enter on its exact speech phrase; persist through relevant causal beat; clear transient focus at next beat | REUSE post-audio |

### Scene-specific semantic implementation contract

**Important conceptual drawing:** index-target labels on the ORIGINAL eight-slot master-array indices are explanatory annotations only. Do NOT populate target slots with [1..8] as if already mutated. Actual swaps begin Scene10 only.

## 2. Exact narration → semantic word-anchor plan

**Anchor identity:** `Snn:Axxx` is a *semantic* identity, not `Wxxxx`. Each spoken phrase is quoted exactly from the approved script in source order. No audio exists at this stage. Every trigger awaits the exact matching word span after final sync.

### S09:A001 · `Suppose the array has n elements.`

- **ANCHOR ID:** `S09:A001`; occurrence #1, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Suppose the array has n elements.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 09, sentence 001 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Show original master array fixed in primary stage; n=8 may display only after narration says n.
- **CENTER-STAGE HERO:** home(x)=x−1 equation x570..1425 y350..570; master array x350..1546 y595..720, indexes outside — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** Do not show actual completed swaps, final placed array, first mismatch, or concrete answer. Bound n+1 is a proof, not a solved output.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Prior authorized statements and source array/membership/bound persist in stable home; derived future outcome remains hidden.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `RoughLine`, `ChalkText`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; Do not show actual completed swaps, final placed array, first mismatch, or concrete answer. Bound n+1 is a proof, not a solved output.
- **COLLISION CHECK:** Active zone `array x350..1546 y585..830`; supports `x235..770 y740..905` + `home(x)=x−1 x570..1440 y330..565`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S09:A002 · `If one through n are all present … the answer is n plus one.`

- **ANCHOR ID:** `S09:A002`; occurrence #2, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “If one through n are all present … the answer is n plus one.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 09, sentence 002 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Derive conditional statement `1..n all present ⇒ n+1`; this is a bound, NOT master input answer.
- **CENTER-STAGE HERO:** home(x)=x−1 equation x570..1425 y350..570; master array x350..1546 y595..720, indexes outside — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** Do not show actual completed swaps, final placed array, first mismatch, or concrete answer. Bound n+1 is a proof, not a solved output.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Prior authorized statements and source array/membership/bound persist in stable home; derived future outcome remains hidden.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `RoughLine`, `ChalkText`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; Do not show actual completed swaps, final placed array, first mismatch, or concrete answer. Bound n+1 is a proof, not a solved output.
- **COLLISION CHECK:** Active zone `array x350..1546 y585..830`; supports `x235..770 y740..905` + `home(x)=x−1 x570..1440 y330..565`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S09:A003 · `Otherwise, at least one number between one and n is missing.`

- **ANCHOR ID:** `S09:A003`; occurrence #3, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Otherwise, at least one number between one and n is missing.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 09, sentence 003 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Derive complement case: some number in `1..n` missing; do not disclose which.
- **CENTER-STAGE HERO:** home(x)=x−1 equation x570..1425 y350..570; master array x350..1546 y595..720, indexes outside — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** Do not show actual completed swaps, final placed array, first mismatch, or concrete answer. Bound n+1 is a proof, not a solved output.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Prior authorized statements and source array/membership/bound persist in stable home; derived future outcome remains hidden.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `RoughLine`, `ChalkText`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; Do not show actual completed swaps, final placed array, first mismatch, or concrete answer. Bound n+1 is a proof, not a solved output.
- **COLLISION CHECK:** Active zone `array x350..1546 y585..830`; supports `x235..770 y740..905` + `home(x)=x−1 x570..1440 y330..565`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S09:A004 · `So the first missing positive must be between one and n plus one.`

- **ANCHOR ID:** `S09:A004`; occurrence #4, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “So the first missing positive must be between one and n plus one.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 09, sentence 004 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Underline global bound `[1, n+1]` only after spoken.
- **CENTER-STAGE HERO:** home(x)=x−1 equation x570..1425 y350..570; master array x350..1546 y595..720, indexes outside — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** Do not show actual completed swaps, final placed array, first mismatch, or concrete answer. Bound n+1 is a proof, not a solved output.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Prior authorized statements and source array/membership/bound persist in stable home; derived future outcome remains hidden.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `RoughLine`, `ChalkText`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; Do not show actual completed swaps, final placed array, first mismatch, or concrete answer. Bound n+1 is a proof, not a solved output.
- **COLLISION CHECK:** Active zone `array x350..1546 y585..830`; supports `x235..770 y740..905` + `home(x)=x−1 x570..1440 y330..565`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S09:A005 · `That means we only need to arrange values from one through n.`

- **ANCHOR ID:** `S09:A005`; occurrence #5, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “That means we only need to arrange values from one through n.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 09, sentence 005 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Focus useful placement domain `[1,n]` versus ignored out-of-range values; no trace motion.
- **CENTER-STAGE HERO:** home(x)=x−1 equation x570..1425 y350..570; master array x350..1546 y595..720, indexes outside — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** Do not show actual completed swaps, final placed array, first mismatch, or concrete answer. Bound n+1 is a proof, not a solved output.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Prior authorized statements and source array/membership/bound persist in stable home; derived future outcome remains hidden.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `RoughLine`, `ChalkText`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; Do not show actual completed swaps, final placed array, first mismatch, or concrete answer. Bound n+1 is a proof, not a solved output.
- **COLLISION CHECK:** Active zone `array x350..1546 y585..830`; supports `x235..770 y740..905` + `home(x)=x−1 x570..1440 y330..565`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S09:A006 · `Here is the rule: value x belongs at index x minus one.`

- **ANCHOR ID:** `S09:A006`; occurrence #6, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Here is the rule: value x belongs at index x minus one.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 09, sentence 006 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Write invariant `home(x) = x - 1` as the hero expression.
- **CENTER-STAGE HERO:** home(x)=x−1 equation x570..1425 y350..570; master array x350..1546 y595..720, indexes outside — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** Do not show actual completed swaps, final placed array, first mismatch, or concrete answer. Bound n+1 is a proof, not a solved output.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Prior authorized statements and source array/membership/bound persist in stable home; derived future outcome remains hidden.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `RoughLine`, `ChalkText`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; Do not show actual completed swaps, final placed array, first mismatch, or concrete answer. Bound n+1 is a proof, not a solved output.
- **COLLISION CHECK:** Active zone `array x350..1546 y585..830`; supports `x235..770 y740..905` + `home(x)=x−1 x570..1440 y330..565`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S09:A007 · `Why?`

- **ANCHOR ID:** `S09:A007`; occurrence #7, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Why?” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 09, sentence 007 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Hold focus on the invariant; no fresh numeric example.
- **CENTER-STAGE HERO:** home(x)=x−1 equation x570..1425 y350..570; master array x350..1546 y595..720, indexes outside — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** Do not show actual completed swaps, final placed array, first mismatch, or concrete answer. Bound n+1 is a proof, not a solved output.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Prior authorized statements and source array/membership/bound persist in stable home; derived future outcome remains hidden.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `RoughLine`, `ChalkText`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; Do not show actual completed swaps, final placed array, first mismatch, or concrete answer. Bound n+1 is a proof, not a solved output.
- **COLLISION CHECK:** Active zone `array x350..1546 y585..830`; supports `x235..770 y740..905` + `home(x)=x−1 x570..1440 y330..565`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S09:A008 · `Because index zero can represent one … index one can represent two … and so on.`

- **ANCHOR ID:** `S09:A008`; occurrence #8, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Because index zero can represent one … index one can represent two … and so on.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 09, sentence 008 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Illustrate index0↔target1 and index1↔target2 on unfilled target labels tied to the existing 8 slots, not a second array.
- **CENTER-STAGE HERO:** home(x)=x−1 equation x570..1425 y350..570; master array x350..1546 y595..720, indexes outside — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** Do not show actual completed swaps, final placed array, first mismatch, or concrete answer. Bound n+1 is a proof, not a solved output.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Prior authorized statements and source array/membership/bound persist in stable home; derived future outcome remains hidden.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `RoughLine`, `ChalkText`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; Do not show actual completed swaps, final placed array, first mismatch, or concrete answer. Bound n+1 is a proof, not a solved output.
- **COLLISION CHECK:** Active zone `array x350..1546 y585..830`; supports `x235..770 y740..905` + `home(x)=x−1 x570..1440 y330..565`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S09:A009 · `The array becomes its own presence map.`

- **ANCHOR ID:** `S09:A009`; occurrence #9, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “The array becomes its own presence map.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 09, sentence 009 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Name array as presence map; source values remain in source positions.
- **CENTER-STAGE HERO:** home(x)=x−1 equation x570..1425 y350..570; master array x350..1546 y595..720, indexes outside — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** Do not show actual completed swaps, final placed array, first mismatch, or concrete answer. Bound n+1 is a proof, not a solved output.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Prior authorized statements and source array/membership/bound persist in stable home; derived future outcome remains hidden.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `RoughLine`, `ChalkText`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; Do not show actual completed swaps, final placed array, first mismatch, or concrete answer. Bound n+1 is a proof, not a solved output.
- **COLLISION CHECK:** Active zone `array x350..1546 y585..830`; supports `x235..770 y740..905` + `home(x)=x−1 x570..1440 y330..565`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S09:A010 · `At each position, while the current number is in that valid range, move it into its home by swapping.`

- **ANCHOR ID:** `S09:A010`; occurrence #10, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “At each position, while the current number is in that valid range, move it into its home by swapping.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 09, sentence 010 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Illustrate conditional *possible* source→home relation with rough arrow but do not mutate array.
- **CENTER-STAGE HERO:** home(x)=x−1 equation x570..1425 y350..570; master array x350..1546 y595..720, indexes outside — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** Do not show actual completed swaps, final placed array, first mismatch, or concrete answer. Bound n+1 is a proof, not a solved output.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Prior authorized statements and source array/membership/bound persist in stable home; derived future outcome remains hidden.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `RoughLine`, `ChalkText`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; Do not show actual completed swaps, final placed array, first mismatch, or concrete answer. Bound n+1 is a proof, not a solved output.
- **COLLISION CHECK:** Active zone `array x350..1546 y585..830`; supports `x235..770 y740..905` + `home(x)=x−1 x570..1440 y330..565`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S09:A011 · `After a swap, check the new value at the same position.`

- **ANCHOR ID:** `S09:A011`; occurrence #11, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “After a swap, check the new value at the same position.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 09, sentence 011 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Circle current source index to show it must be revisited after swap; no actual swap.
- **CENTER-STAGE HERO:** home(x)=x−1 equation x570..1425 y350..570; master array x350..1546 y595..720, indexes outside — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** Do not show actual completed swaps, final placed array, first mismatch, or concrete answer. Bound n+1 is a proof, not a solved output.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Prior authorized statements and source array/membership/bound persist in stable home; derived future outcome remains hidden.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `RoughLine`, `ChalkText`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; Do not show actual completed swaps, final placed array, first mismatch, or concrete answer. Bound n+1 is a proof, not a solved output.
- **COLLISION CHECK:** Active zone `array x350..1546 y585..830`; supports `x235..770 y740..905` + `home(x)=x−1 x570..1440 y330..565`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S09:A012 · `It may need a different home.`

- **ANCHOR ID:** `S09:A012`; occurrence #12, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “It may need a different home.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 09, sentence 012 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Focus possibility of newly arrived value needing a different home; no actual pointer advancement.
- **CENTER-STAGE HERO:** home(x)=x−1 equation x570..1425 y350..570; master array x350..1546 y595..720, indexes outside — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** Do not show actual completed swaps, final placed array, first mismatch, or concrete answer. Bound n+1 is a proof, not a solved output.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Prior authorized statements and source array/membership/bound persist in stable home; derived future outcome remains hidden.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `RoughLine`, `ChalkText`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; Do not show actual completed swaps, final placed array, first mismatch, or concrete answer. Bound n+1 is a proof, not a solved output.
- **COLLISION CHECK:** Active zone `array x350..1546 y585..830`; supports `x235..770 y740..905` + `home(x)=x−1 x570..1440 y330..565`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S09:A013 · `But if the destination already holds the same number, stop … otherwise duplicates could keep us swapping forever.`

- **ANCHOR ID:** `S09:A013`; occurrence #13, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “But if the destination already holds the same number, stop … otherwise duplicates could keep us swapping forever.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 09, sentence 013 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** “destination already holds the same number” → Explain equality guard before stop; “stop” → Block duplicate swap (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Focus duplicate-home equality guard `nums[home] == x` and blocked swap; no new testcase.
- **CENTER-STAGE HERO:** home(x)=x−1 equation x570..1425 y350..570; master array x350..1546 y595..720, indexes outside — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** Do not show actual completed swaps, final placed array, first mismatch, or concrete answer. Bound n+1 is a proof, not a solved output.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Prior authorized statements and source array/membership/bound persist in stable home; derived future outcome remains hidden.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `RoughLine`, `ChalkText`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; Do not show actual completed swaps, final placed array, first mismatch, or concrete answer. Bound n+1 is a proof, not a solved output.
- **COLLISION CHECK:** Active zone `array x350..1546 y585..830`; supports `x235..770 y740..905` + `home(x)=x−1 x570..1440 y330..565`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S09:A014 · `Negative values, zero, and values larger than n have no useful home here … so skip them.`

- **ANCHOR ID:** `S09:A014`; occurrence #14, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Negative values, zero, and values larger than n have no useful home here … so skip them.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 09, sentence 014 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Show invalid/zero/>n as three guard categories beside one abstract `[1,n]` range.
- **CENTER-STAGE HERO:** home(x)=x−1 equation x570..1425 y350..570; master array x350..1546 y595..720, indexes outside — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** Do not show actual completed swaps, final placed array, first mismatch, or concrete answer. Bound n+1 is a proof, not a solved output.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Prior authorized statements and source array/membership/bound persist in stable home; derived future outcome remains hidden.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `RoughLine`, `ChalkText`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; Do not show actual completed swaps, final placed array, first mismatch, or concrete answer. Bound n+1 is a proof, not a solved output.
- **COLLISION CHECK:** Active zone `array x350..1546 y585..830`; supports `x235..770 y740..905` + `home(x)=x−1 x570..1440 y330..565`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S09:A015 · `Once placement is complete, scan from the left.`

- **ANCHOR ID:** `S09:A015`; occurrence #15, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Once placement is complete, scan from the left.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 09, sentence 015 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Reveal scan-to-find-mismatch concept, no scan execution.
- **CENTER-STAGE HERO:** home(x)=x−1 equation x570..1425 y350..570; master array x350..1546 y595..720, indexes outside — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** Do not show actual completed swaps, final placed array, first mismatch, or concrete answer. Bound n+1 is a proof, not a solved output.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Prior authorized statements and source array/membership/bound persist in stable home; derived future outcome remains hidden.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `RoughLine`, `ChalkText`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; Do not show actual completed swaps, final placed array, first mismatch, or concrete answer. Bound n+1 is a proof, not a solved output.
- **COLLISION CHECK:** Active zone `array x350..1546 y585..830`; supports `x235..770 y740..905` + `home(x)=x−1 x570..1440 y330..565`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S09:A016 · `The first position that does not hold index plus one tells us the smallest missing positive.`

- **ANCHOR ID:** `S09:A016`; occurrence #16, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “The first position that does not hold index plus one tells us the smallest missing positive.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 09, sentence 016 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** “does not hold index plus one” → Explain mismatch test; “smallest missing positive” → Reveal general selection rule only (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Write expected=`i+1` and first mismatch rule; no final output.
- **CENTER-STAGE HERO:** home(x)=x−1 equation x570..1425 y350..570; master array x350..1546 y595..720, indexes outside — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** Do not show actual completed swaps, final placed array, first mismatch, or concrete answer. Bound n+1 is a proof, not a solved output.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Prior authorized statements and source array/membership/bound persist in stable home; derived future outcome remains hidden.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `RoughLine`, `ChalkText`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; Do not show actual completed swaps, final placed array, first mismatch, or concrete answer. Bound n+1 is a proof, not a solved output.
- **COLLISION CHECK:** Active zone `array x350..1546 y585..830`; supports `x235..770 y740..905` + `home(x)=x−1 x570..1440 y330..565`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S09:A017 · `Let's trace the actual swaps.`

- **ANCHOR ID:** `S09:A017`; occurrence #17, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Let's trace the actual swaps.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 09, sentence 017 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Clear conceptual pointer arrows; preserve original master input for next trace reset.
- **CENTER-STAGE HERO:** home(x)=x−1 equation x570..1425 y350..570; master array x350..1546 y595..720, indexes outside — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** Do not show actual completed swaps, final placed array, first mismatch, or concrete answer. Bound n+1 is a proof, not a solved output.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Prior authorized statements and source array/membership/bound persist in stable home; derived future outcome remains hidden.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `RoughLine`, `ChalkText`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; Do not show actual completed swaps, final placed array, first mismatch, or concrete answer. Bound n+1 is a proof, not a solved output.
- **COLLISION CHECK:** Active zone `array x350..1546 y585..830`; supports `x235..770 y740..905` + `home(x)=x−1 x570..1440 y330..565`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

## 3. Exit contract and critical visual states

- **ENTRY:** Before any phrase, reserve geometry internally but render future values/invariants/answer hidden.
- **FIRST IMPORTANT STATE:** First concept/input at first matching spoken anchor.
- **FIRST DECISION / QUERY:** First narrated comparison/probe/guard; source remains stable.
- **FIRST MUTATION:** Only at a verified mutation event for TRACE; N/A for purely conceptual/code scenes.
- **MOST COMPLEX STATE:** At the most crowded meaning, slot labels, pointer lanes, variable/calc and auxiliary set have fixed nonoverlapping spatial ownership.
- **FINAL STATE:** Only narrated conclusions exist, with persistent source truth.
- **TRANSITION OUT:** Clear transient arrows and current word highlight; preserve source identity when it makes next scene easier.

## 4. Scene-local verification and unresolved gates

- **Anchors audited:** 17 source-ordered phrases with non-overlapping source occurrence; audit file `Scene09_Audit.md`.
- **Trace events audited:** 0; exact machine event IDs listed above; none assigned in non-trace scene.
- **No unverified component APIs:** all names/props verified against GitHub `main` source; check file SHAs in master handoff if upstream changes.
- **Layout status:** specification geometry checked numerically; screenshot collision test is NOT POSSIBLE before Remotion implementation, so final visual signoff remains open.
- **Audio/sync:** pending; `Wxxxx`, FPS, exact frame ranges, glyph draws and pause classifications are NOT asserted.
- **Handoff gate:** this is a **PRE-AUDIO SEMANTIC PLAN**, not an approved post-audio frame plan. Antigravity must bind W IDs from real MP3 + validated sync and audit critical frames before implementation signoff.
