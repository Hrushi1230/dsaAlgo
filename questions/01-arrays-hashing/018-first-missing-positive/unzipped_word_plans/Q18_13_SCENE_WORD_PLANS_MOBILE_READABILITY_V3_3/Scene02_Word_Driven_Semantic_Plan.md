# Q18 · Scene 02 — Understand the Question + Brute Force Idea

**SCENE:** 02 / 13
**QUESTION:** Q18 First Missing Positive · LeetCode 41 · Arrays & Hashing
**BEAT TYPE:** UNDERSTAND + BRUTE IDEA
**SCRIPT SOURCE:** `08_FINAL_ELEVENLABS_NARRATION.md`, Phase-08 restarted approved wording (SHA256 in handoff)
**TRACE SOURCE:** `05_VERIFIED_TRACES.md` + `05_TRACE_MACHINE_CHECKED.json` from restarted phase ZIP
**AUDIO FILE:** PENDING FINAL AUDIO
**SYNC FILE:** PENDING FINAL AUDIO
**FPS:** PENDING FINAL AUDIO
**TOTAL FRAMES:** PENDING FINAL AUDIO
**PEDAGOGICAL GOAL:** Make task precise and justify candidate-order brute search without executing it.
**TRACE STEP IDS:** N/A — non-trace, no algorithm execution
**DATA STRUCTURE:** array + fixed slots
**PRIMARY HERO:** ArrayTrackV2: slot start x350,y340, 8×132×128 with 20 gaps, total width1196; indices y292–330
**SUPPORT LEFT:** objective x180..790 y650..800
**SUPPORT RIGHT:** constraints x1120..1740 y650..825
**TRACE PRIMARY STRUCTURE ZONE:** N/A; non-trace geometry described above
**TRACE VARIABLE STATE RAIL:** N/A
**TRACE LIVE CALCULATION STAGE:** N/A
**TRACE AUXILIARY STRUCTURE ZONE:** N/A
**TRACE ANSWER / RESULT ZONE:** N/A
**REUSE:** ArrayTrackV2, ChalkText, SceneEdgeTitle, RoughLine; Captions after exact sync
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
- **Exact geometry ownership:** primary `ArrayTrackV2: slot start x350,y340, 8×132×128 with 20 gaps, total width1196; indices y292–330`; left `objective x180..790 y650..800`; right `constraints x1120..1740 y650..825`; active structure `x350..1546 y285..575`; variables `candidate x260..770 y655..825`; live decision `query explanation x825..1520 y650..810`; auxiliary `N/A`; answer `hidden throughout`.
- **Layout clearance check:** title x80..1850 y90..180; array no overlap with lower chalk labels. Optical positions are precise design coordinates but NOT a claim that Remotion has been screenshot-tested. Preserve invisible space for future values so no shift occurs when revealed.
- **Causal order:** one primary teaching motion at a time, optionally one direct supporting reaction. All values/answers derive from verified source. Suppress any state not yet spoken.
- **Hold:** only if actual later sync indicates real pause; otherwise no fabricated hold. No incidental camera zoom or bounce.

### Verified kit/API ledger

| Kit component | Verified repository path | Actual API / state intent | Role / enter / persist / cleanup | Decision |
|---|---|---|---|---|
| `ArrayTrackV2` | `kit/components/array/ArrayTrackV2.tsx` | `elements`, `slotWidth`, `slotHeight`, `gap`, `maxWidth`, `showIndices`, `indexPlacement`, `pointers`, `swap`, `highlightedIndices`, `style` | Use fixed slot shells and stable index labels; pointers/semantic states configured from approved trace; enter on its exact speech phrase; persist through relevant causal beat; clear transient focus at next beat | REUSE |
| `ChalkText` | `kit/components/ChalkText.tsx` | `children`, `startFrame`, `charFrames?`, `fontSize?`, `color?`, `font?`, `cursor?`, `style?`; frame props are PENDING SYNC | Write concept, variable, code or conclusion directly on the board using shared chalk typography; enter on its exact speech phrase; persist through relevant causal beat; clear transient focus at next beat | REUSE |
| `SceneEdgeTitle` | `kit/components/SceneEdgeTitle.tsx` | `title`, `subtitle?`, `category?`, `accentColor?`, `align?`, `top?`, `startFrame?`, `style?` | Small top-edge scene identity, never overlay the main teaching object; enter on its exact speech phrase; persist through relevant causal beat; clear transient focus at next beat | REUSE |
| `RoughLine` | `kit/components/RoughLine.tsx` | `shape:{kind:line\|arrow\|circle,...}`, `width`, `height`, `startFrame?`, `durationInFrames?`, `stroke?`, `seed?` — timing PENDING SYNC | Draw only currently narrated comparison/home relation or underline; enter on its exact speech phrase; persist through relevant causal beat; clear transient focus at next beat | REUSE |
| `Captions` | `kit/components/Captions.tsx` | `words:{word,start,end}[]`, `fps?`, `bottom?`, `fontSize?`, `maxWords?`, `maxWidth?` — POST SYNC ONLY | Post-sync exact word captions only; no fake words/time; enter on its exact speech phrase; persist through relevant causal beat; clear transient focus at next beat | REUSE post-audio |

## 2. Exact narration → semantic word-anchor plan

**Anchor identity:** `Snn:Axxx` is a *semantic* identity, not `Wxxxx`. Each spoken phrase is quoted exactly from the approved script in source order. No audio exists at this stage. Every trigger awaits the exact matching word span after final sync.

### S02:A001 · `We have an unsorted array of integers.`

- **ANCHOR ID:** `S02:A001`; occurrence #1, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “We have an unsorted array of integers.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 02, sentence 001 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Show single fixed eight-slot array track without values until the input is spoken.
- **CENTER-STAGE HERO:** ArrayTrackV2: slot start x350,y340, 8×132×128 with 20 gaps, total width1196; indices y292–330 — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Prior authorized statements and source array/membership/bound persist in stable home; derived future outcome remains hidden.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `ChalkText`, `SceneEdgeTitle`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **COLLISION CHECK:** Active zone `x350..1546 y285..575`; supports `candidate x260..770 y655..825` + `query explanation x825..1520 y650..810`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S02:A002 · `For this lesson, our one input is …`

- **ANCHOR ID:** `S02:A002`; occurrence #2, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “For this lesson, our one input is …” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 02, sentence 002 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Show a small INPUT label beside the center board; no new array or sample.
- **CENTER-STAGE HERO:** ArrayTrackV2: slot start x350,y340, 8×132×128 with 20 gaps, total width1196; indices y292–330 — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Prior authorized statements and source array/membership/bound persist in stable home; derived future outcome remains hidden.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `ChalkText`, `SceneEdgeTitle`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **COLLISION CHECK:** Active zone `x350..1546 y285..575`; supports `candidate x260..770 y655..825` + `query explanation x825..1520 y650..810`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S02:A003 · `[3, 4, -1, 1, 1, 10, 0, 2].`

- **ANCHOR ID:** `S02:A003`; occurrence #3, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “[3, 4, -1, 1, 1, 10, 0, 2].” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 02, sentence 003 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Populate exactly [3,4,-1,1,1,10,0,2] in fixed slots, index labels outside.
- **CENTER-STAGE HERO:** ArrayTrackV2: slot start x350,y340, 8×132×128 with 20 gaps, total width1196; indices y292–330 — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Prior authorized statements and source array/membership/bound persist in stable home; derived future outcome remains hidden.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `ChalkText`, `SceneEdgeTitle`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **COLLISION CHECK:** Active zone `x350..1546 y285..575`; supports `candidate x260..770 y655..825` + `query explanation x825..1520 y650..810`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S02:A004 · `We need the smallest positive integer missing from it.`

- **ANCHOR ID:** `S02:A004`; occurrence #4, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “We need the smallest positive integer missing from it.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 02, sentence 004 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Write goal: smallest missing positive integer, not the eventual numeric answer.
- **CENTER-STAGE HERO:** ArrayTrackV2: slot start x350,y340, 8×132×128 with 20 gaps, total width1196; indices y292–330 — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Prior authorized statements and source array/membership/bound persist in stable home; derived future outcome remains hidden.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `ChalkText`, `SceneEdgeTitle`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **COLLISION CHECK:** Active zone `x350..1546 y285..575`; supports `candidate x260..770 y655..825` + `query explanation x825..1520 y650..810`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S02:A005 · `Zero and negative values are not possible answers.`

- **ANCHOR ID:** `S02:A005`; occurrence #5, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Zero and negative values are not possible answers.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 02, sentence 005 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Dim -1 and 0 as ineligible *answers*; keep the input values readable and untouched.
- **CENTER-STAGE HERO:** ArrayTrackV2: slot start x350,y340, 8×132×128 with 20 gaps, total width1196; indices y292–330 — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Prior authorized statements and source array/membership/bound persist in stable home; derived future outcome remains hidden.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `ChalkText`, `SceneEdgeTitle`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **COLLISION CHECK:** Active zone `x350..1546 y285..575`; supports `candidate x260..770 y655..825` + `query explanation x825..1520 y650..810`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S02:A006 · `And the final solution must take linear time, with constant extra space.`

- **ANCHOR ID:** `S02:A006`; occurrence #6, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “And the final solution must take linear time, with constant extra space.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 02, sentence 006 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Write constraints: O(n) time and O(1) extra space as task conditions only.
- **CENTER-STAGE HERO:** ArrayTrackV2: slot start x350,y340, 8×132×128 with 20 gaps, total width1196; indices y292–330 — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Prior authorized statements and source array/membership/bound persist in stable home; derived future outcome remains hidden.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `ChalkText`, `SceneEdgeTitle`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **COLLISION CHECK:** Active zone `x350..1546 y285..575`; supports `candidate x260..770 y655..825` + `query explanation x825..1520 y650..810`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S02:A007 · `First, what is the simplest correct way?`

- **ANCHOR ID:** `S02:A007`; occurrence #7, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “First, what is the simplest correct way?” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 02, sentence 007 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Clear constraint chalk note; give candidate search the conceptual center.
- **CENTER-STAGE HERO:** ArrayTrackV2: slot start x350,y340, 8×132×128 with 20 gaps, total width1196; indices y292–330 — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Prior authorized statements and source array/membership/bound persist in stable home; derived future outcome remains hidden.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `ChalkText`, `SceneEdgeTitle`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **COLLISION CHECK:** Active zone `x350..1546 y285..575`; supports `candidate x260..770 y655..825` + `query explanation x825..1520 y650..810`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S02:A008 · `Start with candidate one.`

- **ANCHOR ID:** `S02:A008`; occurrence #8, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Start with candidate one.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 02, sentence 008 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Create candidate=1 as the first abstract search target, not a comparison execution.
- **CENTER-STAGE HERO:** ArrayTrackV2: slot start x350,y340, 8×132×128 with 20 gaps, total width1196; indices y292–330 — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Prior authorized statements and source array/membership/bound persist in stable home; derived future outcome remains hidden.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `ChalkText`, `SceneEdgeTitle`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **COLLISION CHECK:** Active zone `x350..1546 y285..575`; supports `candidate x260..770 y655..825` + `query explanation x825..1520 y650..810`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S02:A009 · `Search the array to see whether one is present.`

- **ANCHOR ID:** `S02:A009`; occurrence #9, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Search the array to see whether one is present.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 02, sentence 009 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Draw one potential query relation candidate→array, no individual lookups.
- **CENTER-STAGE HERO:** ArrayTrackV2: slot start x350,y340, 8×132×128 with 20 gaps, total width1196; indices y292–330 — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Prior authorized statements and source array/membership/bound persist in stable home; derived future outcome remains hidden.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `ChalkText`, `SceneEdgeTitle`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **COLLISION CHECK:** Active zone `x350..1546 y285..575`; supports `candidate x260..770 y655..825` + `query explanation x825..1520 y650..810`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S02:A010 · `If it is there, try two.`

- **ANCHOR ID:** `S02:A010`; occurrence #10, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “If it is there, try two.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 02, sentence 010 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Update the abstract candidate progression 1→2 only after spoken.
- **CENTER-STAGE HERO:** ArrayTrackV2: slot start x350,y340, 8×132×128 with 20 gaps, total width1196; indices y292–330 — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Prior authorized statements and source array/membership/bound persist in stable home; derived future outcome remains hidden.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `ChalkText`, `SceneEdgeTitle`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **COLLISION CHECK:** Active zone `x350..1546 y285..575`; supports `candidate x260..770 y655..825` + `query explanation x825..1520 y650..810`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S02:A011 · `Then three … always in increasing order.`

- **ANCHOR ID:** `S02:A011`; occurrence #11, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Then three … always in increasing order.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 02, sentence 011 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Extend the abstract progression to 3; no array pointer motion.
- **CENTER-STAGE HERO:** ArrayTrackV2: slot start x350,y340, 8×132×128 with 20 gaps, total width1196; indices y292–330 — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Prior authorized statements and source array/membership/bound persist in stable home; derived future outcome remains hidden.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `ChalkText`, `SceneEdgeTitle`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **COLLISION CHECK:** Active zone `x350..1546 y285..575`; supports `candidate x260..770 y655..825` + `query explanation x825..1520 y650..810`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S02:A012 · `The first candidate we cannot find must be the answer, because every smaller positive number was already found.`

- **ANCHOR ID:** `S02:A012`; occurrence #12, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “The first candidate we cannot find must be the answer, because every smaller positive number was already found.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 02, sentence 012 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Underline the first absent candidate principle, with all earlier candidates present; do not show result 5.
- **CENTER-STAGE HERO:** ArrayTrackV2: slot start x350,y340, 8×132×128 with 20 gaps, total width1196; indices y292–330 — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Prior authorized statements and source array/membership/bound persist in stable home; derived future outcome remains hidden.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `ChalkText`, `SceneEdgeTitle`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **COLLISION CHECK:** Active zone `x350..1546 y285..575`; supports `candidate x260..770 y655..825` + `query explanation x825..1520 y650..810`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S02:A013 · `Let's execute that method fully.`

- **ANCHOR ID:** `S02:A013`; occurrence #13, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Let's execute that method fully.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 02, sentence 013 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Focus unchanged input and fade abstract arrow for handoff to full brute trace.
- **CENTER-STAGE HERO:** ArrayTrackV2: slot start x350,y340, 8×132×128 with 20 gaps, total width1196; indices y292–330 — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Prior authorized statements and source array/membership/bound persist in stable home; derived future outcome remains hidden.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ArrayTrackV2`, `ChalkText`, `SceneEdgeTitle`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **COLLISION CHECK:** Active zone `x350..1546 y285..575`; supports `candidate x260..770 y655..825` + `query explanation x825..1520 y650..810`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

## 3. Exit contract and critical visual states

- **ENTRY:** Before any phrase, reserve geometry internally but render future values/invariants/answer hidden.
- **FIRST IMPORTANT STATE:** First concept/input at first matching spoken anchor.
- **FIRST DECISION / QUERY:** First narrated comparison/probe/guard; source remains stable.
- **FIRST MUTATION:** Only at a verified mutation event for TRACE; N/A for purely conceptual/code scenes.
- **MOST COMPLEX STATE:** At the most crowded meaning, slot labels, pointer lanes, variable/calc and auxiliary set have fixed nonoverlapping spatial ownership.
- **FINAL STATE:** Only narrated conclusions exist, with persistent source truth.
- **TRANSITION OUT:** Clear transient arrows and current word highlight; preserve source identity when it makes next scene easier.

## 4. Scene-local verification and unresolved gates

- **Anchors audited:** 13 source-ordered phrases with non-overlapping source occurrence; audit file `Scene02_Audit.md`.
- **Trace events audited:** 0; exact machine event IDs listed above; none assigned in non-trace scene.
- **No unverified component APIs:** all names/props verified against GitHub `main` source; check file SHAs in master handoff if upstream changes.
- **Layout status:** specification geometry checked numerically; screenshot collision test is NOT POSSIBLE before Remotion implementation, so final visual signoff remains open.
- **Audio/sync:** pending; `Wxxxx`, FPS, exact frame ranges, glyph draws and pause classifications are NOT asserted.
- **Handoff gate:** this is a **PRE-AUDIO SEMANTIC PLAN**, not an approved post-audio frame plan. Antigravity must bind W IDs from real MP3 + validated sync and audit critical frames before implementation signoff.
