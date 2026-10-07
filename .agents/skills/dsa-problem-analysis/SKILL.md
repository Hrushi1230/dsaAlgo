---
name: dsa-problem-analysis
description: Researches the exact roadmap DSA problem, locks meaningful approaches and chooses an animation-worthy master testcase before any narration is written.
---

# DSA Problem Analysis V2

## Input
- authoritative roadmap row
- exact problem statement
- constraints
- accepted algorithm knowledge/source
- current course context

## Required problem facts

Record:

```text
COURSE #:
PATTERN:
PROBLEM:
LEETCODE #:
DIFFICULTY:
ROADMAP TECHNIQUE:
INPUT:
OUTPUT:
CONSTRAINTS:
IN-PLACE REQUIREMENT:
MUTATION ALLOWED:
IMPORTANT EDGE CASES:
```

Do not silently correct the roadmap or substitute another problem.

## Approach analysis

For each candidate approach:

```text
NAME:
CORE IDEA:
TIME:
SPACE:
WHY CORRECT:
PEDAGOGICAL VALUE:
LIMITATION THAT LEADS TO NEXT IDEA:
KEEP / REJECT:
```

Reject redundant approaches.

## Teaching sequence

Do not default automatically to:

```text
brute → better → optimal
```

Instead derive the smallest meaningful teaching progression.

Examples of valid structures:

```text
problem → misconception → optimal
problem → brute → failure → optimal
problem → brute → better → optimal
problem → invariant → direct optimal
```

## Master testcase

Choose one testcase that naturally exposes the algorithm.

Evaluate it for:
- all meaningful branches
- duplicates when relevant
- boundary behavior
- pointer crossings
- resets
- gaps
- negative/zero if relevant
- mutations/swaps
- readability on screen
- ability to explain why approaches differ

Do not change the testcase later just to make the script easier.

## Edge-case set

Besides the master testcase, identify a small validation set:
- empty if allowed
- one element
- all same
- already solved/order-correct
- reverse or worst arrangement
- structure-specific boundaries

These validate correctness; they do not all need animation scenes.

## Output

The analysis artifact must finish with:

```text
SELECTED APPROACHES
MASTER TESTCASE
EXPECTED RESULT
EDGE-CASE VALIDATION SET
TEACHING QUESTION CREATED BY EACH FAILURE
```

No narration should be written in this stage.
