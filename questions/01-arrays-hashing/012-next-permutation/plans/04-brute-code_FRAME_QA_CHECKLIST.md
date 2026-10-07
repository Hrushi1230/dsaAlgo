# Scene 04 · Critical Frame QA Checklist
**Question:** 012 · Next Permutation (LeetCode 31)  
**Scene:** `04-brute-code`  
**Audio:** `remotion-project/public/audio/012/04-brute-code.mp3` (70.460s, 2,114 frames @ 30fps)  
**Anchor Source:** `sync/04-brute-code.anchors.json`  

---

## 1. Frame-Specific Visual Checkpoints

| Checkpoint ID | Anchor | Review Frame | Spoken Narration Anchor | Expected Visual & Semantic State | Status |
|---|---|---|---|---|---|
| **QA-01** | `S04_OPEN` | **Frame 40** | "Let's write the brute force idea," | Initial Code Shell: `ChalkCodeEditorV2` centered with lines 1–3 visible; cursor blinking at line 4; zero solution code visible. | `[x] PASS` |
| **QA-02** | `S04_COST_ONLY` | **Frame 110** | "only to understand its cost." | Teaching Intent Badge: "Teaching implementation to understand cost" active below editor; no complexity graph leaks. | `[x] PASS` |
| **QA-03** | `S04_IMPORT` | **Frame 225** | "First, we generate all permutations of nums," | Line 4 Live Typing: `all_perms = permutations(nums)` typing; docked layout with permutation generation card on right. | `[x] PASS` |
| **QA-04** | `S04_DUPLICATE_REASON` | **Frame 340** | "because duplicate values can create duplicate permutations." | Duplicate Risk Proof: Two identical permutations converging to duplicate warning on right stage; Line 5 not yet typed. | `[x] PASS` |
| **QA-05** | `S04_UNIQUE` | **Frame 445** | "We keep only unique arrangements." | Line 5 Live Typing: `unique_perms = set(all_perms)` types; duplicates collapse into unique set card. | `[x] PASS` |
| **QA-06** | `S04_SORT` | **Frame 565** | "Then, we sort those permutations lexicographically." | Line 6 Live Typing: `ordered = sorted(unique_perms)` types; sorted dictionary list proof displayed on right. | `[x] PASS` |
| **QA-07** | `S04_CURRENT_FORM` | **Frame 715** | "Now we convert our current array into the same comparable form," | Line 7 Live Typing: `current = tuple(nums)` types; list [1, 3, 2] morphs into tuple (1, 3, 2). | `[x] PASS` |
| **QA-08** | `S04_FIND_POS` | **Frame 825** | "and find its position." | Line 8 Live Typing: `idx = ordered.index(current)` types; search pointer highlights index 1 in sorted list. | `[x] PASS` |
| **QA-09** | `S04_NEXT_INDEX` | **Frame 960** | "The next position is simply current index plus one." | Incomplete Line 9: `next_idx = (idx + 1` with active blinking cursor; ZERO modulo tokens visible! | `[x] PASS` |
| **QA-10** | `S04_MODULO` | **Frame 1160** | "we take that position modulo the total number of permutations." | Line 9 Modulo Completion: `) % len(ordered)` appends to Line 9; circular wraparound loop card visible on right. | `[x] PASS` |
| **QA-11** | `S04_COPY` | **Frame 1345** | "Finally, we copy the selected permutation back into the original array." | Line 10 Live Typing: `nums[:] = ordered[next_idx]` types; in-place array slots update in the exact same slot shells. | `[x] PASS` |
| **QA-12** | `S04_MATCHES` | **Frame 1480** | "The code matches the idea exactly." | 4-Step Alignment: Complete 10-line code settled; 4-step pipeline card illuminates beneath editor. | `[x] PASS` |
| **QA-13** | `S04_SUMMARY` | **Frame 1650** | "search for the current one," | Sequential Traversal: Pipeline Step 3 [SEARCH] highlighted in spoken lockstep; lines 7–8 active in editor. | `[x] PASS` |
| **QA-14** | `S04_TINY_OK` | **Frame 1810** | "For tiny inputs, this is fine for understanding." | Correctness Confirmation: "Conceptually clear for small N" badge draws with green checkmark. | `[x] PASS` |
| **QA-15** | `S04_EXPENSIVE` | **Frame 1980** | "this approach becomes expensive very quickly." | Tension Shift: Code dims into background; amber/red Scalability Bottleneck card overtakes center stage. | `[x] PASS` |
| **QA-16** | `S04_WHY` | **Frame 2100** | "Now let's see why." | Clean Scene 05 Handoff: "NEXT: WHY BRUTE FORCE FAILS" card illuminated; crisp transition ready. | `[x] PASS` |

---

## 2. Invariant & Anti-Regression Verification

- [x] **Frame 0 Continuity:** Matches Scene 03 final handoff state (ProblemOpenerShell pinned at top, empty code editor container ready).
- [x] **Character-by-Character Typing:** Every code line types progressively across its spoken anchor window; no sudden text dumps.
- [x] **Zero Modulo Spoiler (Beat 09):** In anchor `S04_NEXT_INDEX` (F861..F1013), Line 9 types strictly `next_idx = (idx + 1` with a blinking cursor at the end. Modulo tokens `) % len(ordered)` remain 100% invisible until Beat 10 (`S04_MODULO`).
- [x] **Zero Formula Leaks:** No explicit "N!", "O(N! · N)", or factorial growth curves appear in Scene 04 (strictly reserved for Scene 05).
- [x] **Array V2 Law:** When demonstrating copy-back in Beat 11, the original array slots and indices stay fixed in position; only values update.
- [x] **Dynamic Docking Cleanliness:** Code editor docks smoothly to Left (X: 100) when proof cards appear on Right (X: 1010), maintaining >= 50px horizontal clearance.
- [x] **Zero-Collision Rule:** Vertical clearance >= 55px between editor bottom (Y: 745) and bottom callout/status cards (Y: 795..910); captions (Y: 960..1040) never overlapped.
- [x] **Duration Exactness:** Exactly 2,114 frames rendered (matching 70,460 ms @ 30 FPS).
