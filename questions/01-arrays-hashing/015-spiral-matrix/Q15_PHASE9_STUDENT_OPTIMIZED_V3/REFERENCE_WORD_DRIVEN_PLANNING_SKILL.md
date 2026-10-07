---
name: dsa-scene-planning
description: Comprehensive scene planning and animation choreography guide for Code With Animation DSA videos. MUST be read before creating ANY scene plan (*-plan.md). Covers pedagogical philosophy, center-stage rules, optical vertical centering on 1080p, exact audio synchronization, beat choreography, and plan template.
---

# DSA Scene Planning & Animation Choreography Skill — Code With Animation

## 🔒 AUTHORITATIVE USER LOCK — WORD-DRIVEN CENTER-STAGE MOTION SYSTEM

> **HIGHEST PRIORITY:** This section overrides any older/generic scene-planning language below whenever there is a conflict.
>
> The course is NOT a slide deck. It is NOT a dashboard. It is NOT a screen where every useful object remains visible.
>
> The visual system must behave like a senior teacher drawing only what the learner needs **right now**, then cleaning it away when its teaching job is finished.

### A. Word-Driven Reveal Law

Visuals follow the approved narration in exact semantic order.

```text
WORD / PHRASE IS SPOKEN
→ relevant visual enters
→ visual performs its teaching job
→ learner gets a short comprehension hold if audio provides one
→ visual exits / recedes when its job is finished
→ next idea takes center stage
```

Hard rules:

- **Never reveal future information early.**
- **Never pre-render future code lines, future pointer states, future algorithm states, future answer states, or future labels.**
- If narration has not reached an idea yet, that idea does not visually exist yet.
- A word/phrase may trigger a visual only when that word/phrase is reached in the exact audio sync.
- Previously taught visuals remain only if they are still required for semantic continuity.
- If they are no longer needed, remove, erase, fade, collapse, or hand them off.
- Do not keep old teaching objects on screen simply because there is empty space.

### B. Motion Must Earn Its Existence

Every motion MUST do at least one of these:

1. **Teach algorithm state**
2. **Show cause → effect**
3. **Direct attention**
4. **Preserve semantic continuity during a transition**

If a motion does none of these:

```text
DO NOT ANIMATE IT.
```

Forbidden examples:

- decorative shimmer
- random glow bloom
- bouncing labels
- floating cards
- cinematic camera movement with no teaching purpose
- particles used as hero motion
- constant pulsing
- moving elements just to make the screen "feel alive"

Motion is semantic, not decorative.

### C. Center-Stage Teaching Law

At any moment there should normally be **one primary teaching object**.

Examples:

```text
current array state
current pointer relation
current code line
current invariant
current mistake
current roadmap row
```

That object owns the center stage.

Secondary objects are allowed only when they directly support the current explanation.

Preferred hierarchy:

```text
PRIMARY HERO
↓
one supporting relation / label
↓
captions
```

Do NOT permanently pack the screen with:

- code
- array
- counters
- regions
- complexity
- roadmap
- explanation text
- side cards

all at once.

The board should continuously breathe:

```text
SHOW
→ TEACH
→ SETTLE
→ REMOVE / REDUCE
→ NEXT
```

### D. Visual Lifecycle Contract

Every meaningful visual in a word-based plan must define:

```text
ENTER
ACTIVE JOB
CAUSE / EFFECT
SETTLE
EXIT / REDUCE
PERSISTENCE REASON (only if it remains)
```

If there is no explicit reason for persistence, the object should leave after its job is finished.

A future scene plan should never say only:

```text
"show X"
```

It should say:

```text
when X enters
why X is center stage
what it teaches
what changes
when X leaves
what state, if any, must persist
```

### E. No Packed Dashboard / No AI-Slop Composition

Do not create static dashboard-style layouts where everything remains visible.

Forbidden default style:

```text
left card
right card
top card
bottom card
all visible for whole scene
```

Do not create generic:

- SaaS cards
- glass panels
- black editor blocks
- statistics dashboards
- floating chips
- decorative boxes
- unnecessary badges

Use direct chalkboard composition and structure geometry.

### F. Active Code Line — Character-by-Character Typing Law

For CODE scenes:

- Future code lines stay hidden.
- The **active line** types character-by-character when narration reaches that code idea.
- Typing must be deterministic and driven by exact audio-sync windows.
- Never dump the complete solution at frame 0.
- Never reveal the next branch before narration reaches it.
- A blinking cursor may exist only on the active line.
- Previously typed lines may remain dim **only when needed to understand the current line**.
- If old lines are no longer needed, collapse/reduce them so the current line remains visually dominant.
- The active line should normally live near the visual center / optical teaching center, not be buried inside a fully populated editor.
- Code typing is not decoration; it represents the teacher constructing the solution.

Preferred code flow:

```text
spoken idea
→ characters type
→ line completes
→ active line briefly holds
→ right-side / center semantic effect appears if needed
→ old line dims
→ next line begins only on its narration anchor
```

Typing timing comes from:

```text
exact word / phrase sync window
÷ actual characters / semantic tokens
```

No guessed typing duration.

### G. No-Spoiler Code Law

Until narration reaches a line:

```text
that line does not exist visually.
```

For branching code, future branches stay hidden unless narration explicitly references the full structure.

For DNF, the missing `mid++` in the `2` branch must be taught by the actual absence of that line, not by pre-rendering future code.

### H. One Semantic Change at a Time

Preferred:

```text
teacher says condition
→ condition appears

teacher says swap
→ values move

teacher says high moves
→ high moves

teacher says mid stays
→ mid remains fixed and receives attention
```

Do NOT perform:

```text
swap + pointer movement + region resize + code typing + camera zoom
```

in the same visual instant.

### I. Cause → Effect Timing Law

Visual action must reflect narration causality.

Example:

```text
"we swap nums[mid] with nums[high]"
→ swap happens

"then move high left"
→ high moves only now

"mid does not move"
→ mid remains pixel-identical
```

Never pre-move the result before its cause is spoken.

### J. Semantic Continuity Instead of Screen Persistence

When changing representations:

```text
trace → code
code → invariant
invariant → roadmap
```

do NOT keep both full systems visible forever.

Use a semantic handoff:

```text
old representation gives the learner the key idea
→ that key idea visually transfers
→ old representation recedes
→ new representation becomes center stage
```

### K. Main Teaching Object Must Stay Central

When a narration beat introduces a main idea, that idea should move to / appear at the center teaching stage.

Examples:
- current array → center
- active code line → center
- mistake proof → center
- invariant → center
- roadmap current problem → center

When its job is complete, remove or reduce it.

### L. Word-Based Planning Template — REQUIRED FOR FUTURE QUESTIONS

Every semantic beat in future word-based plans must include:

```text
ANCHOR / SPOKEN PHRASE

WHAT APPEARS NOW
- only information permitted by current narration

CENTER-STAGE HERO
- the one object learner should look at

CAUSE
- what spoken phrase triggers

EFFECT / MOTION
- algorithm state / relation / attention / continuity

WHAT MUST NOT APPEAR YET
- future state / future code / answer / pointer / label

COMPREHENSION HOLD
- only if audio gives real space

CLEANUP / EXIT
- what disappears or recedes after this beat

PERSISTENT STATE
- only the minimum state needed by next beat
```

### M. Screen Occupancy Rule

Default maximum at one time:

```text
1 primary hero
+ 1 support object
+ captions
```

Exceptions are allowed only where the algorithm itself requires multiple simultaneous state objects, for example array + low/mid/high pointers + region bands. Even then non-active state stays visually quiet.

### N. Geometry / Layout Rule — No Guessing

Do not hardcode approximate layout values in planning.

Use semantic layout terms first:

```text
centerStage
headerZone
pointerLane
captionSafeZone
codeFocusZone
roadmapCurrentRowCenter
```

Implementation resolves these from existing component geometry, fixed kit constants, measured slot centers, or deterministic layout functions.

### O. Code + Visual Relationship

During code scenes, do not permanently split screen 50/50 by default.

Use the layout required by the current narration.

Examples:

```text
typing a new line
→ code owns center stage

explaining what that line changes
→ code reduces slightly
→ semantic array/pointer effect takes center stage

returning to next line
→ visual effect settles/recedes
→ code line returns to center-stage dominance
```

### P. Hook Rule

A hook is allowed only if it exists in the approved script/audio. Never invent a silent hook during frame planning.

For future questions, prefer a verified trace moment that creates an unresolved question instead of generic hype.

### Q. Senior-Developer Planning Rule

Before creating any new word-based plan:

1. Read this SKILL.md.
2. Read the verified teaching trace.
3. Read the actual narration.
4. Inspect relevant existing components if implementation constraints matter.
5. Build the plan from narration order.
6. For each beat explicitly decide what appears, what stays, what leaves, and why motion exists.
7. Reject any visual that does not satisfy a teaching purpose.
8. Reject any future-state spoiler.
9. Reject any generic packed layout.
10. End with the minimum semantic state needed for the next scene.

No AI slop. No guessing. No generic dashboard composition.


> **WHEN TO USE:** Read this skill BEFORE creating ANY scene plan (`plans/*-plan.md`) in Step 4 of the roadmap. Every time. No exceptions.

---

## Part 1 — Pedagogical Philosophy & Core Principles

### 1.1 No Premature Spoilers / No Pre-Rendered Panels
- **Never reveal the punchline or winning state at Frame 0.**
- In **Misconception scenes**: The viewer must be 100% focused on the **Wrong Model** on Center Stage first. The head-to-head split comparison appears ONLY when the speaker explicitly contrasts the two approaches.
- In **Trace scenes**: Pointers and cards reveal state only as the teacher steps through the element in audio.
- In **Why-Not scenes**: Complexity graph curve and operations counter animate only when the teacher states the Big-O and the operations count.

### 1.2 Center Stage First (Zero Dead Space)
- When presenting a single concept, array, or problem state, it must occupy the **Center Stage** of the chalkboard (`x: center`, generous width `800px–1200px`).
- **Never squeeze elements into the top third of the screen leaving a 600px void at the bottom.**
- Transition from Center Stage to Split Screen or Multi-Column layout smoothly only at the exact act boundary where the narration transitions to comparison.

### 1.3 True Optical Vertical Centering (1080p Canvas)
In Remotion compositions at `1920 × 1080`:
- **Top Pill Badge**: `Y: 28px – 70px` (`top: 28px`, centered)
- **Hero Title & Subtitle**: `Y: 95px – 210px` (`fontSize: 48px–54px` hand font)
- **Main Hero Stage** (Arrays, Trees, Graphs, Tables): `Y: 300px – 600px` (Optical Center)
  - 6-card array: Card dimensions `120px × 130px`, gap `24px` (total width `840px`), card font `52px–56px` mono bold.
  - Side-by-side arrays: Card dimensions `88px–96px × 96px–104px`, gap `12px–14px`.
- **Callout Banners & State Feedback**: `Y: 640px – 780px` (`padding: 16px 42px`, `fontSize: 32px–36px` hand font, glowing border).
- **Bottom Captions Safe Zone**: `Y: 960px – 1040px` (`bottom: 30px–40px`).

### 1.4 Exact Audio Synchronization
- Derive EVERY start frame, transition frame, and duration from the word timestamps in `sync/<scene>.json`.
- Visual events (pointer drops, arrows, highlights, question marks, stamps, strikes) MUST trigger on the exact syllable the teacher speaks.
- Teacher's natural speech pauses (`...`) provide the visual hold time for students to digest the concept.

### 1.5 One Idea Per Frame
- Never animate two unrelated state changes simultaneously.
- State change first (e.g. card highlights, question mark appears), THEN pointer movement — never both in the same frames.
- If an act feels visually cluttered, split it into sequential sub-beats.

### 1.6 The 8 Hard-Learned Anti-Patterns & Prevention Rules
1. **Pre-rendered Slide Syndrome (Static Presenter)**: NEVER show full structures at frame 0. Faint empty shells first, populate strictly on the exact spoken syllable.
2. **Premature Answer Spoilers**: NEVER highlight the answer/winning element in gold/yellow during Hook or early beats.
3. **Layout Jitter & Horizontal Shifting**: NEVER use auto-flex insertion. ALWAYS use **Fixed-Width Slot Containers** with predefined absolute slot coordinates so cards never jump horizontally when adjacent cards appear.
4. **1080p Canvas Top Squish**: NEVER squeeze elements in top 350px. Main hero stage must occupy Optical Center (`y: 360..540`).
5. **Ignored Audio Pauses**: NEVER waste audio pauses > 300ms. Choreograph them for line completion, shell preparation, or concept absorption.
6. **Instant 0-Frame Cuts on Strikes**: Chalk strikes MUST use `RoughLine` with `writeProgress()` across 15–25 frames with micro chalk dust.
7. **Simultaneous Motion Clutter**: Separate state change from movement. Never animate pointer, counter, color, and text in the same frames.
8. **Ad-hoc Hardcoded Colors**: Strict adherence to chalkboard kit tokens (`theme.boardBg`, `theme.chalkText`, `theme.pivot`, `theme.good`, `theme.warn`, `theme.cyan`, `theme.purple`).

---

## Part 2 — Standard Scene Plan Template

Every scene plan under `questions/<pattern>/<slug>/plans/<scene>-plan.md` MUST follow this exact structure:

```markdown
# Scene <Number> · <BEAT_TYPE> — Animation Plan

**<Question Name> · LC #<Number> · Type <A/B/C>**  
**Audio**: `<scene>.mp3` — <Duration> s — **<Total Frames> frames** @ 30 fps  
**Goal**: <Clear 1-2 sentence pedagogical goal describing what this scene teaches>

---

## 🎯 Pedagogical Philosophy & Core Rules

1. **NO SPOILERS / NO PRE-RENDERED PANELS**:
   - <Specific rule about what remains hidden and when it reveals>

2. **CENTER STAGE FIRST**:
   - <Specific layout and centering approach for this beat>

3. **EXACT AUDIO SYNC**:
   - <Derivation from sync JSON>

---

## ⏱ Audio Breakdown & Act-by-Act Flow

| Act | Frame Range | Spoken Text & Beat | Visual Choreography (Center Stage & Exact Timings) |
|:---|:---|:---|:---|
| **Act 1** | **F0–F...** | *"<Narration text>"* | **<Visual action 1>**: Detailed step-by-step breakdown with exact frame checkpoints.<br>• F...: Element 1 appears...<br>• F...: State change... |
| **Act 2** | **F...–F...** | *"<Narration text>"* | **<Visual action 2>**: ... |

---

## 📐 Layout Specifications (1080p Canvas)

- **Top Badge**: `y: 28..70`, Center aligned
- **Hero Title**: `y: 95..180`, Font size 50 hand font
- **Main Hero Visual Container**: `y: 300..600`, Center aligned (`x: center`, card dimensions, gap, fonts)
- **Callout / Feedback Banner**: `y: 640..780`, Center aligned
- **Captions Safe Zone**: `y: 960..1040`

---

## 🎨 Color Palette & Theme Tokens

- Background: `theme.boardBg` (`#1A1726`)
- Chalk Text: `theme.chalkText` (`#F8F6F0`)
- Accent / Good: `theme.good` (`#3CE5A7`)
- Warning / Flaw: `theme.warn` (`#FF7675`)
- Pivot / Highlight: `theme.pivot` (`#FFD166`)
- Secondary: `theme.cyan` (`#55E6D0`) / `theme.purple` (`#D8B4E2`)
```

---

## Part 3 — Beat-Specific Planning Checklist

### 1. HOOK Scene Plan
- [ ] Starts with concrete failure / shock moment (e.g. FAANG whiteboard setup, TLE on massive testcase).
- [ ] No definitions, no "In this video".
- [ ] Shows the dilemma in the first 3 seconds.

### 2. COLD OPEN Scene Plan
- [ ] Spaced Repetition System (SRS) recall from previous pattern/question.
- [ ] Quick flash comparison card.

### 3. PREDICT Scene Plan
- [ ] Problem statement clearly visible.
- [ ] Test array with input/output displayed prominently.
- [ ] **3-second silent countdown (3... 2... 1...) strictly preserved**.

### 4. TRACE Scene Plan
- [ ] Visual walkthrough ONLY. Zero code shown.
- [ ] Complete step-by-step trace of every single operation on chosen testcase (no skipped steps).
- [ ] Pointers, visited markers, and accumulators update in exact sync with voice.

### 5. CODE Scene Plan
- [ ] Future code is hidden. Never pre-render the complete solution.
- [ ] The active line types character-by-character only when narration reaches that code idea.
- [ ] Typing timing is derived from exact word-sync windows; never guessed.
- [ ] Active line owns center stage; previously typed lines remain dim only if required for current understanding.
- [ ] When narration explains the effect of the active line, the semantic array/pointer/state may take center stage; after the explanation, that support visual recedes.
- [ ] No generic explanation card is required. Use direct chalk text / semantic visual only when narration needs it.
- [ ] No code branch or future line appears before its narration anchor.
- [ ] Python only unless an approved project source explicitly changes the course language.

### 6. WHY-NOT Scene Plan
- [ ] Stated Big-O complexity badge.
- [ ] Animated complexity curve graph drawing left-to-right.
- [ ] Animated operations counter rolling up to real numbers (e.g. $n=10,000 \to 100,000,000$).
- [ ] Decisive verdict in coral/gold ("Too slow. Can we do better?").

### 7. MISCONCEPTION Scene Plan
- [ ] Wrong model debunked on Center Stage first (No spoilers of optimal solution).
- [ ] Concrete visual proof of why wrong model fails (e.g. index destruction, ordering violation).
- [ ] Clumsy workaround shown with its penalties.
- [ ] Head-to-head split comparison only reveals at act boundary.
- [ ] 3 Pillars of Victory + Grand Verdict Stamp.

### 8. COMPLEXITY Scene Plan
- [ ] Derivation breakdown (Time & Space).
- [ ] Multi-curve overlay graph with past approaches dimmed and optimal glowing in mint.
- [ ] Side-by-side summary cards + practice problem chips.
