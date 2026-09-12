# AGENTS.md — Code With Animation · DSA Video Production

## WHO WE ARE
Channel: **Code With Animation**
Content: DSA educational videos — 227 curated problems across 19 pattern groups
Tech: Remotion (React) for animation
Code Language: **Python** (all code in videos is Python — no JavaScript, no C++, no Java)
Voice: **Female** — human-recorded (not TTS)
Audience: **Indian CS students** (2nd/3rd year BTech, preparing for placements)
Language: **Indian English** — natural, conversational, how an Indian teacher actually speaks in a classroom

---

## ABSOLUTE RULES

### Rule 1: DO NOT GUESS
- Never guess an API, prop, hex colour, font size, frame count, or duration
- If not 100% certain → look it up or ASK
- Before Remotion code → READ `docs/remotionskills.md`
- Before visual decisions → USE the `@dsa/kit` chalkboard components
- If `remotionskills.md` and your instinct disagree → **remotionskills.md wins**

### Rule 2: DO NOT AI-SLOP
- No filler: "In this video we will learn about..."
- No placeholders: "[insert here]", "lorem ipsum"
- No vague language — every word precise and actionable
- No hallucinated APIs, features, or capabilities
- No over-explanation of obvious things
- No unnecessary verbosity or repetition
- No generic code comments that restate what the code does

### Rule 3: ALWAYS CHECK RULES BEFORE ACTING
1. Read THIS FILE first
2. Read `docs/remotionskills.md` Parts 2 + 9 before any Remotion code
3. Read `@dsa/kit` (e.g. `kit/lib/theme.ts`) before any visual decisions
4. Never invent a hex colour — use the chalk palette from the kit
5. Never invent a font size — use the type scale from the kit
6. Never invent a frame count — derive from audio sync JSON

### Rule 4: FOLLOW THE ROADMAP — NO SHORTCUTS
```
STEP 0  : Pick question (from docs/dsa.md)
STEP 0.5: Question Analysis — decide Type A/B/C + scene count → human approves
STEP 1  : Write full script (all scenes per type) → human approves
STEP 2  : Human records audio (one MP3 per scene)
STEP 3  : Audio → word-level JSON (tools/audio-to-json.py) — per scene
STEP 4  : Sync plan (frame-by-frame) → human approves — per scene
STEP 5  : Build animation → human approves — per scene
STEP 6  : Assemble all scenes → final render → human approves
```
NEVER skip a step. NEVER combine steps. NEVER auto-proceed.

### Rule 5: HUMAN APPROVES EVERYTHING
- Type decision (Step 0.5) → STOP, wait for approval
- Script → STOP, wait for approval
- Scene plan → STOP, wait for approval
- Animation code → STOP, wait for approval
- Never proceed to next step without explicit human "approved" or "go"

### Rule 6: ONE IDEA PER FRAME
- Never animate two unrelated things simultaneously
- State change first, THEN position change — never both in same frames
- If it looks busy → split into separate steps

### Rule 7: REUSE FROM kit/ — NEVER REINVENT
- Check `kit/components/` before creating ANY visual element
- If a component doesn't exist → build it IN `kit/components/` (never inside a question folder)
- Question folders contain ONLY question-specific code and data

### Rule 8: VERIFY BEFORE CLAIMING DONE
- Run the Part 9 anti-pattern checklist from `docs/remotionskills.md`
- Render stills at start, middle, end of each scene
- Check all layers are named
- Check safe area compliance
- No CSS transitions, no CSS animations, no @keyframes
- No Math.random() — use random('seed')
- All interpolate() calls clamped both ends

### Rule 9: ANIMATION SYNCS TO YOUR VOICE
- Animation timing comes from sync JSON (Step 3 output)
- Frame numbers derived from YOUR spoken words
- Your natural pauses = hold time for viewers to read
- Never invent timing — derive everything from audio timestamps

### Rule 10: QUESTION FOLDER ISOLATION
- Each question = its own folder under `questions/`
- Contains: analysis.json, script.json, audio/, sync/, plans/, src/, output/
- Never mix files between question folders
- Shared code lives ONLY in `kit/`

---

## APPROACH DECISION SYSTEM (Step 0.5)

Every question needs 1, 2, or 3 approaches. The number of approaches determines the video type and scene count. **This is decided BEFORE writing the script.**

### The Three Video Types

| Type | Approaches | Scenes | When |
|:---|:---|:---|:---|
| **A** | 1 (direct optimal) | **7** | Technique IS the lesson. No useful brute force. |
| **B** | 2 (brute → optimal) | **10** | Brute force teaches WHY the optimal exists. |
| **C** | 3 (brute → better → optimal) | **13** | Each step teaches a DISTINCT concept. |

### The 5 Decision Rules

**Rule D1: Does the brute force teach "WHY we need this technique?"**
```
YES → Include brute force (Type B or C)
NO  → Direct optimal (Type A)
```

**Rule D2: Does the "better" middle approach teach a DISTINCT new concept?**
```
YES → Type C (3 approaches)
NO  → Type B (2 approaches) or Type A
```

**Rule D3: DP problems use the natural DP progression**
```
Recursion (brute) → Memoization (better) → Tabulation (optimal) → Space Opt (bonus)
= Type C naturally
```

**Rule D4: Data structure problems use Type A**
- Stack, Trie, Heap problems where the data structure IS the lesson
- No meaningful brute force alternative exists

**Rule D5: When in doubt, fewer approaches = better for beginners**
- One deeply understood approach beats three surface-level approaches
- If brute force doesn't leave a gap in understanding when skipped → Type A

### Question Analysis Output (analysis.json)

Before writing the script, produce `analysis.json`:
```json
{
  "question": "Two Sum",
  "leetcode": 1,
  "approach_type": "B",
  "scene_count": 10,
  "approaches": {
    "brute": {
      "technique": "Nested loops checking every pair",
      "time": "O(n²)", "space": "O(1)",
      "teaches": "Shows why checking all pairs is wasteful"
    },
    "optimal": {
      "technique": "HashMap complement lookup",
      "time": "O(n)", "space": "O(n)"
    }
  },
  "reason": "Brute O(n²) nested loops creates the 'why HashMap?' moment"
}
```

---

## SCENE STRUCTURES — BY VIDEO TYPE

### Core Rule 1: TRACE = Visual Only, CODE = Implementation Only

Every approach has TWO dedicated scenes:
1. **TRACE** — Visual walkthrough ONLY. Array cards, pointers, animations. NO code shown.
2. **CODE** — Write the code line by line with explanation. NO visual walkthrough.

This separation reduces cognitive overload: the viewer understands the IDEA first (TRACE), then learns HOW TO WRITE IT (CODE).

### Core Rule 2: After Each Approach Code → Show Complexity Curve

After every approach's code scene, a dedicated **WHY-NOT** scene shows:
1. The complexity stated — "This approach is O of n squared"
2. The curve drawn — animated graph showing growth
3. The concrete number — "For n = 10,000, that's 100 MILLION operations"
4. The verdict — "Too slow. Can we do better?"

This creates the motivation for the next approach through visual proof.

### Type A — Direct Optimal (7 Scenes)

```
01-hook          │ HOOK           │ Concrete failure / shock
02-cold-open     │ COLD_OPEN      │ SRS recall from earlier pattern
03-predict       │ PREDICT        │ Question + 3-sec countdown
04-trace         │ TRACE          │ Visual walkthrough of the optimal approach (NO code)
05-code          │ CODE           │ Write the code line by line with explanation
06-misconception │ MISCONCEPTION  │ Common wrong model → correct model
07-complexity    │ COMPLEXITY     │ Derivation + curve + practice set
```

Audio files:
```
audio/01-hook.mp3
audio/02-cold-open.mp3
audio/03-predict.mp3
audio/04-trace.mp3
audio/05-code.mp3
audio/06-misconception.mp3
audio/07-complexity.mp3
```

### Type B — Brute → Optimal (10 Scenes)

```
01-hook          │ HOOK           │ Concrete failure case
02-cold-open     │ COLD_OPEN      │ SRS recall from earlier pattern
03-predict       │ PREDICT        │ Question + 3-sec countdown
04-trace-brute   │ TRACE_BRUTE    │ Brute force visual walkthrough — step by step (NO code)
05-code-brute    │ CODE_BRUTE     │ Write the brute force code line by line
06-why-not-brute │ WHY_NOT_BRUTE  │ ⚡ COMPLEXITY CURVE: O(n²) drawn, counter, verdict
07-trace-optimal │ TRACE_OPTIMAL  │ Optimal visual walkthrough — same data, better technique (NO code)
08-code-optimal  │ CODE_OPTIMAL   │ Write the optimal code line by line
09-misconception │ MISCONCEPTION  │ Common wrong model about the optimal
10-complexity    │ COMPLEXITY     │ FINAL: both curves overlaid, comparison card, practice set
```

Audio files:
```
audio/01-hook.mp3
audio/02-cold-open.mp3
audio/03-predict.mp3
audio/04-trace-brute.mp3
audio/05-code-brute.mp3
audio/06-why-not-brute.mp3
audio/07-trace-optimal.mp3
audio/08-code-optimal.mp3
audio/09-misconception.mp3
audio/10-complexity.mp3
```

### Type C — Brute → Better → Optimal (13 Scenes)

```
01-hook              │ HOOK              │ Concrete failure case
02-cold-open         │ COLD_OPEN         │ SRS recall from earlier pattern
03-predict           │ PREDICT           │ Question + 3-sec countdown
04-trace-brute       │ TRACE_BRUTE       │ Brute force visual walkthrough (NO code)
05-code-brute        │ CODE_BRUTE        │ Write the brute force code line by line
06-why-not-brute     │ WHY_NOT_BRUTE     │ ⚡ COMPLEXITY CURVE: brute curve + verdict
07-trace-better      │ TRACE_BETTER      │ Better approach visual walkthrough (NO code)
08-code-better       │ CODE_BETTER       │ Write the better approach code line by line
09-why-not-better    │ WHY_NOT_BETTER    │ ⚡ COMPLEXITY CURVE: better curve + remaining flaw
10-trace-optimal     │ TRACE_OPTIMAL     │ Optimal visual walkthrough (NO code)
11-code-optimal      │ CODE_OPTIMAL      │ Write the optimal code line by line
12-misconception     │ MISCONCEPTION     │ Common wrong model about the optimal
13-complexity        │ COMPLEXITY        │ FINAL: all 3 curves overlaid, 3-column card, practice set
```

Audio files:
```
audio/01-hook.mp3
audio/02-cold-open.mp3
audio/03-predict.mp3
audio/04-trace-brute.mp3
audio/05-code-brute.mp3
audio/06-why-not-brute.mp3
audio/07-trace-better.mp3
audio/08-code-better.mp3
audio/09-why-not-better.mp3
audio/10-trace-optimal.mp3
audio/11-code-optimal.mp3
audio/12-misconception.mp3
audio/13-complexity.mp3
```

---

## WHY-NOT COMPLEXITY CURVE SCENE — Visual Spec

This is a dedicated beat type. Use components from `kit/components/`.

### Layout (full-width hero, no split)

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  "Brute Force: O(n²)"                                   │
│   56px Inter semibold, #F0F0FF                           │
│                                                          │
│  ┌──────────────────────────────────────────────┐        │
│  │  Operations ▲                        ╱       │        │
│  │             │                      ╱         │        │
│  │             │                   ╱  ← CORAL   │        │
│  │             │                ╱     #FF6B6B   │        │
│  │             │            ╱                   │        │
│  │             │       ╱                        │        │
│  │             │  ╱                             │        │
│  │             └──────────────────────► n       │        │
│  │               100  1K  10K  100K  1M         │        │
│  └──────────────────────────────────────────────┘        │
│                                                          │
│  ┌─────────────────────────────────────┐                 │
│  │  n = 10,000                         │                 │
│  │  Operations: 100,000,000            │  ← animates up  │
│  │  "That's 100 MILLION comparisons"   │                 │
│  └─────────────────────────────────────┘                 │
│                                                          │
│  "Too slow. Can we do better?"                           │
│   48px Inter, #FF6B6B (coral)                            │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### Animation sequence (synced to voice)
1. Title fades in (word stagger)
2. Graph axes draw in
3. **Curve draws left to right** — dot follows the curve tip
4. Vertical dotted line drops at highlighted n value
5. **Counter animates** — numbers roll up to final count
6. Verdict text appears in coral/gold

### Curve colours by approach
- **Brute force curve**: Coral `#FF6B6B`
- **Better approach curve**: Gold `#FFB800`
- **Optimal curve**: Mint `#2ED8A3`
- **Past approaches (dimmed)**: Excluded state `#4A3F6B`

### For WHY-NOT-BETTER (Type C only)
- Brute curve shown dimmed in background
- Better curve draws in gold
- Verdict is about the remaining flaw: "O(n) time ✓ but O(n) extra space"

### For FINAL COMPLEXITY scene
- All curves overlaid on same graph
- Past approaches dimmed, optimal bright mint (drawn last, glowing)
- Below: side-by-side complexity card (2 or 3 columns) + practice set chips

### Shared Component: ComplexityCurve

Reused across ALL videos, leveraging chalkboard primitives.

```
Props:
  curves: Array<{
    label: string        // "Brute Force", "Better", "Optimal"
    bigO: string         // "O(n²)", "O(n)", "O(n log n)"
    fn: (n) => number    // math function for plotting
    color: string        // stroke colour from theme
    dimmed: boolean      // true for past approaches
    drawAtFrame: number  // when to start drawing
  }>
  highlightN: number     // which n to highlight (e.g., 10000)
  counterTarget: number  // what counter animates to
  counterLabel: string   // "100 MILLION comparisons"
  verdict: string        // "Too slow. Can we do better?"
  verdictColor: string   // coral or gold
```

---

## MANDATORY SKILL: remotionskills.md

**Before writing ANY Remotion animation code, you MUST read `docs/remotionskills.md`.**

This file contains:
- **Part 0**: TL;DR setup commands
- **Part 1**: The 12 official Remotion Agent Skills and when to use each
- **Part 2**: The 6 non-negotiable laws (violating = broken renders)
- **Part 3**: Verified animation primitives (interpolate, Easing, spring)
- **Part 4**: Timeline structure (Sequence, Series, TransitionSeries)
- **Part 5**: Text, fonts, layout, media, layering
- **Part 6**: Scene grammar — beat structure (see SCENE STRUCTURES above for updated beats)
- **Part 7**: Reusable DSA primitive components + step-driven trace pattern
- **Part 8**: AI narration pipeline (audio-driven timeline via calculateMetadata)
- **Part 9**: Anti-patterns checklist (24 items — check ALL before committing)
- **Part 10**: Rendering (local, batch, Lambda)
- **Part 11**: Prompt template for per-video generation

**The 6 Laws from remotionskills.md (summary — read full file for details):**
1. All motion is a pure function of `useCurrentFrame()` — no CSS animations
2. Determinism — `random('seed')`, never `Math.random()`
3. Always clamp `interpolate()` on both ends
4. Inline `interpolate()` in `style`, use individual transform properties
5. `name=` on every layer (Sequence, Interactive.*, Audio, Video)
6. Assets in `public/`, referenced via `staticFile()`

---

## DESIGN SYSTEM: Chalkboard Kit (@dsa/kit)

**Concept**: A shared chalkboard visual kit for DSA explainer videos.
**Location**: `kit/` directory.

- Use the components from `kit/components/` (e.g. `ChalkText`, `RoughBox`, `RoughLine`, `MiniGraph`).
- Use the theme and style tokens from `kit/lib/theme.ts` and `kit/lib/styleTokens.ts`.
- Do not invent new colors or fonts. All visual elements must strictly adhere to the chalkboard aesthetic defined in the kit.

---

## FILE READING ORDER (for every task)
1. `.agents/AGENTS.md` (this file)
2. `.agents/skills/dsa-scriptwriting/SKILL.md` (BEFORE any script writing — tone, pacing, format)
3. `.agents/skills/dsa-scene-planning/SKILL.md` (BEFORE any scene planning — pedagogical philosophy, center stage, optical centering, exact audio sync)
4. `docs/remotionskills.md` (Parts 2 + 9 minimum)
5. `kit/lib/theme.ts` (colour, type, layout tokens)
6. `docs/dsa.md` (for the specific question's content)
7. The question's `analysis.json` (approach type + scene count)
8. The question's `script.json`
9. The question's `sync/*.json` files

---

## SCENE PLANNING & PEDAGOGICAL ANIMATION RULES (Step 4)

**MANDATORY**: Before writing ANY scene plan (`plans/*-plan.md`), read `.agents/skills/dsa-scene-planning/SKILL.md`.

### Core Rule P1: NO SPOILERS / NO PRE-RENDERED PANELS
- **Never reveal the punchline or winning state at Frame 0.**
- In **Misconception scenes**: The viewer must be 100% focused on the **Wrong Model** on Center Stage first. The head-to-head split comparison appears ONLY when the speaker explicitly contrasts the two approaches at the act boundary.
- In **Trace scenes**: Pointers and cards reveal state only as the teacher steps through the element in audio.
- In **Why-Not scenes**: Complexity graph curve and operations counter animate only when the teacher states the Big-O and the operations count.

### Core Rule P2: CENTER STAGE FIRST (Zero Dead Space)
- When presenting a single concept, array, or problem state, it must occupy the **Center Stage** of the chalkboard (`x: center`, generous width `800px–1200px`).
- **Never squeeze elements into the top third of the screen leaving a 600px void at the bottom.**
- Transition from Center Stage to Split Screen or Multi-Column layout smoothly only at the exact act boundary where the narration transitions to comparison.

### Core Rule P3: TRUE OPTICAL VERTICAL CENTERING (1080p Canvas)
In Remotion compositions at `1920 × 1080`:
- **Top Pill Badge**: `Y: 28px – 70px` (`top: 28px`, centered)
- **Hero Title & Subtitle**: `Y: 95px – 210px` (`fontSize: 48px–54px` hand font)
- **Main Hero Stage** (Arrays, Trees, Graphs, Tables): `Y: 300px – 600px` (Optical Center)
  - 6-card array: Card dimensions `120px × 130px`, gap `24px` (total width `840px`), card font `52px–56px` mono bold.
  - Side-by-side arrays: Card dimensions `88px–96px × 96px–104px`, gap `12px–14px`.
- **Callout Banners & State Feedback**: `Y: 640px – 780px` (`padding: 16px 42px`, `fontSize: 32px–36px` hand font, glowing border).
- **Bottom Captions Safe Zone**: `Y: 960px – 1040px` (`bottom: 30px–40px`).

### Core Rule P4: EXACT AUDIO SYNCHRONIZATION
- Derive EVERY start frame, transition frame, and duration from the word timestamps in `sync/<scene>.json`.
- Visual events (pointer drops, arrows, highlights, question marks, stamps, strikes) MUST trigger on the exact syllable the teacher speaks.
- Teacher's natural speech pauses (`...`) provide the visual hold time for students to digest the concept.

### Core Rule P5: ONE IDEA PER FRAME
- Never animate two unrelated state changes simultaneously.
- State change first (e.g. card highlights, question mark appears), THEN pointer movement — never both in the same frames.
- If an act feels visually cluttered, split it into sequential sub-beats.

---

## SCRIPT WRITING RULES

### Language & Voice
- **Indian English** — natural, conversational, the way an Indian teacher speaks in class
- NOT American/British formal English. NOT textbook English.
- Use phrases Indian students actually say: "basically", "right?", "see", "na?", "let's say", "think about it"
- Say "O of n squared" not "O(n²)"
- Natural pauses marked as "..."
- **Female voice** — warm, clear, like a senior explaining to juniors
- Script should sound **human-written** — if it sounds like AI wrote it, rewrite it
- No filler: "In this video we will learn about..." — BANNED
- No textbook tone: "An anagram is defined as..." — BANNED
- Every sentence teaches something. Zero fluff.

### Script Tone Examples

**❌ AI-sounding (BANNED):**
> "In this video, we will learn about the Valid Anagram problem. An anagram is a word formed by rearranging the letters of another word."

**✅ Human Indian English (CORRECT):**
> "Your friend sends you a word... you jumble the letters and send it back. Same letters, different order. That's an anagram. Simple, right? But how do you CHECK if two words are anagrams... using code?"

### Trace Scenes — FULL Walkthrough, NO Shortcuts
- Walk through EVERY SINGLE OPERATION. Not 2-3 steps and "similarly for the rest."
- If the array has 7 elements, trace all 7. If there are 15 comparisons, show all 15.
- Students learn by watching the COMPLETE process — skipping steps creates gaps
- The narration should call out each step: "a... is a in the set? No. Add a. ... n... is n in the set? No. Add n."
- If the trace would be too long (20+ steps), pick a SMALLER test case — never skip steps on the chosen test case

### Code Scenes — Python Only
- All code is **Python**. No JavaScript, C++, or Java.
- Write clean, readable Python — the kind you'd write in a real interview
- Use Pythonic idioms: list comprehensions, `Counter`, `sorted()`, `enumerate()`
- Explain each line as it appears — what it does and WHY
- Highlight the "aha" moments: "See this line? This is where the magic happens."

### Predict Scene — Question Format
- Show the problem statement clearly
- Show the test data with example input/output
- Ask the viewer: "How would you solve this?" or "What approach would you use?"
- **3-second silent countdown** — 3... 2... 1. SACRED. Never shorten.
- Optionally, give a HINT: "Think about what data structure could help here..." (before countdown)
- After countdown, transition to the first approach

### Beat-Specific Rules
- Beat structure adapts to video type (7 / 10 / 13 scenes — see SCENE STRUCTURES above)
- TRACE scenes = visual walkthrough ONLY, no code shown
- CODE scenes = write code line by line with explanation, no visual walkthrough
- Hook = concrete failure case, no definitions, no "in this video"
- Predict = question + optional hint + 3-second hold, NEVER shortened
- Misconception = wrong model BEFORE correct model
- WHY-NOT scenes = state complexity, draw curve, show concrete number, give verdict

---

## QUESTION FOLDER STRUCTURE

### Type A (7 scenes)
```
questions/<pattern>/<number>-<slug>/
├── analysis.json          ← approach type + reasoning
├── script.json            ← 7-scene script
├── audio/
│   ├── 01-hook.mp3
│   ├── 02-cold-open.mp3
│   ├── 03-predict.mp3
│   ├── 04-trace.mp3
│   ├── 05-code.mp3
│   ├── 06-misconception.mp3
│   └── 07-complexity.mp3
├── sync/                  ← one JSON per audio file
├── plans/                 ← one plan per scene
├── src/                   ← Remotion components per scene
└── output/                ← rendered frames + final video
```

### Type B (10 scenes)
```
questions/<pattern>/<number>-<slug>/
├── analysis.json
├── script.json            ← 10-scene script
├── audio/
│   ├── 01-hook.mp3
│   ├── 02-cold-open.mp3
│   ├── 03-predict.mp3
│   ├── 04-trace-brute.mp3
│   ├── 05-code-brute.mp3
│   ├── 06-why-not-brute.mp3
│   ├── 07-trace-optimal.mp3
│   ├── 08-code-optimal.mp3
│   ├── 09-misconception.mp3
│   └── 10-complexity.mp3
├── sync/
├── plans/
├── src/
└── output/
```

### Type C (13 scenes)
```
questions/<pattern>/<number>-<slug>/
├── analysis.json
├── script.json            ← 13-scene script
├── audio/
│   ├── 01-hook.mp3
│   ├── 02-cold-open.mp3
│   ├── 03-predict.mp3
│   ├── 04-trace-brute.mp3
│   ├── 05-code-brute.mp3
│   ├── 06-why-not-brute.mp3
│   ├── 07-trace-better.mp3
│   ├── 08-code-better.mp3
│   ├── 09-why-not-better.mp3
│   ├── 10-trace-optimal.mp3
│   ├── 11-code-optimal.mp3
│   ├── 12-misconception.mp3
│   └── 13-complexity.mp3
├── sync/
├── plans/
├── src/
└── output/
```
