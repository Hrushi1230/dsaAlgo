# Scene 05 · Critical Frame QA Checklist: Why Brute Force Fails
**Question:** 012 · Next Permutation (LeetCode 31)  
**Scene:** `05-why-brute`  
**Audio:** `remotion-project/public/audio/012/05-why-brute.mp3` (75.600s, 2,268 frames @ 30 FPS)  
**Anchor Source:** `sync/05-why-brute.anchors.json`  

---

## 1. Frame-Specific Visual Checkpoints

| Checkpoint ID | Anchor | Review Frame | Spoken Narration Anchor | Expected Visual & Semantic State | Status |
|---|---|---|---|---|---|
| **QA-01** | `S05_N_DISTINCT` | **Frame 50** | "If the array has n distinct values," | Initial Context: Chalk hero card appears with `n distinct values`; no formula leaks. | `[x] PASS` |
| **QA-02** | `S05_FACTORIAL` | **Frame 170** | "the number of possible permutations is n factorial." | Formula Reveal: `n!` formula draws with golden glow; no specific numeric table yet. | `[x] PASS` |
| **QA-03** | `S05_THREE` | **Frame 300** | "3 values give only 6 permutations," | Concrete Grounding: Table row for `N=3 -> 3! = 6` draws with green checkmark. | `[x] PASS` |
| **QA-04** | `S05_HUGE` | **Frame 410** | "but factorial growth becomes huge very quickly," | Factorial Explosion: Table rows expand to `N=5 (120)`, `N=10 (3.6M)`, `N=20 (10^18)` with warning badges. | `[x] PASS` |
| **QA-05** | `S05_STORAGE` | **Frame 540** | "and we would have to store many of those permutations." | Memory Burden: Right card appears showing heap allocation of $N!$ tuples. | `[x] PASS` |
| **QA-06** | `S05_SPACE_BREAK` | **Frame 670** | "so this also breaks the constant extra space requirement." | Constraint Violation: Prominent Red Stamp `VIOLATION: O(N! · N) AUXILIARY SPACE` slams down. | `[x] PASS` |
| **QA-07** | `S05_TOO_MUCH` | **Frame 850** | "is doing far too much work." | Waste Contrast: Seesaw/contrast diagram showing giant $N!$ work pile vs. tiny $+1$ step. | `[x] PASS` |
| **QA-08** | `S05_CURRENT_EXISTS` | **Frame 1010** | "We already have the current permutation." | Master Array Introduction: `ArrayTrackV2` centered with `[1, 3, 2]` at Y: 220; phase 1 cards wiped. | `[x] PASS` |
| **QA-09** | `S05_USE_STRUCTURE` | **Frame 1090** | "We should use its structure." | Array Information Highlight: Cyan glow pulses across digits `1, 3, 2`. | `[x] PASS` |
| **QA-10** | `S05_NEXT_MEANING` | **Frame 1175** | "Think about what next really means." | Conceptual Prompt: Definition card appears below array asking what "next" means. | `[x] PASS` |
| **QA-11** | `S05_SMALLEST_CHANGE` | **Frame 1260** | "We want the smallest possible change." | Rule 1: `1. SMALLEST POSSIBLE CHANGE (Minimize Δ)` draws in gold. | `[x] PASS` |
| **QA-12** | `S05_MAKES_LARGER` | **Frame 1345** | "that makes the array larger." | Rule 2: `2. THAT MAKES THE ARRAY STRICTLY LARGER` draws in emerald green. | `[x] PASS` |
| **QA-13** | `S05_TOO_FAR_LEFT` | **Frame 1430** | "If we change something too far to the left," | Positional Comparison: Highlight on slot 0 (hundreds place) vs. slot 2 (units place). | `[x] PASS` |
| **QA-14** | `S05_JUMP` | **Frame 1520** | "the jump becomes unnecessarily large." | Overshoot Diagram: Massive jump (+180 units) illustrated with red dashed arc over target. | `[x] PASS` |
| **QA-15** | `S05_FAR_RIGHT` | **Frame 1660** | "as far to the right as possible." | Golden Principle: Warm gold card `MAKE THE CHANGE AS FAR TO THE RIGHT AS POSSIBLE` illuminates. | `[x] PASS` |
| **QA-16** | `S05_FIRST_CLUE` | **Frame 1800** | "That gives us our first clue." | First Clue Badge: `CLUE #1: RIGHT-TO-LEFT SCAN DIRECTION` with magnifying glass. | `[x] PASS` |
| **QA-17** | `S05_LOOK_RIGHT` | **Frame 1890** | "Look from the right side of the array" | Scan Arrow: `RoughLine` chalk arrow draws from right to left across array top. | `[x] PASS` |
| **QA-18** | `S05_FIRST_PLACE` | **Frame 1980** | "and find the first place," | Breakpoint Search: Scan cursor inspects slot 2 then slot 1; no pivot formula leaked. | `[x] PASS` |
| **QA-19** | `S05_LARGER_POSSIBLE` | **Frame 2100** | "where a larger arrangement is still possible." | Search Criterion: Question card `Where can a smaller number swap with a larger number?` | `[x] PASS` |
| **QA-20** | `S05_BUILD_OPTIMAL` | **Frame 2220** | "Now we can build the optimal idea carefully." | Clean Scene 06 Handoff: `NEXT UP ──► SCENE 06: OPTIMAL 3-STEP ALGORITHM` card settles. | `[x] PASS` |

---

## 2. Invariant & Anti-Regression Verification

- [x] **Frame 0 Continuity:** Top Header badge and chalkboard background match Scene 04 final state.
- [x] **Exact Frame Duration:** Total frames rendered is exactly 2,268 @ 30 FPS.
- [x] **No Pivot Spoilers:** Scene 05 never names or executes the pivot index or successor index (strictly reserved for Scene 06).
- [x] **Kit Component Compliance:** All cards use `RoughCard` with `RoughBox` chalk outline; all dividers use `ChalkDivider` with `RoughLine`.
- [x] **Array V2 Law:** `ArrayTrackV2` preserves slot indices `idx [0]..[2]` and slot shells at all times.
- [x] **Vertical Layout Harmony:** All elements fit cleanly within the `Y: 135..760` center zone, leaving > 220px breathing room above bottom captions (`Y: 980`).
- [x] **Zero Text Collision:** No cards, borders, or text elements overlap or collide with array slots or labels. Verified clean separation in Phase 1 dual cards + waste banner.
