# Q18 · Scene 04 — Brute Force Code: Why These Lines Exist

**SCENE:** 04 / 13
**QUESTION:** Q18 First Missing Positive · LeetCode 41 · Arrays & Hashing
**BEAT TYPE:** CODE · BRUTE
**SCRIPT SOURCE:** `08_FINAL_ELEVENLABS_NARRATION.md`, Phase-08 restarted approved wording (SHA256 in handoff)
**TRACE SOURCE:** `05_VERIFIED_TRACES.md` + `05_TRACE_MACHINE_CHECKED.json` from restarted phase ZIP
**AUDIO FILE:** PENDING FINAL AUDIO
**SYNC FILE:** PENDING FINAL AUDIO
**FPS:** PENDING FINAL AUDIO
**TOTAL FRAMES:** PENDING FINAL AUDIO
**PEDAGOGICAL GOAL:** Explain why each brute code line exists, briefly, without second trace.
**TRACE STEP IDS:** N/A — non-trace, no algorithm execution
**DATA STRUCTURE:** source-exact Python code
**PRIMARY HERO:** board-native code x215..1715 y225..850; monospace font 34 lineHeight53; 10 lines
**SUPPORT LEFT:** line/guard chalk callout x215..970 y845..920
**SUPPORT RIGHT:** N/A
**TRACE PRIMARY STRUCTURE ZONE:** N/A; non-trace geometry described above
**TRACE VARIABLE STATE RAIL:** N/A
**TRACE LIVE CALCULATION STAGE:** N/A
**TRACE AUXILIARY STRUCTURE ZONE:** N/A
**TRACE ANSWER / RESULT ZONE:** N/A
**REUSE:** ChalkText, RoughLine, SceneEdgeTitle; Captions after exact sync
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
- **Exact geometry ownership:** primary `board-native code x215..1715 y225..850; monospace font 34 lineHeight53; 10 lines`; left `line/guard chalk callout x215..970 y845..920`; right `N/A`; active structure `N/A`; variables `N/A`; live decision `code x215..1715 y225..850`; auxiliary `N/A`; answer `no input final numeral`.
- **Layout clearance check:** 10 lines ×53 =530 from y240..770; rationale below y820..914; captions y960..1040. Optical positions are precise design coordinates but NOT a claim that Remotion has been screenshot-tested. Preserve invisible space for future values so no shift occurs when revealed.
- **Causal order:** one primary teaching motion at a time, optionally one direct supporting reaction. All values/answers derive from verified source. Suppress any state not yet spoken.
- **Hold:** only if actual later sync indicates real pause; otherwise no fabricated hold. No incidental camera zoom or bounce.

### Verified kit/API ledger

| Kit component | Verified repository path | Actual API / state intent | Role / enter / persist / cleanup | Decision |
|---|---|---|---|---|
| `ChalkText` | `kit/components/ChalkText.tsx` | `children`, `startFrame`, `charFrames?`, `fontSize?`, `color?`, `font?`, `cursor?`, `style?`; frame props are PENDING SYNC | Write concept, variable, code or conclusion directly on the board using shared chalk typography; enter on its exact speech phrase; persist through relevant causal beat; clear transient focus at next beat | REUSE |
| `RoughLine` | `kit/components/RoughLine.tsx` | `shape:{kind:line\|arrow\|circle,...}`, `width`, `height`, `startFrame?`, `durationInFrames?`, `stroke?`, `seed?` — timing PENDING SYNC | Draw only currently narrated comparison/home relation or underline; enter on its exact speech phrase; persist through relevant causal beat; clear transient focus at next beat | REUSE |
| `SceneEdgeTitle` | `kit/components/SceneEdgeTitle.tsx` | `title`, `subtitle?`, `category?`, `accentColor?`, `align?`, `top?`, `startFrame?`, `style?` | Small top-edge scene identity, never overlay the main teaching object; enter on its exact speech phrase; persist through relevant causal beat; clear transient focus at next beat | REUSE |
| `Captions` | `kit/components/Captions.tsx` | `words:{word,start,end}[]`, `fps?`, `bottom?`, `fontSize?`, `maxWords?`, `maxWidth?` — POST SYNC ONLY | Post-sync exact word captions only; no fake words/time; enter on its exact speech phrase; persist through relevant causal beat; clear transient focus at next beat | REUSE post-audio |

### Exact verified Python target (not spoken as a second trace)

```python
candidate = 1
while True:
    found = False
    for value in nums:
        if value == candidate:
            found = True
            break
    if not found:
        return candidate
    candidate += 1
```

**Code reveal mapping:** line IDs below refer exactly to the literal source lines above. Unspoken punctuation/indentation are part of the authorized lexeme line; do not insert a separate audio pause for whitespace.

### Scene-specific semantic implementation contract

**Code mode:** `ChalkCodeEditorV2` exists but its current default creates a near-black IDE surface; **DO NOT USE UNCHANGED**. Render source-exact `CODE_LINES` directly with `ChalkText font="mono"`, font size per geometry, independently anchored phrases/lines; one approved code line appears at its first relevant spoken anchor; all later lines fully hidden. An optional rough underline follows active line, on transparent board.

**No invented typing timing:** `ChalkText` requires `startFrame` and accepts `charFrames`; keep the actual props unresolved until Antigravity maps exact phrases into final MP3/sync. Do not preselect characters-per-frame or spring durations. If a single sentence explains multiple connected syntax lines, sequence those reveals only inside that future speech window, keeping token order.

## 2. Exact narration → semantic word-anchor plan

**Anchor identity:** `Snn:Axxx` is a *semantic* identity, not `Wxxxx`. Each spoken phrase is quoted exactly from the approved script in source order. No audio exists at this stage. Every trigger awaits the exact matching word span after final sync.

### S04:A001 · `Start candidate at one … because our answer must be positive, and we need the smallest.`

- **ANCHOR ID:** `S04:A001`; occurrence #1, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Start candidate at one … because our answer must be positive, and we need the smallest.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 04, sentence 001 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Reveal candidate = 1 and annotate why positive starts at 1. **Code line reveal/attention:** L1: `candidate = 1`
- **CENTER-STAGE HERO:** board-native code x215..1715 y225..850; monospace font 34 lineHeight53; 10 lines — current attention: source-exact chalk code hero.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Code lines revealed so far=[1]; unrevealed lines remain fully invisible; source code is untouched and no execution state is invented.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ChalkText`, `RoughLine`, `SceneEdgeTitle`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **COLLISION CHECK:** Active zone `N/A`; supports `N/A` + `code x215..1715 y225..850`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S04:A002 · `The outer loop keeps trying candidates, one after another.`

- **ANCHOR ID:** `S04:A002`; occurrence #2, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “The outer loop keeps trying candidates, one after another.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 04, sentence 002 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Reveal outer `while True:` as increasing-candidate search; future body hidden. **Code line reveal/attention:** L2: `while True:`
- **CENTER-STAGE HERO:** board-native code x215..1715 y225..850; monospace font 34 lineHeight53; 10 lines — current attention: source-exact chalk code hero.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Code lines revealed so far=[1, 2]; unrevealed lines remain fully invisible; source code is untouched and no execution state is invented.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ChalkText`, `RoughLine`, `SceneEdgeTitle`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **COLLISION CHECK:** Active zone `N/A`; supports `N/A` + `code x215..1715 y225..850`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S04:A003 · `For each new candidate, reset found to false.`

- **ANCHOR ID:** `S04:A003`; occurrence #3, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “For each new candidate, reset found to false.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 04, sentence 003 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Type `found = False` inside outer loop when reset is spoken. **Code line reveal/attention:** L3: `    found = False`
- **CENTER-STAGE HERO:** board-native code x215..1715 y225..850; monospace font 34 lineHeight53; 10 lines — current attention: source-exact chalk code hero.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Code lines revealed so far=[1, 2, 3]; unrevealed lines remain fully invisible; source code is untouched and no execution state is invented.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ChalkText`, `RoughLine`, `SceneEdgeTitle`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **COLLISION CHECK:** Active zone `N/A`; supports `N/A` + `code x215..1715 y225..850`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S04:A004 · `An earlier candidate's result must not carry over.`

- **ANCHOR ID:** `S04:A004`; occurrence #4, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “An earlier candidate's result must not carry over.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 04, sentence 004 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Emphasize that reset prevents carrying last candidate result; no trace. **Code line reveal/attention:** No new code line; focus last spoken relevant line or settled code.
- **CENTER-STAGE HERO:** board-native code x215..1715 y225..850; monospace font 34 lineHeight53; 10 lines — current attention: source-exact chalk code hero.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Code lines revealed so far=[1, 2, 3]; unrevealed lines remain fully invisible; source code is untouched and no execution state is invented.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ChalkText`, `RoughLine`, `SceneEdgeTitle`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **COLLISION CHECK:** Active zone `N/A`; supports `N/A` + `code x215..1715 y225..850`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S04:A005 · `The inner loop searches the array for that candidate.`

- **ANCHOR ID:** `S04:A005`; occurrence #5, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “The inner loop searches the array for that candidate.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 04, sentence 005 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Reveal `for value in nums:` inside loop, active iteration line only. **Code line reveal/attention:** L4: `    for value in nums:`
- **CENTER-STAGE HERO:** board-native code x215..1715 y225..850; monospace font 34 lineHeight53; 10 lines — current attention: source-exact chalk code hero.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Code lines revealed so far=[1, 2, 3, 4]; unrevealed lines remain fully invisible; source code is untouched and no execution state is invented.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ChalkText`, `RoughLine`, `SceneEdgeTitle`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **COLLISION CHECK:** Active zone `N/A`; supports `N/A` + `code x215..1715 y225..850`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S04:A006 · `If a value matches, set found to true … and break.`

- **ANCHOR ID:** `S04:A006`; occurrence #6, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “If a value matches, set found to true … and break.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 04, sentence 006 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** “If a value matches” → Reveal comparison condition; “set found to true” → Reveal found=True; “and break” → Reveal break (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Reveal comparison, `found=True`, `break` block in source order at the spoken composite rule. **Code line reveal/attention:** L5: `        if value == candidate:`; L6: `            found = True`; L7: `            break`
- **CENTER-STAGE HERO:** board-native code x215..1715 y225..850; monospace font 34 lineHeight53; 10 lines — current attention: source-exact chalk code hero.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Code lines revealed so far=[1, 2, 3, 4, 5, 6, 7]; unrevealed lines remain fully invisible; source code is untouched and no execution state is invented.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ChalkText`, `RoughLine`, `SceneEdgeTitle`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **COLLISION CHECK:** Active zone `N/A`; supports `N/A` + `code x215..1715 y225..850`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S04:A007 · `More checks cannot change that result.`

- **ANCHOR ID:** `S04:A007`; occurrence #7, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “More checks cannot change that result.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 04, sentence 007 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Focus `break` only: once found, no more comparisons are needed. **Code line reveal/attention:** L7: `            break`
- **CENTER-STAGE HERO:** board-native code x215..1715 y225..850; monospace font 34 lineHeight53; 10 lines — current attention: source-exact chalk code hero.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Code lines revealed so far=[1, 2, 3, 4, 5, 6, 7]; unrevealed lines remain fully invisible; source code is untouched and no execution state is invented.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ChalkText`, `RoughLine`, `SceneEdgeTitle`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **COLLISION CHECK:** Active zone `N/A`; supports `N/A` + `code x215..1715 y225..850`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S04:A008 · `After the search, if found is still false … return the candidate.`

- **ANCHOR ID:** `S04:A008`; occurrence #8, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “After the search, if found is still false … return the candidate.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 04, sentence 008 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** “if found is still false” → Reveal if-not-found guard; “return the candidate” → Reveal return candidate (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Reveal `if not found:` and `return candidate` in sequence; do not reveal eventual numeric 5. **Code line reveal/attention:** L8: `    if not found:`; L9: `        return candidate`
- **CENTER-STAGE HERO:** board-native code x215..1715 y225..850; monospace font 34 lineHeight53; 10 lines — current attention: source-exact chalk code hero.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Code lines revealed so far=[1, 2, 3, 4, 5, 6, 7, 8, 9]; unrevealed lines remain fully invisible; source code is untouched and no execution state is invented.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ChalkText`, `RoughLine`, `SceneEdgeTitle`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **COLLISION CHECK:** Active zone `N/A`; supports `N/A` + `code x215..1715 y225..850`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S04:A009 · `That's the first number missing.`

- **ANCHOR ID:** `S04:A009`; occurrence #9, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “That's the first number missing.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 04, sentence 009 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Focus return condition: first missing candidate. **Code line reveal/attention:** No new code line; focus last spoken relevant line or settled code.
- **CENTER-STAGE HERO:** board-native code x215..1715 y225..850; monospace font 34 lineHeight53; 10 lines — current attention: source-exact chalk code hero.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Code lines revealed so far=[1, 2, 3, 4, 5, 6, 7, 8, 9]; unrevealed lines remain fully invisible; source code is untouched and no execution state is invented.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ChalkText`, `RoughLine`, `SceneEdgeTitle`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **COLLISION CHECK:** Active zone `N/A`; supports `N/A` + `code x215..1715 y225..850`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S04:A010 · `Otherwise, increase the candidate by one and repeat.`

- **ANCHOR ID:** `S04:A010`; occurrence #10, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Otherwise, increase the candidate by one and repeat.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 04, sentence 010 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Reveal `candidate += 1` and loop back relation (no re-trace). **Code line reveal/attention:** L10: `    candidate += 1`
- **CENTER-STAGE HERO:** board-native code x215..1715 y225..850; monospace font 34 lineHeight53; 10 lines — current attention: source-exact chalk code hero.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Code lines revealed so far=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; unrevealed lines remain fully invisible; source code is untouched and no execution state is invented.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ChalkText`, `RoughLine`, `SceneEdgeTitle`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **COLLISION CHECK:** Active zone `N/A`; supports `N/A` + `code x215..1715 y225..850`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S04:A011 · `Correct … but the repeated scans cost time.`

- **ANCHOR ID:** `S04:A011`; occurrence #11, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Correct … but the repeated scans cost time.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 04, sentence 011 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Keep complete code visible; underline nested repeated scan as the limitation bridge. **Code line reveal/attention:** No new code line; focus last spoken relevant line or settled code.
- **CENTER-STAGE HERO:** board-native code x215..1715 y225..850; monospace font 34 lineHeight53; 10 lines — current attention: source-exact chalk code hero.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** Code lines revealed so far=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; unrevealed lines remain fully invisible; source code is untouched and no execution state is invented.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `ChalkText`, `RoughLine`, `SceneEdgeTitle`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **COLLISION CHECK:** Active zone `N/A`; supports `N/A` + `code x215..1715 y225..850`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

## 3. Exit contract and critical visual states

- **ENTRY:** Before any phrase, reserve geometry internally but render future values/invariants/answer hidden.
- **FIRST IMPORTANT STATE:** First concept/input at first matching spoken anchor.
- **FIRST DECISION / QUERY:** First narrated comparison/probe/guard; source remains stable.
- **FIRST MUTATION:** Only at a verified mutation event for TRACE; N/A for purely conceptual/code scenes.
- **MOST COMPLEX STATE:** At the most crowded meaning, slot labels, pointer lanes, variable/calc and auxiliary set have fixed nonoverlapping spatial ownership.
- **FINAL STATE:** Only narrated conclusions exist, with persistent source truth.
- **TRANSITION OUT:** Clear transient arrows and current word highlight; preserve source identity when it makes next scene easier.

## 4. Scene-local verification and unresolved gates

- **Anchors audited:** 11 source-ordered phrases with non-overlapping source occurrence; audit file `Scene04_Audit.md`.
- **Trace events audited:** 0; exact machine event IDs listed above; none assigned in non-trace scene.
- **No unverified component APIs:** all names/props verified against GitHub `main` source; check file SHAs in master handoff if upstream changes.
- **Layout status:** specification geometry checked numerically; screenshot collision test is NOT POSSIBLE before Remotion implementation, so final visual signoff remains open.
- **Audio/sync:** pending; `Wxxxx`, FPS, exact frame ranges, glyph draws and pause classifications are NOT asserted.
- **Handoff gate:** this is a **PRE-AUDIO SEMANTIC PLAN**, not an approved post-audio frame plan. Antigravity must bind W IDs from real MP3 + validated sync and audit critical frames before implementation signoff.
