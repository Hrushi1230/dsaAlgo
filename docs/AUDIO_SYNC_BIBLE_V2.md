# Code With Animation — Audio Sync Bible V2

> **Repository-wide source of truth for audio synchronization, word identity, pause derivation, and semantic choreography anchors.**  
> Locked pipeline: `SCRIPT → MP3 → EXACT WORD SYNC JSON → FRAME-WISE PLAN`

---

## 1. Core Principle & The Locked Pipeline

Timing in this long-form DSA course is **audio-derived, frame-accurate, and deterministic**.

Narration is never stretched or shrunk to match speculative animation. Animation is designed around actual spoken audio.

```text
VERIFIED SCRIPT
  ↓ (approved speech)
RENDERED MP3
  ↓ (speech aligner / Whisper)
EXACT WORD SYNC JSON
  ↓ (tools/validate-sync.mjs)
VALIDATED SYNC + STABLE WORD IDS
  ↓ (planning beat anchors)
SEMANTIC ANCHOR MANIFEST
  ↓ (Remotion scene choreography)
FRAME-WISE SCENE PLAN & IMPLEMENTATION
```

### Absolute No-Guess Rules
1. **Never guess timestamps**: If MP3 exists but word-sync JSON does not, do NOT guess word frames.
2. **Never infer word timing from average WPM**: Speaking speed varies wildly between pedagogical beats (e.g. rapid transition vs slow deliberate trace).
3. **Never mutate raw sync JSON**: Source JSON remains immutable truth.
4. **Never hardcode FPS in V2**: FPS is read dynamically from the sync file metadata (`sync.fps`).

---

## 2. Source-of-Truth Hierarchy

1. **Approved Narration Audio (`.mp3`)**: The physical sound file.
2. **Raw Word Sync JSON (`sync/*.json`)**: Timestamps extracted from Whisper/aligners.
3. **Normalized V2 Sync Object (`@dsa/kit/lib/audioSyncV2`)**: In-memory typed model with stable IDs.
4. **Semantic Anchor Manifest (`sync/*.anchors.json`)**: Planned choreographic anchor points.
5. **Frame-wise Scene Code (`Scene*.tsx`)**: Animations driven by `anchorFrame()` or `wordStartFrame()`.

If an animation cue or narration script disagrees with the validated sync trace, the animation/script is wrong.

---

## 3. Raw Sync JSON Specification

Every exact sync file in the course resides in the question's `sync/` folder (e.g. `questions/.../sync/10-trace-optimal.json`).

### Top-Level Metadata Schema
```json
{
  "audio_file": "10-trace-optimal.mp3",
  "duration_ms": 188440,
  "duration_frames": 5653,
  "fps": 30,
  "word_count": 429,
  "words": [
    {
      "word": "Our",
      "start_ms": 0,
      "end_ms": 260,
      "start_frame": 0,
      "end_frame": 8
    }
  ]
}
```

Optional aligner-generated sections (such as `sentences` or `pauses`) may be present in source JSON and are preserved verbatim by the V2 loader in the `raw` property.

---

## 4. Word Identity: "Text is Content. Ordered Index is Identity."

In DSA explainer videos, numeric and keyword tokens repeat frequently:
- Array values: `2, 2, 1, 1, 1, 2, 2`
- Decision keywords: `now`, `swap`, `skip`, `check`, `left`, `right`

Searching for a word by string prefix (legacy `getWordFrame("S1", "2", 3)`) is fragile and ambiguous.

### Stable V2 Word IDs
V2 establishes identity through 0-based array position:
- `index: 0` → `W0000`
- `index: 17` → `W0017`
- `index: 428` → `W0428`

When referenced in planning documents across scenes, the canonical identifier is scoped:
```text
<scene-name>:W<zero-padded-4-digit-index>
Example: 10-trace-optimal:W0017
```

Each normalized word object (`SyncWordV2`) exposes:
```ts
type SyncWordV2 = {
  id: string;            // "W0017"
  index: number;         // 17
  word: string;          // "2"
  startMs: number;       // 13120
  endMs: number;         // 13680
  startFrame: number;    // 394
  endFrame: number;      // 410
  startSeconds: number;  // 13.12
  endSeconds: number;    // 13.68
  raw: RawSyncWord;      // Original unmutated entry
};
```

---

## 5. Phrase Identity & Helpers

Contiguous narration blocks (such as problem titles, invariants, code lines) receive Phrase definitions spanning start and end word indices:

```ts
const phrase = helpers.phrase(18, 23);
// phrase.text: "predecessor does not exist in set"
// phrase.startFrame: 540
// phrase.endFrame: 612
// phrase.durationFrames: 72
```

Phrase helpers:
- `phrase(startIndex, endIndex)`: returns `PhraseV2` object.
- `phraseStartFrame(startIndex, offset?)`: start frame of first word.
- `phraseEndFrame(endIndex, offset?)`: end frame of last word.

---

## 6. Derived Pauses & Educational Significance

Natural pauses in narration represent vital comprehension time. V2 automatically derives pauses between adjacent words:

$$\text{pauseStartMs} = \text{word}[i].\text{endMs}$$
$$\text{pauseEndMs} = \text{word}[i+1].\text{startMs}$$
$$\text{gapMs} = \text{pauseEndMs} - \text{pauseStartMs}$$

### Educational Pause Classification
| Category | Duration (ms) | Typical Teaching Intent |
|---|---|---|
| **`micro`** | `< 150 ms` | Natural inter-word spacing. Never fill with motion. |
| **`natural`** | `150–299 ms` | Comma / clause breath. Micro-reactions or subtle cursor glide. |
| **`teaching`** | `300–699 ms` | Intentional student comprehension hold. Let state settle before next action. |
| **`major`** | `≥ 700 ms` | Section boundary, step conclusion, or transition in/out. |

> [!TIP]
> Do not fill every pause with decorative motion. A still chalkboard hold during a `teaching` pause is often the most effective pedagogical choice.

---

## 7. Semantic Anchor Manifests (`SYNC_ANCHOR_MANIFEST_V2`)

Scenes must not hardcode magic numbers or re-run word searches inside render functions. Instead, planning maps spoken words to semantic choreographic events via an anchor manifest.

### Manifest File Format (`sync/<scene>.anchors.json`)
```json
{
  "version": 2,
  "scene": "10-trace-optimal",
  "audio_file": "10-trace-optimal.mp3",
  "anchors": {
    "raw-array-reveal": {
      "word_index": 0,
      "edge": "start",
      "note": "Spoken: 'Our original array is...'"
    },
    "duplicate-fade-start": {
      "word_index": 17,
      "edge": "start",
      "offset_frames": 2,
      "trace_steps": ["OPT-001"],
      "note": "Spoken: '2 comes 2 times'"
    },
    "set-settle-complete": {
      "word_index": 29,
      "edge": "end",
      "offset_frames": 0,
      "note": "Duplicate resolved and set locked"
    }
  }
}
```

### Anchor Field Contract
- `word_index` (Required): Exact integer index into the sync file's `words[]` array.
- `edge` (Required): `"start"` (word onset) or `"end"` (word completion).
- `offset_frames` (Optional): Choreographic fine-tuning relative to speech onset (e.g. `+3` frames for anticipation, `-2` for lead-in). *Never used to compensate for wrong word indices.*
- `trace_steps` (Optional): Array of corresponding algorithm trace step IDs.
- `note` (Optional): Human-readable context for planning review.

### Frame Semantics & Remotion Bounds Contract
In Remotion, composition frames are strictly 0-indexed:
- `startFrame` = start boundary (onset of the spoken word token).
- `endFrame` = spoken-token end boundary.
- **Valid Remotion render frames** = `0..durationFrames - 1`.

#### Hard Bounds Validation Rule
For any anchor resolved as a scene frame:
$$0 \le \text{resolvedFrame} < \text{durationFrames}$$
(i.e. $\text{resolvedFrame} \in [0, \text{durationFrames} - 1]$).

If an anchor base frame + `offset_frames` falls outside this range:
- Resolution **throws a detailed error** immediately.
- The error includes: `anchor ID`, `word index`, `edge`, `source frame`, `offset`, `resolved frame`, and `valid frame range`.
- **DO NOT silently clamp** out-of-bounds frames.
- **DO NOT alter raw sync JSON**.
- When anchoring to the final word in a scene with `edge: "end"`, note that `w.endFrame` equals `durationFrames` (the end boundary). An offset of `-1` lands at the final render frame (`durationFrames - 1`), while `edge: "start"` targets the spoken onset.

### Usage in Scene Code
```tsx
import syncData from "../sync/10-trace-optimal.json";
import anchorData from "../sync/10-trace-optimal.anchors.json";
import { createSyncHelpersV2 } from "@dsa/kit/lib/audioSyncV2";

const sync = createSyncHelpersV2(syncData, anchorData);

export const Scene10TraceOptimal: React.FC = () => {
  const frame = useCurrentFrame();

  const animStart = sync.anchorFrame("duplicate-fade-start");
  const isDuplicateFaded = frame >= animStart;
  ...
};
```

---

## 8. Caption Adapter: Single Timing Truth

Karaoke word-highlight captions (`Captions.tsx`) must never drift from audio.

V2 provides the canonical adapter:
```ts
const captionWords = helpers.captionWords;
// or: toCaptionWords(syncData)
```

Transforms `SyncWordV2` into `{ word, start, end }` in seconds. This eliminates duplicating caption array definitions inside scene files.

---

## 9. Scene Duration Source of Truth

Scene duration in frames is **not** calculated from narration word count or estimated script reading rate.

```tsx
<Composition
  id="Scene10TraceOptimal"
  component={Scene10TraceOptimal}
  durationInFrames={syncData.duration_frames}
  fps={syncData.fps}
  width={1920}
  height={1080}
/>
```

The V2 helper provides:
```ts
const duration = sync.sceneDurationFrames(); // validated duration_frames
```

---

## 10. Sync Validator & CLI Tool

Before any scene plan is written, the sync file must be verified:

```bash
# Single file
node tools/validate-sync.mjs questions/01-arrays-hashing/010-longest-consecutive-sequence/sync/10-trace-optimal.json

# Entire question
node tools/validate-sync.mjs questions/01-arrays-hashing/010-longest-consecutive-sequence/sync
```

### Validation Invariants Checked
1. `audio_file`: non-empty string.
2. `duration_ms` & `duration_frames`: non-negative numbers.
3. `fps`: positive number.
4. `word_count`: strictly equals `words.length`.
5. Monotonic start times: `words[i].start_ms >= words[i-1].start_ms`.
6. Monotonic start frames: `words[i].start_frame >= words[i-1].start_frame`.
7. Intervals: `end_ms >= start_ms`, `end_frame >= start_frame`.
8. Duration bounds: no word ends beyond declared audio duration (within 50ms tolerance).
9. ms ↔ frame consistency: `|frame - round(ms * fps / 1000)| <= 1`.
10. Duration consistency: `|duration_frames - round(duration_ms * fps / 1000)| <= 2`.

---

## 11. Legacy Backward Compatibility

Legacy helpers in `@dsa/kit/lib/audioSync` remain fully operational:
- `createWordFrameHelpers(syncDataRaw)`
- `getWordFrame(segment, prefix, occurrence, offset)`
- `getWordEndFrame(segment, prefix, occurrence, offset)`

These remain locked at 30fps for existing legacy compositions, avoiding breaking changes or timing shifts across existing question videos. All new V2 scenes use `createSyncHelpersV2` and `audioSyncV2.ts`.
