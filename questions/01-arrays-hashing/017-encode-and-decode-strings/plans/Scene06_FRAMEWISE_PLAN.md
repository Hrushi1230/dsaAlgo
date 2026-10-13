# Q17 — Encode and Decode Strings (LeetCode 271)
# Scene 06 · Full Decode Two-Pointer Jump Trace
## EXACT AUDIO-SYNCHRONIZED FRAME-WISE PLAN (GATE B)

> **Standard:** V3.2 Board-Native Scene Planning Law
> **Stage:** Gate B Approved (Audio-Synchronized with Exact Whisper Word Timestamps)
> **Master Testcase:** `["a#b", "", "hello world", "42"]` → Encoded: `"3#a#b0#11#hello world2#42"` (25 chars)

---

## 1. Authoritative Scene Contract

```text
SCENE: 06-decode-trace
QUESTION: 017 · Encode and Decode Strings (LeetCode 271)
BEAT TYPE: COMPLETE DECODER TRACE EXECUTION
AUDIO FILE: audio/017/scence06.mp3 (remotion-project/public/audio/017/06-decode-trace.mp3)
SYNC FILE: sync/06-decode-trace.json
FPS: 30
TOTAL FRAMES: 6969 frames (232.3s)
TOTAL SPOKEN WORDS: 513 words (W0000 .. W0512)
TOTAL ANCHORS: 109 semantic beats
PEDAGOGICAL DISCIPLINE: 100% Board-Native, No Black Cards, Exact Causal Audio Triggers
```

---

## 2. Fixed Stage Geometry (1920 × 1080)

| Teaching Zone | Optical Allocation | Intended Semantic Content | Container / Surface |
|:---|:---|:---|:---|
| **Header / Badge** | `(60, 28)` to `(1860, 130)` | Pattern indicator `01 · ARRAYS & HASHING`, Q017 | Direct board chalk |
| **Hero Stage** | `(90, 180)` to `(1830, 540)` | Master string list / 25-char character tape | Board-native transparent |
| **Variable & State Rail** | `(90, 560)` to `(800, 780)` | Pointer variables `i`, `j`, `length`, `start`, `end` | Direct chalk labels + large values |
| **Live Decision / Scratchpad**| `(820, 560)` to `(1830, 820)`| Slice math, character inspections, jump bounds | Direct chalk equations |
| **Answer / Accumulator** | `(820, 830)` to `(1830, 930)` | Cumulative `encoded` stream / reconstructed `res` | Mint chalk highlights (`#3CE5A7`) |
| **Captions Safe Zone** | `Y: 960 .. 1040` | Word-level synchronized subtitle track | Exact Whisper frame sync |

---

## 3. Audio-Synchronized Framewise Choreography

### BEAT 001 — `S06:A001` (Frames 0 – 73)

- **ANCHOR ID:** `S06:A001`
- **EXACT SPOKEN PHRASE:** “We have our complete encoded string.”
- **AUDIO WORD RANGE:** `W0000 .. W0005` (Index 0 .. 5)
- **ACTUAL SPOKEN AUDIO:** `We have our complete encoded string.`
- **RESOLVED FRAME RANGE:** `[0, 73)` (Duration: 73 frames)
- **PAUSE AFTER:** TEACHING pause (9 frames / 300ms silence before next beat)

- **WHAT APPEARS NOW:** Reveal full fixed 25-character encoded tape `3#a#b0#11#hello world2#42` with global indices 0..24; decoded outputs hidden.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “We have our complete encoded string.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `tape + state rail` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Reveal full fixed 25-character encoded tape `3#a#b0#11#hello world2#42` with global indices 0..24; decoded outputs hidden.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/TAPE_+_STATE_INITIALIZATION/A001`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “We have our complete encoded string.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 002 — `S06:A002` (Frames 73 – 133)

- **ANCHOR ID:** `S06:A002`
- **EXACT SPOKEN PHRASE:** “Start with an empty result list.”
- **AUDIO WORD RANGE:** `W0006 .. W0011` (Index 6 .. 11)
- **ACTUAL SPOKEN AUDIO:** `Start with an empty result list`
- **RESOLVED FRAME RANGE:** `[73, 133)` (Duration: 60 frames)
- **PAUSE AFTER:** NONE pause (0 frames / 0ms silence before next beat)

- **WHAT APPEARS NOW:** Initialize decoded-result lane to visibly empty list `[]`; not output `""`.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: calculation x625..1225 y560..890.
- **CAUSE:** Spoken phrase “Start with an empty result list.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `tape + state rail` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Initialize decoded-result lane to visibly empty list `[]`; not output `""`.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/TAPE_+_STATE_INITIALIZATION/A002`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / COUNT_UPDATE only after spoken state, then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Start with an empty result list.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone calculation x625..1225 y560..890; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 003 — `S06:A003` (Frames 133 – 215)

- **ANCHOR ID:** `S06:A003`
- **EXACT SPOKEN PHRASE:** “And set `i` to zero.”
- **AUDIO WORD RANGE:** `W0012 .. W0016` (Index 12 .. 16)
- **ACTUAL SPOKEN AUDIO:** `and set i to 0.`
- **RESOLVED FRAME RANGE:** `[133, 215)` (Duration: 82 frames)
- **PAUSE AFTER:** TEACHING pause (13 frames / 433ms silence before next beat)

- **WHAT APPEARS NOW:** Initialize `i = 0` in stable state rail; no fake j move yet.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “And set `i` to zero.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `tape + state rail` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Initialize `i = 0` in stable state rail; no fake j move yet.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/TAPE_+_STATE_INITIALIZATION/A003`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / COUNT_UPDATE only after spoken state, then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “And set `i` to zero.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 004 — `S06:A004` (Frames 215 – 254)

- **ANCHOR ID:** `S06:A004`
- **EXACT SPOKEN PHRASE:** “Remember ...”
- **AUDIO WORD RANGE:** `W0017 .. W0017` (Index 17 .. 17)
- **ACTUAL SPOKEN AUDIO:** `Remember,`
- **RESOLVED FRAME RANGE:** `[215, 254)` (Duration: 39 frames)
- **PAUSE AFTER:** MAJOR pause (27 frames / 900ms silence before next beat)

- **WHAT APPEARS NOW:** Pause semantic focus on i's index invariant; no new mutation.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: calculation x625..1225 y560..890.
- **CAUSE:** Spoken phrase “Remember ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `tape + state rail` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Pause semantic focus on i's index invariant; no new mutation.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/TAPE_+_STATE_INITIALIZATION/A004`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Remember ...” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone calculation x625..1225 y560..890; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 005 — `S06:A005` (Frames 254 – 373)

- **ANCHOR ID:** `S06:A005`
- **EXACT SPOKEN PHRASE:** “`i` always points to the beginning of the next length header.”
- **AUDIO WORD RANGE:** `W0018 .. W0028` (Index 18 .. 28)
- **ACTUAL SPOKEN AUDIO:** `i always points to the beginning of the next length header.`
- **RESOLVED FRAME RANGE:** `[254, 373)` (Duration: 119 frames)
- **PAUSE AFTER:** MAJOR pause (23 frames / 767ms silence before next beat)

- **WHAT APPEARS NOW:** State chalk invariant `i → first digit of next length header` beside pointer state.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “`i` always points to the beginning of the next length header.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `tape + state rail` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. State chalk invariant `i → first digit of next length header` beside pointer state.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/TAPE_+_STATE_INITIALIZATION/A005`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “`i` always points to the beginning of the next length header.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 006 — `S06:A006` (Frames 373 – 430)

- **ANCHOR ID:** `S06:A006`
- **EXACT SPOKEN PHRASE:** “Let's decode the first record.”
- **AUDIO WORD RANGE:** `W0029 .. W0033` (Index 29 .. 33)
- **ACTUAL SPOKEN AUDIO:** `Let's decode the first record.`
- **RESOLVED FRAME RANGE:** `[373, 430)` (Duration: 57 frames)
- **PAUSE AFTER:** TEACHING pause (11 frames / 367ms silence before next beat)

- **WHAT APPEARS NOW:** Focus first record header at global index 0; no payload advance.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “Let's decode the first record.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Focus first record header at global index 0; no payload advance.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_1/A006`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Let's decode the first record.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 007 — `S06:A007` (Frames 430 – 460)

- **ANCHOR ID:** `S06:A007`
- **EXACT SPOKEN PHRASE:** “Right now ...”
- **AUDIO WORD RANGE:** `W0034 .. W0035` (Index 34 .. 35)
- **ACTUAL SPOKEN AUDIO:** `Right now,`
- **RESOLVED FRAME RANGE:** `[430, 460)` (Duration: 30 frames)
- **PAUSE AFTER:** NATURAL pause (6 frames / 200ms silence before next beat)

- **WHAT APPEARS NOW:** Focus current i state without changing it.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: calculation x625..1225 y560..890.
- **CAUSE:** Spoken phrase “Right now ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Focus current i state without changing it.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_1/A007`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Right now ...” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone calculation x625..1225 y560..890; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 008 — `S06:A008` (Frames 460 – 499)

- **ANCHOR ID:** `S06:A008`
- **EXACT SPOKEN PHRASE:** “`i` is zero.”
- **AUDIO WORD RANGE:** `W0036 .. W0038` (Index 36 .. 38)
- **ACTUAL SPOKEN AUDIO:** `i is 0.`
- **RESOLVED FRAME RANGE:** `[460, 499)` (Duration: 39 frames)
- **PAUSE AFTER:** TEACHING pause (11 frames / 367ms silence before next beat)

- **WHAT APPEARS NOW:** Confirm `i = 0`; index-0 cell receives pointer highlight.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “`i` is zero.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Confirm `i = 0`; index-0 cell receives pointer highlight.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_1/A008`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “`i` is zero.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 009 — `S06:A009` (Frames 499 – 572)

- **ANCHOR ID:** `S06:A009`
- **EXACT SPOKEN PHRASE:** “Set `j` to the same position.”
- **AUDIO WORD RANGE:** `W0039 .. W0044` (Index 39 .. 44)
- **ACTUAL SPOKEN AUDIO:** `Set j to the same position.`
- **RESOLVED FRAME RANGE:** `[499, 572)` (Duration: 73 frames)
- **PAUSE AFTER:** TEACHING pause (17 frames / 567ms silence before next beat)

- **WHAT APPEARS NOW:** Initialize `j = i = 0`, separate lane/color and no tape reflow.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “Set `j` to the same position.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Initialize `j = i = 0`, separate lane/color and no tape reflow.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_1/A009`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / COUNT_UPDATE only after spoken state, then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Set `j` to the same position.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 010 — `S06:A010` (Frames 572 – 677)

- **ANCHOR ID:** `S06:A010`
- **EXACT SPOKEN PHRASE:** “Move `j` forward until we find the header hash.”
- **AUDIO WORD RANGE:** `W0045 .. W0053` (Index 45 .. 53)
- **ACTUAL SPOKEN AUDIO:** `Move j forward until we find the header hash.`
- **RESOLVED FRAME RANGE:** `[572, 677)` (Duration: 105 frames)
- **PAUSE AFTER:** TEACHING pause (12 frames / 400ms silence before next beat)

- **WHAT APPEARS NOW:** Start header scan `j` toward first `#`, never skip digit comparison.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “Move `j` forward until we find the header hash.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Start header scan `j` toward first `#`, never skip digit comparison.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_1/A010`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** QUERY → POINTER_MOVE → SETTLE; one pointer at a time; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Move `j` forward until we find the header hash.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 011 — `S06:A011` (Frames 677 – 778)

- **ANCHOR ID:** `S06:A011`
- **EXACT SPOKEN PHRASE:** “At index zero ... we have the digit three.”
- **AUDIO WORD RANGE:** `W0054 .. W0061` (Index 54 .. 61)
- **ACTUAL SPOKEN AUDIO:** `At index 0, we have the digit 3.`
- **RESOLVED FRAME RANGE:** `[677, 778)` (Duration: 101 frames)
- **PAUSE AFTER:** TEACHING pause (13 frames / 433ms silence before next beat)

- **WHAT APPEARS NOW:** At cell 0, read `3` as header digit; j stays at 0 until next authorized move.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “At index zero ... we have the digit three.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. At cell 0, read `3` as header digit; j stays at 0 until next authorized move.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_1/A011`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “At index zero ... we have the digit three.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 012 — `S06:A012` (Frames 778 – 882)

- **ANCHOR ID:** `S06:A012`
- **EXACT SPOKEN PHRASE:** “At index one ... we find the hash.”
- **AUDIO WORD RANGE:** `W0062 .. W0068` (Index 62 .. 68)
- **ACTUAL SPOKEN AUDIO:** `At index 1, we find the hash.`
- **RESOLVED FRAME RANGE:** `[778, 882)` (Duration: 104 frames)
- **PAUSE AFTER:** TEACHING pause (17 frames / 567ms silence before next beat)

- **WHAT APPEARS NOW:** Advance j to 1; test cell1 `#` as header terminator.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “At index one ... we find the hash.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Advance j to 1; test cell1 `#` as header terminator.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_1/A012`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** QUERY → POINTER_MOVE → SETTLE; one pointer at a time; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “At index one ... we find the hash.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 013 — `S06:A013` (Frames 882 – 922)

- **ANCHOR ID:** `S06:A013`
- **EXACT SPOKEN PHRASE:** “Stop there.”
- **AUDIO WORD RANGE:** `W0069 .. W0070` (Index 69 .. 70)
- **ACTUAL SPOKEN AUDIO:** `Stop there.`
- **RESOLVED FRAME RANGE:** `[882, 922)` (Duration: 40 frames)
- **PAUSE AFTER:** TEACHING pause (13 frames / 433ms silence before next beat)

- **WHAT APPEARS NOW:** Stop j at 1; scanning ends here, do not touch payload hash at 3.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “Stop there.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Stop j at 1; scanning ends here, do not touch payload hash at 3.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_1/A013`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Stop there.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 014 — `S06:A014` (Frames 922 – 978)

- **ANCHOR ID:** `S06:A014`
- **EXACT SPOKEN PHRASE:** “So the length text is three.”
- **AUDIO WORD RANGE:** `W0071 .. W0076` (Index 71 .. 76)
- **ACTUAL SPOKEN AUDIO:** `So the length text is 3.`
- **RESOLVED FRAME RANGE:** `[922, 978)` (Duration: 56 frames)
- **PAUSE AFTER:** NATURAL pause (8 frames / 267ms silence before next beat)

- **WHAT APPEARS NOW:** Focus header substring `[0,1)` = `"3"` on tape.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “So the length text is three.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Focus header substring `[0,1)` = `"3"` on tape.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_1/A014`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “So the length text is three.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 015 — `S06:A015` (Frames 978 – 1027)

- **ANCHOR ID:** `S06:A015`
- **EXACT SPOKEN PHRASE:** “Convert it to a number.”
- **AUDIO WORD RANGE:** `W0077 .. W0081` (Index 77 .. 81)
- **ACTUAL SPOKEN AUDIO:** `Convert it to a number.`
- **RESOLVED FRAME RANGE:** `[978, 1027)` (Duration: 49 frames)
- **PAUSE AFTER:** TEACHING pause (11 frames / 367ms silence before next beat)

- **WHAT APPEARS NOW:** Convert text length `"3"` to numeric 3 in calculation stage.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: calculation x625..1225 y560..890.
- **CAUSE:** Spoken phrase “Convert it to a number.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Convert text length `"3"` to numeric 3 in calculation stage.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_1/A015`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Convert it to a number.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone calculation x625..1225 y560..890; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 016 — `S06:A016` (Frames 1027 – 1083)

- **ANCHOR ID:** `S06:A016`
- **EXACT SPOKEN PHRASE:** “Length equals three.”
- **AUDIO WORD RANGE:** `W0082 .. W0084` (Index 82 .. 84)
- **ACTUAL SPOKEN AUDIO:** `Length equals 3.`
- **RESOLVED FRAME RANGE:** `[1027, 1083)` (Duration: 56 frames)
- **PAUSE AFTER:** TEACHING pause (15 frames / 500ms silence before next beat)

- **WHAT APPEARS NOW:** Set stable `length = 3` after conversion is resolved.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “Length equals three.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Set stable `length = 3` after conversion is resolved.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_1/A016`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / COUNT_UPDATE only after spoken state, then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Length equals three.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 017 — `S06:A017` (Frames 1083 – 1178)

- **ANCHOR ID:** `S06:A017`
- **EXACT SPOKEN PHRASE:** “Now the payload begins immediately after the hash.”
- **AUDIO WORD RANGE:** `W0085 .. W0092` (Index 85 .. 92)
- **ACTUAL SPOKEN AUDIO:** `Now the payload begins immediately after the hash.`
- **RESOLVED FRAME RANGE:** `[1083, 1178)` (Duration: 95 frames)
- **PAUSE AFTER:** TEACHING pause (10 frames / 333ms silence before next beat)

- **WHAT APPEARS NOW:** Focus location immediately after header hash at cell2.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “Now the payload begins immediately after the hash.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Focus location immediately after header hash at cell2.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_1/A017`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Now the payload begins immediately after the hash.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 018 — `S06:A018` (Frames 1178 – 1239)

- **ANCHOR ID:** `S06:A018`
- **EXACT SPOKEN PHRASE:** “So start is two.”
- **AUDIO WORD RANGE:** `W0093 .. W0096` (Index 93 .. 96)
- **ACTUAL SPOKEN AUDIO:** `So start is 2.`
- **RESOLVED FRAME RANGE:** `[1178, 1239)` (Duration: 61 frames)
- **PAUSE AFTER:** TEACHING pause (19 frames / 633ms silence before next beat)

- **WHAT APPEARS NOW:** Set `start = j + 1 = 2` in state rail.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “So start is two.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Set `start = j + 1 = 2` in state rail.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_1/A018`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / COUNT_UPDATE only after spoken state, then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “So start is two.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 019 — `S06:A019` (Frames 1239 – 1295)

- **ANCHOR ID:** `S06:A019`
- **EXACT SPOKEN PHRASE:** “End is start plus length.”
- **AUDIO WORD RANGE:** `W0097 .. W0101` (Index 97 .. 101)
- **ACTUAL SPOKEN AUDIO:** `End is start plus length.`
- **RESOLVED FRAME RANGE:** `[1239, 1295)` (Duration: 56 frames)
- **PAUSE AFTER:** NATURAL pause (6 frames / 200ms silence before next beat)

- **WHAT APPEARS NOW:** Write `end = start + length` in calculation area, no result yet.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: calculation x625..1225 y560..890.
- **CAUSE:** Spoken phrase “End is start plus length.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Write `end = start + length` in calculation area, no result yet.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_1/A019`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “End is start plus length.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone calculation x625..1225 y560..890; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 020 — `S06:A020` (Frames 1295 – 1331)

- **ANCHOR ID:** `S06:A020`
- **EXACT SPOKEN PHRASE:** “Two plus three ...”
- **AUDIO WORD RANGE:** `W0102 .. W0104` (Index 102 .. 104)
- **ACTUAL SPOKEN AUDIO:** `2 plus 3`
- **RESOLVED FRAME RANGE:** `[1295, 1331)` (Duration: 36 frames)
- **PAUSE AFTER:** NONE pause (0 frames / 0ms silence before next beat)

- **WHAT APPEARS NOW:** Resolve operands `2 + 3` in calculation stage.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: calculation x625..1225 y560..890.
- **CAUSE:** Spoken phrase “Two plus three ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Resolve operands `2 + 3` in calculation stage.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_1/A020`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Two plus three ...” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone calculation x625..1225 y560..890; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 021 — `S06:A021` (Frames 1331 – 1376)

- **ANCHOR ID:** `S06:A021`
- **EXACT SPOKEN PHRASE:** “equals five.”
- **AUDIO WORD RANGE:** `W0105 .. W0106` (Index 105 .. 106)
- **ACTUAL SPOKEN AUDIO:** `equals 5.`
- **RESOLVED FRAME RANGE:** `[1331, 1376)` (Duration: 45 frames)
- **PAUSE AFTER:** TEACHING pause (15 frames / 500ms silence before next beat)

- **WHAT APPEARS NOW:** Set `end = 5` as exclusive boundary; no index-5 payload claim.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “equals five.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Set `end = 5` as exclusive boundary; no index-5 payload claim.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_1/A021`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / COUNT_UPDATE only after spoken state, then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “equals five.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 022 — `S06:A022` (Frames 1376 – 1439)

- **ANCHOR ID:** `S06:A022`
- **EXACT SPOKEN PHRASE:** “Now read the characters from index two ...”
- **AUDIO WORD RANGE:** `W0107 .. W0113` (Index 107 .. 113)
- **ACTUAL SPOKEN AUDIO:** `Now read the characters from index 2`
- **RESOLVED FRAME RANGE:** `[1376, 1439)` (Duration: 63 frames)
- **PAUSE AFTER:** NONE pause (0 frames / 0ms silence before next beat)

- **WHAT APPEARS NOW:** Open payload selection at cell2, no append yet.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “Now read the characters from index two ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Open payload selection at cell2, no append yet.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_1/A022`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** COPY / APPEND (source persists), then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Now read the characters from index two ...” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 023 — `S06:A023` (Frames 1439 – 1534)

- **ANCHOR ID:** `S06:A023`
- **EXACT SPOKEN PHRASE:** “up to, but not including, index five.”
- **AUDIO WORD RANGE:** `W0114 .. W0120` (Index 114 .. 120)
- **ACTUAL SPOKEN AUDIO:** `up to but not including index 5.`
- **RESOLVED FRAME RANGE:** `[1439, 1534)` (Duration: 95 frames)
- **PAUSE AFTER:** TEACHING pause (15 frames / 500ms silence before next beat)

- **WHAT APPEARS NOW:** Draw `[2,5)` bracket with exclusive endpoint between cells4/5.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “up to, but not including, index five.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Draw `[2,5)` bracket with exclusive endpoint between cells4/5.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_1/A023`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “up to, but not including, index five.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 024 — `S06:A024` (Frames 1534 – 1589)

- **ANCHOR ID:** `S06:A024`
- **EXACT SPOKEN PHRASE:** “At index two ... A.”
- **AUDIO WORD RANGE:** `W0121 .. W0124` (Index 121 .. 124)
- **ACTUAL SPOKEN AUDIO:** `At index 2, A.`
- **RESOLVED FRAME RANGE:** `[1534, 1589)` (Duration: 55 frames)
- **PAUSE AFTER:** MICRO pause (3 frames / 100ms silence before next beat)

- **WHAT APPEARS NOW:** Read literal `a` at global index2; highlight only cell2.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “At index two ... A.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Read literal `a` at global index2; highlight only cell2.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_1/A024`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “At index two ... A.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 025 — `S06:A025` (Frames 1589 – 1655)

- **ANCHOR ID:** `S06:A025`
- **EXACT SPOKEN PHRASE:** “At index three ... hash.”
- **AUDIO WORD RANGE:** `W0125 .. W0128` (Index 125 .. 128)
- **ACTUAL SPOKEN AUDIO:** `At index 3, hash.`
- **RESOLVED FRAME RANGE:** `[1589, 1655)` (Duration: 66 frames)
- **PAUSE AFTER:** TEACHING pause (12 frames / 400ms silence before next beat)

- **WHAT APPEARS NOW:** Read literal `#` at global index3 as payload, no header scan restart.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “At index three ... hash.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Read literal `#` at global index3 as payload, no header scan restart.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_1/A025`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** QUERY → POINTER_MOVE → SETTLE; one pointer at a time; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “At index three ... hash.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 026 — `S06:A026` (Frames 1655 – 1729)

- **ANCHOR ID:** `S06:A026`
- **EXACT SPOKEN PHRASE:** “At index four ... B.”
- **AUDIO WORD RANGE:** `W0129 .. W0132` (Index 129 .. 132)
- **ACTUAL SPOKEN AUDIO:** `At index 4, B.`
- **RESOLVED FRAME RANGE:** `[1655, 1729)` (Duration: 74 frames)
- **PAUSE AFTER:** NATURAL pause (6 frames / 200ms silence before next beat)

- **WHAT APPEARS NOW:** Read literal `b` at global index4.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “At index four ... B.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Read literal `b` at global index4.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_1/A026`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “At index four ... B.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 027 — `S06:A027` (Frames 1729 – 1765)

- **ANCHOR ID:** `S06:A027`
- **EXACT SPOKEN PHRASE:** “Together ...”
- **AUDIO WORD RANGE:** `W0133 .. W0133` (Index 133 .. 133)
- **ACTUAL SPOKEN AUDIO:** `Together.`
- **RESOLVED FRAME RANGE:** `[1729, 1765)` (Duration: 36 frames)
- **PAUSE AFTER:** MAJOR pause (22 frames / 733ms silence before next beat)

- **WHAT APPEARS NOW:** Focus completed three-character payload slice; don't append before phrase.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “Together ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Focus completed three-character payload slice; don't append before phrase.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_1/A027`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** COPY / APPEND (source persists), then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Together ...” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 028 — `S06:A028` (Frames 1765 – 1822)

- **ANCHOR ID:** `S06:A028`
- **EXACT SPOKEN PHRASE:** “A hash B.”
- **AUDIO WORD RANGE:** `W0134 .. W0136` (Index 134 .. 136)
- **ACTUAL SPOKEN AUDIO:** `A hash. B.`
- **RESOLVED FRAME RANGE:** `[1765, 1822)` (Duration: 57 frames)
- **PAUSE AFTER:** TEACHING pause (16 frames / 533ms silence before next beat)

- **WHAT APPEARS NOW:** Assemble slice text `"a#b"` from cells2,3,4 directly on board.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “A hash B.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Assemble slice text `"a#b"` from cells2,3,4 directly on board.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_1/A028`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “A hash B.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 029 — `S06:A029` (Frames 1822 – 1859)

- **ANCHOR ID:** `S06:A029`
- **EXACT SPOKEN PHRASE:** “Notice ...”
- **AUDIO WORD RANGE:** `W0137 .. W0137` (Index 137 .. 137)
- **ACTUAL SPOKEN AUDIO:** `Notice.`
- **RESOLVED FRAME RANGE:** `[1822, 1859)` (Duration: 37 frames)
- **PAUSE AFTER:** MAJOR pause (24 frames / 800ms silence before next beat)

- **WHAT APPEARS NOW:** Move attention back to interior hash in payload, already part of slice.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: calculation x625..1225 y560..890.
- **CAUSE:** Spoken phrase “Notice ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Move attention back to interior hash in payload, already part of slice.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_1/A029`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Notice ...” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone calculation x625..1225 y560..890; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 030 — `S06:A030` (Frames 1859 – 1972)

- **ANCHOR ID:** `S06:A030`
- **EXACT SPOKEN PHRASE:** “we did not treat the hash inside the payload as a separator.”
- **AUDIO WORD RANGE:** `W0138 .. W0149` (Index 138 .. 149)
- **ACTUAL SPOKEN AUDIO:** `We did not treat the hash inside the payload as a separator.`
- **RESOLVED FRAME RANGE:** `[1859, 1972)` (Duration: 113 frames)
- **PAUSE AFTER:** TEACHING pause (13 frames / 433ms silence before next beat)

- **WHAT APPEARS NOW:** Emphasize that cell3 hash was not an additional header terminator.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: calculation x625..1225 y560..890.
- **CAUSE:** Spoken phrase “we did not treat the hash inside the payload as a separator.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Emphasize that cell3 hash was not an additional header terminator.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_1/A030`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “we did not treat the hash inside the payload as a separator.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone calculation x625..1225 y560..890; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 031 — `S06:A031` (Frames 1972 – 2036)

- **ANCHOR ID:** `S06:A031`
- **EXACT SPOKEN PHRASE:** “We simply read three characters.”
- **AUDIO WORD RANGE:** `W0150 .. W0154` (Index 150 .. 154)
- **ACTUAL SPOKEN AUDIO:** `We simply read three characters.`
- **RESOLVED FRAME RANGE:** `[1972, 2036)` (Duration: 64 frames)
- **PAUSE AFTER:** TEACHING pause (13 frames / 433ms silence before next beat)

- **WHAT APPEARS NOW:** Confirm exactly 3 chars consumed, endpoint index5 remains exclusive.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: calculation x625..1225 y560..890.
- **CAUSE:** Spoken phrase “We simply read three characters.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Confirm exactly 3 chars consumed, endpoint index5 remains exclusive.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=[]; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_1/A031`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “We simply read three characters.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone calculation x625..1225 y560..890; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 032 — `S06:A032` (Frames 2036 – 2120)

- **ANCHOR ID:** `S06:A032`
- **EXACT SPOKEN PHRASE:** “Append A hash B to our result list.”
- **AUDIO WORD RANGE:** `W0155 .. W0162` (Index 155 .. 162)
- **ACTUAL SPOKEN AUDIO:** `Append A hash B to our result list.`
- **RESOLVED FRAME RANGE:** `[2036, 2120)` (Duration: 84 frames)
- **PAUSE AFTER:** TEACHING pause (12 frames / 400ms silence before next beat)

- **WHAT APPEARS NOW:** Append decoded string `"a#b"` to output list as first element.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “Append A hash B to our result list.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Append decoded string `"a#b"` to output list as first element.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b']; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_1/A032`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** COPY / APPEND (source persists), then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Append A hash B to our result list.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 033 — `S06:A033` (Frames 2120 – 2170)

- **ANCHOR ID:** `S06:A033`
- **EXACT SPOKEN PHRASE:** “Now move `i` to end.”
- **AUDIO WORD RANGE:** `W0163 .. W0167` (Index 163 .. 167)
- **ACTUAL SPOKEN AUDIO:** `Now move i to end.`
- **RESOLVED FRAME RANGE:** `[2120, 2170)` (Duration: 50 frames)
- **PAUSE AFTER:** TEACHING pause (14 frames / 467ms silence before next beat)

- **WHAT APPEARS NOW:** Prepare i mutation only, other variables persist until updated.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “Now move `i` to end.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Prepare i mutation only, other variables persist until updated.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b']; i=0; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_1/A033`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Now move `i` to end.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 034 — `S06:A034` (Frames 2170 – 2212)

- **ANCHOR ID:** `S06:A034`
- **EXACT SPOKEN PHRASE:** “So `i` becomes five.”
- **AUDIO WORD RANGE:** `W0168 .. W0171` (Index 168 .. 171)
- **ACTUAL SPOKEN AUDIO:** `So i becomes 5.`
- **RESOLVED FRAME RANGE:** `[2170, 2212)` (Duration: 42 frames)
- **PAUSE AFTER:** TEACHING pause (12 frames / 400ms silence before next beat)

- **WHAT APPEARS NOW:** Set `i = end = 5`; pointer jumps from header0 to next header5.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “So `i` becomes five.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Set `i = end = 5`; pointer jumps from header0 to next header5.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b']; i=5; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_1/A034`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** QUERY → POINTER_MOVE → SETTLE; one pointer at a time; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “So `i` becomes five.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 035 — `S06:A035` (Frames 2212 – 2272)

- **ANCHOR ID:** `S06:A035`
- **EXACT SPOKEN PHRASE:** “We have finished the first record.”
- **AUDIO WORD RANGE:** `W0172 .. W0177` (Index 172 .. 177)
- **ACTUAL SPOKEN AUDIO:** `We have finished the first record.`
- **RESOLVED FRAME RANGE:** `[2212, 2272)` (Duration: 60 frames)
- **PAUSE AFTER:** TEACHING pause (18 frames / 600ms silence before next beat)

- **WHAT APPEARS NOW:** Mark first record complete; output list now one item.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “We have finished the first record.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Mark first record complete; output list now one item.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b']; i=5; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_1/A035`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “We have finished the first record.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 036 — `S06:A036` (Frames 2272 – 2369)

- **ANCHOR ID:** `S06:A036`
- **EXACT SPOKEN PHRASE:** “And `i` is exactly at the next length header.”
- **AUDIO WORD RANGE:** `W0178 .. W0186` (Index 178 .. 186)
- **ACTUAL SPOKEN AUDIO:** `And i is exactly at the next length header.`
- **RESOLVED FRAME RANGE:** `[2272, 2369)` (Duration: 97 frames)
- **PAUSE AFTER:** MAJOR pause (21 frames / 700ms silence before next beat)

- **WHAT APPEARS NOW:** Highlight i at next header5 to restore invariant.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “And `i` is exactly at the next length header.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Highlight i at next header5 to restore invariant.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear prior record query/slice focus, keep committed result and i boundary; next record begins only when announced.
- **PERSISTENT STATE:** committed decoded result=['a#b']; i=5; active record 1 source header=0, header stop j=1, length=3, payload=[2,5); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_1/A036`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “And `i` is exactly at the next length header.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 037 — `S06:A037` (Frames 2369 – 2405)

- **ANCHOR ID:** `S06:A037`
- **EXACT SPOKEN PHRASE:** “Now the second record.”
- **AUDIO WORD RANGE:** `W0187 .. W0190` (Index 187 .. 190)
- **ACTUAL SPOKEN AUDIO:** `Now the second record,`
- **RESOLVED FRAME RANGE:** `[2369, 2405)` (Duration: 36 frames)
- **PAUSE AFTER:** MICRO pause (3 frames / 100ms silence before next beat)

- **WHAT APPEARS NOW:** Select second record at index5; prior decoded item persists.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “Now the second record.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Select second record at index5; prior decoded item persists.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b']; i=5; active record 2 source header=5, header stop j=6, length=0, payload=[7,7); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_2/A037`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Now the second record.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 038 — `S06:A038` (Frames 2405 – 2458)

- **ANCHOR ID:** `S06:A038`
- **EXACT SPOKEN PHRASE:** “`i` is five.”
- **AUDIO WORD RANGE:** `W0191 .. W0193` (Index 191 .. 193)
- **ACTUAL SPOKEN AUDIO:** `i is 5.`
- **RESOLVED FRAME RANGE:** `[2405, 2458)` (Duration: 53 frames)
- **PAUSE AFTER:** TEACHING pause (20 frames / 667ms silence before next beat)

- **WHAT APPEARS NOW:** Confirm `i = 5` without moving it early.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “`i` is five.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Confirm `i = 5` without moving it early.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b']; i=5; active record 2 source header=5, header stop j=6, length=0, payload=[7,7); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_2/A038`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “`i` is five.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 039 — `S06:A039` (Frames 2458 – 2510)

- **ANCHOR ID:** `S06:A039`
- **EXACT SPOKEN PHRASE:** “Set `j` to five.”
- **AUDIO WORD RANGE:** `W0194 .. W0197` (Index 194 .. 197)
- **ACTUAL SPOKEN AUDIO:** `Set j to 5.`
- **RESOLVED FRAME RANGE:** `[2458, 2510)` (Duration: 52 frames)
- **PAUSE AFTER:** TEACHING pause (11 frames / 367ms silence before next beat)

- **WHAT APPEARS NOW:** Initialize `j = 5` over same header digit.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “Set `j` to five.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Initialize `j = 5` over same header digit.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b']; i=5; active record 2 source header=5, header stop j=6, length=0, payload=[7,7); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_2/A039`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / COUNT_UPDATE only after spoken state, then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Set `j` to five.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 040 — `S06:A040` (Frames 2510 – 2582)

- **ANCHOR ID:** `S06:A040`
- **EXACT SPOKEN PHRASE:** “At index five ... we have zero.”
- **AUDIO WORD RANGE:** `W0198 .. W0203` (Index 198 .. 203)
- **ACTUAL SPOKEN AUDIO:** `At index 5, we have 0.`
- **RESOLVED FRAME RANGE:** `[2510, 2582)` (Duration: 72 frames)
- **PAUSE AFTER:** NONE pause (0 frames / 0ms silence before next beat)

- **WHAT APPEARS NOW:** Read digit `0` at cell5 as header text.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “At index five ... we have zero.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Read digit `0` at cell5 as header text.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b']; i=5; active record 2 source header=5, header stop j=6, length=0, payload=[7,7); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_2/A040`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “At index five ... we have zero.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 041 — `S06:A041` (Frames 2582 – 2701)

- **ANCHOR ID:** `S06:A041`
- **EXACT SPOKEN PHRASE:** “At index six ... we find the header hash.”
- **AUDIO WORD RANGE:** `W0204 .. W0211` (Index 204 .. 211)
- **ACTUAL SPOKEN AUDIO:** `At index 6, we find the header hash.`
- **RESOLVED FRAME RANGE:** `[2582, 2701)` (Duration: 119 frames)
- **PAUSE AFTER:** MAJOR pause (21 frames / 700ms silence before next beat)

- **WHAT APPEARS NOW:** Move j to cell6; identify that hash as header terminator.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “At index six ... we find the header hash.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Move j to cell6; identify that hash as header terminator.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b']; i=5; active record 2 source header=5, header stop j=6, length=0, payload=[7,7); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_2/A041`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** QUERY → POINTER_MOVE → SETTLE; one pointer at a time; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “At index six ... we find the header hash.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 042 — `S06:A042` (Frames 2701 – 2754)

- **ANCHOR ID:** `S06:A042`
- **EXACT SPOKEN PHRASE:** “So the length is zero.”
- **AUDIO WORD RANGE:** `W0212 .. W0216` (Index 212 .. 216)
- **ACTUAL SPOKEN AUDIO:** `So the length is 0.`
- **RESOLVED FRAME RANGE:** `[2701, 2754)` (Duration: 53 frames)
- **PAUSE AFTER:** TEACHING pause (18 frames / 600ms silence before next beat)

- **WHAT APPEARS NOW:** Set length numeric 0.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “So the length is zero.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Set length numeric 0.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b']; i=5; active record 2 source header=5, header stop j=6, length=0, payload=[7,7); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_2/A042`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / COUNT_UPDATE only after spoken state, then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “So the length is zero.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 043 — `S06:A043` (Frames 2754 – 2836)

- **ANCHOR ID:** `S06:A043`
- **EXACT SPOKEN PHRASE:** “The payload starts immediately after the hash ...”
- **AUDIO WORD RANGE:** `W0217 .. W0223` (Index 217 .. 223)
- **ACTUAL SPOKEN AUDIO:** `The payload starts immediately after the hash`
- **RESOLVED FRAME RANGE:** `[2754, 2836)` (Duration: 82 frames)
- **PAUSE AFTER:** NONE pause (0 frames / 0ms silence before next beat)

- **WHAT APPEARS NOW:** Highlight first position after hash, at index7.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “The payload starts immediately after the hash ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Highlight first position after hash, at index7.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b']; i=5; active record 2 source header=5, header stop j=6, length=0, payload=[7,7); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_2/A043`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “The payload starts immediately after the hash ...” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 044 — `S06:A044` (Frames 2836 – 2895)

- **ANCHOR ID:** `S06:A044`
- **EXACT SPOKEN PHRASE:** “at index seven.”
- **AUDIO WORD RANGE:** `W0224 .. W0226` (Index 224 .. 226)
- **ACTUAL SPOKEN AUDIO:** `at index 7.`
- **RESOLVED FRAME RANGE:** `[2836, 2895)` (Duration: 59 frames)
- **PAUSE AFTER:** TEACHING pause (13 frames / 433ms silence before next beat)

- **WHAT APPEARS NOW:** Set `start = 7`; state rail updates in place.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “at index seven.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Set `start = 7`; state rail updates in place.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b']; i=5; active record 2 source header=5, header stop j=6, length=0, payload=[7,7); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_2/A044`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / COUNT_UPDATE only after spoken state, then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “at index seven.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 045 — `S06:A045` (Frames 2895 – 2973)

- **ANCHOR ID:** `S06:A045`
- **EXACT SPOKEN PHRASE:** “And end is start plus zero.”
- **AUDIO WORD RANGE:** `W0227 .. W0232` (Index 227 .. 232)
- **ACTUAL SPOKEN AUDIO:** `And end is start plus 0.`
- **RESOLVED FRAME RANGE:** `[2895, 2973)` (Duration: 78 frames)
- **PAUSE AFTER:** TEACHING pause (18 frames / 600ms silence before next beat)

- **WHAT APPEARS NOW:** Build `end = start + 0` without expanding payload.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: calculation x625..1225 y560..890.
- **CAUSE:** Spoken phrase “And end is start plus zero.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Build `end = start + 0` without expanding payload.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b']; i=5; active record 2 source header=5, header stop j=6, length=0, payload=[7,7); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_2/A045`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “And end is start plus zero.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone calculation x625..1225 y560..890; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 046 — `S06:A046` (Frames 2973 – 3040)

- **ANCHOR ID:** `S06:A046`
- **EXACT SPOKEN PHRASE:** “So end is also seven.”
- **AUDIO WORD RANGE:** `W0233 .. W0237` (Index 233 .. 237)
- **ACTUAL SPOKEN AUDIO:** `So end is also 7.`
- **RESOLVED FRAME RANGE:** `[2973, 3040)` (Duration: 67 frames)
- **PAUSE AFTER:** MAJOR pause (22 frames / 733ms silence before next beat)

- **WHAT APPEARS NOW:** Resolve `end = 7`; exclusive empty interval.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “So end is also seven.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Resolve `end = 7`; exclusive empty interval.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b']; i=5; active record 2 source header=5, header stop j=6, length=0, payload=[7,7); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_2/A046`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “So end is also seven.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 047 — `S06:A047` (Frames 3040 – 3103)

- **ANCHOR ID:** `S06:A047`
- **EXACT SPOKEN PHRASE:** “Start and end are the same.”
- **AUDIO WORD RANGE:** `W0238 .. W0243` (Index 238 .. 243)
- **ACTUAL SPOKEN AUDIO:** `Start and end are the same.`
- **RESOLVED FRAME RANGE:** `[3040, 3103)` (Duration: 63 frames)
- **PAUSE AFTER:** TEACHING pause (14 frames / 467ms silence before next beat)

- **WHAT APPEARS NOW:** Show `[7,7)` zero-width payload bracket at boundary; no character selected.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “Start and end are the same.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Show `[7,7)` zero-width payload bracket at boundary; no character selected.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b']; i=5; active record 2 source header=5, header stop j=6, length=0, payload=[7,7); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_2/A047`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Start and end are the same.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 048 — `S06:A048` (Frames 3103 – 3169)

- **ANCHOR ID:** `S06:A048`
- **EXACT SPOKEN PHRASE:** “That means the payload is empty.”
- **AUDIO WORD RANGE:** `W0244 .. W0249` (Index 244 .. 249)
- **ACTUAL SPOKEN AUDIO:** `That means the payload is empty.`
- **RESOLVED FRAME RANGE:** `[3103, 3169)` (Duration: 66 frames)
- **PAUSE AFTER:** TEACHING pause (10 frames / 333ms silence before next beat)

- **WHAT APPEARS NOW:** Resolve payload as literal empty string `""` (NOT missing output).
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: calculation x625..1225 y560..890.
- **CAUSE:** Spoken phrase “That means the payload is empty.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Resolve payload as literal empty string `""` (NOT missing output).; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b']; i=5; active record 2 source header=5, header stop j=6, length=0, payload=[7,7); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_2/A048`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “That means the payload is empty.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone calculation x625..1225 y560..890; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 049 — `S06:A049` (Frames 3169 – 3270)

- **ANCHOR ID:** `S06:A049`
- **EXACT SPOKEN PHRASE:** “But we still append an empty string to our result.”
- **AUDIO WORD RANGE:** `W0250 .. W0259` (Index 250 .. 259)
- **ACTUAL SPOKEN AUDIO:** `But we still append an empty string to our result.`
- **RESOLVED FRAME RANGE:** `[3169, 3270)` (Duration: 101 frames)
- **PAUSE AFTER:** MAJOR pause (22 frames / 733ms silence before next beat)

- **WHAT APPEARS NOW:** Append `""` to result list in second slot, preserving emptiness.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “But we still append an empty string to our result.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Append `""` to result list in second slot, preserving emptiness.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=5; active record 2 source header=5, header stop j=6, length=0, payload=[7,7); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_2/A049`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** COPY / APPEND (source persists), then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “But we still append an empty string to our result.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 050 — `S06:A050` (Frames 3270 – 3314)

- **ANCHOR ID:** `S06:A050`
- **EXACT SPOKEN PHRASE:** “We must not skip it.”
- **AUDIO WORD RANGE:** `W0260 .. W0264` (Index 260 .. 264)
- **ACTUAL SPOKEN AUDIO:** `We must not skip it.`
- **RESOLVED FRAME RANGE:** `[3270, 3314)` (Duration: 44 frames)
- **PAUSE AFTER:** NATURAL pause (6 frames / 200ms silence before next beat)

- **WHAT APPEARS NOW:** Emphasize this output slot exists, not skipped.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “We must not skip it.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Emphasize this output slot exists, not skipped.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=5; active record 2 source header=5, header stop j=6, length=0, payload=[7,7); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_2/A050`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “We must not skip it.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 051 — `S06:A051` (Frames 3314 – 3377)

- **ANCHOR ID:** `S06:A051`
- **EXACT SPOKEN PHRASE:** “Now set `i` to seven.”
- **AUDIO WORD RANGE:** `W0265 .. W0269` (Index 265 .. 269)
- **ACTUAL SPOKEN AUDIO:** `Now set i to 7.`
- **RESOLVED FRAME RANGE:** `[3314, 3377)` (Duration: 63 frames)
- **PAUSE AFTER:** MAJOR pause (22 frames / 733ms silence before next beat)

- **WHAT APPEARS NOW:** Set `i = 7`; points to third header.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “Now set `i` to seven.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Set `i = 7`; points to third header.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 2 source header=5, header stop j=6, length=0, payload=[7,7); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_2/A051`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** QUERY → POINTER_MOVE → SETTLE; one pointer at a time; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Now set `i` to seven.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 052 — `S06:A052` (Frames 3377 – 3425)

- **ANCHOR ID:** `S06:A052`
- **EXACT SPOKEN PHRASE:** “Second record complete.”
- **AUDIO WORD RANGE:** `W0270 .. W0272` (Index 270 .. 272)
- **ACTUAL SPOKEN AUDIO:** `Second record complete.`
- **RESOLVED FRAME RANGE:** `[3377, 3425)` (Duration: 48 frames)
- **PAUSE AFTER:** TEACHING pause (15 frames / 500ms silence before next beat)

- **WHAT APPEARS NOW:** Mark second record complete; two decoded items persist.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “Second record complete.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Mark second record complete; two decoded items persist.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear prior record query/slice focus, keep committed result and i boundary; next record begins only when announced.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 2 source header=5, header stop j=6, length=0, payload=[7,7); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_2/A052`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Second record complete.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 053 — `S06:A053` (Frames 3425 – 3455)

- **ANCHOR ID:** `S06:A053`
- **EXACT SPOKEN PHRASE:** “Next record.”
- **AUDIO WORD RANGE:** `W0273 .. W0274` (Index 273 .. 274)
- **ACTUAL SPOKEN AUDIO:** `Next record.`
- **RESOLVED FRAME RANGE:** `[3425, 3455)` (Duration: 30 frames)
- **PAUSE AFTER:** NATURAL pause (7 frames / 233ms silence before next beat)

- **WHAT APPEARS NOW:** Focus third record header index7, no future result leak.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “Next record.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Focus third record header index7, no future result leak.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_3/A053`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Next record.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 054 — `S06:A054` (Frames 3455 – 3482)

- **ANCHOR ID:** `S06:A054`
- **EXACT SPOKEN PHRASE:** “`i` is seven.”
- **AUDIO WORD RANGE:** `W0275 .. W0277` (Index 275 .. 277)
- **ACTUAL SPOKEN AUDIO:** `i is 7.`
- **RESOLVED FRAME RANGE:** `[3455, 3482)` (Duration: 27 frames)
- **PAUSE AFTER:** MICRO pause (4 frames / 133ms silence before next beat)

- **WHAT APPEARS NOW:** Confirm `i = 7`.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “`i` is seven.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Confirm `i = 7`.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_3/A054`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “`i` is seven.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 055 — `S06:A055` (Frames 3482 – 3535)

- **ANCHOR ID:** `S06:A055`
- **EXACT SPOKEN PHRASE:** “Set `j` to seven.”
- **AUDIO WORD RANGE:** `W0278 .. W0281` (Index 278 .. 281)
- **ACTUAL SPOKEN AUDIO:** `Set j to 7.`
- **RESOLVED FRAME RANGE:** `[3482, 3535)` (Duration: 53 frames)
- **PAUSE AFTER:** NATURAL pause (5 frames / 167ms silence before next beat)

- **WHAT APPEARS NOW:** Set `j = 7`; header scan starts here.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “Set `j` to seven.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Set `j = 7`; header scan starts here.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_3/A055`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** QUERY → POINTER_MOVE → SETTLE; one pointer at a time; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Set `j` to seven.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 056 — `S06:A056` (Frames 3535 – 3647)

- **ANCHOR ID:** `S06:A056`
- **EXACT SPOKEN PHRASE:** “At index seven ... the first digit is one.”
- **AUDIO WORD RANGE:** `W0282 .. W0289` (Index 282 .. 289)
- **ACTUAL SPOKEN AUDIO:** `At index 7. The first digit is 1.`
- **RESOLVED FRAME RANGE:** `[3535, 3647)` (Duration: 112 frames)
- **PAUSE AFTER:** TEACHING pause (9 frames / 300ms silence before next beat)

- **WHAT APPEARS NOW:** Read first header digit `1` at cell7.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “At index seven ... the first digit is one.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Read first header digit `1` at cell7.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_3/A056`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “At index seven ... the first digit is one.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 057 — `S06:A057` (Frames 3647 – 3686)

- **ANCHOR ID:** `S06:A057`
- **EXACT SPOKEN PHRASE:** “Move forward.”
- **AUDIO WORD RANGE:** `W0290 .. W0291` (Index 290 .. 291)
- **ACTUAL SPOKEN AUDIO:** `Move forward.`
- **RESOLVED FRAME RANGE:** `[3647, 3686)` (Duration: 39 frames)
- **PAUSE AFTER:** TEACHING pause (19 frames / 633ms silence before next beat)

- **WHAT APPEARS NOW:** Advance `j` to index8 as distinct comparison/move.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “Move forward.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Advance `j` to index8 as distinct comparison/move.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_3/A057`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Move forward.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 058 — `S06:A058` (Frames 3686 – 3753)

- **ANCHOR ID:** `S06:A058`
- **EXACT SPOKEN PHRASE:** “At index eight ... another one.”
- **AUDIO WORD RANGE:** `W0292 .. W0296` (Index 292 .. 296)
- **ACTUAL SPOKEN AUDIO:** `At index 8, another one.`
- **RESOLVED FRAME RANGE:** `[3686, 3753)` (Duration: 67 frames)
- **PAUSE AFTER:** TEACHING pause (13 frames / 433ms silence before next beat)

- **WHAT APPEARS NOW:** Read second header digit `1` at cell8; do not stop at first digit.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “At index eight ... another one.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Read second header digit `1` at cell8; do not stop at first digit.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_3/A058`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “At index eight ... another one.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 059 — `S06:A059` (Frames 3753 – 3797)

- **ANCHOR ID:** `S06:A059`
- **EXACT SPOKEN PHRASE:** “Move forward again.”
- **AUDIO WORD RANGE:** `W0297 .. W0299` (Index 297 .. 299)
- **ACTUAL SPOKEN AUDIO:** `Move forward again.`
- **RESOLVED FRAME RANGE:** `[3753, 3797)` (Duration: 44 frames)
- **PAUSE AFTER:** TEACHING pause (13 frames / 433ms silence before next beat)

- **WHAT APPEARS NOW:** Advance `j` to index9 as distinct comparison/move.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “Move forward again.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Advance `j` to index9 as distinct comparison/move.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_3/A059`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Move forward again.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 060 — `S06:A060` (Frames 3797 – 3903)

- **ANCHOR ID:** `S06:A060`
- **EXACT SPOKEN PHRASE:** “At index nine ... we find the hash.”
- **AUDIO WORD RANGE:** `W0300 .. W0306` (Index 300 .. 306)
- **ACTUAL SPOKEN AUDIO:** `At index 9, we find the hash.`
- **RESOLVED FRAME RANGE:** `[3797, 3903)` (Duration: 106 frames)
- **PAUSE AFTER:** MAJOR pause (22 frames / 733ms silence before next beat)

- **WHAT APPEARS NOW:** Read `#` at index9 and stop header scan.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “At index nine ... we find the hash.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Read `#` at index9 and stop header scan.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_3/A060`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** QUERY → POINTER_MOVE → SETTLE; one pointer at a time; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “At index nine ... we find the hash.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 061 — `S06:A061` (Frames 3903 – 3994)

- **ANCHOR ID:** `S06:A061`
- **EXACT SPOKEN PHRASE:** “So our length header contains two digits.”
- **AUDIO WORD RANGE:** `W0307 .. W0313` (Index 307 .. 313)
- **ACTUAL SPOKEN AUDIO:** `So our length header contains two digits.`
- **RESOLVED FRAME RANGE:** `[3903, 3994)` (Duration: 91 frames)
- **PAUSE AFTER:** TEACHING pause (17 frames / 567ms silence before next beat)

- **WHAT APPEARS NOW:** Focus header span `[7,9)` with both digits.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “So our length header contains two digits.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Focus header span `[7,9)` with both digits.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_3/A061`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “So our length header contains two digits.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 062 — `S06:A062` (Frames 3994 – 4017)

- **ANCHOR ID:** `S06:A062`
- **EXACT SPOKEN PHRASE:** “One one.”
- **AUDIO WORD RANGE:** `W0314 .. W0315` (Index 314 .. 315)
- **ACTUAL SPOKEN AUDIO:** `1, 1.`
- **RESOLVED FRAME RANGE:** `[3994, 4017)` (Duration: 23 frames)
- **PAUSE AFTER:** NATURAL pause (5 frames / 167ms silence before next beat)

- **WHAT APPEARS NOW:** Read `11` as two-digit header text.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “One one.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Read `11` as two-digit header text.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_3/A062`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “One one.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 063 — `S06:A063` (Frames 4017 – 4067)

- **ANCHOR ID:** `S06:A063`
- **EXACT SPOKEN PHRASE:** “Convert it to an integer.”
- **AUDIO WORD RANGE:** `W0316 .. W0320` (Index 316 .. 320)
- **ACTUAL SPOKEN AUDIO:** `Convert it to an integer.`
- **RESOLVED FRAME RANGE:** `[4017, 4067)` (Duration: 50 frames)
- **PAUSE AFTER:** TEACHING pause (12 frames / 400ms silence before next beat)

- **WHAT APPEARS NOW:** Convert text `"11"` into integer length value.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “Convert it to an integer.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Convert text `"11"` into integer length value.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_3/A063`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Convert it to an integer.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 064 — `S06:A064` (Frames 4067 – 4112)

- **ANCHOR ID:** `S06:A064`
- **EXACT SPOKEN PHRASE:** “Length is eleven.”
- **AUDIO WORD RANGE:** `W0321 .. W0323` (Index 321 .. 323)
- **ACTUAL SPOKEN AUDIO:** `Length is 11.`
- **RESOLVED FRAME RANGE:** `[4067, 4112)` (Duration: 45 frames)
- **PAUSE AFTER:** TEACHING pause (13 frames / 433ms silence before next beat)

- **WHAT APPEARS NOW:** Set stable `length = 11`.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “Length is eleven.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Set stable `length = 11`.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_3/A064`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / COUNT_UPDATE only after spoken state, then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Length is eleven.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 065 — `S06:A065` (Frames 4112 – 4197)

- **ANCHOR ID:** `S06:A065`
- **EXACT SPOKEN PHRASE:** “Now the payload starts after index nine.”
- **AUDIO WORD RANGE:** `W0324 .. W0330` (Index 324 .. 330)
- **ACTUAL SPOKEN AUDIO:** `Now the payload starts after index 9.`
- **RESOLVED FRAME RANGE:** `[4112, 4197)` (Duration: 85 frames)
- **PAUSE AFTER:** TEACHING pause (13 frames / 433ms silence before next beat)

- **WHAT APPEARS NOW:** Focus location one past header hash at cell10.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “Now the payload starts after index nine.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Focus location one past header hash at cell10.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_3/A065`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Now the payload starts after index nine.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 066 — `S06:A066` (Frames 4197 – 4241)

- **ANCHOR ID:** `S06:A066`
- **EXACT SPOKEN PHRASE:** “So start is ten.”
- **AUDIO WORD RANGE:** `W0331 .. W0334` (Index 331 .. 334)
- **ACTUAL SPOKEN AUDIO:** `So start is 10.`
- **RESOLVED FRAME RANGE:** `[4197, 4241)` (Duration: 44 frames)
- **PAUSE AFTER:** TEACHING pause (13 frames / 433ms silence before next beat)

- **WHAT APPEARS NOW:** Set `start = 10`.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “So start is ten.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Set `start = 10`.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_3/A066`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / COUNT_UPDATE only after spoken state, then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “So start is ten.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 067 — `S06:A067` (Frames 4241 – 4307)

- **ANCHOR ID:** `S06:A067`
- **EXACT SPOKEN PHRASE:** “End is ten plus eleven ...”
- **AUDIO WORD RANGE:** `W0335 .. W0339` (Index 335 .. 339)
- **ACTUAL SPOKEN AUDIO:** `End is 10 plus 11.`
- **RESOLVED FRAME RANGE:** `[4241, 4307)` (Duration: 66 frames)
- **PAUSE AFTER:** TEACHING pause (20 frames / 667ms silence before next beat)

- **WHAT APPEARS NOW:** Build `end = 10 + 11` in calculation stage.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: calculation x625..1225 y560..890.
- **CAUSE:** Spoken phrase “End is ten plus eleven ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Build `end = 10 + 11` in calculation stage.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_3/A067`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “End is ten plus eleven ...” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone calculation x625..1225 y560..890; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 068 — `S06:A068` (Frames 4307 – 4355)

- **ANCHOR ID:** `S06:A068`
- **EXACT SPOKEN PHRASE:** “which is twenty-one.”
- **AUDIO WORD RANGE:** `W0340 .. W0342` (Index 340 .. 342)
- **ACTUAL SPOKEN AUDIO:** `Which is 21.`
- **RESOLVED FRAME RANGE:** `[4307, 4355)` (Duration: 48 frames)
- **PAUSE AFTER:** MAJOR pause (23 frames / 767ms silence before next beat)

- **WHAT APPEARS NOW:** Resolve `end = 21` as exclusive boundary.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “which is twenty-one.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Resolve `end = 21` as exclusive boundary.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_3/A068`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “which is twenty-one.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 069 — `S06:A069` (Frames 4355 – 4441)

- **ANCHOR ID:** `S06:A069`
- **EXACT SPOKEN PHRASE:** “Now read exactly eleven characters.”
- **AUDIO WORD RANGE:** `W0343 .. W0347` (Index 343 .. 347)
- **ACTUAL SPOKEN AUDIO:** `Now read exactly 11 characters.`
- **RESOLVED FRAME RANGE:** `[4355, 4441)` (Duration: 86 frames)
- **PAUSE AFTER:** TEACHING pause (13 frames / 433ms silence before next beat)

- **WHAT APPEARS NOW:** Start eleven-character payload read, highlight exact interval and no future output.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “Now read exactly eleven characters.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Start eleven-character payload read, highlight exact interval and no future output.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_3/A069`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Now read exactly eleven characters.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 070 — `S06:A070` (Frames 4441 – 4477)

- **ANCHOR ID:** `S06:A070`
- **EXACT SPOKEN PHRASE:** “From index ten ...”
- **AUDIO WORD RANGE:** `W0348 .. W0350` (Index 348 .. 350)
- **ACTUAL SPOKEN AUDIO:** `From index 10`
- **RESOLVED FRAME RANGE:** `[4441, 4477)` (Duration: 36 frames)
- **PAUSE AFTER:** NONE pause (0 frames / 0ms silence before next beat)

- **WHAT APPEARS NOW:** Open substring at index10 in top tape row.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “From index ten ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Open substring at index10 in top tape row.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_3/A070`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “From index ten ...” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 071 — `S06:A071` (Frames 4477 – 4600)

- **ANCHOR ID:** `S06:A071`
- **EXACT SPOKEN PHRASE:** “up to, but not including, index twenty-one.”
- **AUDIO WORD RANGE:** `W0351 .. W0357` (Index 351 .. 357)
- **ACTUAL SPOKEN AUDIO:** `up to, but not including, index 21.`
- **RESOLVED FRAME RANGE:** `[4477, 4600)` (Duration: 123 frames)
- **PAUSE AFTER:** TEACHING pause (20 frames / 667ms silence before next beat)

- **WHAT APPEARS NOW:** Bracket entire `[10,21)` across tape row break at 12→13 without treating row break as data boundary.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “up to, but not including, index twenty-one.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Bracket entire `[10,21)` across tape row break at 12→13 without treating row break as data boundary.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_3/A071`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “up to, but not including, index twenty-one.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 072 — `S06:A072` (Frames 4600 – 4645)

- **ANCHOR ID:** `S06:A072`
- **EXACT SPOKEN PHRASE:** “That gives us ...”
- **AUDIO WORD RANGE:** `W0358 .. W0360` (Index 358 .. 360)
- **ACTUAL SPOKEN AUDIO:** `That gives us`
- **RESOLVED FRAME RANGE:** `[4600, 4645)` (Duration: 45 frames)
- **PAUSE AFTER:** NONE pause (0 frames / 0ms silence before next beat)

- **WHAT APPEARS NOW:** Keep decoded-result destination hidden while the selected `[10,21)` payload is focused; await spoken result literal.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “That gives us ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Keep decoded-result destination hidden while the selected `[10,21)` payload is focused; await spoken result literal.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_3/A072`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “That gives us ...” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 073 — `S06:A073` (Frames 4645 – 4694)

- **ANCHOR ID:** `S06:A073`
- **EXACT SPOKEN PHRASE:** “hello world.”
- **AUDIO WORD RANGE:** `W0361 .. W0362` (Index 361 .. 362)
- **ACTUAL SPOKEN AUDIO:** `Hello World.`
- **RESOLVED FRAME RANGE:** `[4645, 4694)` (Duration: 49 frames)
- **PAUSE AFTER:** TEACHING pause (19 frames / 633ms silence before next beat)

- **WHAT APPEARS NOW:** Focus resolved literal payload text `"hello world"` (11 characters) after slice.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “hello world.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Focus resolved literal payload text `"hello world"` (11 characters) after slice.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_3/A073`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “hello world.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 074 — `S06:A074` (Frames 4694 – 4757)

- **ANCHOR ID:** `S06:A074`
- **EXACT SPOKEN PHRASE:** “Including the space between the words.”
- **AUDIO WORD RANGE:** `W0363 .. W0368` (Index 363 .. 368)
- **ACTUAL SPOKEN AUDIO:** `Including the space between the words.`
- **RESOLVED FRAME RANGE:** `[4694, 4757)` (Duration: 63 frames)
- **PAUSE AFTER:** TEACHING pause (10 frames / 333ms silence before next beat)

- **WHAT APPEARS NOW:** Visibly highlight the actual single space at global index15 as part of payload.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “Including the space between the words.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Visibly highlight the actual single space at global index15 as part of payload.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_3/A074`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Including the space between the words.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 075 — `S06:A075` (Frames 4757 – 4820)

- **ANCHOR ID:** `S06:A075`
- **EXACT SPOKEN PHRASE:** “Append hello world to the result.”
- **AUDIO WORD RANGE:** `W0369 .. W0374` (Index 369 .. 374)
- **ACTUAL SPOKEN AUDIO:** `Append Hello World to the result.`
- **RESOLVED FRAME RANGE:** `[4757, 4820)` (Duration: 63 frames)
- **PAUSE AFTER:** TEACHING pause (13 frames / 433ms silence before next beat)

- **WHAT APPEARS NOW:** Append `"hello world"` as third output item, after slice resolves.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “Append hello world to the result.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Append `"hello world"` as third output item, after slice resolves.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world']; i=7; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_3/A075`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** COPY / APPEND (source persists), then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Append hello world to the result.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 076 — `S06:A076` (Frames 4820 – 4886)

- **ANCHOR ID:** `S06:A076`
- **EXACT SPOKEN PHRASE:** “Now move `i` to twenty-one.”
- **AUDIO WORD RANGE:** `W0375 .. W0379` (Index 375 .. 379)
- **ACTUAL SPOKEN AUDIO:** `Now move i to 21.`
- **RESOLVED FRAME RANGE:** `[4820, 4886)` (Duration: 66 frames)
- **PAUSE AFTER:** MAJOR pause (21 frames / 700ms silence before next beat)

- **WHAT APPEARS NOW:** Set `i = 21`; pointer moves to fourth header.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “Now move `i` to twenty-one.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Set `i = 21`; pointer moves to fourth header.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world']; i=21; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_3/A076`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** QUERY → POINTER_MOVE → SETTLE; one pointer at a time; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Now move `i` to twenty-one.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 077 — `S06:A077` (Frames 4886 – 4939)

- **ANCHOR ID:** `S06:A077`
- **EXACT SPOKEN PHRASE:** “Third record complete.”
- **AUDIO WORD RANGE:** `W0380 .. W0382` (Index 380 .. 382)
- **ACTUAL SPOKEN AUDIO:** `Third record complete.`
- **RESOLVED FRAME RANGE:** `[4886, 4939)` (Duration: 53 frames)
- **PAUSE AFTER:** TEACHING pause (20 frames / 667ms silence before next beat)

- **WHAT APPEARS NOW:** Mark third record complete; output list contains three strings.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “Third record complete.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Mark third record complete; output list contains three strings.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear prior record query/slice focus, keep committed result and i boundary; next record begins only when announced.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world']; i=21; active record 3 source header=7, header stop j=9, length=11, payload=[10,21); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_3/A077`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Third record complete.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 078 — `S06:A078` (Frames 4939 – 4992)

- **ANCHOR ID:** `S06:A078`
- **EXACT SPOKEN PHRASE:** “One record remains.”
- **AUDIO WORD RANGE:** `W0383 .. W0385` (Index 383 .. 385)
- **ACTUAL SPOKEN AUDIO:** `One record remains.`
- **RESOLVED FRAME RANGE:** `[4939, 4992)` (Duration: 53 frames)
- **PAUSE AFTER:** TEACHING pause (15 frames / 500ms silence before next beat)

- **WHAT APPEARS NOW:** Focus final record header at global index21.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “One record remains.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Focus final record header at global index21.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world']; i=21; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_4/A078`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “One record remains.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 079 — `S06:A079` (Frames 4992 – 5057)

- **ANCHOR ID:** `S06:A079`
- **EXACT SPOKEN PHRASE:** “At index twenty-one ...”
- **AUDIO WORD RANGE:** `W0386 .. W0388` (Index 386 .. 388)
- **ACTUAL SPOKEN AUDIO:** `At index 21,`
- **RESOLVED FRAME RANGE:** `[4992, 5057)` (Duration: 65 frames)
- **PAUSE AFTER:** MAJOR pause (28 frames / 933ms silence before next beat)

- **WHAT APPEARS NOW:** Set/focus `i = 21`.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “At index twenty-one ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Set/focus `i = 21`.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world']; i=21; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_4/A079`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “At index twenty-one ...” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 080 — `S06:A080` (Frames 5057 – 5114)

- **ANCHOR ID:** `S06:A080`
- **EXACT SPOKEN PHRASE:** “we have the digit two.”
- **AUDIO WORD RANGE:** `W0389 .. W0393` (Index 389 .. 393)
- **ACTUAL SPOKEN AUDIO:** `we have the digit 2.`
- **RESOLVED FRAME RANGE:** `[5057, 5114)` (Duration: 57 frames)
- **PAUSE AFTER:** MAJOR pause (24 frames / 800ms silence before next beat)

- **WHAT APPEARS NOW:** Read digit `2` at cell21 as final length header.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “we have the digit two.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Read digit `2` at cell21 as final length header.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world']; i=21; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_4/A080`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “we have the digit two.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 081 — `S06:A081` (Frames 5114 – 5157)

- **ANCHOR ID:** `S06:A081`
- **EXACT SPOKEN PHRASE:** “Move `j` forward.”
- **AUDIO WORD RANGE:** `W0394 .. W0396` (Index 394 .. 396)
- **ACTUAL SPOKEN AUDIO:** `Move j forward.`
- **RESOLVED FRAME RANGE:** `[5114, 5157)` (Duration: 43 frames)
- **PAUSE AFTER:** NATURAL pause (8 frames / 267ms silence before next beat)

- **WHAT APPEARS NOW:** Begin/continue j scan toward next header hash, not toward payload.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “Move `j` forward.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Begin/continue j scan toward next header hash, not toward payload.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world']; i=21; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_4/A081`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Move `j` forward.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 082 — `S06:A082` (Frames 5157 – 5215)

- **ANCHOR ID:** `S06:A082`
- **EXACT SPOKEN PHRASE:** “At index twenty-two ...”
- **AUDIO WORD RANGE:** `W0397 .. W0399` (Index 397 .. 399)
- **ACTUAL SPOKEN AUDIO:** `At index 22.`
- **RESOLVED FRAME RANGE:** `[5157, 5215)` (Duration: 58 frames)
- **PAUSE AFTER:** TEACHING pause (20 frames / 667ms silence before next beat)

- **WHAT APPEARS NOW:** Advance j to cell22, inspect header hash.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “At index twenty-two ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Advance j to cell22, inspect header hash.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world']; i=21; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_4/A082`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** QUERY → POINTER_MOVE → SETTLE; one pointer at a time; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “At index twenty-two ...” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 083 — `S06:A083` (Frames 5215 – 5277)

- **ANCHOR ID:** `S06:A083`
- **EXACT SPOKEN PHRASE:** “we find the header hash.”
- **AUDIO WORD RANGE:** `W0400 .. W0404` (Index 400 .. 404)
- **ACTUAL SPOKEN AUDIO:** `We find the header hash.`
- **RESOLVED FRAME RANGE:** `[5215, 5277)` (Duration: 62 frames)
- **PAUSE AFTER:** TEACHING pause (11 frames / 367ms silence before next beat)

- **WHAT APPEARS NOW:** Stop scanning on `#` at index22.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “we find the header hash.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Stop scanning on `#` at index22.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world']; i=21; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_4/A083`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “we find the header hash.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 084 — `S06:A084` (Frames 5277 – 5323)

- **ANCHOR ID:** `S06:A084`
- **EXACT SPOKEN PHRASE:** “So length is two.”
- **AUDIO WORD RANGE:** `W0405 .. W0408` (Index 405 .. 408)
- **ACTUAL SPOKEN AUDIO:** `So length is 2.`
- **RESOLVED FRAME RANGE:** `[5277, 5323)` (Duration: 46 frames)
- **PAUSE AFTER:** TEACHING pause (15 frames / 500ms silence before next beat)

- **WHAT APPEARS NOW:** Set numeric `length = 2` after parsing header text.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “So length is two.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Set numeric `length = 2` after parsing header text.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world']; i=21; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_4/A084`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “So length is two.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 085 — `S06:A085` (Frames 5323 – 5410)

- **ANCHOR ID:** `S06:A085`
- **EXACT SPOKEN PHRASE:** “The payload begins at index twenty-three.”
- **AUDIO WORD RANGE:** `W0409 .. W0414` (Index 409 .. 414)
- **ACTUAL SPOKEN AUDIO:** `The payload begins at index 23.`
- **RESOLVED FRAME RANGE:** `[5323, 5410)` (Duration: 87 frames)
- **PAUSE AFTER:** TEACHING pause (18 frames / 600ms silence before next beat)

- **WHAT APPEARS NOW:** Set `start = 23` after header hash.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “The payload begins at index twenty-three.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Set `start = 23` after header hash.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world']; i=21; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_4/A085`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / COUNT_UPDATE only after spoken state, then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “The payload begins at index twenty-three.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 086 — `S06:A086` (Frames 5410 – 5491)

- **ANCHOR ID:** `S06:A086`
- **EXACT SPOKEN PHRASE:** “End is twenty-three plus two ...”
- **AUDIO WORD RANGE:** `W0415 .. W0419` (Index 415 .. 419)
- **ACTUAL SPOKEN AUDIO:** `End is 23 plus 2.`
- **RESOLVED FRAME RANGE:** `[5410, 5491)` (Duration: 81 frames)
- **PAUSE AFTER:** TEACHING pause (20 frames / 667ms silence before next beat)

- **WHAT APPEARS NOW:** Build `end = 23 + 2` in calculation stage.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: calculation x625..1225 y560..890.
- **CAUSE:** Spoken phrase “End is twenty-three plus two ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Build `end = 23 + 2` in calculation stage.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world']; i=21; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_4/A086`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “End is twenty-three plus two ...” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone calculation x625..1225 y560..890; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 087 — `S06:A087` (Frames 5491 – 5530)

- **ANCHOR ID:** `S06:A087`
- **EXACT SPOKEN PHRASE:** “twenty-five.”
- **AUDIO WORD RANGE:** `W0420 .. W0420` (Index 420 .. 420)
- **ACTUAL SPOKEN AUDIO:** `25.`
- **RESOLVED FRAME RANGE:** `[5491, 5530)` (Duration: 39 frames)
- **PAUSE AFTER:** TEACHING pause (17 frames / 567ms silence before next beat)

- **WHAT APPEARS NOW:** Resolve `end = 25` as exclusive tape end boundary (not a valid rendered cell).
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “twenty-five.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Resolve `end = 25` as exclusive tape end boundary (not a valid rendered cell).; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world']; i=21; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_4/A087`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “twenty-five.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 088 — `S06:A088` (Frames 5530 – 5606)

- **ANCHOR ID:** `S06:A088`
- **EXACT SPOKEN PHRASE:** “Now read two characters.”
- **AUDIO WORD RANGE:** `W0421 .. W0424` (Index 421 .. 424)
- **ACTUAL SPOKEN AUDIO:** `Now read two characters.`
- **RESOLVED FRAME RANGE:** `[5530, 5606)` (Duration: 76 frames)
- **PAUSE AFTER:** MAJOR pause (29 frames / 967ms silence before next beat)

- **WHAT APPEARS NOW:** Activate exact two-character payload interval `[23,25)`.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “Now read two characters.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Activate exact two-character payload interval `[23,25)`.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world']; i=21; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_4/A088`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Now read two characters.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 089 — `S06:A089` (Frames 5606 – 5672)

- **ANCHOR ID:** `S06:A089`
- **EXACT SPOKEN PHRASE:** “Index twenty-three gives four.”
- **AUDIO WORD RANGE:** `W0425 .. W0428` (Index 425 .. 428)
- **ACTUAL SPOKEN AUDIO:** `Index 23 gives 4.`
- **RESOLVED FRAME RANGE:** `[5606, 5672)` (Duration: 66 frames)
- **PAUSE AFTER:** TEACHING pause (14 frames / 467ms silence before next beat)

- **WHAT APPEARS NOW:** Read digit `4` at global index23 as first payload character.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “Index twenty-three gives four.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Read digit `4` at global index23 as first payload character.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world']; i=21; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_4/A089`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Index twenty-three gives four.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 090 — `S06:A090` (Frames 5672 – 5750)

- **ANCHOR ID:** `S06:A090`
- **EXACT SPOKEN PHRASE:** “Index twenty-four gives two.”
- **AUDIO WORD RANGE:** `W0429 .. W0432` (Index 429 .. 432)
- **ACTUAL SPOKEN AUDIO:** `Index 24 gives 2.`
- **RESOLVED FRAME RANGE:** `[5672, 5750)` (Duration: 78 frames)
- **PAUSE AFTER:** TEACHING pause (12 frames / 400ms silence before next beat)

- **WHAT APPEARS NOW:** Read digit `2` at global index24 as second payload character.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “Index twenty-four gives two.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Read digit `2` at global index24 as second payload character.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world']; i=21; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_4/A090`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Index twenty-four gives two.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 091 — `S06:A091` (Frames 5750 – 5795)

- **ANCHOR ID:** `S06:A091`
- **EXACT SPOKEN PHRASE:** “Together ...”
- **AUDIO WORD RANGE:** `W0433 .. W0433` (Index 433 .. 433)
- **ACTUAL SPOKEN AUDIO:** `Together.`
- **RESOLVED FRAME RANGE:** `[5750, 5795)` (Duration: 45 frames)
- **PAUSE AFTER:** MAJOR pause (32 frames / 1067ms silence before next beat)

- **WHAT APPEARS NOW:** Focus completed payload slice, not integer numeric 42.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496.
- **CAUSE:** Spoken phrase “Together ...” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Focus completed payload slice, not integer numeric 42.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world']; i=21; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_4/A091`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Together ...” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone tape 0..24: row A x185..1701 y225..316; row B x185..1583 y405..496; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 092 — `S06:A092` (Frames 5795 – 5856)

- **ANCHOR ID:** `S06:A092`
- **EXACT SPOKEN PHRASE:** “the string four two.”
- **AUDIO WORD RANGE:** `W0434 .. W0437` (Index 434 .. 437)
- **ACTUAL SPOKEN AUDIO:** `The string for 2.`
- **RESOLVED FRAME RANGE:** `[5795, 5856)` (Duration: 61 frames)
- **PAUSE AFTER:** TEACHING pause (14 frames / 467ms silence before next beat)

- **WHAT APPEARS NOW:** Resolve decoded string `"42"` with two chars.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: calculation x625..1225 y560..890.
- **CAUSE:** Spoken phrase “the string four two.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Resolve decoded string `"42"` with two chars.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world']; i=21; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_4/A092`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “the string four two.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone calculation x625..1225 y560..890; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 093 — `S06:A093` (Frames 5856 – 5903)

- **ANCHOR ID:** `S06:A093`
- **EXACT SPOKEN PHRASE:** “Append it to our result.”
- **AUDIO WORD RANGE:** `W0438 .. W0442` (Index 438 .. 442)
- **ACTUAL SPOKEN AUDIO:** `Append it to our result.`
- **RESOLVED FRAME RANGE:** `[5856, 5903)` (Duration: 47 frames)
- **PAUSE AFTER:** TEACHING pause (10 frames / 333ms silence before next beat)

- **WHAT APPEARS NOW:** Append `"42"` as fourth result item.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “Append it to our result.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Append `"42"` as fourth result item.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world', '42']; i=21; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_4/A093`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** COPY / APPEND (source persists), then SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Append it to our result.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 094 — `S06:A094` (Frames 5903 – 5972)

- **ANCHOR ID:** `S06:A094`
- **EXACT SPOKEN PHRASE:** “Now set `i` to twenty-five.”
- **AUDIO WORD RANGE:** `W0443 .. W0447` (Index 443 .. 447)
- **ACTUAL SPOKEN AUDIO:** `Now set i to 25.`
- **RESOLVED FRAME RANGE:** `[5903, 5972)` (Duration: 69 frames)
- **PAUSE AFTER:** TEACHING pause (13 frames / 433ms silence before next beat)

- **WHAT APPEARS NOW:** Set `i = 25` at right edge after last cell; do not render index25 as a data cell.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “Now set `i` to twenty-five.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Set `i = 25` at right edge after last cell; do not render index25 as a data cell.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world', '42']; i=25; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_4/A094`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** QUERY → POINTER_MOVE → SETTLE; one pointer at a time; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Now set `i` to twenty-five.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 095 — `S06:A095` (Frames 5972 – 6095)

- **ANCHOR ID:** `S06:A095`
- **EXACT SPOKEN PHRASE:** “And twenty-five is the length of our complete encoded string.”
- **AUDIO WORD RANGE:** `W0448 .. W0457` (Index 448 .. 457)
- **ACTUAL SPOKEN AUDIO:** `And 25 is the length of our complete encoded string.`
- **RESOLVED FRAME RANGE:** `[5972, 6095)` (Duration: 123 frames)
- **PAUSE AFTER:** TEACHING pause (10 frames / 333ms silence before next beat)

- **WHAT APPEARS NOW:** Emphasize tape length equals 25; i at exclusive terminal boundary.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: state x125..595 y555..910.
- **CAUSE:** Spoken phrase “And twenty-five is the length of our complete encoded string.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Emphasize tape length equals 25; i at exclusive terminal boundary.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world', '42']; i=25; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_4/A095`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “And twenty-five is the length of our complete encoded string.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone state x125..595 y555..910; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 096 — `S06:A096` (Frames 6095 – 6176)

- **ANCHOR ID:** `S06:A096`
- **EXACT SPOKEN PHRASE:** “So there is nothing left to decode.”
- **AUDIO WORD RANGE:** `W0458 .. W0464` (Index 458 .. 464)
- **ACTUAL SPOKEN AUDIO:** `So there is nothing left to decode.`
- **RESOLVED FRAME RANGE:** `[6095, 6176)` (Duration: 81 frames)
- **PAUSE AFTER:** TEACHING pause (15 frames / 500ms silence before next beat)

- **WHAT APPEARS NOW:** Show that no next header exists; no fifth record invented.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: calculation x625..1225 y560..890.
- **CAUSE:** Spoken phrase “So there is nothing left to decode.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Show that no next header exists; no fifth record invented.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world', '42']; i=25; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_4/A096`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** REVEAL / DRAW_RELATION → SETTLE; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “So there is nothing left to decode.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone calculation x625..1225 y560..890; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 097 — `S06:A097` (Frames 6176 – 6203)

- **ANCHOR ID:** `S06:A097`
- **EXACT SPOKEN PHRASE:** “We stop.”
- **AUDIO WORD RANGE:** `W0465 .. W0466` (Index 465 .. 466)
- **ACTUAL SPOKEN AUDIO:** `We stop.`
- **RESOLVED FRAME RANGE:** `[6176, 6203)` (Duration: 27 frames)
- **PAUSE AFTER:** TEACHING pause (10 frames / 333ms silence before next beat)

- **WHAT APPEARS NOW:** Settle loop termination; current result remains four items.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “We stop.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `active tape interval + state` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Settle loop termination; current result remains four items.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear prior record query/slice focus, keep committed result and i boundary; next record begins only when announced.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world', '42']; i=25; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RECORD_4/A097`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “We stop.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 098 — `S06:A098` (Frames 6203 – 6250)

- **ANCHOR ID:** `S06:A098`
- **EXACT SPOKEN PHRASE:** “Now look at our result.”
- **AUDIO WORD RANGE:** `W0467 .. W0471` (Index 467 .. 471)
- **ACTUAL SPOKEN AUDIO:** `Now look at our result.`
- **RESOLVED FRAME RANGE:** `[6203, 6250)` (Duration: 47 frames)
- **PAUSE AFTER:** TEACHING pause (14 frames / 467ms silence before next beat)

- **WHAT APPEARS NOW:** Move full result list into primary focus without re-encoding.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “Now look at our result.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `decoded result list` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Move full result list into primary focus without re-encoding.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world', '42']; i=25; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RESULT_/_CLOSURE/A098`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Now look at our result.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 099 — `S06:A099` (Frames 6250 – 6334)

- **ANCHOR ID:** `S06:A099`
- **EXACT SPOKEN PHRASE:** “First ... A hash B.”
- **AUDIO WORD RANGE:** `W0472 .. W0475` (Index 472 .. 475)
- **ACTUAL SPOKEN AUDIO:** `First. A hash. B.`
- **RESOLVED FRAME RANGE:** `[6250, 6334)` (Duration: 84 frames)
- **PAUSE AFTER:** TEACHING pause (9 frames / 300ms silence before next beat)

- **WHAT APPEARS NOW:** Focus decoded row 0 `"a#b"`.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “First ... A hash B.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `decoded result list` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Focus decoded row 0 `"a#b"`.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world', '42']; i=25; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RESULT_/_CLOSURE/A099`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “First ... A hash B.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 100 — `S06:A100` (Frames 6334 – 6400)

- **ANCHOR ID:** `S06:A100`
- **EXACT SPOKEN PHRASE:** “Second ... an empty string.”
- **AUDIO WORD RANGE:** `W0476 .. W0479` (Index 476 .. 479)
- **ACTUAL SPOKEN AUDIO:** `Second. An empty string.`
- **RESOLVED FRAME RANGE:** `[6334, 6400)` (Duration: 66 frames)
- **PAUSE AFTER:** TEACHING pause (14 frames / 467ms silence before next beat)

- **WHAT APPEARS NOW:** Focus decoded row 1 `""` as a real output element.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “Second ... an empty string.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `decoded result list` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Focus decoded row 1 `""` as a real output element.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world', '42']; i=25; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RESULT_/_CLOSURE/A100`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Second ... an empty string.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 101 — `S06:A101` (Frames 6400 – 6462)

- **ANCHOR ID:** `S06:A101`
- **EXACT SPOKEN PHRASE:** “Third ... hello world.”
- **AUDIO WORD RANGE:** `W0480 .. W0482` (Index 480 .. 482)
- **ACTUAL SPOKEN AUDIO:** `Third. Hello World.`
- **RESOLVED FRAME RANGE:** `[6400, 6462)` (Duration: 62 frames)
- **PAUSE AFTER:** TEACHING pause (19 frames / 633ms silence before next beat)

- **WHAT APPEARS NOW:** Focus decoded row 2 `"hello world"`, space preserved.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “Third ... hello world.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `decoded result list` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Focus decoded row 2 `"hello world"`, space preserved.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world', '42']; i=25; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RESULT_/_CLOSURE/A101`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Third ... hello world.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 102 — `S06:A102` (Frames 6462 – 6528)

- **ANCHOR ID:** `S06:A102`
- **EXACT SPOKEN PHRASE:** “Fourth ... four two.”
- **AUDIO WORD RANGE:** `W0483 .. W0485` (Index 483 .. 485)
- **ACTUAL SPOKEN AUDIO:** `Fourth. For 2.`
- **RESOLVED FRAME RANGE:** `[6462, 6528)` (Duration: 66 frames)
- **PAUSE AFTER:** MAJOR pause (24 frames / 800ms silence before next beat)

- **WHAT APPEARS NOW:** Focus decoded row 3 `"42"`, still a string.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “Fourth ... four two.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `decoded result list` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Focus decoded row 3 `"42"`, still a string.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world', '42']; i=25; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RESULT_/_CLOSURE/A102`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Fourth ... four two.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 103 — `S06:A103` (Frames 6528 – 6636)

- **ANCHOR ID:** `S06:A103`
- **EXACT SPOKEN PHRASE:** “Exactly the same four strings we started with.”
- **AUDIO WORD RANGE:** `W0486 .. W0493` (Index 486 .. 493)
- **ACTUAL SPOKEN AUDIO:** `Exactly the same four strings we started with.`
- **RESOLVED FRAME RANGE:** `[6528, 6636)` (Duration: 108 frames)
- **PAUSE AFTER:** MAJOR pause (25 frames / 833ms silence before next beat)

- **WHAT APPEARS NOW:** Confirm exactly the original four values in the same order.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “Exactly the same four strings we started with.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `decoded result list` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Confirm exactly the original four values in the same order.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world', '42']; i=25; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RESULT_/_CLOSURE/A103`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Exactly the same four strings we started with.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 104 — `S06:A104` (Frames 6636 – 6688)

- **ANCHOR ID:** `S06:A104`
- **EXACT SPOKEN PHRASE:** “Same characters.”
- **AUDIO WORD RANGE:** `W0494 .. W0495` (Index 494 .. 495)
- **ACTUAL SPOKEN AUDIO:** `Same characters.`
- **RESOLVED FRAME RANGE:** `[6636, 6688)` (Duration: 52 frames)
- **PAUSE AFTER:** MAJOR pause (21 frames / 700ms silence before next beat)

- **WHAT APPEARS NOW:** Underline exact character equality across decoded list; no extra characters.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “Same characters.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `decoded result list` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Underline exact character equality across decoded list; no extra characters.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world', '42']; i=25; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RESULT_/_CLOSURE/A104`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Same characters.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 105 — `S06:A105` (Frames 6688 – 6733)

- **ANCHOR ID:** `S06:A105`
- **EXACT SPOKEN PHRASE:** “Same order.”
- **AUDIO WORD RANGE:** `W0496 .. W0497` (Index 496 .. 497)
- **ACTUAL SPOKEN AUDIO:** `Same order.`
- **RESOLVED FRAME RANGE:** `[6688, 6733)` (Duration: 45 frames)
- **PAUSE AFTER:** MAJOR pause (23 frames / 767ms silence before next beat)

- **WHAT APPEARS NOW:** Confirm source order preservation visually.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “Same order.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `decoded result list` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Confirm source order preservation visually.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world', '42']; i=25; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RESULT_/_CLOSURE/A105`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Same order.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 106 — `S06:A106` (Frames 6733 – 6800)

- **ANCHOR ID:** `S06:A106`
- **EXACT SPOKEN PHRASE:** “Same empty string.”
- **AUDIO WORD RANGE:** `W0498 .. W0500` (Index 498 .. 500)
- **ACTUAL SPOKEN AUDIO:** `Same empty string.`
- **RESOLVED FRAME RANGE:** `[6733, 6800)` (Duration: 67 frames)
- **PAUSE AFTER:** MAJOR pause (27 frames / 900ms silence before next beat)

- **WHAT APPEARS NOW:** Confirm empty string entry exists in second position.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “Same empty string.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `decoded result list` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Confirm empty string entry exists in second position.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world', '42']; i=25; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RESULT_/_CLOSURE/A106`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Same empty string.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 107 — `S06:A107` (Frames 6800 – 6838)

- **ANCHOR ID:** `S06:A107`
- **EXACT SPOKEN PHRASE:** “Nothing lost.”
- **AUDIO WORD RANGE:** `W0501 .. W0502` (Index 501 .. 502)
- **ACTUAL SPOKEN AUDIO:** `Nothing lost.`
- **RESOLVED FRAME RANGE:** `[6800, 6838)` (Duration: 38 frames)
- **PAUSE AFTER:** TEACHING pause (15 frames / 500ms silence before next beat)

- **WHAT APPEARS NOW:** Settle the fact that no information was lost.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “Nothing lost.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `decoded result list` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Settle the fact that no information was lost.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world', '42']; i=25; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RESULT_/_CLOSURE/A107`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** ONE semantic teaching action → SETTLE (no decorative animation); causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Nothing lost.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 108 — `S06:A108` (Frames 6838 – 6923)

- **ANCHOR ID:** `S06:A108`
- **EXACT SPOKEN PHRASE:** “That's our complete decode trace.”
- **AUDIO WORD RANGE:** `W0503 .. W0507` (Index 503 .. 507)
- **ACTUAL SPOKEN AUDIO:** `That's our complete decode trace.`
- **RESOLVED FRAME RANGE:** `[6838, 6923)` (Duration: 85 frames)
- **PAUSE AFTER:** MAJOR pause (22 frames / 733ms silence before next beat)

- **WHAT APPEARS NOW:** Complete decoder trace and clean temporary equation/j-pointer focus.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “That's our complete decode trace.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `decoded result list` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** Complete decoder trace and clean temporary equation/j-pointer focus.; preserve source and stable layout; the state change is authorized by this exact spoken anchor.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Clear only transient highlighted tape cell or local arithmetic; do not erase committed decoded rows or reflow fixed positions.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world', '42']; i=25; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RESULT_/_CLOSURE/A108`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** FOCUS → SETTLE; no unrelated motion; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “That's our complete decode trace.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---

### BEAT 109 — `S06:A109` (Frames 6923 – 6969)

- **ANCHOR ID:** `S06:A109`
- **EXACT SPOKEN PHRASE:** “Now let's write the decoder.”
- **AUDIO WORD RANGE:** `W0508 .. W0512` (Index 508 .. 512)
- **ACTUAL SPOKEN AUDIO:** `Now let's write the decoder.`
- **RESOLVED FRAME RANGE:** `[6923, 6969)` (Duration: 46 frames)
- **PAUSE AFTER:** NONE pause (0 frames / 0ms silence before next beat)

- **WHAT APPEARS NOW:** Transition to board-native decode code scene; preserve no extra algorithm mutations.
- **CENTER-STAGE HERO:** 25-cell fixed global-index tape + active slice; variables/math/result in stable lower lanes; active zone: decoded-list x1270..1810 y555..905.
- **CAUSE:** Spoken phrase “Now let's write the decoder.” authorizes this one semantic observation/state change; do not pre-animate the conclusion.
- **STATE REACTION:** Current foreground `decoded result list` receives `theme.pivot`/`theme.cyan` focus only when appropriate; for confirmed output use `theme.good`; keep other regions stable.
- **COMPREHENSION HOLD:** ONLY when MP3 + word-sync show a real pause; otherwise NO HOLD. Never invent frames or seconds.
- **MOVE / MUTATION:** No algorithm mutation; focus/inspection only. Transition to board-native decode code scene; preserve no extra algorithm mutations.
- **SETTLE:** Display the just-authorized observable state fully before later spoken step; one primary semantic motion, at most one support reaction.
- **WHAT MUST NOT APPEAR YET:** No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **CLEANUP / EXIT:** Prepare scene transition only after spoken exit; no timing guessed; keep conceptual handoff item intact.
- **PERSISTENT STATE:** committed decoded result=['a#b', '', 'hello world', '42']; i=25; active record 4 source header=21, header stop j=22, length=2, payload=[23,25); computed fields appear only after their matching anchor, never prefilled.
- **TRACE STEP IDS:** ``Q17/DEC/DECODE_RESULT_/_CLOSURE/A109`.`
- **KIT COMPONENTS:** IndexedCharacterTape + BoardStringList (CREATE SHARED); RoughLine/RoughBox transparent marks; theme.ts; `Captions` post-sync only.
- **KIT STATE / PROP INTENT:** Positions from stage table; `theme.boardBg` direct background and `fonts.mono/hand` chalk; transparent `RoughBox.fill` omitted; `RoughLine.shape` uses exact semantic endpoints; code editor `lines` and text reveals derive ONLY from final sync; never hardcode frame durations.
- **REUSE / EXTEND / CREATE:** Follow verified kit table for scene; any new shared class marked CREATE SHARED is a **design proposal**, not a verified import or API.
- **MOTION PURPOSE:** CLEANUP / TRANSITION of old beat, preserve authorized state; causal focus exists to clarify the spoken state, not entertain.
- **NO-SPOILER CHECK:** Only “Now let's write the decoder.” and prior authorized state visible. Future narration remains hidden. No future decoded output items, no future i or j position, no computed length/start/end until speech resolves; original encoded tape is known input, not a result spoiler.
- **COLLISION CHECK:** Active zone decoded-list x1270..1810 y555..905; reserve captions y960–1040, no opaque dark card/IDE, maintain fixed coordinates, avoid title/hero/arrow overlaps.

---
