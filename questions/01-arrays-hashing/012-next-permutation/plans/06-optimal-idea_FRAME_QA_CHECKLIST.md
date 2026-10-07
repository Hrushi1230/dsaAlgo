# Scene 06 · Critical Frame QA Checklist: Method 2 · Optimal Idea Conceptual Derivation
**Question:** 012 · Next Permutation (LeetCode 31)  
**Scene:** `06-optimal-idea`  
**Audio:** `remotion-project/public/audio/012/06-optimal-idea.mp3` (108.400s, 3,252 frames @ 30 FPS)  
**Anchor Source:** `sync/06-optimal-idea.anchors.json`  

---

## 1. Frame-Specific Visual Checkpoints

| Checkpoint ID | Anchor | Review Frame | Spoken Narration Anchor | Expected Visual & Semantic State | Status |
|---|---|---|---|---|---|
| **QA-01** | `S06_START_RIGHT` | **Frame 30** | "Start from the right side." | Exploration Origin: Right-to-left scan pointer arrow appears at right edge of array track. | `[x] PASS` |
| **QA-02** | `S06_FIND_I` | **Frame 180** | "where nums at i is smaller than nums at i plus 1." | Pivot Condition: Adjacent slots `i` and `i+1` compare with glowing `<` inequality box. | `[x] PASS` |
| **QA-03** | `S06_WHY` | **Frame 290** | "Why?" | Pedagogical Question: Amber cursive callout `Why this condition?` pops on center stage. | `[x] PASS` |
| **QA-04** | `S06_SUFFIX` | **Frame 400** | "forms a non-increasing suffix." | Suffix Range Band: Cyan/mint band spans from `i+1` to right edge: `NON-INCREASING SUFFIX`. | `[x] PASS` |
| **QA-05** | `S06_SUFFIX_MAX` | **Frame 590** | "is already the largest possible arrangement" | Maximality Proof: Descending stair-step indicator confirms suffix is already maximal. | `[x] PASS` |
| **QA-06** | `S06_CANT_SUFFIX` | **Frame 780** | "changing only that suffix cannot give us a larger permutation." | Suffix Rejection: Red chalk stamp `✗ ALREADY AT MAXIMUM` over suffix-only changes. | `[x] PASS` |
| **QA-07** | `S06_PIVOT_CONCEPT` | **Frame 980** | "The first place where we can increase the permutation is the pivot." | Pivot Identification: Slot `i` illuminates in rich gold with badge `★ PIVOT (INDEX i)`. | `[x] PASS` |
| **QA-08** | `S06_SMALLEST_INCREASE` | **Frame 1150** | "increase that pivot, but only by the smallest possible amount." | Delta Minimization: Card `GOAL: MINIMIZE THE INCREASE (Δ)` appears under array. | `[x] PASS` |
| **QA-09** | `S06_SEARCH_RIGHT_AGAIN` | **Frame 1300** | "So we search from the right again for the first value," | Successor Scan: Pointer $j$ enters from right edge pointing leftward across suffix. | `[x] PASS` |
| **QA-10** | `S06_STRICT_GREATER` | **Frame 1430** | "that is strictly greater than the pivot." | Successor Condition: Inequality card `nums[j] > nums[i]` pulses in bright amber. | `[x] PASS` |
| **QA-11** | `S06_RIGHT_FIRST_SMALLEST` | **Frame 1620** | "the first greater value from the right is the smallest value" | Minimality Proof: 3-point breakdown proving right-to-left scan finds the minimal greater element. | `[x] PASS` |
| **QA-12** | `S06_SWAP_CONCEPT` | **Frame 1810** | "We swap those two values." | Conceptual Swap: Curved swap arc animates exchange of pivot and successor values. | `[x] PASS` |
| **QA-13** | `S06_NOW_LARGER` | **Frame 1890** | "Now the permutation is larger." | Prefix Larger Check: Green checkmark badge `STATUS: PERMUTATION IS STRICTLY LARGER ✓`. | `[x] PASS` |
| **QA-14** | `S06_SUFFIX_STILL_NONINC` | **Frame 2010** | "the suffix is still non-increasing." | Invariant Preservation: Suffix badge confirms `CRITICAL INVARIANT: SUFFIX STILL NON-INCREASING`. | `[x] PASS` |
| **QA-15** | `S06_VERY_NEXT` | **Frame 2140** | "But we still need the very next permutation." | Goal Clarification: Contrast card `LARGER ≠ VERY NEXT` highlights remaining minimization. | `[x] PASS` |
| **QA-16** | `S06_SUFFIX_MIN` | **Frame 2270** | "everything after the pivot must become as small as possible." | Minimization Target: Suffix band highlights with label `MINIMIZE SUFFIX VALUES`. | `[x] PASS` |
| **QA-17** | `S06_REVERSE_PROOF` | **Frame 2460** | "reversing it gives us the smallest possible suffix." | Reversal Duality: Flip diagram showing Descending (Maximal) ➔ Ascending (Minimal). | `[x] PASS` |
| **QA-18** | `S06_NO_SORT` | **Frame 2620** | "So we do not need to sort it." | Sort Elimination: Red chalk strikethrough eliminates `SORT: O(K log K)`. | `[x] PASS` |
| **QA-19** | `S06_REVERSE` | **Frame 2700** | "We simply reverse it." | Reverse Operation: Pill badge `JUST REVERSE IN-PLACE: O(K) TIME · O(1) SPACE`. | `[x] PASS` |
| **QA-20** | `S06_REASON_SUMMARY` | **Frame 2930** | "find the rightmost place that can increase..." | Master Blueprint: Comprehensive 3-step synthesis card with illuminated stages. | `[x] PASS` |
| **QA-21** | `S06_EXECUTE` | **Frame 3190** | "Now let's execute that on our master example." | Scene 07 Handoff: Untouched master array `[2, 1, 5, 4, 4, 3, 0]` centered, clean. | `[x] PASS` |

---

## 2. Invariant & Anti-Regression Verification

- [x] **Frame 0 Continuity:** Top Header strip and chalkboard background match Scene 05 final state.
- [x] **Exact Frame Duration:** Total frames rendered is exactly 3,252 @ 30 FPS (108.400s).
- [x] **Oxford Chalkboard Aesthetic:** No pitch-black rectangles; cards use translucent chalkboard washes (`rgba(10..48, ...)`) with `RoughBox` chalk outlines matching `s03_f1250.png`.
- [x] **Top Header System:** Left badges (`[ 01 · ARRAYS & HASHING · LC 31 ]`, `[ MEDIUM ]`), center handwritten title in Caveat, right golden badge (`[ APPROACH 2 · OPTIMAL IDEA ]`).
- [x] **Zero Collision Law:** Track title headers and range brackets have `>= 44px` clearance; cards placed below tracks have `>= 50px` clearance above slot indices and pointer lanes.
- [x] **Vertical Canvas Harmony:** Visual elements are balanced across the `Y: 150..770` center zone, leaving > 200px breathing room above bottom captions (`Y: 980`).
- [x] **Array V2 Law:** Slots remain stationary; values move along trajectories; indices never shift.
- [x] **Pedagogical Purity:** Master array values remain untouched until execution in Scene 07; conceptual demonstrations use generic abstract tokens.
