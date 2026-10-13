# Q18 · Scene 01 — Roadmap Resume + Q18 Activation

**SCENE:** 01 / 13
**QUESTION:** Q18 First Missing Positive · LeetCode 41 · Arrays & Hashing
**BEAT TYPE:** ROADMAP
**SCRIPT SOURCE:** `08_FINAL_ELEVENLABS_NARRATION.md`, Phase-08 restarted approved wording (SHA256 in handoff)
**TRACE SOURCE:** `05_VERIFIED_TRACES.md` + `05_TRACE_MACHINE_CHECKED.json` from restarted phase ZIP
**AUDIO FILE:** PENDING FINAL AUDIO
**SYNC FILE:** PENDING FINAL AUDIO
**FPS:** PENDING FINAL AUDIO
**TOTAL FRAMES:** PENDING FINAL AUDIO
**PEDAGOGICAL GOAL:** Complete Q17 status; activate Q18 under last Arrays & Hashing problem.
**TRACE STEP IDS:** N/A — non-trace, no algorithm execution
**DATA STRUCTURE:** roadmap / conceptual chalk
**PRIMARY HERO:** MasterRoadmapV2 full-canvas [x0,y0,w1920,h1080]
**SUPPORT LEFT:** roadmap native
**SUPPORT RIGHT:** roadmap native
**TRACE PRIMARY STRUCTURE ZONE:** N/A; non-trace geometry described above
**TRACE VARIABLE STATE RAIL:** N/A
**TRACE LIVE CALCULATION STAGE:** N/A
**TRACE AUXILIARY STRUCTURE ZONE:** N/A
**TRACE ANSWER / RESULT ZONE:** N/A
**REUSE:** MasterRoadmapV2, ChalkText; Captions after exact sync
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
- **Exact geometry ownership:** primary `MasterRoadmapV2 full-canvas [x0,y0,w1920,h1080]`; left `roadmap native`; right `roadmap native`; active structure `roadmap full-frame`; variables `N/A`; live decision `N/A`; auxiliary `N/A`; answer `roadmap completedCount=17 and active Q18`.
- **Layout clearance check:** roadmap component owns its internal course geometry. Optical positions are precise design coordinates but NOT a claim that Remotion has been screenshot-tested. Preserve invisible space for future values so no shift occurs when revealed.
- **Causal order:** one primary teaching motion at a time, optionally one direct supporting reaction. All values/answers derive from verified source. Suppress any state not yet spoken.
- **Hold:** only if actual later sync indicates real pause; otherwise no fabricated hold. No incidental camera zoom or bounce.

### Verified kit/API ledger

| Kit component | Verified repository path | Actual API / state intent | Role / enter / persist / cleanup | Decision |
|---|---|---|---|---|
| `MasterRoadmapV2` | `kit/components/MasterRoadmapV2.tsx` | `completedCount?`, `completedGlobalNums?`, `activeGlobalNum?`, `upNextGlobalNum?`, `activePatternId?`, `spotlightRow?`, `style?` | Full-screen immutable course dashboard ONLY for roadmap state; enter on its exact speech phrase; persist through relevant causal beat; clear transient focus at next beat | REUSE |
| `ChalkText` | `kit/components/ChalkText.tsx` | `children`, `startFrame`, `charFrames?`, `fontSize?`, `color?`, `font?`, `cursor?`, `style?`; frame props are PENDING SYNC | Write concept, variable, code or conclusion directly on the board using shared chalk typography; enter on its exact speech phrase; persist through relevant causal beat; clear transient focus at next beat | REUSE |
| `Captions` | `kit/components/Captions.tsx` | `words:{word,start,end}[]`, `fps?`, `bottom?`, `fontSize?`, `maxWords?`, `maxWidth?` — POST SYNC ONLY | Post-sync exact word captions only; no fake words/time; enter on its exact speech phrase; persist through relevant causal beat; clear transient focus at next beat | REUSE post-audio |

## 2. Exact narration → semantic word-anchor plan

**Anchor identity:** `Snn:Axxx` is a *semantic* identity, not `Wxxxx`. Each spoken phrase is quoted exactly from the approved script in source order. No audio exists at this stage. Every trigger awaits the exact matching word span after final sync.

### S01:A001 · `Question Seventeen … Encode and Decode Strings … is complete.`

- **ANCHOR ID:** `S01:A001`; occurrence #1, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Question Seventeen … Encode and Decode Strings … is complete.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 01, sentence 001 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Reveal Q17 as completed on the full canonical roadmap; no Q18 solution content.
- **CENTER-STAGE HERO:** MasterRoadmapV2 full-canvas [x0,y0,w1920,h1080] — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** completed 1..17 on Q18 activation; activeGlobalNum=18; do not count 18 done until Scene13.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `MasterRoadmapV2`, `ChalkText`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **COLLISION CHECK:** Active zone `roadmap full-frame`; supports `N/A` + `N/A`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S01:A002 · `We are at seventeen out of two hundred and twenty-seven.`

- **ANCHOR ID:** `S01:A002`; occurrence #2, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “We are at seventeen out of two hundred and twenty-seven.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 01, sentence 002 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Write course progress 17/227 through roadmap state, not an extra counter.
- **CENTER-STAGE HERO:** MasterRoadmapV2 full-canvas [x0,y0,w1920,h1080] — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** completed 1..17 on Q18 activation; activeGlobalNum=18; do not count 18 done until Scene13.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `MasterRoadmapV2`, `ChalkText`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **COLLISION CHECK:** Active zone `roadmap full-frame`; supports `N/A` + `N/A`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S01:A003 · `Now … Question Eighteen.`

- **ANCHOR ID:** `S01:A003`; occurrence #3, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “Now … Question Eighteen.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 01, sentence 003 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Activate global problem 18; previous status remains completed.
- **CENTER-STAGE HERO:** MasterRoadmapV2 full-canvas [x0,y0,w1920,h1080] — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** completed 1..17 on Q18 activation; activeGlobalNum=18; do not count 18 done until Scene13.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `MasterRoadmapV2`, `ChalkText`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **COLLISION CHECK:** Active zone `roadmap full-frame`; supports `N/A` + `N/A`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S01:A004 · `First Missing Positive.`

- **ANCHOR ID:** `S01:A004`; occurrence #4, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “First Missing Positive.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 01, sentence 004 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Focus the Q18 title First Missing Positive on the active roadmap row.
- **CENTER-STAGE HERO:** MasterRoadmapV2 full-canvas [x0,y0,w1920,h1080] — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** completed 1..17 on Q18 activation; activeGlobalNum=18; do not count 18 done until Scene13.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `MasterRoadmapV2`, `ChalkText`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **COLLISION CHECK:** Active zone `roadmap full-frame`; supports `N/A` + `N/A`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

### S01:A005 · `This is our last question in Arrays and Hashing.`

- **ANCHOR ID:** `S01:A005`; occurrence #5, ordered source phrase; later resolve exact Wxxxx word IDs.
- **EXACT SPOKEN PHRASE:** “This is our last question in Arrays and Hashing.” (exact source string; do not normalize punctuation in final sync matching).
- **SOURCE LOCATION:** Scene 01, sentence 005 in `08_FINAL_ELEVENLABS_NARRATION.md`.
- **EXACT SUB-PHRASE CUES:** Whole exact phrase is one semantic trigger; no independent timing allocated. (W IDs only after exact sync).
- **WHAT APPEARS NOW:** Focus Arrays & Hashing pattern 01 last problem; do not mark pattern complete yet.
- **CENTER-STAGE HERO:** MasterRoadmapV2 full-canvas [x0,y0,w1920,h1080] — current attention: single central board-native teaching object.
- **CAUSE:** This *spoken* phrase authorizes focus/reveal; all later algorithmic state stays hidden.
- **STATE REACTION:** Current semantic element highlights in theme.pivot; confirmed only after a resolved cause uses theme.good; rejected/blocked uses theme.warn.
- **COMPREHENSION HOLD:** Only when validated future audio proves a real silence after this phrase; otherwise NO HOLD.
- **MOVE / MUTATION:** Update only the spoken concept/code/progress; no algorithm mutation unless an exact verified TRACE step is attached.
- **SETTLE:** Render the newly authorized meaning in its fixed place before the next causal step. No automatic camera/array relayout.
- **WHAT MUST NOT APPEAR YET:** No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **CLEANUP / EXIT:** Remove transient query underline/arrow at the next authorized beat. Preserve the base array, set membership or committed code already established; never erase to fabricate a transition.
- **PERSISTENT STATE:** completed 1..17 on Q18 activation; activeGlobalNum=18; do not count 18 done until Scene13.
- **TRACE STEP IDS:** `N/A (teaching/bridge; no algorithm operation)`.
- **KIT COMPONENTS:** `MasterRoadmapV2`, `ChalkText`. `Captions` only after word sync.
- **KIT STATE / PROP INTENT:** kit theme tokens; fixed composition coordinates above; `ArrayTrackV2.elements` commit from verified trace, pointers keyed by stable id; `ChalkText.startFrame` and stroke/flight durations resolved ONLY from final sync.
- **REUSE / EXTEND / CREATE:** REUSE listed verified primitives; CREATE LOCAL choreography/state mapping only; no new shared API is assumed.
- **MOTION PURPOSE:** FOCUS / REVEAL → settle; any value movement shows source→destination relation, never decorative spectacle.
- **NO-SPOILER CHECK:** Only observed phrase and prior committed states visible; No answer 5 / final mismatch / future code / future method state until narration authorizes it.
- **COLLISION CHECK:** Active zone `roadmap full-frame`; supports `N/A` + `N/A`; bottom captions y960..1040 clear, title y90..190 clear; state geometry does not reflow.

## 3. Exit contract and critical visual states

- **ENTRY:** Before any phrase, reserve geometry internally but render future values/invariants/answer hidden.
- **FIRST IMPORTANT STATE:** First concept/input at first matching spoken anchor.
- **FIRST DECISION / QUERY:** First narrated comparison/probe/guard; source remains stable.
- **FIRST MUTATION:** Only at a verified mutation event for TRACE; N/A for purely conceptual/code scenes.
- **MOST COMPLEX STATE:** At the most crowded meaning, slot labels, pointer lanes, variable/calc and auxiliary set have fixed nonoverlapping spatial ownership.
- **FINAL STATE:** Only narrated conclusions exist, with persistent source truth.
- **TRANSITION OUT:** Clear transient arrows and current word highlight; preserve source identity when it makes next scene easier.

## 4. Scene-local verification and unresolved gates

- **Anchors audited:** 5 source-ordered phrases with non-overlapping source occurrence; audit file `Scene01_Audit.md`.
- **Trace events audited:** 0; exact machine event IDs listed above; none assigned in non-trace scene.
- **No unverified component APIs:** all names/props verified against GitHub `main` source; check file SHAs in master handoff if upstream changes.
- **Layout status:** specification geometry checked numerically; screenshot collision test is NOT POSSIBLE before Remotion implementation, so final visual signoff remains open.
- **Audio/sync:** pending; `Wxxxx`, FPS, exact frame ranges, glyph draws and pause classifications are NOT asserted.
- **Handoff gate:** this is a **PRE-AUDIO SEMANTIC PLAN**, not an approved post-audio frame plan. Antigravity must bind W IDs from real MP3 + validated sync and audit critical frames before implementation signoff.
