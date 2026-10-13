# Q18 · Scene 13 — Minimal Recap + Roadmap

**SCENE:** 13 / 13
**QUESTION:** Q18 First Missing Positive · LeetCode 41 · Arrays & Hashing
**BEAT TYPE:** RECAP + ROADMAP
**SCRIPT SOURCE:** `08_FINAL_ELEVENLABS_NARRATION.md`, Phase-08 restarted approved wording (SHA256 in handoff)
**TRACE SOURCE:** `05_VERIFIED_TRACES.md` + `05_TRACE_MACHINE_CHECKED.json` from restarted phase ZIP
**AUDIO FILE:** PENDING FINAL AUDIO
**SYNC FILE:** PENDING FINAL AUDIO
**FPS:** PENDING FINAL AUDIO
**TOTAL FRAMES:** PENDING FINAL AUDIO
**PEDAGOGICAL GOAL:** Minimal method progression, Q18 completion, then Q19 handoff.
**TRACE STEP IDS:** N/A — non-trace, no algorithm execution
**DATA STRUCTURE:** roadmap / conceptual chalk
**PRIMARY HERO:** recap chalk rule x300..1620 y350..740 then full-screen roadmap x0..1920 y0..1080
**SUPPORT LEFT:** progression steps x240..800 y375..745 before roadmap
**SUPPORT RIGHT:** final rule x835..1590 y375..740 before roadmap
**TRACE PRIMARY STRUCTURE ZONE:** N/A; non-trace geometry described above
**TRACE VARIABLE STATE RAIL:** N/A
**TRACE LIVE CALCULATION STAGE:** N/A
**TRACE AUXILIARY STRUCTURE ZONE:** N/A
**TRACE ANSWER / RESULT ZONE:** N/A
**REUSE:** MasterRoadmapV2, ChalkText, RoughLine; Captions after exact sync
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
- **Exact geometry ownership:** primary `recap chalk rule x300..1620 y350..740 then full-screen roadmap x0..1920 y0..1080`; left `progression steps x240..800 y375..745 before roadmap`; right `final rule x835..1590 y375..740 before roadmap`; active structure `N/A`; variables `N/A`; live decision `N/A`; auxiliary `N/A`; answer `roadmap Q18 complete, Q19 up next only on spoken turn`.
- **Layout clearance check:** never superimpose custom recap chalk over roadmap UI simultaneously; handoff clear. Optical positions are precise design coordinates but NOT a claim that Remotion has been screenshot-tested. Preserve invisible space for future values so no shift occurs when revealed.
- **Causal order:** one primary teaching motion at a time, optionally one direct supporting reaction. All values/answers derive from verified source. Suppress any state not yet spoken.
- **Hold:** only if actual later sync indicates real pause; otherwise no fabricated hold. No incidental camera zoom or bounce.

### Verified kit/API ledger

| Kit component | Verified repository path | Actual API / state intent | Role / enter / persist / cleanup | Decision |
|---|---|---|---|---|
| `MasterRoadmapV2` | `kit/components/MasterRoadmapV2.tsx` | `completedCount?`, `completedGlobalNums?`, `activeGlobalNum?`, `upNextGlobalNum?`, `activePatternId?`, `spotlightRow?`, `style?` | Full-screen immutable course dashboard ONLY for roadmap state; enter on its exact speech phrase; persist through relevant causal beat; clear transient focus at next beat | REUSE |
| `ChalkText` | `kit/components/ChalkText.tsx` | `children`, `startFrame`, `charFrames?`, `fontSize?`, `color?`, `font?`, `cursor?`, `style?`; frame props are PENDING SYNC | Write concept, variable, code or conclusion directly on the board using shared chalk typography; enter on its exact speech phrase; persist through relevant causal beat; clear transient focus at next beat | REUSE |
| `RoughLine` | `kit/components/RoughLine.tsx` | `shape:{kind:line\|arrow\|circle,...}`, `width`, `height`, `startFrame?`, `durationInFrames?`, `stroke?`, `seed?` — timing PENDING SYNC | Draw only currently narrated comparison/home relation or underline; enter on its exact speech phrase; persist through relevant causal beat; clear transient focus at next beat | REUSE |
| `Captions` | `kit/components/Captions.tsx` | `words:{word,start,end}[]`, `fps?`, `bottom?`, `fontSize?`, `maxWords?`, `maxWidth?` — POST SYNC ONLY | Post-sync exact word captions only; no fake words/time; enter on its exact speech phrase; persist through relevant causal beat; clear transient focus at next beat | REUSE post-audio |

### Scene-specific semantic implementation contract

**Roadmap:** use `MasterRoadmapV2` 1920×1080 without shrinking into a custom panel. On Q18 completion use `completedCount=18`, `completedGlobalNums=[1..18]`; Q19 next uses `activeGlobalNum=19`, `upNextGlobalNum=19` as appropriate to the current component semantics after checking output. No Q19 completion claim.

## 2. Exact narration → semantic word-anchor plan

**Anchor identity:** `Snn:Axxx` is a *semantic* identity, not `Wxxxx`. Each spoken phrase is quoted exactly from the approved script in source order. No audio exists at this stage. Every trigger awaits the exact matching word span after final sync.

### S13:A001 · `Brute force repeats searches.`

- **ANCHOR ID:** `S13:A001`; occurrence #1, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Brute force repeats searches.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 13, sentence 001 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Reveal `brute → repeat searches` only.
- **CENTER-STAGE HERO:** recap chalk rule x300..1620 y350..740 then full-screen roadmap x0..1920 y0..1080 — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** Do not mark Q18 complete / display progress18 or Q19 as active until those phrases are spoken.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** recap retained until spoken completion; roadmap transitions to completed 1..18 only at Q18 complete; Q19 up-next but not completed.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `MasterRoadmapV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; Do not mark Q18 complete / display progress18 or Q19 as active until those phrases are spoken.
- **COLLISION CHECK:** Active zone `N/A`; supports `N/A` + `N/A`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S13:A002 · `HashSet fixes time, but uses extra memory.`

- **ANCHOR ID:** `S13:A002`; occurrence #2, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “HashSet fixes time, but uses extra memory.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 13, sentence 002 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Add `HashSet → time improves, memory grows` after it is spoken.
- **CENTER-STAGE HERO:** recap chalk rule x300..1620 y350..740 then full-screen roadmap x0..1920 y0..1080 — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** Do not mark Q18 complete / display progress18 or Q19 as active until those phrases are spoken.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** recap retained until spoken completion; roadmap transitions to completed 1..18 only at Q18 complete; Q19 up-next but not completed.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `MasterRoadmapV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; Do not mark Q18 complete / display progress18 or Q19 as active until those phrases are spoken.
- **COLLISION CHECK:** Active zone `N/A`; supports `N/A` + `N/A`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S13:A003 · `In-place placement uses the array itself … value x belongs at index x minus one.`

- **ANCHOR ID:** `S13:A003`; occurrence #3, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “In-place placement uses the array itself … value x belongs at index x minus one.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 13, sentence 003 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Add `in-place → home(x)=x−1` after it is spoken.
- **CENTER-STAGE HERO:** recap chalk rule x300..1620 y350..740 then full-screen roadmap x0..1920 y0..1080 — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** Do not mark Q18 complete / display progress18 or Q19 as active until those phrases are spoken.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** recap retained until spoken completion; roadmap transitions to completed 1..18 only at Q18 complete; Q19 up-next but not completed.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `MasterRoadmapV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; Do not mark Q18 complete / display progress18 or Q19 as active until those phrases are spoken.
- **COLLISION CHECK:** Active zone `N/A`; supports `N/A` + `N/A`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S13:A004 · `The first mismatch gives the answer.`

- **ANCHOR ID:** `S13:A004`; occurrence #4, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “The first mismatch gives the answer.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 13, sentence 004 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Add `first mismatch` as outcome principle without re-running input.
- **CENTER-STAGE HERO:** recap chalk rule x300..1620 y350..740 then full-screen roadmap x0..1920 y0..1080 — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** Do not mark Q18 complete / display progress18 or Q19 as active until those phrases are spoken.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** recap retained until spoken completion; roadmap transitions to completed 1..18 only at Q18 complete; Q19 up-next but not completed.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `MasterRoadmapV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; Do not mark Q18 complete / display progress18 or Q19 as active until those phrases are spoken.
- **COLLISION CHECK:** Active zone `N/A`; supports `N/A` + `N/A`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S13:A005 · `Question Eighteen … complete.`

- **ANCHOR ID:** `S13:A005`; occurrence #5, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Question Eighteen … complete.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 13, sentence 005 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Handoff to verified full-size roadmap marking Q18 complete.
- **CENTER-STAGE HERO:** recap chalk rule x300..1620 y350..740 then full-screen roadmap x0..1920 y0..1080 — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** Do not mark Q18 complete / display progress18 or Q19 as active until those phrases are spoken.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** recap retained until spoken completion; roadmap transitions to completed 1..18 only at Q18 complete; Q19 up-next but not completed.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `MasterRoadmapV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; Do not mark Q18 complete / display progress18 or Q19 as active until those phrases are spoken.
- **COLLISION CHECK:** Active zone `N/A`; supports `N/A` + `N/A`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S13:A006 · `Eighteen out of two hundred and twenty-seven.`

- **ANCHOR ID:** `S13:A006`; occurrence #6, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Eighteen out of two hundred and twenty-seven.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 13, sentence 006 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Update completedCount to 18/227 on the same roadmap composition.
- **CENTER-STAGE HERO:** recap chalk rule x300..1620 y350..740 then full-screen roadmap x0..1920 y0..1080 — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** Do not mark Q18 complete / display progress18 or Q19 as active until those phrases are spoken.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** recap retained until spoken completion; roadmap transitions to completed 1..18 only at Q18 complete; Q19 up-next but not completed.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `MasterRoadmapV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; Do not mark Q18 complete / display progress18 or Q19 as active until those phrases are spoken.
- **COLLISION CHECK:** Active zone `N/A`; supports `N/A` + `N/A`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S13:A007 · `Arrays and Hashing is complete.`

- **ANCHOR ID:** `S13:A007`; occurrence #7, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Arrays and Hashing is complete.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 13, sentence 007 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Confirm Pattern 01 Arrays & Hashing complete with Q18 done.
- **CENTER-STAGE HERO:** recap chalk rule x300..1620 y350..740 then full-screen roadmap x0..1920 y0..1080 — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** Do not mark Q18 complete / display progress18 or Q19 as active until those phrases are spoken.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** recap retained until spoken completion; roadmap transitions to completed 1..18 only at Q18 complete; Q19 up-next but not completed.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `MasterRoadmapV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; Do not mark Q18 complete / display progress18 or Q19 as active until those phrases are spoken.
- **COLLISION CHECK:** Active zone `N/A`; supports `N/A` + `N/A`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S13:A008 · `Next, Question Nineteen … Valid Palindrome, in Two Pointers.`

- **ANCHOR ID:** `S13:A008`; occurrence #8, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Next, Question Nineteen … Valid Palindrome, in Two Pointers.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 13, sentence 008 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Activate/up-next global 19 Valid Palindrome under Two Pointers; do not mark Q19 done.
- **CENTER-STAGE HERO:** recap chalk rule x300..1620 y350..740 then full-screen roadmap x0..1920 y0..1080 — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** Do not mark Q18 complete / display progress18 or Q19 as active until those phrases are spoken.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** recap retained until spoken completion; roadmap transitions to completed 1..18 only at Q18 complete; Q19 up-next but not completed.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `MasterRoadmapV2`, `ChalkText`, `RoughLine`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; Do not mark Q18 complete / display progress18 or Q19 as active until those phrases are spoken.
- **COLLISION CHECK:** Active zone `N/A`; supports `N/A` + `N/A`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

## 3. Exit contract and critical visual states

- **ENTRY:** Before any phrase, reserve geometry internally but render future values/invariants/answer hidden.
- **FIRST IMPORTANT STATE:** First concept/input at first matching spoken anchor.
- **FIRST DECISION / QUERY:** First narrated comparison/probe/guard; source remains stable.
- **FIRST MUTATION:** Only at a verified mutation event for TRACE; N/A for purely conceptual/code scenes.
- **MOST COMPLEX STATE:** At the most crowded meaning, slot labels, pointer lanes, variable/calc and auxiliary set have fixed nonoverlapping spatial ownership.
- **FINAL STATE:** Only narrated conclusions exist, with persistent source truth.
- **TRANSITION OUT:** Clear transient arrows and current word highlight; preserve source identity when it makes next scene easier.

## 4. Scene-local verification and unresolved gates

- **Anchors audited:** 8 source-ordered phrases with non-overlapping source occurrence; audit file `Scene13_Audit.md`.
- **Trace events audited:** 0; exact machine event IDs listed above; none assigned in non-trace scene.
- **No unverified component APIs:** all names/props verified against GitHub `main` source; check file SHAs in master handoff if upstream changes.
- **Layout status:** specification geometry checked numerically; screenshot collision test is NOT POSSIBLE before Remotion implementation, so final visual signoff remains open.
- **Audio/sync:** pending; `Wxxxx`, FPS, exact frame ranges, glyph draws and pause classifications are NOT asserted.
- **Handoff gate:** this is a **PRE-AUDIO SEMANTIC PLAN**, not an approved post-audio frame plan. Antigravity must bind W IDs from real MP3 + validated sync and audit critical frames before implementation signoff.
