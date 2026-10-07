# Scene 13 — Full Evolution Recap & Master Roadmap Handoff: Framewise Scene Plan
**Question 013: Set Matrix Zeroes (LeetCode 73)**  
**Pattern 01: Arrays & Hashing**  
**Scene Name:** `13-recap`  
**Audio File:** `scence-13.mp3` (`13-recap.mp3`)  
**Total Duration:** 2760 frames @ 30fps (92.000s)  
**Strict Source of Truth:** `questions/01-arrays-hashing/013-set-matrix-zeroes/sync/13-recap.json` & `sync/13-recap.anchors.json`  

---

## 1. Scene Overview & Pedagogical Goal

Scene 13 synthesizes the entire intellectual journey of **Set Matrix Zeroes** into a single transferable mental model, crowns Question 013 as complete, and formally advances the course progress on the Master Roadmap:

1. **Phase 1: Method 1 (Preserve Everything)**
   - Core question: How do we prevent mutation from corrupting future reads?
   - Solution: Full matrix copy. Immutable ground truth.
   - Cost: $O(M \times N)$ extra memory — wasteful and expensive.

2. **Phase 2: Method 2 (Ask A Better Question — Compress Information)**
   - Breakthrough: What information do we *actually* need? Not every cell, only row and column zero-flags!
   - Solution: Compress $M \times N$ cells into two 1D marker arrays: `rowZero[M]` and `colZero[N]`.
   - Result: Space drops from $O(MN)$ to $O(M + N)$.

3. **Phase 3: Method 3 (Reuse Input Storage — In-Place Memory)**
   - The Final Observation: Row 0 has $N$ cells; Column 0 has $M$ cells.
   - Reusing input storage: Embed marker arrays directly into Row 0 and Col 0.
   - Boundary Collision & Guard: Reusing storage destroys old values; protect cell $(0,0)$ and boundaries using two boolean registers: `firstRowZero` and `firstColZero`.
   - Result: Input becomes its own memory; extra space drops to $O(1)$!

4. **Phase 4: Synthesis & Question 13 Completion**
   - Final Asymptotics: $O(MN)$ Time, $O(1)$ Extra Space.
   - Set Matrix Zeroes status changes to COMPLETE.

5. **Phase 5: Master Course Roadmap & Question 14 Handoff**
   - Authoritative Master Roadmap UI (`MasterRoadmapV2`).
   - Row 013 (Set Matrix Zeroes) gets permanent green checkmark (✓).
   - Global progress counter rolls from `12 / 227` $\to$ `13 / 227 COMPLETED`.
   - Spotlight transfers to Row 014 (Rotate Image, LC 48, Medium), marking it `UP NEXT` (▶).

---

## 2. Spatial Composition & Zero-Collision Invariants

- **Canvas Size:** 1920 × 1080.
- **Background:** Full-frame dark chalkboard green (`theme.boardBg` = `#19523C`).
- **Top Header ($Y: 36..106$):**
  - Category Badge: `01 · ARRAYS & HASHING`
  - Title: `SET MATRIX ZEROES · FULL EVOLUTION RECAP`
  - Problem Badge: `LEETCODE 73 · MILESTONE 13 / 227`
- **Main Stage ($Y: 125..895$, Total Height: 770px):**
  - **Phases 1–4 (F0..F2240): The 3-Method Evolution & Synthesis Board**
    - Balanced side-by-side or progressive center-stage layout.
    - Left Stage ($X: 50..820$): Method Evolution Ladder (`Method 1: Preserve Everything` $\to$ `Method 2: Compress to Vectors` $\to$ `Method 3: In-Place Matrix Storage`).
    - Right Stage ($X: 860..1870$): Hero Visualization (Full Copy Diagram $\to$ Vector Projection Diagram $\to$ In-Place 1st Row/Col Embedded Storage with 2 Booleans).
  - **Phase 5 (F2240..F2760): Master Roadmap Stage**
    - Full 1920 × 1080 Master Roadmap UI (`MasterRoadmapV2`).
    - Left Sidebar ($X: 60..380$): 19 Course Patterns.
    - Center Canvas ($X: 420..1760$): Curriculum Table with Row 013 checked and Row 014 highlighted.
    - Right Progress Rail ($X: 1800..1860$): 001..227 vertical tracker.
- **Bottom Caption Clearance ($Y: 960..1040$):**
  - All content maintains $\ge 65\text{px}$ buffer above captions at $Y: 960$.

---

## 3. Framewise Anchor Plan (32 Anchors, F0..F2760)

```text
================================================================================
ANCHOR: S13_RECAP (F0..F52)
Spoken Phrase: "Let's recap the evolution." (W0000..W0003)
================================================================================
WHAT APPEARS NOW:
- Top course header: "01 · ARRAYS & HASHING", "SET MATRIX ZEROES · FULL EVOLUTION RECAP"
- Left Stage: Evolution Scaffold card titled "THE 3-METHOD PROGRESSION" with 3 placeholder steps.
CENTER-STAGE HERO:
- Evolution Scaffold appears with smooth spring entrance.
CAUSE:
- Narration opens the synthesis of the problem journey.
EFFECT / MOTION:
- Header slides in from Y: -20px; Evolution card springs in opacity 0 -> 1.
WHAT MUST NOT APPEAR YET:
- Method details, vector projections, roadmap screen.
COMPREHENSION HOLD:
- F52..F88: Natural pause before Method 1 starts.
CLEANUP / EXIT:
- Scaffold stays as base structure.
PERSISTENT STATE:
- Left progression scaffold ready for Method 1 activation.

================================================================================
ANCHOR: S13_M1 (F88..F136)
Spoken Phrase: "Method one preserved everything." (W0004..W0007)
================================================================================
WHAT APPEARS NOW:
- Step 1 on Evolution Scaffold illuminates: "METHOD 1 · PRESERVE EVERYTHING".
- Right Stage reveals Phase 1 Container: "BRUTE FORCE: COMPLETE MATRIX COPY".
CENTER-STAGE HERO:
- Method 1 identity card with amber highlight.
CAUSE:
- Narration introduces the brute-force philosophy.
EFFECT / MOTION:
- Step 1 badge border glows amber (#F59E0B); Right card fades in.
WHAT MUST NOT APPEAR YET:
- Method 2 or Method 3 details.
COMPREHENSION HOLD:
- F136..F155: Hold before describing the full copy.
CLEANUP / EXIT:
- Step 1 remains active.
PERSISTENT STATE:
- Method 1 active on both left and right stages.

================================================================================
ANCHOR: S13_COPY (F155..F204)
Spoken Phrase: "We kept a full original copy," (W0008..W0013)
================================================================================
WHAT APPEARS NOW:
- Right Stage displays dual matrix visual:
  - Working Matrix (M x N) on left.
  - Clone Matrix (M x N) labeled "IMMUTABLE SOURCE OF TRUTH" on right.
CENTER-STAGE HERO:
- Dual matrix display showing identical M x N memory grids.
CAUSE:
- Explaining the physical memory mechanism used in Method 1.
EFFECT / MOTION:
- Clone matrix slides to the right from working matrix with ghost trail.
WHAT MUST NOT APPEAR YET:
- Mutation arrows or warning badges.
COMPREHENSION HOLD:
- F204..F223: Hold before mutation explanation.
CLEANUP / EXIT:
- Retain dual matrices.
PERSISTENT STATE:
- Dual matrix visible with source label.

================================================================================
ANCHOR: S13_NOCORRUPT (F223..F318)
Spoken Phrase: "so mutation could never corrupt our source of truth." (W0014..W0022)
================================================================================
WHAT APPEARS NOW:
- Animated data flow arrow: "READ FROM CLONE -> WRITE ZEROES TO WORKING".
- Green shield icon on Clone: "CORRUPTION SHIELD ACTIVE".
CENTER-STAGE HERO:
- Protected Clone Matrix maintaining source truth while working matrix is zeroed.
CAUSE:
- Showing why the full copy worked correctly.
EFFECT / MOTION:
- Green dashed connector path draws from Clone to Working Matrix.
WHAT MUST NOT APPEAR YET:
- Cost assessment or Method 2.
COMPREHENSION HOLD:
- F318..F335: Natural pause.
CLEANUP / EXIT:
- Retain protection visualization.
PERSISTENT STATE:
- Shield and data flow visible.

================================================================================
ANCHOR: S13_CORRECT (F335..F348)
Spoken Phrase: "Correct?" (W0023)
================================================================================
WHAT APPEARS NOW:
- Green badge pops: "LOGICALLY SOUND: 100% CORRECT".
CENTER-STAGE HERO:
- Correctness confirmation badge.
CAUSE:
- Rhetorical checkpoint affirming algorithm correctness.
EFFECT / MOTION:
- Badge springs up with scale 1.1 -> 1.0.
WHAT MUST NOT APPEAR YET:
- Memory warning badge.
COMPREHENSION HOLD:
- F348..F367: Hold before memory cost critique.
CLEANUP / EXIT:
- None.
PERSISTENT STATE:
- Correctness badge acknowledged.

================================================================================
ANCHOR: S13_EXPENSIVE (F367..F434)
Spoken Phrase: "But expensive, in memory." (W0024..W0027)
================================================================================
WHAT APPEARS NOW:
- Warning alert banner appears across Right Stage: "MEMORY COST: O(M x N) AUXILIARY SPACE".
- Step 1 on Left Scaffold marks cost: "Space: O(MN) [HEAVY]".
CENTER-STAGE HERO:
- Red/Amber memory penalty tag highlighting duplicate grid allocation.
CAUSE:
- Critiquing the memory overhead of duplicate matrix.
EFFECT / MOTION:
- Red warning border pulses around the duplicate clone matrix.
WHAT MUST NOT APPEAR YET:
- Method 2 content.
COMPREHENSION HOLD:
- F434..F464: Major transition pause (30 frames).
CLEANUP / EXIT:
- Dual matrix display fades out into historical summary.
PERSISTENT STATE:
- Method 1 summarized; ready for Method 2 transition.

================================================================================
ANCHOR: S13_M2Q (F464..F527)
Spoken Phrase: "Method two asked a better question." (W0028..W0033)
================================================================================
WHAT APPEARS NOW:
- Step 2 on Evolution Scaffold activates: "METHOD 2 · COMPRESS INFORMATION".
- Right Stage transitions to Phase 2: "BETTER REASONING: ESSENTIAL INFORMATION".
CENTER-STAGE HERO:
- Step 2 highlighted in cyan/mint sheen (#4ECDC4).
CAUSE:
- Narration pivots to algorithmic efficiency through question reframing.
EFFECT / MOTION:
- Method 1 dims to 40% opacity; Method 2 blooms to full brightness.
WHAT MUST NOT APPEAR YET:
- Specific marker arrays rowZero / colZero.
COMPREHENSION HOLD:
- F527..F550: Pause before the question is spoken.
CLEANUP / EXIT:
- Method 1 right visuals cleared.
PERSISTENT STATE:
- Phase 2 board established.

================================================================================
ANCHOR: S13_WHAT (F550..F616)
Spoken Phrase: "What information do we actually need?" (W0034..W0039)
================================================================================
WHAT APPEARS NOW:
- Large philosophical banner on Right Stage: "WHAT INFORMATION MUST SURVIVE?".
- Matrix grid displayed with question mark overlays on redundant cells.
CENTER-STAGE HERO:
- Inquiry banner prompting the compression insight.
CAUSE:
- Prompting student to isolate necessary vs redundant state.
EFFECT / MOTION:
- Banner glides down Y: -15px -> Y with golden glow.
WHAT MUST NOT APPEAR YET:
- Row and column highlights.
COMPREHENSION HOLD:
- F616..F632: Breathing pause.
CLEANUP / EXIT:
- Redundant question marks clear.
PERSISTENT STATE:
- Question established.

================================================================================
ANCHOR: S13_ROWS (F632..F662)
Spoken Phrase: "Only which rows" (W0040..W0042)
================================================================================
WHAT APPEARS NOW:
- Horizontal laser scan across matrix rows: "Row Zero Flags: row[r] has zero?".
- Horizontal projection arrow toward left vertical margin.
CENTER-STAGE HERO:
- Row projection highlight.
CAUSE:
- Identifying row indices as the first essential coordinate.
EFFECT / MOTION:
- Row bands highlight with subtle cyan sheen.
WHAT MUST NOT APPEAR YET:
- Column projection.
COMPREHENSION HOLD:
- F662..F662: Direct continuation.
CLEANUP / EXIT:
- Keep row highlights.
PERSISTENT STATE:
- Row coordinates isolated.

================================================================================
ANCHOR: S13_COLS (F662..F705)
Spoken Phrase: "and which columns" (W0043..W0045)
================================================================================
WHAT APPEARS NOW:
- Vertical laser scan across matrix columns: "Col Zero Flags: col[c] has zero?".
- Vertical projection arrow toward top horizontal margin.
CENTER-STAGE HERO:
- Column projection highlight.
CAUSE:
- Identifying column indices as the second essential coordinate.
EFFECT / MOTION:
- Column bands highlight with subtle yellow/gold sheen.
WHAT MUST NOT APPEAR YET:
- rowZero/colZero arrays.
COMPREHENSION HOLD:
- F705..F705: Direct continuation.
CLEANUP / EXIT:
- Keep row and column highlights.
PERSISTENT STATE:
- 1D row & column projections visual.

================================================================================
ANCHOR: S13_CONTAIN (F705..F755)
Spoken Phrase: "contained an original zero." (W0046..W0049)
================================================================================
WHAT APPEARS NOW:
- Original zero cell (1, 1) illuminates with crosshair target.
- Row 1 and Col 1 flags trigger simultaneously.
CENTER-STAGE HERO:
- Original zero triggering its corresponding 1D projected flags.
CAUSE:
- Linking the original zero cause to the 1D compressed effect.
EFFECT / MOTION:
- Crosshair pulse on cell (1, 1); rays extend to row and column headers.
WHAT MUST NOT APPEAR YET:
- Dedicated array boxes.
COMPREHENSION HOLD:
- F755..F775: Pause before array reveal.
CLEANUP / EXIT:
- Rays settle.
PERSISTENT STATE:
- Compression logic verified.

================================================================================
ANCHOR: S13_COMPRESS (F775..F845)
Spoken Phrase: "So we compress the full copy into" (W0050..W0056)
================================================================================
WHAT APPEARS NOW:
- Animation: Full M x N matrix collapses into two sleek 1D vectors.
- Morphing transition banner: "M x N CELLS -> (M + N) FLAGS".
CENTER-STAGE HERO:
- Dynamic representation handoff from 2D grid to 1D vector arrays.
CAUSE:
- Mathematical compression from full matrix to linear vectors.
EFFECT / MOTION:
- Matrix shrink animation while row and col vectors emerge.
WHAT MUST NOT APPEAR YET:
- Variable names rowZero/colZero before spoken.
COMPREHENSION HOLD:
- F845..F845: Seamless continuation.
CLEANUP / EXIT:
- 2D grid clears.
PERSISTENT STATE:
- Vectors positioned on stage.

================================================================================
ANCHOR: S13_ROWZERO (F845..F876)
Spoken Phrase: "row zero" (W0057..W0058)
================================================================================
WHAT APPEARS NOW:
- Vertical vector box labeled: `rowZero = new boolean[m]`.
- Array slots [0, 1, 2] clearly indexed.
CENTER-STAGE HERO:
- `rowZero` marker array.
CAUSE:
- Spoken variable name.
EFFECT / MOTION:
- `rowZero` vector glows cyan with draw-in border.
WHAT MUST NOT APPEAR YET:
- colZero label.
COMPREHENSION HOLD:
- F876..F886: Short breath.
CLEANUP / EXIT:
- Keep rowZero visible.
PERSISTENT STATE:
- rowZero active.

================================================================================
ANCHOR: S13_COLZERO (F886..F922)
Spoken Phrase: "and call zero." (W0059..W0061)
================================================================================
WHAT APPEARS NOW:
- Horizontal vector box labeled: `colZero = new boolean[n]`.
- Array slots [0, 1, 2, 3] clearly indexed.
CENTER-STAGE HERO:
- `colZero` marker array alongside `rowZero`.
CAUSE:
- Spoken variable name.
EFFECT / MOTION:
- `colZero` vector glows mint with draw-in border.
WHAT MUST NOT APPEAR YET:
- Space complexity formula.
COMPREHENSION HOLD:
- F922..F940: Pause.
CLEANUP / EXIT:
- Both vectors settle.
PERSISTENT STATE:
- Both marker arrays displayed with indices.

================================================================================
ANCHOR: S13_M2SPACE (F940..F1058)
Spoken Phrase: "That reduced the extra space to O M plus N." (W0062..W0071)
================================================================================
WHAT APPEARS NOW:
- Space comparison banner: "SPACE REDUCTION: O(MN) -> O(M + N)".
- Memory savings meter showing 80%+ memory reduction.
- Step 2 on Left Scaffold updates: "Space: O(M + N) [OPTIMAL VECTORS]".
CENTER-STAGE HERO:
- Complexity metric badge: O(M + N).
CAUSE:
- Concluding the Method 2 analysis.
EFFECT / MOTION:
- Savings bar fills with bright green spring animation.
WHAT MUST NOT APPEAR YET:
- Method 3 content.
COMPREHENSION HOLD:
- F1058..F1073: Pause before Method 3 transition.
CLEANUP / EXIT:
- Marker arrays fade into historical reference.
PERSISTENT STATE:
- Method 2 completed; stage ready for optimal breakthrough.

================================================================================
ANCHOR: S13_FINALOBS (F1073..F1126)
Spoken Phrase: "Then came the final observation." (W0072..W0076)
================================================================================
WHAT APPEARS NOW:
- Step 3 on Left Scaffold activates: "METHOD 3 · REUSE INPUT STORAGE".
- Right Stage reveals Phase 3 Title: "THE IN-PLACE PARADIGM SHIFT".
CENTER-STAGE HERO:
- Golden observation star with glowing border.
CAUSE:
- Introducing the insight leading to O(1) space.
EFFECT / MOTION:
- Step 3 glows gold (#FFD166); Phase 3 title slides down.
WHAT MUST NOT APPEAR YET:
- Specific matrix boundary highlights.
COMPREHENSION HOLD:
- F1126..F1147: Natural pause.
CLEANUP / EXIT:
- Title settles at top of stage.
PERSISTENT STATE:
- Phase 3 board ready.

================================================================================
ANCHOR: S13_MCELLROW (F1147..F1303)
Spoken Phrase: "The matrix already contains one cell for every row in its first column" (W0077..W0089)
================================================================================
WHAT APPEARS NOW:
- Full 3x4 Matrix displayed at center stage.
- Column 0 (cells (0,0), (1,0), (2,0)) illuminates with vertical cyan bracket:
  - Bracket label: "Col 0: Exactly M cells (One per Row)".
CENTER-STAGE HERO:
- First Column acting as the natural replacement for `rowZero[M]`.
CAUSE:
- Physical correspondence between matrix column 0 and row count.
EFFECT / MOTION:
- Column 0 cells pulse with cyan highlight; bracket draws downward.
WHAT MUST NOT APPEAR YET:
- First row highlight.
COMPREHENSION HOLD:
- F1303..F1303: Direct continuation to row observation.
CLEANUP / EXIT:
- Keep column 0 highlighted.
PERSISTENT STATE:
- Col 0 bracket visible.

================================================================================
ANCHOR: S13_MCELLCOL (F1303..F1428)
Spoken Phrase: "and one cell for every column in its first row." (W0090..W0099)
================================================================================
WHAT APPEARS NOW:
- Row 0 (cells (0,0), (0,1), (0,2), (0,3)) illuminates with horizontal mint bracket:
  - Bracket label: "Row 0: Exactly N cells (One per Col)".
CENTER-STAGE HERO:
- First Row acting as the natural replacement for `colZero[N]`.
CAUSE:
- Physical correspondence between matrix row 0 and col count.
EFFECT / MOTION:
- Row 0 cells pulse with mint highlight; bracket draws rightward.
WHAT MUST NOT APPEAR YET:
- In-place reuse conclusion.
COMPREHENSION HOLD:
- F1428..F1442: Short breath.
CLEANUP / EXIT:
- Both brackets lock into place forming an L-shaped perimeter.
PERSISTENT STATE:
- L-shaped perimeter (Row 0 + Col 0) clearly demarcated as embedded memory.

================================================================================
ANCHOR: S13_REUSE (F1442..F1591)
Spoken Phrase: "So instead of allocating marker arrays, we reuse the matrix itself." (W0100..W0110)
================================================================================
WHAT APPEARS NOW:
- External marker array ghosts cross out with red diagonal strike: `new boolean[]` ❌.
- "STORAGE CONVERGENCE" badge: "Matrix Itself Becomes Marker Memory!".
CENTER-STAGE HERO:
- Matrix perimeter absorbing the external vector responsibilities.
CAUSE:
- Eliminating heap allocation entirely.
EFFECT / MOTION:
- External array boxes dissolve; perimeter borders thicken with gold chalk line.
WHAT MUST NOT APPEAR YET:
- Collision warning.
COMPREHENSION HOLD:
- F1591..F1613: Pause before discussing the risk of in-place mutation.
CLEANUP / EXIT:
- Array ghosts disappear.
PERSISTENT STATE:
- In-place storage model locked.

================================================================================
ANCHOR: S13_DESTROY (F1613..F1710)
Spoken Phrase: "But reusing storage destroys old information." (W0111..W0116)
================================================================================
WHAT APPEARS NOW:
- Amber Caution Banner: "OVERWRITE RISK: Modifying Row 0 & Col 0 Destroys Original Zero State!".
- Cell (0,0) intersection pulses with warning halo.
CENTER-STAGE HERO:
- Cell (0,0) overlap and boundary data destruction alert.
CAUSE:
- Highlighting the critical bug that naively overwriting boundaries causes.
EFFECT / MOTION:
- Cell (0,0) pulses with amber/red glow (#EF476F); warning banner drops into view.
WHAT MUST NOT APPEAR YET:
- Boolean flags solution before spoken.
COMPREHENSION HOLD:
- F1710..F1710: Direct transition to the safeguard.
CLEANUP / EXIT:
- Caution banner docks to top of matrix.
PERSISTENT STATE:
- Warning state established; awaiting solution.

================================================================================
ANCHOR: S13_SAVED (F1710..F1774)
Spoken Phrase: "That is why we first saved" (W0117..W0122)
================================================================================
WHAT APPEARS NOW:
- Two dedicated hardware-register chips appear above the matrix:
  - Register 1 (Cyan outline)
  - Register 2 (Mint outline)
CENTER-STAGE HERO:
- Dual boolean memory registers.
CAUSE:
- Isolating boundary ground truth before matrix mutation starts.
EFFECT / MOTION:
- Two register chips slide in smoothly from top margin.
WHAT MUST NOT APPEAR YET:
- Flag names before spoken.
COMPREHENSION HOLD:
- F1774..F1774: Seamless continuation.
CLEANUP / EXIT:
- Registers take top positions.
PERSISTENT STATE:
- Dual register placeholders ready.

================================================================================
ANCHOR: S13_FR (F1774..F1807)
Spoken Phrase: "first row zero" (W0123..W0125)
================================================================================
WHAT APPEARS NOW:
- Register 1 fills: `firstRowZero: boolean (1 bit)`.
- Connector line links Row 0 scan to Register 1.
CENTER-STAGE HERO:
- `firstRowZero` boolean flag.
CAUSE:
- Spoken variable name.
EFFECT / MOTION:
- Chip glows cyan with checkmark; connector draws.
WHAT MUST NOT APPEAR YET:
- firstColZero name.
COMPREHENSION HOLD:
- F1807..F1807: Seamless continuation.
CLEANUP / EXIT:
- Keep Register 1 active.
PERSISTENT STATE:
- firstRowZero locked.

================================================================================
ANCHOR: S13_FC (F1807..F1847)
Spoken Phrase: "and first call zero." (W0126..W0129)
================================================================================
WHAT APPEARS NOW:
- Register 2 fills: `firstColZero: boolean (1 bit)`.
- Connector line links Col 0 scan to Register 2.
CENTER-STAGE HERO:
- `firstColZero` boolean flag.
CAUSE:
- Spoken variable name.
EFFECT / MOTION:
- Chip glows mint with checkmark; connector draws.
WHAT MUST NOT APPEAR YET:
- Full memory unification summary.
COMPREHENSION HOLD:
- F1847..F1862: Short pause.
CLEANUP / EXIT:
- Both register chips settle securely above matrix.
PERSISTENT STATE:
- Both boolean guards active and verified.

================================================================================
ANCHOR: S13_MEMORY (F1862..F1924)
Spoken Phrase: "Then the matrix became its own memory." (W0130..W0136)
================================================================================
WHAT APPEARS NOW:
- Golden Aura envelops the entire matrix:
  - Row 0 + Col 0 markers + 2 Booleans = 100% Complete Memory System.
  - Subtitle: "Zero Heap Allocation · Self-Contained In-Place State".
CENTER-STAGE HERO:
- Unified In-Place Matrix Memory Architecture.
CAUSE:
- Culmination of the Method 3 architectural proof.
EFFECT / MOTION:
- Warm golden radial glow pulses from matrix center; border sparkles.
WHAT MUST NOT APPEAR YET:
- Final complexity numbers before spoken.
COMPREHENSION HOLD:
- F1924..F1943: Pause before final complexity statement.
CLEANUP / EXIT:
- Aura settles into crisp chalk border.
PERSISTENT STATE:
- Self-contained memory proven.

================================================================================
ANCHOR: S13_FINALCOMP (F1943..F2002)
Spoken Phrase: "This gives us the final complexity." (W0137..W0142)
================================================================================
WHAT APPEARS NOW:
- Master Asymptotics Card slides in from right:
  - Header: "FINAL ALGORITHMIC COMPLEXITY".
CENTER-STAGE HERO:
- Final complexity card header.
CAUSE:
- Announcing the definitive complexity verdict.
EFFECT / MOTION:
- Card slides in from X + 40px with spring damping.
WHAT MUST NOT APPEAR YET:
- O(MN) and O(1) text before spoken.
COMPREHENSION HOLD:
- F2002..F2033: Pause (31 frames).
CLEANUP / EXIT:
- Stage focuses entirely on the complexity card.
PERSISTENT STATE:
- Complexity card open.

================================================================================
ANCHOR: S13_TIME_SPACE (F2033..F2147)
Spoken Phrase: "O M times N time and O one extra space." (W0143..W0152)
================================================================================
WHAT APPEARS NOW:
- Big bold metrics populate the Master Asymptotics Card:
  - Time: `O(M × N)` in bright gold chalk text.
  - Space: `O(1) EXTRA SPACE` in bright green chalk text with trophy icon 🏆.
- Sub-breakdown: "Only 2 boolean flags + loop indices = Strictly O(1)".
CENTER-STAGE HERO:
- Gold-standard complexity badge: O(MN) Time / O(1) Space.
CAUSE:
- Declaring the optimal computational footprint.
EFFECT / MOTION:
- Both metrics zoom in with punchy spring scale 1.15 -> 1.0; trophy sparkles.
WHAT MUST NOT APPEAR YET:
- Roadmap screen.
COMPREHENSION HOLD:
- F2147..F2157: Breathing pause.
CLEANUP / EXIT:
- Keep complexity card visible.
PERSISTENT STATE:
- Gold standard asymptotics locked.

================================================================================
ANCHOR: S13_COMPLETE (F2157..F2221)
Spoken Phrase: "Set matrix zeros is complete." (W0153..W0157)
================================================================================
WHAT APPEARS NOW:
- Victory Stamp slams down across stage:
  - "QUESTION 013 · SET MATRIX ZEROES: SOLVED & VERIFIED ✓".
CENTER-STAGE HERO:
- Problem completion stamp in bold green chalk.
CAUSE:
- Formal completion of LeetCode 73.
EFFECT / MOTION:
- Stamp scales 1.3 -> 1.0 with subtle screen shake (2px) and opacity 1.
WHAT MUST NOT APPEAR YET:
- Roadmap transition before next phrase.
COMPREHENSION HOLD:
- F2221..F2240: Pause.
CLEANUP / EXIT:
- Synthesis stage prepares to transition to Master Roadmap UI.
PERSISTENT STATE:
- Question 13 marked solved.

================================================================================
ANCHOR: S13_Q13DONE (F2240..F2288)
Spoken Phrase: "Question 13, done." (W0158..W0160)
================================================================================
WHAT APPEARS NOW:
- Transition to Authoritative Master Roadmap UI (`MasterRoadmapV2`).
- Row 013 (Set Matrix Zeroes) in the curriculum table receives a crisp green checkmark (✓).
- Celebratory ChalkDust burst on Row 013.
CENTER-STAGE HERO:
- Row 013 in the Master Roadmap with green checkmark.
CAUSE:
- Direct spoken affirmation of Question 13 completion.
EFFECT / MOTION:
- ChalkDust bursts (F2245..F2285); checkmark draws in with chalk stroke.
WHAT MUST NOT APPEAR YET:
- Global counter roll (must stay 12 until next phrase).
COMPREHENSION HOLD:
- F2288..F2313: Pause before counter announcement (25 frames).
CLEANUP / EXIT:
- Recap elements completely gone; Roadmap UI owns the entire 1920x1080 canvas.
PERSISTENT STATE:
- Master Roadmap visible; Row 013 checked; counter at 12/227.

================================================================================
ANCHOR: S13_GLOBALPROGRESS (F2313..F2455)
Spoken Phrase: "Our global progress is now 13 out of 227." (W0161..W0169)
================================================================================
WHAT APPEARS NOW:
- Camera eases upward slightly toward top-right progress pill:
  - Counter rolls smoothly: `12 / 227 COMPLETED` -> `13 / 227 COMPLETED`.
  - Progress pill glows warm green.
  - Vertical rail dot 013 turns solid green.
CENTER-STAGE HERO:
- Course Global Counter: `13 / 227 COMPLETED`.
CAUSE:
- Spoken global milestone update.
EFFECT / MOTION:
- Numeric roll from 12 -> 13; gentle pulse on progress badge.
WHAT MUST NOT APPEAR YET:
- Question 14 spotlight.
COMPREHENSION HOLD:
- F2455..F2462: Short breath.
CLEANUP / EXIT:
- Camera eases back to center.
PERSISTENT STATE:
- Global counter locked at 13/227.

================================================================================
ANCHOR: S13_CONTINUE (F2462..F2564)
Spoken Phrase: "We continue the arrays and hashing roadmap" (W0170..W0176)
================================================================================
WHAT APPEARS NOW:
- Pattern 01 Header in Sidebar and Table glows: "01 · ARRAYS & HASHING (13 / 18 COMPLETED)".
- Underline draws beneath Pattern 01 title.
CENTER-STAGE HERO:
- Pattern 01 track in the course curriculum.
CAUSE:
- Reaffirming current pattern focus in the 227-problem journey.
EFFECT / MOTION:
- Subtle gold glow around Pattern 01 section.
WHAT MUST NOT APPEAR YET:
- Question 14 spotlight before spoken.
COMPREHENSION HOLD:
- F2564..F2570: Short breath.
CLEANUP / EXIT:
- Focus glides down toward next problem row.
PERSISTENT STATE:
- Pattern 01 highlighted.

================================================================================
ANCHOR: S13_Q14 (F2570..F2637)
Spoken Phrase: "with question 14." (W0177..W0179)
================================================================================
WHAT APPEARS NOW:
- Row 014 illuminates in the curriculum table:
  - Number badge: `014` in bright gold chalk text.
  - Status badge changes from upcoming to `UP NEXT ▶`.
CENTER-STAGE HERO:
- Row 014 number and status badge.
CAUSE:
- Spoken transition to problem 14.
EFFECT / MOTION:
- Spotlight border glides from Row 013 down to Row 014.
WHAT MUST NOT APPEAR YET:
- Title "Rotate Image" before spoken.
COMPREHENSION HOLD:
- F2637..F2668: Pause (31 frames).
CLEANUP / EXIT:
- Row 014 active.
PERSISTENT STATE:
- Row 014 spotlighted.

================================================================================
ANCHOR: S13_ROTATE (F2668..F2696)
Spoken Phrase: "Rotate image." (W0180..W0181)
================================================================================
WHAT APPEARS NOW:
- Row 014 full metadata reveals:
  - Title: `Rotate Image` in bold cursive chalk font.
  - LeetCode badge: `LC 48 · Medium`.
  - Up Next Gold Border around entire Row 014.
CENTER-STAGE HERO:
- Question 014: Rotate Image spotlighted as the immediate next challenge.
CAUSE:
- Spoken title of the next problem.
EFFECT / MOTION:
- Warm golden glow pulse around Row 014; celebratory shimmer.
WHAT MUST NOT APPEAR YET:
- None; this is the final scene and final spoken phrase.
COMPREHENSION HOLD:
- F2696..F2760: Master outro hold (64 frames / 2.1 seconds) allowing student to appreciate progress and anticipate Q14!
CLEANUP / EXIT:
- Gentle fade out at F2750..F2760.
PERSISTENT STATE:
- Question 013 complete (13/227); Question 014 ready.
```

---

## 4. Visual Component Reuse & Assembly Matrix

| Visual Element | Component / Source | R/E/C | Implementation Notes |
|---|---|---|---|
| Chalkboard Canvas | `ChalkboardBackground`, `ChalkFilters` | REUSE | Standard 1920x1080 green chalkboard |
| Top Strip | Custom JSX with `theme.ts` & `fonts.ts` | REUSE | Same as Scene 01, 10, 11, 12 |
| Master Roadmap | `MasterRoadmapV2` from `kit/components/MasterRoadmapV2.tsx` | REUSE | Authoritative course roadmap, props-driven |
| Rough Card / Box | `RoughBox` from `kit/components/RoughBox.tsx` | REUSE | Translucent chalkboard cards |
| Chalk Dividers | `RoughLine` from `kit/components/RoughLine.tsx` | REUSE | Hand-drawn chalk dividers |
| Chalk Dust Burst | `ChalkDust` from `kit/components/ChalkDust.tsx` | REUSE | Celebratory burst on Row 13 completion |
| Bottom Captions | `Captions` from `kit/components/Captions.tsx` | REUSE | Anchored at Y: 980 |
