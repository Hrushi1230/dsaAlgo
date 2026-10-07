# Scene 10 · Framewise Scene Plan: Recap, Transferable Pattern & Roadmap

**Question:** 012 · Next Permutation (LeetCode 31)  
**Scene:** `10-recap`  
**Audio File:** `remotion-project/public/audio/012/10-recap.mp3`  
**Total Frames:** 2753 @ 30 FPS (91.76s)  
**Total Anchors:** 27  
**Visual Aesthetic Standard:** Oxford Chalkboard with Translucent Wash (matching `s03_f1250.png`)  

---

## 0. Visual Composition & Zero-Collision Layout Contract

- **Vertical Budget:**
  - Header: Y: 28 .. 78px (`[ 01 · ARRAYS & HASHING · LC 31 ]`, `Next Permutation`, dynamic scene subtitle)
  - Subtitle / Eyebrow: Y: 92 .. 125px (Dynamic section indicator: Full Journey Recap, Transferable Pattern, Roadmap Progression)
  - Center Stage: Y: 145 .. 760px (Height: 615px).
    - Block 1 (F0..F506): Brute Force Recap (Sequential Flow: GENERATE -> SORT -> FIND -> NEXT, N! Factorial Rejection)
    - Block 2 (F506..F1531): Optimal Solution Recap (Master Array V2 [2,1,5,4,4,3,0] -> Longest Suffix -> Pivot i=1 -> Swap with Successor j=5 -> Suffix Reversal -> O(N) / O(1) Badges)
    - Block 3 (F1531..F2279): Transferable Pattern (Golden Triad: Rightmost Position -> Smallest Increase -> Minimize Suffix)
    - Block 4 (F2279..F2753): Authoritative Master Roadmap UI (Q12 NOW ACTIVE -> COMPLETE ✓, 11/227 -> 12/227, Rail moves to Q13 Set Matrix Zeroes UP NEXT ▶)
  - Bottom Captions: Y: 980px, leaving $\ge 220\text{px}$ of pristine chalkboard breathing room above captions.
- **Aesthetic Law:** Authentic translucent chalkboard wash (`rgba(10, 48, 42, 0.68..0.76)`), `RoughBox` hand-drawn borders, `RoughLine` dividers, monospace code/equations with chalk styling. Absolutely NO solid black boxes.
- **Array V2 Law:** All arrays use `ArrayTrackV2` with stationary slots and indices.

---

## 1. Framewise Semantic Anchor Choreography

### Beat 01 — `S10_OPEN` (F0 .. F77 · 77f · 2.57s)

**ANCHOR:** `S10_OPEN` — "Let's recap the full journey."  
**WHAT APPEARS NOW:** Scene 10 title enters top center: 'FULL JOURNEY RECAP & ROADMAP'. Center stage reveals a clean translucent chalkboard card ready to compare the two algorithmic paradigms.  
**CENTER-STAGE HERO:** Full Journey Recap Stage Canvas.  
**CAUSE:** Opening narration initiating the comprehensive retrospective.  
**EFFECT / MOTION:** F0..F30: Soft opacity fade and gentle scale up from 0.98 to 1.0.  
**WHAT MUST NOT APPEAR YET:** Method details, roadmap.  
**COMPREHENSION HOLD:** F30..F77: Contemplative introductory hold on the learning journey.  
**CLEANUP / EXIT:** Smoothly highlights Method 1 on F77.  
**PERSISTENT STATE:** Recap stage canvas.  

---

### Beat 02 — `S10_BRUTE_SIMPLE` (F77 .. F157 · 80f · 2.67s)

**ANCHOR:** `S10_BRUTE_SIMPLE` — "The brute force idea was simple."  
**WHAT APPEARS NOW:** Method 1 Card activates: 'APPROACH 1 · BRUTE FORCE'. Heading: 'Generate, Sort, and Search'.  
**CENTER-STAGE HERO:** Method 1 Brute Force Identity Card.  
**CAUSE:** Narration: 'The brute force idea was simple.'  
**EFFECT / MOTION:** F77..F120: Card illuminates in warm amber chalk outline; steps chain container initializes.  
**WHAT MUST NOT APPEAR YET:** Steps 1..4 nodes.  
**COMPREHENSION HOLD:** F120..F157: Viewer recalls the conceptual brute force strategy.  
**CLEANUP / EXIT:** Node 1 activates on F157.  
**PERSISTENT STATE:** Method 1 card active.  

---

### Beat 03 — `S10_BRUTE_GENERATE` (F157 .. F238 · 81f · 2.70s)

**ANCHOR:** `S10_BRUTE_GENERATE` — "Generate every permutation,"  
**WHAT APPEARS NOW:** Step Node 1 illuminates: '1. GENERATE ALL N! PERMUTATIONS'. Shows expanding tree icon.  
**CENTER-STAGE HERO:** Brute Step 1 Node (Generate All).  
**CAUSE:** Narration: 'Generate every permutation,'  
**EFFECT / MOTION:** F157..F200: Node fades in with chalk border.  
**WHAT MUST NOT APPEAR YET:** Sorting node.  
**COMPREHENSION HOLD:** F200..F238: Clear focus on the candidate generation step.  
**CLEANUP / EXIT:** Node 2 activates on F238.  
**PERSISTENT STATE:** Node 1 visible in chain.  

---

### Beat 04 — `S10_BRUTE_SORT` (F238 .. F280 · 42f · 1.40s)

**ANCHOR:** `S10_BRUTE_SORT` — "sort them,"  
**WHAT APPEARS NOW:** Step Node 2 illuminates: '2. SORT LEXICOGRAPHICALLY'. Shows A-Z ascending sort arrow.  
**CENTER-STAGE HERO:** Brute Step 2 Node (Lexicographical Sort).  
**CAUSE:** Narration: 'sort them,'  
**EFFECT / MOTION:** F238..F260: Connecting arrow draws from Node 1 to Node 2.  
**WHAT MUST NOT APPEAR YET:** Find node.  
**COMPREHENSION HOLD:** F260..F280: Focus on the sorting penalty.  
**CLEANUP / EXIT:** Node 3 activates on F280.  
**PERSISTENT STATE:** Nodes 1 and 2 visible.  

---

### Beat 05 — `S10_BRUTE_FIND` (F280 .. F316 · 36f · 1.20s)

**ANCHOR:** `S10_BRUTE_FIND` — "find the current one"  
**WHAT APPEARS NOW:** Step Node 3 illuminates: '3. FIND CURRENT PERMUTATION'. Shows pointer locating nums array.  
**CENTER-STAGE HERO:** Brute Step 3 Node (Locate Current).  
**CAUSE:** Narration: 'find the current one'  
**EFFECT / MOTION:** F280..F310: Connecting arrow draws to Node 3; target reticle focuses.  
**WHAT MUST NOT APPEAR YET:** Next node.  
**COMPREHENSION HOLD:** F310..F334: Focus on linear/binary lookup of the current array.  
**CLEANUP / EXIT:** Node 4 activates on F334.  
**PERSISTENT STATE:** Nodes 1..3 visible.  

---

### Beat 06 — `S10_BRUTE_NEXT` (F316 .. F377 · 61f · 2.03s)

**ANCHOR:** `S10_BRUTE_NEXT` — "and take the next."  
**WHAT APPEARS NOW:** Step Node 4 illuminates: '4. TAKE NEXT PERMUTATION'. Full chain completes: 'GENERATE -> SORT -> FIND -> NEXT'.  
**CENTER-STAGE HERO:** Brute Step 4 Node (Take Immediate Next).  
**CAUSE:** Narration: 'and take the next.'  
**EFFECT / MOTION:** F334..F360: Chain settles into unified flow; green checkmark on logical completeness.  
**WHAT MUST NOT APPEAR YET:** Factorial rejection stamp.  
**COMPREHENSION HOLD:** F360..F377: Viewer sees the complete 4-step brute-force pipeline.  
**CLEANUP / EXIT:** Rejection stamp appears on F377.  
**PERSISTENT STATE:** Full 4-step brute force chain.  

---

### Beat 07 — `S10_BRUTE_BAD` (F377 .. F506 · 129f · 4.30s)

**ANCHOR:** `S10_BRUTE_BAD` — "But factorial growth makes that approach impractical."  
**WHAT APPEARS NOW:** Prominent rejection stamp: 'FACTORIAL EXPLOSION (N!): UNVIABLE IN TIME & MEMORY'. Red strike-through across brute force chain.  
**CENTER-STAGE HERO:** Factorial Rejection Banner.  
**CAUSE:** Narration: 'But factorial growth makes that approach impractical.'  
**EFFECT / MOTION:** F377..F440: Crimson rough box outlines N! failure; warning badge illuminates.  
**WHAT MUST NOT APPEAR YET:** Method 2 optimal array.  
**COMPREHENSION HOLD:** F440..F506: Viewer internalizes why brute force is abandoned.  
**CLEANUP / EXIT:** Method 1 clears to make way for Method 2 at F506.  
**PERSISTENT STATE:** Transition to Optimal Solution.  

---

### Beat 08 — `S10_OPTIMAL_STRUCTURE` (F506 .. F659 · 153f · 5.10s)

**ANCHOR:** `S10_OPTIMAL_STRUCTURE` — "The optimal solution uses the structure of the current permutation."  
**WHAT APPEARS NOW:** Method 2 Card activates: 'APPROACH 2 · OPTIMAL IN-PLACE TRANSFORMATION'. Master array ArrayTrackV2 enters untouched: [2, 1, 5, 4, 4, 3, 0].  
**CENTER-STAGE HERO:** Master Array V2 Representation [2, 1, 5, 4, 4, 3, 0].  
**CAUSE:** Narration: 'The optimal solution uses the structure of the current permutation.'  
**EFFECT / MOTION:** F506..F570: ArrayTrackV2 scales in smoothly; emerald border highlights in-place array structure.  
**WHAT MUST NOT APPEAR YET:** Suffix band, pivot pointer.  
**COMPREHENSION HOLD:** F570..F659: Viewer observes the concrete array ready for structural recap.  
**CLEANUP / EXIT:** Step 1 suffix band activates on F659.  
**PERSISTENT STATE:** Master array at center stage.  

---

### Beat 09 — `S10_SUFFIX` (F659 .. F782 · 123f · 4.10s)

**ANCHOR:** `S10_SUFFIX` — "First, find the longest non-increasing suffix."  
**WHAT APPEARS NOW:** Step 1 Highlight: Longest non-increasing suffix [5, 4, 4, 3, 0] (indices 2..6) highlighted with cyan range bracket.  
**CENTER-STAGE HERO:** Longest Non-Increasing Suffix Band (indices 2..6).  
**CAUSE:** Narration: 'First, find the longest non-increasing suffix.'  
**EFFECT / MOTION:** F659..F720: Cyan bracket draws above slots 2 through 6; label 'DESCENDING SUFFIX' appears.  
**WHAT MUST NOT APPEAR YET:** Pivot pointer i.  
**COMPREHENSION HOLD:** F720..F782: Viewer sees the descending suffix clearly identified.  
**CLEANUP / EXIT:** Pivot pointer activates on F782.  
**PERSISTENT STATE:** Suffix band on master array.  

---

### Beat 10 — `S10_PIVOT` (F782 .. F956 · 174f · 5.80s)

**ANCHOR:** `S10_PIVOT` — "Then find the pivot. The rightmost position, where an increase is possible."  
**WHAT APPEARS NOW:** Step 2 Highlight: Pivot pointer i locks onto index 1 (value 1)! Amber label: 'PIVOT i = 1 (Rightmost position where increase is possible)'.  
**CENTER-STAGE HERO:** Pivot Pointer i at Index 1 (Value 1).  
**CAUSE:** Narration: 'Then find the pivot. The rightmost position, where an increase is possible.'  
**EFFECT / MOTION:** F782..F850: Pointer arrow rises into slot 1; value 1 glows in golden chalk sheen.  
**WHAT MUST NOT APPEAR YET:** Successor pointer j, swap.  
**COMPREHENSION HOLD:** F850..F956: Viewer sees the pivot clearly established.  
**CLEANUP / EXIT:** Successor pointer activates on F956.  
**PERSISTENT STATE:** Pivot i at index 1.  

---

### Beat 11 — `S10_SUCCESSOR` (F956 .. F1139 · 183f · 6.10s)

**ANCHOR:** `S10_SUCCESSOR` — "Next, find the smallest value greater than the pivot and swap them."  
**WHAT APPEARS NOW:** Step 3 Highlight: Successor pointer j locks onto index 5 (value 3). Values 1 and 3 perform an elegant in-place swap -> [2, 3, 5, 4, 4, 1, 0]!  
**CENTER-STAGE HERO:** In-Place Swap of Pivot and Successor (1 <-> 3).  
**CAUSE:** Narration: 'Next, find the smallest value greater than the pivot and swap them.'  
**EFFECT / MOTION:** F956..F1050: Curved swap flight arcs between index 1 and index 5; values exchange smoothly.  
**WHAT MUST NOT APPEAR YET:** Suffix reversal.  
**COMPREHENSION HOLD:** F1050..F1139: Viewer observes post-swap state: new prefix [2, 3] locked in.  
**CLEANUP / EXIT:** Suffix reversal primes on F1139.  
**PERSISTENT STATE:** Post-swap array [2, 3, 5, 4, 4, 1, 0].  

---

### Beat 12 — `S10_REVERSE` (F1139 .. F1371 · 232f · 7.73s)

**ANCHOR:** `S10_REVERSE` — "Finally, reverse the suffix. So everything after the pivot becomes as small as possible."  
**WHAT APPEARS NOW:** Step 4 Highlight: Suffix [5, 4, 4, 1, 0] (indices 2..6) reverses into ascending order [0, 1, 4, 4, 5]! Final array shines: [2, 3, 0, 1, 4, 4, 5]!  
**CENTER-STAGE HERO:** Suffix Reversal to Ascending -> Final Array [2, 3, 0, 1, 4, 4, 5].  
**CAUSE:** Narration: 'Finally, reverse the suffix. So everything after the pivot becomes as small as possible.'  
**EFFECT / MOTION:** F1139..F1240: Converging two-pointer arrows invert suffix values; green success aura radiates.  
**WHAT MUST NOT APPEAR YET:** Complexity badges.  
**COMPREHENSION HOLD:** F1240..F1371: Viewer contemplates the complete optimal transformation.  
**CLEANUP / EXIT:** Complexity badges activate on F1371.  
**PERSISTENT STATE:** Final transformed array [2, 3, 0, 1, 4, 4, 5].  

---

### Beat 13 — `S10_TIME` (F1371 .. F1443 · 72f · 2.40s)

**ANCHOR:** `S10_TIME` — "That gives us O of n time"  
**WHAT APPEARS NOW:** Complexity Stamp: 'TIME COMPLEXITY: O(N) LINEAR'. Green chalk badge illuminates.  
**CENTER-STAGE HERO:** O(N) Time Complexity Badge.  
**CAUSE:** Narration: 'That gives us O of n time'  
**EFFECT / MOTION:** F1371..F1410: Badge stamps onto the left side of the optimal recap panel.  
**WHAT MUST NOT APPEAR YET:** Space complexity badge.  
**COMPREHENSION HOLD:** F1410..F1443: Confirmation of linear runtime.  
**CLEANUP / EXIT:** Space badge activates on F1443.  
**PERSISTENT STATE:** O(N) badge visible.  

---

### Beat 14 — `S10_SPACE` (F1443 .. F1531 · 88f · 2.93s)

**ANCHOR:** `S10_SPACE` — "and O of one extra space."  
**WHAT APPEARS NOW:** Complexity Stamp: 'AUXILIARY SPACE: O(1) IN-PLACE'. Cyan chalk badge illuminates alongside O(N).  
**CENTER-STAGE HERO:** O(1) Space Complexity Badge.  
**CAUSE:** Narration: 'and O of one extra space.'  
**EFFECT / MOTION:** F1443..F1490: Space badge illuminates; optimal solution summary stands complete.  
**WHAT MUST NOT APPEAR YET:** Transferable pattern.  
**COMPREHENSION HOLD:** F1490..F1531: Viewer appreciates the dual O(N) and O(1) efficiency.  
**CLEANUP / EXIT:** Center stage clears to introduce the Transferable Pattern at F1531.  
**PERSISTENT STATE:** Transition to Transferable Pattern.  

---

### Beat 15 — `S10_BIGGER_LESSON` (F1531 .. F1605 · 74f · 2.47s)

**ANCHOR:** `S10_BIGGER_LESSON` — "But the bigger lesson is this."  
**WHAT APPEARS NOW:** Header updates to: 'THE BIGGER LESSON · TRANSFERABLE MENTAL MODEL'. Center stage reveals a distinguished golden chalkboard card.  
**CENTER-STAGE HERO:** Transferable Pattern Canvas.  
**CAUSE:** Narration: 'But the bigger lesson is this.'  
**EFFECT / MOTION:** F1531..F1570: Card fades in with golden chalk border and compass/mindset icon.  
**WHAT MUST NOT APPEAR YET:** Pattern trigger, triad rules.  
**COMPREHENSION HOLD:** F1570..F1605: Sets expectations for meta-learning across interview problems.  
**CLEANUP / EXIT:** Pattern trigger activates on F1605.  
**PERSISTENT STATE:** Transferable pattern card container.  

---

### Beat 16 — `S10_NEXT_LEX` (F1605 .. F1712 · 107f · 3.57s)

**ANCHOR:** `S10_NEXT_LEX` — "When a problem asks for the next lexicographical arrangement,"  
**WHAT APPEARS NOW:** Problem Trigger Banner: 'WHEN ASKED FOR: THE NEXT LEXICOGRAPHICAL ARRANGEMENT'.  
**CENTER-STAGE HERO:** Problem Pattern Trigger Banner.  
**CAUSE:** Narration: 'When a problem asks for the next lexicographical arrangement,'  
**EFFECT / MOTION:** F1605..F1660: Banner stamps top center of the card in glowing amber chalk.  
**WHAT MUST NOT APPEAR YET:** Anti-pattern warning, triad rules.  
**COMPREHENSION HOLD:** F1660..F1712: Viewer recognizes the universal problem classification.  
**CLEANUP / EXIT:** Anti-pattern warning activates on F1712.  
**PERSISTENT STATE:** Problem trigger banner active.  

---

### Beat 17 — `S10_NOT_GENERATE` (F1712 .. F1846 · 134f · 4.47s)

**ANCHOR:** `S10_NOT_GENERATE` — "do not think about generating every possibility first."  
**WHAT APPEARS NOW:** Anti-Pattern Rule: '✕ DO NOT GENERATE EVERY POSSIBILITY FIRST'. Red strike-through across brute force enumeration.  
**CENTER-STAGE HERO:** Anti-Pattern Rule: Avoid Full Enumeration.  
**CAUSE:** Narration: 'do not think about generating every possibility first.'  
**EFFECT / MOTION:** F1712..F1770: Red cross symbol and struck-out text reinforce the cardinal rule of combinatorial problems.  
**WHAT MUST NOT APPEAR YET:** Positive triad rules.  
**COMPREHENSION HOLD:** F1770..F1846: Strong mental anchor: never default to generating all permutations.  
**CLEANUP / EXIT:** Rule 1 activates on F1846.  
**PERSISTENT STATE:** Anti-pattern warning visible.  

---

### Beat 18 — `S10_RIGHTMOST` (F1846 .. F1983 · 137f · 4.57s)

**ANCHOR:** `S10_RIGHTMOST` — "Look for the rightmost position, where a valid increase can be made."  
**WHAT APPEARS NOW:** Golden Triad Rule 1: '1. RIGHTMOST VALID INCREASE'. Look for the rightmost position where a valid increase can be made.  
**CENTER-STAGE HERO:** Triad Rule 1: Rightmost Valid Increase.  
**CAUSE:** Narration: 'Look for the rightmost position, where a valid increase can be made.'  
**EFFECT / MOTION:** F1846..F1910: First rule container illuminates with golden border and pointer icon.  
**WHAT MUST NOT APPEAR YET:** Rules 2 and 3.  
**COMPREHENSION HOLD:** F1910..F1983: Comprehension hold on the pivot principle.  
**CLEANUP / EXIT:** Rule 2 activates on F1983.  
**PERSISTENT STATE:** Rule 1 active.  

---

### Beat 19 — `S10_SMALLEST` (F1983 .. F2056 · 73f · 2.43s)

**ANCHOR:** `S10_SMALLEST` — "Make the smallest valid increase"  
**WHAT APPEARS NOW:** Golden Triad Rule 2: '2. SMALLEST VALID INCREASE'. Make the smallest valid increase to achieve the immediate successor.  
**CENTER-STAGE HERO:** Triad Rule 2: Smallest Valid Increase.  
**CAUSE:** Narration: 'Make the smallest valid increase'  
**EFFECT / MOTION:** F1983..F2020: Second rule container illuminates with cyan border and target icon.  
**WHAT MUST NOT APPEAR YET:** Rule 3.  
**COMPREHENSION HOLD:** F2020..F2056: Comprehension hold on the minimal increment principle.  
**CLEANUP / EXIT:** Rule 3 activates on F2056.  
**PERSISTENT STATE:** Rules 1 and 2 active.  

---

### Beat 20 — `S10_MINIMIZE` (F2056 .. F2165 · 109f · 3.63s)

**ANCHOR:** `S10_MINIMIZE` — "and minimize everything after it."  
**WHAT APPEARS NOW:** Golden Triad Rule 3: '3. MINIMIZE EVERYTHING AFTER IT'. Invert/sort the suffix into ascending order to make it as small as possible.  
**CENTER-STAGE HERO:** Triad Rule 3: Minimize the Suffix.  
**CAUSE:** Narration: 'and minimize everything after it.'  
**EFFECT / MOTION:** F2056..F2110: Third rule container illuminates with emerald border and sort icon.  
**WHAT MUST NOT APPEAR YET:** Synthesized pattern strip.  
**COMPREHENSION HOLD:** F2110..F2165: The complete 3-step mental model is now fully visible.  
**CLEANUP / EXIT:** Pattern synthesis strip activates on F2165.  
**PERSISTENT STATE:** All 3 triad rules active.  

---

### Beat 21 — `S10_REAL_PATTERN` (F2165 .. F2279 · 114f · 3.80s)

**ANCHOR:** `S10_REAL_PATTERN` — "That reasoning is the real pattern."  
**WHAT APPEARS NOW:** Mastery Invariant Strip: 'THE UNIVERSAL PATTERN: RIGHTMOST INCREASE → MINIMAL SWAP → MINIMAL SUFFIX'. Golden seal locks in.  
**CENTER-STAGE HERO:** Universal Lexicographical Pattern Summary.  
**CAUSE:** Narration: 'That reasoning is the real pattern.'  
**EFFECT / MOTION:** F2165..F2220: Golden aura pulses across the triad; mastery checkmarks stamp on all 3 principles.  
**WHAT MUST NOT APPEAR YET:** Roadmap UI.  
**COMPREHENSION HOLD:** F2220..F2279: Deep reflective hold on this universally transferable algorithmic intuition.  
**CLEANUP / EXIT:** Transition to Master Roadmap UI on F2279.  
**PERSISTENT STATE:** Transferable pattern mastered.  

---

### Beat 22 — `S10_WITH_THAT` (F2279 .. F2353 · 74f · 2.47s)

**ANCHOR:** `S10_WITH_THAT` — "And with that,"  
**WHAT APPEARS NOW:** Transferable pattern recedes. The permanent MasterRoadmapV2 UI fades in at center stage, resuming pre-completion state: Q12 NOW ACTIVE, 11/227 COMPLETE.  
**CENTER-STAGE HERO:** Master Roadmap UI (Pre-Completion State).  
**CAUSE:** Narration: 'And with that,'  
**EFFECT / MOTION:** F2279..F2320: Smooth representation handoff into MasterRoadmapV2.  
**WHAT MUST NOT APPEAR YET:** Q12 completion checkmark, 12/227 counter.  
**COMPREHENSION HOLD:** F2320..F2353: Viewer recognizes the familiar course roadmap structure.  
**CLEANUP / EXIT:** Canonical completion mutation activates on F2353.  
**PERSISTENT STATE:** MasterRoadmapV2 active.  

---

### Beat 23 — `S10_COMPLETE` (F2353 .. F2443 · 90f · 3.00s)

**ANCHOR:** `S10_COMPLETE` — "next permutation is complete."  
**WHAT APPEARS NOW:** CANONICAL ROADMAP MUTATION: Row 12 (Next Permutation) status turns COMPLETE (✓) with vibrant green glow! Global counter increments from 11/227 to 12/227!  
**CENTER-STAGE HERO:** Canonical Course Mutation: Q12 COMPLETE & 12/227 Milestone.  
**CAUSE:** Narration: 'next permutation is complete.'  
**EFFECT / MOTION:** F2353..F2400: Counter numbers flip 11 -> 12; emerald checkmark stamps on Row 12; celebratory chalk dust radiates.  
**WHAT MUST NOT APPEAR YET:** Question 13 focus.  
**COMPREHENSION HOLD:** F2400..F2443: Triumphant milestone celebration of problem completion.  
**CLEANUP / EXIT:** Reinforces Row 12 completed status on F2443.  
**PERSISTENT STATE:** Q12 COMPLETE, 12/227 counter.  

---

### Beat 24 — `S10_Q12_DONE` (F2443 .. F2524 · 81f · 2.70s)

**ANCHOR:** `S10_Q12_DONE` — "Question 12. Done."  
**WHAT APPEARS NOW:** Confirmation pulse on Row 12: 'QUESTION 12 · NEXT PERMUTATION · COMPLETE ✓'.  
**CENTER-STAGE HERO:** Question 12 Completion Confirmation.  
**CAUSE:** Narration: 'Question 12. Done.'  
**EFFECT / MOTION:** F2443..F2480: Row 12 glows in confident green chalk outline.  
**WHAT MUST NOT APPEAR YET:** Q13 focus.  
**COMPREHENSION HOLD:** F2480..F2524: Final confirmation of Q12 mastery.  
**CLEANUP / EXIT:** Camera prepares to navigate to Pattern 01 progression on F2524.  
**PERSISTENT STATE:** Q12 locked as completed.  

---

### Beat 25 — `S10_CONTINUE_ROADMAP` (F2524 .. F2635 · 111f · 3.70s)

**ANCHOR:** `S10_CONTINUE_ROADMAP` — "We continue our arrays and hashing roadmap."  
**WHAT APPEARS NOW:** Pattern 01 (Arrays & Hashing) section header highlights. Shows 12/18 problems completed in this pattern.  
**CENTER-STAGE HERO:** Arrays & Hashing Roadmap Continuation.  
**CAUSE:** Narration: 'We continue our arrays and hashing roadmap.'  
**EFFECT / MOTION:** F2524..F2580: Camera gently frames Pattern 01 curriculum; progress bar advances to 12/18.  
**WHAT MUST NOT APPEAR YET:** Row 13 focus.  
**COMPREHENSION HOLD:** F2580..F2635: Viewer observes steady momentum across the Arrays & Hashing pattern.  
**CLEANUP / EXIT:** Focus shifts to Row 13 on F2635.  
**PERSISTENT STATE:** Pattern 01 roadmap context.  

---

### Beat 26 — `S10_Q13` (F2635 .. F2701 · 66f · 2.20s)

**ANCHOR:** `S10_Q13` — "With question 13."  
**WHAT APPEARS NOW:** Rail cursor smoothly glides down from Row 12 to Row 13! Row 13 receives the active 'UP NEXT ▶' status badge in cyan.  
**CENTER-STAGE HERO:** Rail Transition to Question 13 (UP NEXT).  
**CAUSE:** Narration: 'With question 13.'  
**EFFECT / MOTION:** F2635..F2680: Rail dot glides downwards; Row 13 illuminates in anticipation.  
**WHAT MUST NOT APPEAR YET:** Q13 problem title spotlight.  
**COMPREHENSION HOLD:** F2680..F2701: Anticipation builds for the next challenge.  
**CLEANUP / EXIT:** Row 13 title shines on F2701.  
**PERSISTENT STATE:** Row 13 designated UP NEXT.  

---

### Beat 27 — `S10_Q13_TITLE` (F2701 .. F2753 · 52f · 1.73s)

**ANCHOR:** `S10_Q13_TITLE` — "Set matrix zeros."  
**WHAT APPEARS NOW:** Row 13 Title Spotlight: 'Set Matrix Zeroes (LeetCode 73 · Medium)'. Shines in golden chalk luster as the next destination on the journey!  
**CENTER-STAGE HERO:** Upcoming Problem Hero: Set Matrix Zeroes.  
**CAUSE:** Narration: 'Set matrix zeros.'  
**EFFECT / MOTION:** F2701..F2730: Golden chalk underline draws under Set Matrix Zeroes; LC 73 badge illuminates.  
**WHAT MUST NOT APPEAR YET:** Nothing; scene reaches ultimate resolution.  
**COMPREHENSION HOLD:** F2730..F2753: Grand course outro hold, celebrating Q12 mastery and seamlessly bridging to Q13.  
**CLEANUP / EXIT:** Scene holds clean to final frame 2753.  
**PERSISTENT STATE:** Course roadmap resting in pristine completion state: 12/227, Q12 COMPLETE, Q13 UP NEXT.  

---

