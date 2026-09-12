---
name: dsa-scriptwriting
description: Complete scriptwriting guide for Code With Animation DSA videos. MUST be read before writing ANY script. Covers Indian English tone, pacing, word choices, scene structure, format, and quality checklist.
---

# DSA Scriptwriting Skill — Code With Animation

> **WHEN TO USE:** Read this skill BEFORE writing any `script.json` or `script.md` file. Every time. No exceptions.

---

## Part 1 — The Voice

### Who Is Speaking?

A **female Indian teacher** — warm, patient, clear. Like a senior didi explaining to juniors in the hostel common room. NOT a professor. NOT a textbook. NOT an AI.

### The Reading Aloud Test

Before finalizing any script, imagine reading it aloud. If it sounds like:
- ✅ A senior explaining to a junior over chai → **GOOD**
- ❌ A professor reading from slides → **REWRITE**
- ❌ A blog post being narrated → **REWRITE**
- ❌ ChatGPT / AI-generated text → **REWRITE**

---

## Part 2 — Indian English Rules

### 2.1 — Discourse Markers

These make speech feel natural and Indian. They are NOT filler to remove — they are **rhythm anchors**.

| Marker | Function | Example |
|:---|:---|:---|
| **"na?"** | Confirmation tag ("isn't it?") | "This is just checking all pairs, na?" |
| **"right?"** | Comprehension check | "We need two numbers that add up to target, right?" |
| **"see"** | Focus-inviter, before insight | "See, the problem here is..." |
| **"basically"** | Simplifier/framer | "Basically, we're asking: have I seen my partner?" |
| **"let's say"** | Example introduction | "Let's say the array is [2, 7, 11, 15]" |
| **"so"** | Transition builder | "So what do we do? We store it." |
| **"ok so"** | New thought starter | "Ok so the first thing that comes to mind..." |
| **"think about it"** | Reflection pause | "Think about it... why check every pair?" |
| **"the thing is"** | Real point reveal | "The thing is, we don't need to check every pair" |

**Rules:**
- 2–3 markers per paragraph max. Sprinkle, don't dump.
- "na?" only at natural pause points, never mid-sentence
- "right?" after something the student already knows
- "see" before revealing an insight

### 2.2 — Sentence Structure

| ❌ Standard English | ✅ Indian English (Natural) |
|:---|:---|
| "The time complexity is O(n²)." | "This approach? O of n squared." |
| "We should verify if the number exists." | "We check... is the number there? No? Add it." |
| "Let us consider the following example." | "Let's take an example." |
| "It is important to note that..." | ❌ BANNED — just say the thing |
| "In this video, we will learn about..." | ❌ BANNED — start with the hook |

**Key patterns:**
- **Short sentences.** Punchy. Not long academic compounds.
- **Questions as transitions.** "But what if the array is huge?" NOT "However, for large arrays..."
- **Echo/repeat for emphasis.** "One pass. Just one pass. That's all."
- **Self-correction style.** "We check every pair... wait, that's too slow."
- **Thinking out loud.** "Hmm... what if instead of searching... we remember?"

### 2.3 — Word Choices

Use the **simplest word** that a 2nd-year BTech student uses daily.

| ❌ Formal / Textbook | ✅ Simple |
|:---|:---|
| "iterate through" | "go through" / "walk through" |
| "subsequently" | "then" / "after that" |
| "utilise" | "use" |
| "ascertain" | "check" / "find out" |
| "terminate" | "stop" / "end" |
| "initialise" | "start with" / "create" |
| "computational complexity" | "how fast it runs" / "time complexity" |
| "optimal solution" | "the best approach" / "the fast way" |
| "auxiliary space" | "extra memory" / "extra space" |
| "the aforementioned" | "this" / "the one we just saw" |

**Indian-specific:**
- **"lakh"** not "hundred thousand" (10 lakh = 1 million)
- **"crore"** not "ten million" (1 crore = 10 million)
- **"O of n squared"** — always say it out, never just write O(n²)
- **"index zero"** not "zeroth index"
- **"at position i"** not "at the i-th position"

### 2.4 — Analogies

Use things Indian BTech students relate to instantly.

| Concept | Analogy |
|:---|:---|
| HashMap lookup | "Like a phone book — don't read every page, jump to the right letter" |
| Brute force pairs | "Like shaking hands with everyone at a party — 100 people = thousands of handshakes" |
| Complement lookup | "You know what you're looking for. Ask 'have I already met this person?'" |
| O(n²) waste | "Checking every student's ID against every other student... in a college of ten thousand" |
| HashSet | "A register. Sign when you enter. 'Is Rahul here?' Check the register." |
| Trading space for time | "Spending a little money to save a lot of time. Like Uber instead of waiting for a bus." |

**Rules:**
- ONE analogy per concept, not three
- If you need to explain the analogy, it's too complicated — pick a simpler one
- Drop the analogy once the concept clicks

---

## Part 3 — Pacing & Pauses

### 3.1 — The `...` System

| Notation | Duration | Purpose |
|:---|:---|:---|
| `...` | ~0.5 sec | Natural breath pause |
| `... ...` | ~1.0 sec | Thinking pause / "let that sink in" |
| `....` (end of line) | ~1.5 sec | End of thought, scene transition |

### 3.2 — When to Pause

- **After asking a question** — let the student think
- **Before revealing the answer** — build anticipation
- **After stating a key insight** — let it land
- **After each step in a trace** — never rush operations
- **Between approaches** — clear mental palette

### 3.3 — Speed by Scene Type

| Scene Type | Speed | Why |
|:---|:---|:---|
| **TRACE** | SLOWEST | Each operation gets its own beat. Student follows along. |
| **CODE** | MEDIUM | Line by line with flow. Not rushed, not dragging. |
| **HOOK / COLD OPEN** | CONVERSATIONAL | Natural talking speed. |
| **WHY-NOT** | MEDIUM-SLOW | Numbers need time to land. |
| **PREDICT** | MEDIUM → SILENT | Question at normal speed, then 3-sec dead silence. |
| **MISCONCEPTION** | MEDIUM | Build up wrong idea, then correct gently. |
| **COMPLEXITY** | MEDIUM | Comparison needs clarity. |

---

## Part 4 — Emotional Arc

Every video follows this emotional journey:

```
HOOK         → Curiosity / Shock     "What if your code took 50 million steps?"
COLD OPEN    → Connection            "Remember what we did last time?"
PREDICT      → Challenge             "How would YOU solve this?"
TRACE BRUTE  → Patience → Pain      Walk every step. Feel the waste.
CODE BRUTE   → Understanding         "See? Simple. But slow."
WHY-NOT      → Shock                 "50 million comparisons. For ten thousand elements."
TRACE OPT    → Relief / Delight      "Five steps. Same array. Done."
CODE OPT     → Confidence            "Four lines. Clean."
MISCONCEPTION→ Aha!                  Wrong idea first → gentle correction
COMPLEXITY   → Mastery               "You now know both approaches."
```

### Key emotional rules:
- The **brute force pain** must be FELT. Don't rush the trace.
- The **WHY-NOT number** must shock. Use lakh/crore for Indian scale.
- The **optimal trace** must feel like RELIEF after the pain.
- The **misconception** must let the viewer believe the wrong thing FIRST.

---

## Part 5 — Trace Scene Rules

### 5.1 — EVERY Single Step

- Walk through **EVERY operation**. No shortcuts.
- Never say "similarly for the rest" or "and so on"
- If the array has 7 elements, trace all 7
- If there are 13 comparisons, narrate all 13
- If the trace would be too long (20+ steps), pick a **SMALLER test case** — never skip steps

### 5.2 — Trace Narration Pattern

For BRUTE FORCE trace (pair checking):
```
"[element1] versus [element2]... [match/no match]."
```

For OPTIMAL trace (HashMap/Set):
```
"See [element]. Is [element] in the [structure]? ... [Yes/No]. [Action]."
```

### 5.3 — Trace vs Code Separation

| TRACE scene | CODE scene |
|:---|:---|
| Visual walkthrough ONLY | Write code ONLY |
| NO code shown on screen | NO visual walkthrough |
| Animate arrays, pointers, data structures | Show code editor, type line by line |
| Student understands the IDEA | Student learns HOW TO WRITE IT |

This separation reduces cognitive overload.

---

## Part 6 — Code Scene Rules

### 6.1 — Python ONLY
All code is Python. No JavaScript, C++, or Java. Clean, readable, interview-style Python.

### 6.2 — Line by Line
- Each line appears as the narrator explains it
- Explain WHAT the line does AND **WHY** it's there
- Highlight "aha" moments: "See this line? This is where the magic happens."

### 6.3 — Code Style
- Use Pythonic idioms: `Counter`, `sorted()`, `enumerate()`, list comprehensions
- Keep it clean — the kind you'd write in a real interview
- No over-commenting in the actual code

---

## Part 7 — Scene-by-Scene Writing Guide

### HOOK
- **Length:** 3–5 sentences
- **Opens with:** A concrete scenario / failure case
- **NEVER starts with:** "In this video..." or definitions
- **Ends with:** A question that hooks curiosity
- **Test:** Would a student stop scrolling for this?

### COLD OPEN (SRS Recall)
- **Length:** 3–4 sentences
- **Opens with:** "Last video, we solved [X]..."
- **Bridges:** Old concept → new concept. What's the JUMP?
- **Keep under:** 15 seconds
- **First video in pattern:** Establish the pattern group instead

### PREDICT
- **Has:** Problem statement + test data + optional hint
- **Ends with:** 3-SECOND SILENT COUNTDOWN. Sacred. Never shorten.
- **Hint format:** "Think about what data structure could help here..."
- **Show:** Input, expected output, constraints

### TRACE (BRUTE / BETTER / OPTIMAL)
- **Rule:** EVERY single operation narrated
- **Rule:** NO code shown. Visual only.
- **Include:** Primary test case (positive result) + optionally negative test case
- **Narration style:** Step by step, calling out each value
- **End with:** Summary of how many steps it took

### CODE (BRUTE / BETTER / OPTIMAL)
- **Rule:** NO visual walkthrough. Code only.
- **Python only.**
- **Line by line** with explanation
- **Highlight** the key insight line: "This is where the magic happens"
- **End with:** Brief summary of what the code does

### WHY-NOT (BRUTE / BETTER)
- **State** the complexity: "This approach is O of n squared"
- **Draw** the curve: animated graph
- **Show** concrete number: "For n = 10,000, that's 50 million comparisons"
- **Use** Indian number system: lakh, crore
- **Verdict:** "Too slow. Can we do better?" (coral/gold text)

### MISCONCEPTION
- **Show wrong model FIRST.** Let the viewer believe it.
- **Then** gently reveal why it's wrong or incomplete.
- **Don't dismiss** the wrong approach — acknowledge it works, but explain the deeper issue.
- **"Both correct. But [X] shows deeper understanding."**

### COMPLEXITY (Final)
- **Overlay** all complexity curves on same graph
- **Previous approaches:** dimmed
- **Optimal:** bright mint, drawn last
- **Below graph:** side-by-side comparison card (2 or 3 columns)
- **Below card:** practice set (next 3 problems to try)
- **Key takeaway:** one sentence summarizing the pattern lesson

---

## Part 8 — Output Format

### 8.1 — `script.json` Structure

```json
{
  "question": {
    "title": "Problem Name",
    "pattern": "Pattern Name",
    "pattern_number": 1,
    "question_number": 3,
    "leetcode": 1,
    "difficulty": "Easy",
    "technique": "Key technique in one line",
    "companies": ["Google", "Amazon", "Meta"]
  },
  "approach_type": "B",
  "approach_count": 2,
  "scene_count": 10,
  "test_data": {
    "primary": { ... },
    "negative": { ... }
  },
  "scenes": [
    {
      "id": "01-hook",
      "beat": "HOOK",
      "narration": "Full narration text...",
      "visual_intent": "What the animation shows...",
      "notes": "Production notes..."
    }
  ]
}
```

**Each scene object contains:**

| Field | Required | Description |
|:---|:---|:---|
| `id` | ✅ | Scene ID: `"01-hook"`, `"04-trace-brute"` |
| `beat` | ✅ | Beat type: `"HOOK"`, `"TRACE_BRUTE"` |
| `narration` | ✅ | Full script text for voice recording |
| `visual_intent` | ✅ | Description of what animation shows |
| `notes` | ✅ | Production notes |
| `approach` | TRACE/CODE | `"brute"` / `"better"` / `"optimal"` |
| `recall_from` | COLD_OPEN | Which previous video |
| `code` | CODE scenes | Python code as string |
| `code_language` | CODE scenes | Always `"python"` |
| `test_data` | TRACE scenes | Step-by-step trace data |
| `countdown_seconds` | PREDICT | Always `3` |
| `complexity_curve` | WHY-NOT | Curve spec object |
| `complexities` | COMPLEXITY | All approaches compared |
| `practice_set` | COMPLEXITY | Next 3 problems to try |

### 8.2 — `script.md` Structure

```markdown
# Problem Name (LC #) — Script

**Type B · 10 Scenes · Python · Female Voice · Indian English**

---

## Scene 01 — HOOK
**Audio file:** `audio/01-hook.mp3`

[Full narration text here]

---

## Scene 02 — COLD OPEN
**Audio file:** `audio/02-cold-open.mp3`

[Full narration text here]

...
```

The `.md` file is the **human-readable version** for voice recording. Same narration text, cleaner formatting, code blocks for reference.

---

## Part 9 — Quality Checklist

**Run this checklist BEFORE submitting any script:**

### Tone
- [ ] Read every narration aloud — does it sound like a human Indian teacher?
- [ ] No AI-sounding phrases? ("In this video...", "Let's dive into...", "Key takeaway...")
- [ ] No formal English? ("Subsequently...", "Furthermore...", "It is imperative...")
- [ ] At least 2–3 discourse markers per scene? ("na?", "right?", "see", "basically")
- [ ] Sentences are short and punchy, not long academic compounds?

### Pacing
- [ ] Natural pauses marked with `...` at every breath point?
- [ ] Questions asked before answers given (not just stated)?
- [ ] Trace scenes narrate EVERY single step? No shortcuts?
- [ ] 3-second countdown in PREDICT scene? Never shortened?

### Content
- [ ] TRACE scenes have NO code shown?
- [ ] CODE scenes have NO visual walkthrough?
- [ ] All code is Python?
- [ ] WHY-NOT scene has: complexity stated, curve drawn, concrete number, verdict?
- [ ] MISCONCEPTION shows wrong model FIRST, then corrects?
- [ ] Practice set has exactly 3 next problems?

### Data
- [ ] Test data is concrete — actual arrays, actual values?
- [ ] Trace data has every comparison/step listed individually?
- [ ] Negative test case included where appropriate?
- [ ] Numbers use Indian system (lakh, crore) in narration?

### Format
- [ ] Both `script.json` and `script.md` created?
- [ ] Scene count matches approach type (A=7, B=10, C=13)?
- [ ] Audio filenames match scene IDs?
- [ ] All required fields present in each scene object?

---

## Part 10 — BANNED Phrases

These phrases are NEVER allowed in any script:

```
❌ "In this video, we will learn about..."
❌ "Let's dive into..."
❌ "Without further ado..."
❌ "Let's get started!"
❌ "An important thing to note is..."
❌ "As we can see from the above..."
❌ "The key takeaway here is..."
❌ "One must consider..."
❌ "It is imperative to..."
❌ "Furthermore..." / "Moreover..." / "Consequently..."
❌ "Similarly for the rest..."
❌ "Obviously..." / "Clearly..."
❌ "This is a classic problem that..."
❌ "The reader should note..."
❌ "[insert here]" / "lorem ipsum"
```

---

## Part 11 — Before/After Examples

### ❌ AI-sounding (BANNED)

> "In this video, we will learn about the Two Sum problem. Given an array of integers and a target value, we need to find two numbers that sum to the target and return their indices. The brute force approach involves checking every pair of elements using nested loops, resulting in O(n²) time complexity."

### ✅ Indian English (CORRECT)

> "You're given a bunch of numbers... and a target. Find two numbers that add up to that target... and tell me their positions. ... Ok so first thought... check every pair, na? Pick one number... check it with every other number. Does this pair add up? No. Next pair. Does this? No. Keep going...."

### ❌ Rushing the trace (BANNED)

> "We compare 2 with 7 (no match), then 2 with 11 (no match), and similarly for the remaining elements."

### ✅ Full trace (CORRECT)

> "Two plus seven... that's nine. Nine equals nine? Yes! ... Wait, actually let me start over. Two... is the first element. Target is nine. So we need nine minus two... which is seven. Is seven in our map? ... Not yet. So store two at index zero. ... Move to seven. Target minus seven... that's two. Is two in our map? ... Yes! Index zero! Return [0, 1]. Done."
