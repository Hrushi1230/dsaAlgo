# Q13 — ANTIGRAVITY POST-AUDIO WORD-SYNC → EXACT FRAMES CONTRACT
## Applies to all 13 scenes

This file controls what Antigravity does **after** the user provides the final ElevenLabs MP3 and exact word-sync JSON.

The Phase-9 plans already own:

```text
WHAT appears
WHY it appears
ORDER
CENTER-STAGE HERO
CAUSE → EFFECT
WHAT stays hidden
CLEANUP
PERSISTENT STATE
KIT / COMPONENT INTENT
```

Audio + word-sync own only:

```text
WHEN
EXACT WORD ID
EXACT SECOND
EXACT FRAME
```

Antigravity must NOT redesign the Phase-9 choreography after sync.

---

# 1. Required inputs per scene

Use the actual supplied files for that scene:

```text
final narration MP3
+
exact sync/alignment JSON
+
the matching SceneXX Phase-9 plan
+
V2 verified narration
```

Do not use a draft MP3 or an older script.

If the audio transcript differs from the V2 script in a meaningful way:

```text
BLOCKED — AUDIO / SCRIPT MISMATCH
```

Do not silently repair wording.

---

# 2. Acceptable sync normalization

The user's JSON schema may differ. Normalize only when exact timing is present.

Preferred internal representation:

```json
{
  "words": [
    {
      "id": 0,
      "text": "Welcome",
      "start": 0.000,
      "end": 0.330
    }
  ]
}
```

If the supplied JSON already has word-level timing, preserve its exact times.

If it contains character-level timing only:
1. preserve every original character start/end;
2. group contiguous non-whitespace characters into words;
3. word start = first character start;
4. word end = last character end;
5. do not estimate missing character timings.

If the JSON has neither exact word timing nor exact character timing:

```text
BLOCKED — EXACT ALIGNMENT SOURCE REQUIRED
```

Never estimate timestamps from narration length, WPM, MP3 duration, or visual convenience.

---

# 3. Anchor matching

Every Phase-9 scene contains:

```text
ANCHOR ID
+
exact spoken phrase
```

For each anchor:

1. tokenize the V2 narration and sync words in spoken order;
2. match the anchor to one unique contiguous sequence of sync words;
3. punctuation/case may be normalized for matching only;
4. preserve original word IDs and exact timing after the match;
5. never choose a later/earlier duplicate phrase by guess.

If a phrase appears more than once and context does not uniquely resolve it:

```text
BLOCKED — AMBIGUOUS ANCHOR MATCH
```

Use surrounding approved anchors to disambiguate only when their order proves the match.

---

# 4. Exact 30-fps conversion

Project FPS:

```text
30
```

For every matched word:

```text
wordStartFrame = floor(word.start * 30)
wordEndFrameExclusive = ceil(word.end * 30)
```

Guarantee a spoken word occupies at least one frame:

```text
wordEndFrameExclusive =
max(wordStartFrame + 1, ceil(word.end * 30))
```

For a phrase anchor spanning word IDs `a...b`:

```text
anchorStartFrame = word[a].startFrame
anchorEndFrameExclusive = word[b].endFrameExclusive
```

Frame convention is permanently:

```text
[startFrame, endFrameExclusive)
```

A 30-frame interval renders exactly:

```text
0 ... 29
```

Never treat the exclusive end as a rendered frame.

---

# 5. Adjacent-word quantization rule

Word timings can quantize onto the same 30-fps frame.

For two sequential mutually-exclusive semantic states:

```text
previous.endFrameExclusive =
min(previous.endFrameExclusive, next.startFrame)
```

only when needed to prevent an impossible one-frame overlap.

Do not move the next event earlier.

Do not create a fake gap.

If both events legitimately coexist, do not clamp them merely because ranges overlap after quantization.

---

# 6. Real pause / comprehension-hold rule

A comprehension hold exists only when the audio contains real unused time.

For current anchor `A` and next anchor `B`:

```text
gapStart = A.endFrameExclusive
gapEnd   = B.startFrame
realGap  = gapEnd - gapStart
```

If:

```text
realGap > 0
```

the plan's approved stable state may hold through that exact gap.

If:

```text
realGap <= 0
```

there is no comprehension hold.

Never insert extra pause frames because the animation "looks better."

---

# 7. Sub-phrase state changes

When one Phase-9 beat contains more than one ordered visual instruction, resolve each state change from the smallest exact spoken word/sub-phrase that authorizes it.

Example:

```text
"changes from sixteen ... to zero"
```

may resolve as:

```text
"changes from sixteen"
→ old value / source state is hero

"to zero"
→ perform 16 → 0
```

Do not use arbitrary 25%, 50%, 75% percentages inside the phrase.

Use word timing.

---

# 8. Enter / effect / cleanup timing

Use this precedence:

```text
1. exact spoken sub-phrase timing
2. exact next-anchor boundary
3. real silent gap
4. existing reusable motion token from project motion system
```

A reusable motion token may control the physical easing/settle duration **after an exact word trigger**, but must not shift the semantic event to an invented time.

If no existing motion token supports the effect:

```text
EXTEND / CREATE reusable kit-level semantic motion
```

Do not invent a one-off scene-local duration.

---

# 9. Matrix trace conversion

For matrix scenes:

```text
spoken coordinate / value
→ focus exact cell on that word

spoken cause
→ show source relation

spoken mutation phrase
→ mutate value in fixed cell

spoken row / column
→ activate that exact region

next idea
→ reduce old relation unless persistence is required
```

Permanent rule:

```text
CELL GEOMETRY NEVER MOVES.
VALUES CHANGE IN PLACE.
```

Do not pre-highlight future zeros, rows, columns, markers, or final answers.

---

# 10. Marker-array conversion

For `rowZero[]` / `colZero[]` scenes:

```text
spoken original zero
→ matrix cell becomes hero

spoken row marker
→ exact rowZero slot changes

spoken column marker
→ exact colZero slot changes
```

Use actual Array V2 components.

```text
SLOTS STAY FIXED.
VALUES / BOOLEAN STATE CHANGE IN PLACE.
INDICES NEVER MOVE.
```

No generic boolean boxes.

---

# 11. Optimal boundary-marker conversion

For Method 3:

```text
spoken first-row history
→ firstRowZero state

spoken first-column history
→ firstColZero state

spoken interior zero
→ current interior zero hero

spoken row-marker write
→ matrix[r][0] mutation

spoken column-marker write
→ matrix[0][c] mutation

spoken marker query
→ boundary gate relation

spoken boundary finalization
→ first row / first column mutation
```

Never expose:
- a marker write before its words;
- firstRowZero / firstColZero values before spoken;
- boundary finalization while boundaries are still serving as marker memory.

---

# 12. Code-scene conversion

Use the existing production course code component.

Future code lines stay hidden.

For each narration/code idea:

```text
spoken code idea
→ active line appears
→ line characters type
→ line completes
→ semantic DSA effect happens
→ support visual reduces
→ next line only when spoken
```

## Character typing with word-level sync

If character-level alignment exists:
- use exact character timings.

If only word-level timing exists:
- map each spoken code token/lexeme to its exact word window;
- distribute that token's characters deterministically inside that exact word window;
- attach unspoken syntax (`(` `)` `[` `]` `:` `,` operators where not separately spoken) to the nearest associated spoken token without creating extra invented time;
- whitespace never receives its own semantic delay.

Never choose a generic typing speed such as "2 chars per frame" when exact word timing exists.

If the narration does not speak enough information to align a code token safely:

```text
use the exact enclosing approved code-idea anchor window
```

and keep ordering deterministic.

Do not type future lines early.

---

# 13. Captions

Captions use the exact final sync.

Caption words must come from the final narration transcript, not from Phase-9 labels.

Use the existing `Captions` component.

No paraphrased captions.

---

# 14. Scene duration

Derive scene duration from the actual final audio/alignment source.

Preferred:

```text
sceneEndSeconds = max(audioDuration, lastAlignmentEnd)
sceneDurationFrames = ceil(sceneEndSeconds * 30)
```

Do not add arbitrary tail frames.

If production requires an outro transition beyond spoken audio, it must come from:
- a project-level transition rule already defined, or
- a user-approved explicit transition duration.

Otherwise end at the derived scene duration.

---

# 15. Generated Phase-12 file

For every scene, Antigravity should generate a new file:

```text
SceneXX_FRAME_PLAN.md
```

Each frame beat must include:

```text
FRAME RANGE
[startFrame, endFrameExclusive)

WORD IDS
first → last

EXACT SPOKEN ANCHOR

ACTIVE VISUAL STATE

CENTER-STAGE HERO

ENTER

CAUSE

STATE CHANGE / MOTION

REAL HOLD
or
NO HOLD

CLEANUP / EXIT

PERSISTENT STATE

KIT COMPONENTS

NO-SPOILER CHECK
```

Also produce at top:

```text
audio duration
scene duration frames
fps = 30
sync source filename
anchor match count
unmatched anchors
```

Required result:

```text
UNMATCHED ANCHORS = 0
```

---

# 16. Automatic audit before implementation

For each scene:

```text
Phase9 plan
+
final MP3
+
word-sync JSON
→ exact frame plan
→ audit
→ repair
→ re-audit
→ PASS
→ only then implement
```

Audit:

```text
all anchors matched exactly
all frame ranges in bounds
no negative ranges
no guessed seconds
no guessed frame offsets
no future-state spoilers
matrix state matches verified trace
code line order matches verified script
cleanup/persistence matches Phase9
component API read from repository
```

If any check fails, repair the frame plan before writing scene implementation.

---

# 17. Implementation loop

After sync exists, Antigravity may run autonomously:

```text
Scene01
→ frame plan
→ audit / fix
→ implement
→ typecheck
→ render
→ visual QA
→ state QA
→ PASS

Scene02
→ same loop

...

Scene13
→ same loop

then
→ cross-scene continuity QA
→ final production audit
```

Do not ask permission between scenes unless:

```text
BLOCKED — SOURCE REQUIRED
```

---

# 18. Absolute no-guess rules

Forbidden after audio/sync:

```text
"around this word"
"roughly here"
"about 2 seconds"
"hold for 15 frames"
"start at 40%"
"animate during the middle"
```

Required:

```text
exact word ID
exact source time
exact frame
existing motion token / deterministic helper
```

The Phase-9 semantic plan is fixed. Audio alignment supplies timing; it does not authorize redesign.
