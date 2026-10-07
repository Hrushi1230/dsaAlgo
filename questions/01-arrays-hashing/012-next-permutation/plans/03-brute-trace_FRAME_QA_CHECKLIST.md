# Scene 03 · Critical Frame QA Checklist
**Question:** 012 · Next Permutation (LeetCode 31)  
**Scene:** `03-brute-trace`  
**Audio:** `remotion-project/public/audio/012/03-brute-trace.mp3` (75.840s, 2,275 frames @ 30fps)  
**Anchor Source:** `sync/03-brute-trace.anchors.json`  

---

## 1. Frame-Specific Visual Checkpoints

| Checkpoint ID | Anchor | Review Frame | Spoken Narration Anchor | Expected Visual & Semantic State | Status |
|---|---|---|---|---|---|
| **QA-01** | `S03_SIMPLEST` | **Frame 22** | "The simplest idea is" | Brute Force Method Identity: Center stage clean; exact continuity from Scene 02 handoff. | `[x] PASS` |
| **QA-02** | `S03_GENERATE` | **Frame 95** | "generate every possible permutation" | Pipeline Step 1: GENERATE: Only step 1 is visible on screen. | `[x] PASS` |
| **QA-03** | `S03_ORDER` | **Frame 210** | "then arrange all of them in lexicographical order" | Pipeline Step 2: ORDER: Two connected pipeline nodes visible. | `[x] PASS` |
| **QA-04** | `S03_FIND` | **Frame 335** | "After that, find our current permutation in that list" | Pipeline Step 3: FIND: Three pipeline nodes connected in series. | `[x] PASS` |
| **QA-05** | `S03_TAKE_AFTER` | **Frame 445** | "and take the one immediately after it" | Pipeline Step 4: TAKE NEXT: Complete 4-node pipeline visible across center stage. | `[x] PASS` |
| **QA-06** | `S03_SMALL_ARRAY` | **Frame 579** | "For a very small array this idea is easy to understand. Suppose we have" | Tiny Example Setup: ArrayTrackV2: 3 empty slots visible with index row [0] [1] [2]. | `[x] PASS` |
| **QA-07** | `S03_E0` | **Frame 678** | "1," | First Value: nums[0] = 1: Slot 0 has value 1, slots 1..2 empty. | `[x] PASS` |
| **QA-08** | `S03_E1` | **Frame 705** | "2," | Second Value: nums[1] = 2: Slots 0 and 1 have [1, 2]; slot 2 empty. | `[x] PASS` |
| **QA-09** | `S03_E2` | **Frame 724** | "3." | Third Value: nums[2] = 3: All 3 slots populated: [1, 2, 3]. | `[x] PASS` |
| **QA-10** | `S03_LIST_INTRO` | **Frame 777** | "Its permutations can be arranged like this." | Permutation Sequence Staging: Empty vertical list axis visible. | `[x] PASS` |
| **QA-11** | `S03_P0` | **Frame 838** | "1, 2, 3." | Permutation 1 of 6: [1, 2, 3]: Only Row 1 [1, 2, 3] visible in list. | `[x] PASS` |
| **QA-12** | `S03_P1` | **Frame 871** | "1, 3, 2." | Permutation 2 of 6: [1, 3, 2]: Rows 1 and 2 visible. | `[x] PASS` |
| **QA-13** | `S03_P2` | **Frame 914** | "2, 1, 3." | Permutation 3 of 6: [2, 1, 3]: Rows 1, 2, 3 visible. | `[x] PASS` |
| **QA-14** | `S03_P3` | **Frame 962** | "2, 3, 1." | Permutation 4 of 6: [2, 3, 1]: Rows 1..4 visible. | `[x] PASS` |
| **QA-15** | `S03_P4` | **Frame 1011** | "3, 1, 2." | Permutation 5 of 6: [3, 1, 2]: Rows 1..5 visible. | `[x] PASS` |
| **QA-16** | `S03_P5` | **Frame 1069** | "3, 2, 1." | Permutation 6 of 6: [3, 2, 1] (LAST): All 6 permutations visible in strict lexicographical order. | `[x] PASS` |
| **QA-17** | `S03_CURRENT` | **Frame 1153** | "If our current permutation is 1, 3, 2," | Spotlight on CURRENT: [1, 3, 2]: Row 2 is prominent; other rows dimmed. | `[x] PASS` |
| **QA-18** | `S03_NEXT` | **Frame 1259** | "then the next one is 2, 1, 3." | Adjacency Proof: NEXT is [2, 1, 3]: Row 2 (cyan) and Row 3 (gold) connected by direct arrow. | `[x] PASS` |
| **QA-19** | `S03_DEFINITION_CLEAR` | **Frame 1345** | "So the definition is clear." | Definition Summary Card: Clean summary card at center. | `[x] PASS` |
| **QA-20** | `S03_RECAP_GENERATE` | **Frame 1405** | "Generate everything." | Recap Step 1: GENERATE: Node 1 is sole active highlight. | `[x] PASS` |
| **QA-21** | `S03_RECAP_ORDER` | **Frame 1458** | "Order everything." | Recap Step 2: ORDER: Node 2 is sole active highlight. | `[x] PASS` |
| **QA-22** | `S03_RECAP_FIND` | **Frame 1514** | "Find the current arrangement." | Recap Step 3: FIND CURRENT: Node 3 is sole active highlight. | `[x] PASS` |
| **QA-23** | `S03_RECAP_MOVE` | **Frame 1570** | "Then move one step forward." | Recap Step 4: MOVE ONE STEP FORWARD: Node 4 highlighted with forward indicator. | `[x] PASS` |
| **QA-24** | `S03_WRAP` | **Frame 1699** | "And if we are already at the last permutation, we wrap around to the first one." | Edge Condition: LAST -> FIRST Wraparound Loop: Curved wraparound arrow connecting [3, 2, 1] -> [1, 2, 3]. | `[x] PASS` |
| **QA-25** | `S03_WORKS` | **Frame 1839** | "This works logically." | Logical Correctness Confirmation: Clean green confirmation badge. | `[x] PASS` |
| **QA-26** | `S03_PROBLEM` | **Frame 1914** | "But there is a serious problem." | Tension Shift: A Serious Problem: Warning banner centered with red warning styling. | `[x] PASS` |
| **QA-27** | `S03_GROWTH` | **Frame 2021** | "The number of permutations grows extremely fast." | Combinatorial Explosion: Qualitative Growth: Qualitative rapid growth visual with zero formula spoilers. | `[x] PASS` |
| **QA-28** | `S03_CODE_HANDOFF` | **Frame 2182** | "So before we accept this method, let's see what its code is really doing." | Method 1 Code Handoff Surface: Empty code container settled at center; exact Scene 04 handoff. | `[x] PASS` |

---

## 2. Invariant & Anti-Regression Verification

- [x] **Frame 0 Provenance:** Frame 0 matches Scene 02 final handoff state (ProblemOpenerShell pinned at top, center stage clean).
- [x] **Exact 4-Step Pipeline:** Steps (GENERATE, ORDER, FIND, NEXT) reveal strictly one by one as spoken.
- [x] **Sequential Array Assembly:** Tiny array [1, 2, 3] assembled slot by slot; zero pre-populated numbers.
- [x] **Exact Permutation Sequence:** All 6 permutations reveal sequentially in spoken lexicographic order (P0..P5).
- [x] **Disambiguated Repeated Digits:** Words for digits '1', '2', '3' resolve by sequential token index W0000..W0154, never text search.
- [x] **Array V2 Law:** Slots remain fixed in position; values enter into slots; index row never shifts horizontally.
- [x] **Direct Adjacency Proof:** CURRENT [1, 3, 2] and NEXT [2, 1, 3] connected by direct directional arrow.
- [x] **Wraparound Representation:** LAST [3, 2, 1] to FIRST [1, 2, 3] loops via curved arrow (no reversal mechanics taught).
- [x] **Zero Solution Spoilers:** No pivot search, no suffix reversal, no optimal code.
- [x] **Qualitative Growth Only:** No explicit "n!" or "O(N! · N)" formula (reserved for Scene 05).
- [x] **Zero-Collision Rule:** Vertical clearance >= 50px between all elements; indices row untouched.
- [x] **Clean Code Handoff:** Final frame 2275 shows empty code surface shell ready for Scene 04 typing.
- [x] **Duration Exactness:** Exactly 2,275 frames rendered (matching 75,840 ms @ 30 FPS).
