---
name: dsa-production
description: Controls the stage order for every long-form Code With Animation DSA problem and prevents production stages from being skipped.
---

# DSA Production V2

## Use this skill
At the beginning of every new roadmap problem, at every phase transition, and whenever it is unclear what artifact may be created next.

## Scope
Long-form DSA only. Shorts are excluded from this repository.

## Pipeline

```text
1 ROADMAP
2 CODEBASE AUDIT
3 PROBLEM ANALYSIS
4 APPROACH LOCK
5 MASTER TESTCASE
6 DRY RUN
7 INDEPENDENT RECHECK
8 VERIFIED TRACE
9 TEACHING ARCHITECTURE
10 SCRIPT
11 SCRIPT VERIFICATION
12 MP3
13 EXACT WORD SYNC
14 FRAME-WISE PLAN
15 IMPLEMENTATION DELTA
16 ANTIGRAVITY IMPLEMENTATION
17 CRITICAL-FRAME QA
18 FINAL QA
19 FINAL RENDER
20 SEO
21 ROADMAP UPDATE
```

## Stage gates

### Gate 1 — roadmap
Must know exact:
- pattern
- course question number
- problem title
- LeetCode number
- difficulty
- roadmap technique

If source is missing, stop.

### Gate 2 — codebase
Before visual planning, inspect relevant reusable files and past scenes.

Output:
- `REUSE`
- `EXTEND`
- `CREATE`
- `DO NOT TOUCH`

### Gate 3 — algorithm
Every selected approach must have:
- exact implementation/pseudocode
- exact testcase
- complete trace

### Gate 4 — verification
A second independent execution must match the first trace.

Only then mark trace verified.

### Gate 5 — script
Script can only consume verified algorithm truth.

### Gate 6 — audio
Final script is rendered to MP3.

### Gate 7 — sync
Exact word timing must exist before timed scene planning.

### Gate 8 — scene plan
Every important state transition receives an exact frame range.

### Gate 9 — implementation
Antigravity implements only after the plan is complete enough that it does not need to invent algorithm behavior.

### Gate 10 — review
Critical frames and final render are reviewed against:
- trace
- sync
- Design Bible
- Motion Bible
- scene plan

## Approach count
Do not force three approaches.

Use only approaches that materially improve teaching.

A problem may have:
- one direct method
- brute + optimal
- brute + better + optimal
- another justified sequence

The previous approach should create the question that leads to the next approach.

## Production artifact checklist

Before implementation, the question should have:

```text
analysis / research
verified trace
verified script
MP3
exact sync JSON
scene plans
implementation delta
```

## Stop conditions

Stop rather than guess if:
- next problem conflicts with roadmap
- testcase does not expose intended branch
- two dry runs disagree
- script contradicts trace
- MP3 differs from approved script materially
- sync is incomplete
- a requested component may already exist but has not been checked
- visual design requires a new theme rule not yet approved
