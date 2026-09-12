---
name: dsa-scene-planning
description: Comprehensive scene planning and animation choreography guide for Code With Animation DSA videos. MUST be read before creating ANY scene plan (*-plan.md). Covers pedagogical philosophy, center-stage rules, optical vertical centering on 1080p, exact audio synchronization, beat choreography, and plan template.
---

# DSA Scene Planning & Animation Choreography Skill — Code With Animation

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
- [ ] Implementation explanation ONLY. Zero visual walkthrough.
- [ ] Line-by-line typewriter code reveal with blinking cursor.
- [ ] Active explanation card below code dynamically explains what the active line does and why.
- [ ] Python only.

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
