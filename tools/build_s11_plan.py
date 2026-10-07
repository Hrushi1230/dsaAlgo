import json
import os

anchors_path = 'questions/01-arrays-hashing/013-set-matrix-zeroes/sync/11-optimal-code.anchors.json'
with open(anchors_path, 'r', encoding='utf-8') as f:
    anchors = json.load(f)

plan_file = 'questions/01-arrays-hashing/013-set-matrix-zeroes/plans/11-optimal-code_FRAMEWISE_PLAN.md'
checklist_file = 'questions/01-arrays-hashing/013-set-matrix-zeroes/plans/11-optimal-code_FRAME_QA_CHECKLIST.md'

# Descriptions for all 43 anchors
anchor_details = {
    "S11_OPEN": {
        "title": "Intro to Optimal Code",
        "now": "Green chalkboard, top header: METHOD 3 CODE: IN-PLACE BOUNDARY MARKERS (PYTHON). ChalkCodeEditorV2 window enters on left (X: 60, Y: 130). Function signature: def setZeroes(matrix: list[list[int]]) -> None:.",
        "hero": "Code editor entry with blinking cursor on line 2.",
        "cause": "Audio signals start of optimal in-place code construction.",
        "motion": "Editor window scales in gently (0.95 -> 1.0, spring).",
        "not_yet": "Dimensions m, n, booleans, or loops.",
        "hold": "Viewer absorbs the clean editor canvas and method badge.",
        "exit": "Cursor blinks at line 2.",
        "persist": "Editor active at line 2; right stage ready."
    },
    "S11_M": {
        "title": "Store Rows in M",
        "now": "Line 2 types out: m = len(matrix). Right stage displays matrix dimension pill M = 5 rows.",
        "hero": "Line 2 in editor; matrix height indicator.",
        "cause": "Recording row count for matrix bounds.",
        "motion": "Code characters type progressively; row bracket pulses.",
        "not_yet": "Column dimension n or flag booleans.",
        "hold": "Row count established.",
        "exit": "Cursor advances to line 3.",
        "persist": "m = len(matrix) settled."
    },
    "S11_N": {
        "title": "Store Columns in N",
        "now": "Line 3 types out: n = len(matrix[0]). Right stage displays matrix dimension pill N = 5 cols.",
        "hero": "Line 3 in editor; matrix width indicator.",
        "cause": "Recording column count for bounds.",
        "motion": "Code characters type progressively; column bracket pulses.",
        "not_yet": "Boolean flags firstRowZero / firstColZero.",
        "hold": "Matrix dimensions (5x5) established.",
        "exit": "Cursor advances to line 5.",
        "persist": "m and n defined; matrix bounds active."
    },
    "S11_TWO": {
        "title": "Create Two Booleans",
        "now": "Line 5 comment / header: # Boundary state booleans. Right stage shows two uninitialized flag cards firstRowZero & firstColZero.",
        "hero": "Flag declaration concept in editor and visualizer.",
        "cause": "Need independent variables to decouple Row 0 and Col 0 collision at (0,0).",
        "motion": "Flag cards slide into right stage panel.",
        "not_yet": "Initial values of flags or loops.",
        "hold": "Viewer understands two dedicated variables are required.",
        "exit": "Cursor readies line 6.",
        "persist": "Two flag placeholders ready on right."
    },
    "S11_FRFALSE": {
        "title": "firstRowZero starts False",
        "now": "Line 6 types out: firstRowZero = False. Right stage firstRowZero card lights with False (neutral slate).",
        "hero": "firstRowZero initialized in editor and right stage.",
        "cause": "Optimistic initialization: assume row 0 has no zeros until proven otherwise.",
        "motion": "Code types in; flag card border pulses slate.",
        "not_yet": "firstColZero assignment.",
        "hold": "Viewer registers firstRowZero = False.",
        "exit": "Cursor readies line 7.",
        "persist": "firstRowZero = False visible in editor & card."
    },
    "S11_FCFALSE": {
        "title": "firstColZero starts False",
        "now": "Line 7 types out: firstColZero = False. Right stage firstColZero card lights with False (neutral slate).",
        "hero": "firstColZero initialized in editor and right stage.",
        "cause": "Optimistic initialization: assume col 0 has no zeros until proven otherwise.",
        "motion": "Code types in; flag card border pulses slate.",
        "not_yet": "Boundary scanning loops.",
        "hold": "Both flags initialized to False.",
        "exit": "Cursor readies boundary save block.",
        "persist": "Both booleans initialized."
    },
    "S11_BEFORE": {
        "title": "Save Boundary History Rationale",
        "now": "Line 9 comment: # 1. Save boundary history before overwriting. Right visualizer highlights Row 0 and Col 0 with amber halo.",
        "hero": "Boundary protection callout and comment.",
        "cause": "Using boundary as marker storage destroys its original zero status unless saved first.",
        "motion": "Amber halo draws around Row 0 and Col 0.",
        "not_yet": "Boundary scanning code lines.",
        "hold": "Viewer registers the crucial invariance: Save before Overwrite.",
        "exit": "Halo settles into inspection glow.",
        "persist": "Boundary highlighted."
    },
    "S11_SCANROW": {
        "title": "Scan First Row Loop",
        "now": "Line 10 types out: for c in range(n):. Gold scan beam sweeps horizontally across Row 0 (cells 0,0 to 0,4).",
        "hero": "Row 0 loop header in editor; scan beam on Row 0.",
        "cause": "Checking every cell in Row 0 for zeros.",
        "motion": "Code types; scan beam moves smoothly across Row 0 cells.",
        "not_yet": "Condition body if matrix[0][c] == 0:.",
        "hold": "Scan beam focuses on Row 0.",
        "exit": "Cursor indents to line 11.",
        "persist": "Row 0 loop active."
    },
    "S11_IFROW": {
        "title": "Check if Row 0 has Zero",
        "now": "Line 11 types out: if matrix[0][c] == 0:. Scan beam halts at cell (0,2) which holds 0.",
        "hero": "Conditional check in editor; zero found at (0,2).",
        "cause": "Cell (0,2) is originally zero in the master testcase.",
        "motion": "Code types; cell (0,2) pulses gold glow.",
        "not_yet": "Setting firstRowZero = True.",
        "hold": "Viewer sees zero discovered at index 2.",
        "exit": "Cursor indents to line 12.",
        "persist": "Zero at (0,2) locked in beam."
    },
    "S11_SETFR": {
        "title": "Set firstRowZero = True",
        "now": "Line 12 types out: firstRowZero = True. Right stage flag card flips to True with glowing green border.",
        "hero": "firstRowZero = True assignment and flag card transition.",
        "cause": "Zero found at (0,2) requires entire Row 0 to zero out eventually.",
        "motion": "Code types; flag card flips with 3D spring, turns green.",
        "not_yet": "Column scanning loop.",
        "hold": "Viewer sees firstRowZero successfully protected as True.",
        "exit": "Row 0 scan concludes.",
        "persist": "firstRowZero = True locked."
    },
    "S11_SCANCOL": {
        "title": "Scan First Column Loop",
        "now": "Line 14 types out: for r in range(m):. Gold scan beam sweeps vertically down Col 0 (cells 0,0 to 4,0).",
        "hero": "Col 0 loop header in editor; vertical scan beam on Col 0.",
        "cause": "Checking every cell in Col 0 for zeros.",
        "motion": "Code types; beam sweeps vertically down Col 0.",
        "not_yet": "Col 0 zero check body.",
        "hold": "Scan beam focuses on Col 0.",
        "exit": "Cursor indents to line 15.",
        "persist": "Col 0 loop active."
    },
    "S11_IFCOL": {
        "title": "Check if Col 0 has Zero",
        "now": "Line 15 types out: if matrix[r][0] == 0:. Scan beam halts at cell (2,0) which holds 0.",
        "hero": "Conditional check in editor; zero found at (2,0).",
        "cause": "Cell (2,0) is originally zero in the master testcase.",
        "motion": "Code types; cell (2,0) pulses gold glow.",
        "not_yet": "Setting firstColZero = True.",
        "hold": "Viewer sees zero discovered at row index 2.",
        "exit": "Cursor indents to line 16.",
        "persist": "Zero at (2,0) locked in beam."
    },
    "S11_SETFC": {
        "title": "Set firstColZero = True",
        "now": "Line 16 types out: firstColZero = True. Right stage flag card flips to True with glowing green border.",
        "hero": "firstColZero = True assignment and flag card transition.",
        "cause": "Zero found at (2,0) requires entire Col 0 to zero out eventually.",
        "motion": "Code types; flag card flips with 3D spring, turns green.",
        "not_yet": "Interior discovery scan loops.",
        "hold": "Viewer sees firstColZero successfully protected as True.",
        "exit": "Col 0 scan concludes.",
        "persist": "firstColZero = True locked."
    },
    "S11_PROTECTED": {
        "title": "Boundary History Protected",
        "now": "Right stage displays dual green shield badge: BOUNDARY HISTORY PROTECTED. Both flags glow bright green.",
        "hero": "Dual protected flags and safe boundary status.",
        "cause": "Both Row 0 and Col 0 original zero states are safely memorized in booleans.",
        "motion": "Shield badge springs in with celebratory checkmark.",
        "not_yet": "Interior scanning loops.",
        "hold": "Viewer absorbs the peace of mind: boundary can now be repurposed as marker storage safely!",
        "exit": "Shield badge dissolves into compact status pill.",
        "persist": "Safe boundary state established."
    },
    "S11_NEXT": {
        "title": "Interior Discovery Scan",
        "now": "Line 18 comment: # 2. Mark interior zeros in boundary. Right visualizer dims Row 0 & Col 0, highlights 4x4 inner matrix.",
        "hero": "Interior scanning transition in editor and visualizer.",
        "cause": "Next pass scans only interior cells to write boundary markers.",
        "motion": "Inner 4x4 box highlights with cyan dashed frame.",
        "not_yet": "Loop headers range(1, m).",
        "hold": "Viewer sees attention shift strictly to the interior.",
        "exit": "Cursor readies line 19.",
        "persist": "Interior 4x4 focused."
    },
    "S11_ROWS1": {
        "title": "Start Rows From One",
        "now": "Line 19 types out: for r in range(1, m):. Notice badge highlights 1 in range(1, m).",
        "hero": "range(1, m) in editor; Row 0 excluded badge.",
        "cause": "Row 0 is marker memory, so scanning must begin at row 1.",
        "motion": "Code types; index 1 pulses with cyan underline.",
        "not_yet": "Inner column loop.",
        "hold": "Crucial distinction: NOT range(m), but range(1, m).",
        "exit": "Cursor indents to line 20.",
        "persist": "Outer loop index starts at 1."
    },
    "S11_COLS1": {
        "title": "Start Columns From One",
        "now": "Line 20 types out: for c in range(1, n):. Notice badge highlights 1 in range(1, n).",
        "hero": "range(1, n) in editor; Col 0 excluded badge.",
        "cause": "Col 0 is marker memory, so scanning must begin at column 1.",
        "motion": "Code types; index 1 pulses with gold underline.",
        "not_yet": "Zero check condition.",
        "hold": "Both loops strictly bounded to range(1,...).",
        "exit": "Cursor indents to line 21.",
        "persist": "Nested interior loops established."
    },
    "S11_WHENZERO": {
        "title": "When Interior Cell is Zero",
        "now": "Line 21 types out: if matrix[r][c] == 0:. Matrix visualizer jumps to interior zero at cell (3,3).",
        "hero": "Condition if matrix[r][c] == 0: and cell (3,3) in matrix.",
        "cause": "Master testcase has interior zero at cell (3,3) (value 0 originally).",
        "motion": "Code types; cell (3,3) pulses gold with radar ripple.",
        "not_yet": "Marker projection assignments.",
        "hold": "Viewer sees active interior cell (3,3) triggers condition.",
        "exit": "Cursor indents to line 22.",
        "persist": "Cell (3,3) active."
    },
    "S11_WRITEROW": {
        "title": "Write Zero into matrix[r][0]",
        "now": "Line 22 types out: matrix[r][0] = 0. Cyan ray shoots horizontally from (3,3) to (3,0).",
        "hero": "matrix[r][0] = 0 assignment; cyan marker ray.",
        "cause": "Marking row 3 as needing zeroing.",
        "motion": "Code types; cell (3,0) flips from 16 to 0 with cyan marker badge.",
        "not_yet": "Column marker assignment matrix[0][c] = 0.",
        "hold": "Viewer sees row marker written at (3,0).",
        "exit": "Ray fades; cell (3,0) stays marked.",
        "persist": "matrix[3][0] = 0."
    },
    "S11_MARKSROW": {
        "title": "That Marks the Row",
        "now": "Right stage displays callout pill at row 3: ROW 3 MARKED FOR ZEROING. Col 0 slot at row 3 glows cyan.",
        "hero": "Row marker explanation and slot (3,0).",
        "cause": "Explaining the physical meaning of matrix[r][0] = 0.",
        "motion": "Callout pill slides out from cell (3,0).",
        "not_yet": "matrix[0][c] = 0 assignment.",
        "hold": "Viewer connects code syntax matrix[r][0] = 0 to its semantic role.",
        "exit": "Callout docks into status rail.",
        "persist": "Row 3 flagged in Col 0."
    },
    "S11_WRITECOL": {
        "title": "Write Zero into matrix[0][c]",
        "now": "Line 23 types out: matrix[0][c] = 0. Gold ray shoots vertically from (3,3) to (0,3).",
        "hero": "matrix[0][c] = 0 assignment; gold marker ray.",
        "cause": "Marking column 3 as needing zeroing.",
        "motion": "Code types; cell (0,3) flips from 4 to 0 with gold marker badge.",
        "not_yet": "Completed discovery pass summary.",
        "hold": "Viewer sees column marker written at (0,3).",
        "exit": "Ray fades; cell (0,3) stays marked.",
        "persist": "matrix[0][3] = 0."
    },
    "S11_MARKSCOL": {
        "title": "That Marks the Column",
        "now": "Right stage displays callout pill at col 3: COL 3 MARKED FOR ZEROING. Row 0 slot at col 3 glows gold.",
        "hero": "Column marker explanation and slot (0,3).",
        "cause": "Explaining the physical meaning of matrix[0][c] = 0.",
        "motion": "Callout pill drops down from cell (0,3).",
        "not_yet": "Pass 2 completion summary.",
        "hold": "Viewer connects code syntax matrix[0][c] = 0 to its semantic role.",
        "exit": "Callout docks into status rail.",
        "persist": "Col 3 flagged in Row 0."
    },
    "S11_AFTERPASS": {
        "title": "Boundary is Now Marker Memory",
        "now": "Right visualizer shows Row 0 and Col 0 glowing as dedicated marker arrays. Legend: Col 0 = Row Markers, Row 0 = Col Markers.",
        "hero": "Boundary marker arrays established.",
        "cause": "Interior discovery pass complete. Markers are stored in place with O(1) extra space.",
        "motion": "Glow lines outline Row 0 & Col 0 with dual colored labels.",
        "not_yet": "Application pass loops.",
        "hold": "Viewer realizes: boundary now carries all marker information without allocating arrays!",
        "exit": "Glow settles into persistent markers.",
        "persist": "Boundary markers active."
    },
    "S11_APPLY": {
        "title": "Now Apply the Markers",
        "now": "Line 25 comment: # 3. Apply markers to interior cells. Inward arrows appear along Row 0 and Col 0 pointing inward.",
        "hero": "Application pass section header and inward arrows.",
        "cause": "Now we mutate interior cells using the boundary markers.",
        "motion": "Inward projection arrows pulse inward from markers.",
        "not_yet": "Application nested loops.",
        "hold": "Transition from discovery to mutation.",
        "exit": "Cursor readies line 26.",
        "persist": "Inward apply mode active."
    },
    "S11_AGAIN": {
        "title": "Again Scan Only Interior",
        "now": "Lines 26-27 type out: for r in range(1, m): and for c in range(1, n):. Interior 4x4 box highlights again.",
        "hero": "Nested range(1, ...) loops in editor.",
        "cause": "Must mutate interior FIRST before touching the boundary markers.",
        "motion": "Code lines type in; interior 4x4 grid flashes cyan.",
        "not_yet": "OR condition.",
        "hold": "Viewer sees same range(1, m) and range(1, n) bounds reused.",
        "exit": "Cursor indents to line 28.",
        "persist": "Application loop headers active."
    },
    "S11_FOREACH": {
        "title": "For Each Cell",
        "now": "Scanner cursor highlights interior cells one-by-one. Pauses on cell (1,2) (affected by col marker at (0,2)).",
        "hero": "Current cell cursor on interior cell.",
        "cause": "Evaluating each interior cell against row and column markers.",
        "motion": "Target reticle lands on cell (1,2).",
        "not_yet": "Condition syntax.",
        "hold": "Viewer focuses on single cell evaluation.",
        "exit": "Cursor stays on cell.",
        "persist": "Cell (1,2) in focus."
    },
    "S11_ROWCOND": {
        "title": "if matrix[r][0] == 0",
        "now": "Line 28 types first part: if matrix[r][0] == 0. Cyan inquiry line links cell to its row marker at (r, 0).",
        "hero": "Row marker check condition in editor; horizontal check ray.",
        "cause": "Checking if this cell's row was marked.",
        "motion": "Code types; cyan ray points to Col 0.",
        "not_yet": "or matrix[0][c] == 0.",
        "hold": "Viewer sees row marker lookup.",
        "exit": "Line extends with OR operator.",
        "persist": "Row condition registered."
    },
    "S11_ORCOL": {
        "title": "or matrix[0][c] == 0",
        "now": "Line 28 completes: or matrix[0][c] == 0:. Gold inquiry line links cell to its column marker at (0, c).",
        "hero": "Complete OR condition in editor; vertical check ray.",
        "cause": "Checking if this cell's column was marked.",
        "motion": "Code types; gold ray points to Row 0.",
        "not_yet": "Assignment matrix[r][c] = 0.",
        "hold": "Viewer sees complete disjunction: either row marker OR column marker is zero.",
        "exit": "Cursor indents to line 29.",
        "persist": "Full if condition active."
    },
    "S11_SETCELL": {
        "title": "set matrix[r][c] = 0",
        "now": "Line 29 types out: matrix[r][c] = 0. All marked interior cells flip to 0 with gold/cyan ink bloom.",
        "hero": "matrix[r][c] = 0 in editor; interior cells morphing to 0.",
        "cause": "Applying marker rules zeroing out rows 2, 3 and cols 2, 3 in the interior.",
        "motion": "Code types; interior values 8, 9, 12, 13, 14, 15, 18, 20, 23, 24 flip to 0.",
        "not_yet": "Boundary finalization blocks.",
        "hold": "Viewer sees interior completely and accurately zeroed.",
        "exit": "Ink bloom settles.",
        "persist": "Interior zeroing complete."
    },
    "S11_INTERIORFINAL": {
        "title": "Interior is Final",
        "now": "Right stage displays green badge: INTERIOR FINALIZED. The 4x4 interior is locked and safe.",
        "hero": "Completed interior status badge.",
        "cause": "All interior zeroing is finished. Boundary markers have done their job for the interior.",
        "motion": "Badge scales in with green border glow.",
        "not_yet": "Boundary zeroing loops.",
        "hold": "Viewer sees interior task is 100% complete.",
        "exit": "Badge docks to side.",
        "persist": "Interior safe."
    },
    "S11_BOUNDONLY": {
        "title": "Only Boundary Remains",
        "now": "Row 0 and Col 0 highlight in amber pulse. Visual reminder: boundary cells still hold markers, not final values.",
        "hero": "Row 0 and Col 0 highlight.",
        "cause": "Only step left is to set Row 0 and Col 0 to zero if their boolean flags were True.",
        "motion": "Row 0 and Col 0 flash amber.",
        "not_yet": "if firstRowZero: code.",
        "hold": "Viewer anticipates boundary resolution.",
        "exit": "Cursor readies line 31.",
        "persist": "Boundary pending finalization."
    },
    "S11_IFFR": {
        "title": "if firstRowZero Branch",
        "now": "Line 31 types out: if firstRowZero:. Flag card firstRowZero (True) pulses with green beam to line 31.",
        "hero": "if firstRowZero: in editor; flag card connection.",
        "cause": "Checking the boolean flag saved at the very start of the function.",
        "motion": "Code types; green connector line links card to editor.",
        "not_yet": "Row 0 zeroing loop.",
        "hold": "Viewer sees original history recovered from boolean.",
        "exit": "Cursor indents to line 32.",
        "persist": "firstRowZero branch open."
    },
    "S11_ZEROROW": {
        "title": "Zero Every Cell in Row Zero",
        "now": "Lines 32-33 type out: for c in range(n): and matrix[0][c] = 0. All 5 cells in Row 0 flip to 0.",
        "hero": "Row 0 zeroing loop and Row 0 cell transformations.",
        "cause": "firstRowZero was True, so all cells in Row 0 must become zero.",
        "motion": "Code types; Row 0 cells (1, 2, 0, 4, 5) turn into 0s with green wipe.",
        "not_yet": "Col 0 finalization branch.",
        "hold": "Viewer sees Row 0 fully resolved.",
        "exit": "Row 0 settles.",
        "persist": "Row 0 is all zeros."
    },
    "S11_IFFC": {
        "title": "if firstColZero Branch",
        "now": "Line 35 types out: if firstColZero:. Flag card firstColZero (True) pulses with green beam to line 35.",
        "hero": "if firstColZero: in editor; flag card connection.",
        "cause": "Checking second boolean flag saved at the start.",
        "motion": "Code types; green connector line links card to editor.",
        "not_yet": "Col 0 zeroing loop.",
        "hold": "Viewer sees column history recovered from boolean.",
        "exit": "Cursor indents to line 36.",
        "persist": "firstColZero branch open."
    },
    "S11_ZEROCOL": {
        "title": "Zero Every Cell in Column Zero",
        "now": "Lines 36-37 type out: for r in range(m): and matrix[r][0] = 0. All 5 cells in Col 0 flip to 0.",
        "hero": "Col 0 zeroing loop and Col 0 cell transformations.",
        "cause": "firstColZero was True, so all cells in Col 0 must become zero.",
        "motion": "Code types; Col 0 cells turn into 0s with green wipe.",
        "not_yet": "Completion summary.",
        "hold": "Viewer sees Col 0 fully resolved.",
        "exit": "Matrix transformation complete.",
        "persist": "Matrix is 100% correctly solved."
    },
    "S11_COMPLETE": {
        "title": "Complete Optimal Solution",
        "now": "ChalkCodeEditorV2 highlights entire function with glowing cyan border. Right stage shows solved matrix with golden frame.",
        "hero": "Complete Python implementation and final solved matrix.",
        "cause": "Optimal in-place algorithm is fully constructed and visually proven.",
        "motion": "Code editor glows; matrix pulses with triumph aura.",
        "not_yet": "Order summary cards.",
        "hold": "Viewer admires the complete, elegant 37-line Python code.",
        "exit": "Glow settles.",
        "persist": "Full code displayed."
    },
    "S11_ORDER": {
        "title": "Notice the Order",
        "now": "Four numbered pipeline badges appear over editor: [1. SAVE] [2. MARK] [3. APPLY] [4. FINALIZE].",
        "hero": "Four-step pipeline badges.",
        "cause": "Emphasizing that algorithm correctness depends strictly on this specific sequence.",
        "motion": "Four badges pop in sequentially with spring bounce.",
        "not_yet": "Step 1 deep-dive highlight.",
        "hold": "Viewer sees the 4-phase architecture clearly.",
        "exit": "Badges remain as navigation markers.",
        "persist": "4-phase pipeline visible."
    },
    "S11_SAVE": {
        "title": "Step 1: Save Boundary History",
        "now": "Step 1 badge [1. SAVE BOUNDARY] expands and glows green. Lines 5-16 in editor highlighted with green bracket.",
        "hero": "Step 1 highlight in code and pipeline.",
        "cause": "Recapping phase 1.",
        "motion": "Bracket draws around lines 5-16; Step 1 card pulses.",
        "not_yet": "Step 2 highlight.",
        "hold": "Viewer focuses on boundary saving phase.",
        "exit": "Step 1 reduces to compact badge.",
        "persist": "Step 1 acknowledged."
    },
    "S11_MARK": {
        "title": "Step 2: Mark Interior",
        "now": "Step 2 badge [2. MARK INTERIOR] expands and glows cyan. Lines 18-23 in editor highlighted with cyan bracket.",
        "hero": "Step 2 highlight in code and pipeline.",
        "cause": "Recapping phase 2.",
        "motion": "Bracket draws around lines 18-23; Step 2 card pulses.",
        "not_yet": "Step 3 highlight.",
        "hold": "Viewer focuses on marker discovery phase.",
        "exit": "Step 2 reduces to compact badge.",
        "persist": "Step 2 acknowledged."
    },
    "S11_APPLYORD": {
        "title": "Step 3: Apply Those Markers",
        "now": "Step 3 badge [3. APPLY MARKERS] expands and glows gold. Lines 25-29 in editor highlighted with gold bracket.",
        "hero": "Step 3 highlight in code and pipeline.",
        "cause": "Recapping phase 3.",
        "motion": "Bracket draws around lines 25-29; Step 3 card pulses.",
        "not_yet": "Step 4 highlight.",
        "hold": "Viewer focuses on marker application phase.",
        "exit": "Step 3 reduces to compact badge.",
        "persist": "Step 3 acknowledged."
    },
    "S11_FINALORD": {
        "title": "Step 4: Finalize Boundary",
        "now": "Step 4 badge [4. FINALIZE BOUNDARY] expands and glows purple. Lines 31-37 in editor highlighted with purple bracket.",
        "hero": "Step 4 highlight in code and pipeline.",
        "cause": "Recapping phase 4.",
        "motion": "Bracket draws around lines 31-37; Step 4 card pulses.",
        "not_yet": "Careless order warning.",
        "hold": "Viewer focuses on boundary finalization phase.",
        "exit": "Step 4 reduces to compact badge.",
        "persist": "All 4 steps recapped."
    },
    "S11_CARELESS": {
        "title": "If We Change Order Carelessly",
        "now": "Warning flash card appears on right stage: WARNING: ORDER DEPENDENCE. Arrow shows what happens if Step 4 ran before Step 3.",
        "hero": "Order warning card and danger indicator.",
        "cause": "If boundary is zeroed before applying markers, boundary becomes all zeros prematurely!",
        "motion": "Red-amber warning banner slides in with caution triangle.",
        "not_yet": "Destroy marker consequence detail.",
        "hold": "Viewer registers the high danger of incorrect loop ordering.",
        "exit": "Banner pulses.",
        "persist": "Caution mode active."
    },
    "S11_DESTROY": {
        "title": "We Destroy Our Marker Information",
        "now": "Conceptual demo shows boundary zeros overwriting markers, causing catastrophic full-matrix zeroing. Red strike-through: MARKERS DESTROYED. Transition to celebration badge: O(1) SPACE PRESERVED.",
        "hero": "Destruction visual demo and final mastery badge.",
        "cause": "Explaining the catastrophic failure mode and why the 4-step sequence is an absolute necessity.",
        "motion": "Red smoke/strike on corrupted cells dissolves into solid green mastery badge.",
        "not_yet": "Nothing further.",
        "hold": "Viewer has complete, rock-solid intuition for the optimal in-place algorithm.",
        "exit": "Scene settles into final master view.",
        "persist": "Optimal code mastered."
    }
}

plan_content = f"""# Scene 11 — Method 3 Code (Optimal In-Place Markers): Framewise Scene Plan
**Question 013: Set Matrix Zeroes (LeetCode 73)**  
**Pattern 01: Arrays & Hashing**  
**Scene Name:** `11-optimal-code`  
**Audio File:** `scence-11.mp3` (`11-optimal-code.mp3`)  
**Total Duration:** 3241 frames @ 30fps (108.020s)  
**Strict Source of Truth:** `questions/01-arrays-hashing/013-set-matrix-zeroes/sync/11-optimal-code.json` & `sync/11-optimal-code.anchors.json`  

---

## 1. Scene Overview & Pedagogical Goal

Scene 11 translates the verified **Method 3 (In-Place Boundary Markers)** algorithm into production Python code.
It demonstrates that we can achieve **O(1) extra space** by utilizing the matrix's own Row 0 and Col 0 as marker storage, while strictly obeying the four-phase ordering invariant:

1. **Phase 1: Save Boundary State (Lines 5–16)**
   - Initialize `firstRowZero = False` and `firstColZero = False`.
   - Scan Row 0: `if matrix[0][c] == 0: firstRowZero = True`.
   - Scan Col 0: `if matrix[r][0] == 0: firstColZero = True`.
   - Protects boundary history before it is repurposed as marker storage.

2. **Phase 2: Mark Interior Zeros in Boundary (Lines 18–23)**
   - Nested loops starting strictly from row 1 and column 1:
     `for r in range(1, m): for c in range(1, n):`
   - If interior cell `matrix[r][c] == 0`:
     `matrix[r][0] = 0` (marks row $r$)
     `matrix[0][c] = 0` (marks column $c$)
   - Row 0 and Col 0 are now active in-place marker arrays!

3. **Phase 3: Apply Markers to Interior Cells (Lines 25–29)**
   - Nested loops again starting strictly from row 1 and column 1:
     `for r in range(1, m): for c in range(1, n):`
   - If row marker or column marker is zero:
     `if matrix[r][0] == 0 or matrix[0][c] == 0: matrix[r][c] = 0`.
   - Interior is now fully zeroed and finalized!

4. **Phase 4: Finalize Boundary (Lines 31–37)**
   - If `firstRowZero`: set all cells in Row 0 to 0.
   - If `firstColZero`: set all cells in Col 0 to 0.
   - Preserves marker data until interior was done; then safely resolves boundary.

5. **Order Invariant Masterclass (Lines 38–43)**
   - Reviews the 4-step pipeline: **SAVE -> MARK -> APPLY -> FINALIZE**.
   - Proves why changing the order (e.g. finalizing boundary before applying markers) would destroy marker information and corrupt the entire matrix.

---

## 2. Spatial Composition & Zero-Collision Invariants

- **Canvas Size:** 1920 × 1080.
- **Background:** Full-frame dark green chalkboard (`theme.boardBg` = `#19523C`). Zero AI-slop dark panels.
- **Top Header:** $Y: 42..108$ (`fonts.display`, 26px title, category pill `01 · ARRAYS & HASHING`, method badge `METHOD 3 CODE: IN-PLACE BOUNDARY MARKERS (PYTHON)`).
- **Left Stage — Code Editor ($X: 60..1020$, $Y: 130..770$):**
  - Width: 960px, Height: 640px.
  - `ChalkCodeEditorV2` with Caveat / Patrick Hand title bar, 20px code font, 32px line height.
  - Progressive character-by-character reveal tied to exact word frames from sync.
- **Right Stage — Live Visualizer ($X: 1060..1860$, $Y: 130..770$):**
  - Width: 800px, Height: 640px.
  - 5×5 Matrix scaled for clear side-by-side legibility: Cell size: 48px, Gap: 6px. Total matrix: 264px × 264px.
  - Top/Side indicator panels: `firstRowZero` and `firstColZero` boolean status cards.
  - Ray animations linking code assignments (`matrix[r][0]=0`, `matrix[0][c]=0`) directly to matrix cells.
  - Order recap badges and danger callout cards inside visualizer zone ($Y: 560..760$).
- **Bottom Clearance Invariant:**
  - Both stages stop cleanly at $Y: 770$.
  - Bottom Captions sit at $Y: 960..1040$.
  - Net clear vertical space: $960 - 770 = 190\\text{{px}}$ (exceeds the $\\ge 140\\text{{px}}$ rule).
- **Zero Collision Guarantee:** Code editor, live matrix, boolean badges, callout cards, and captions never overlap.

---

## 3. Mandatory Framewise Anchor Plan (43 Anchors)
"""

for idx, (k, v) in enumerate(anchors.items()):
    details = anchor_details.get(k, {
        "title": k,
        "now": v['phrase'],
        "hero": k,
        "cause": "Narration reaches this idea.",
        "motion": "Standard transition.",
        "not_yet": "Next lines.",
        "hold": "Viewer absorbs concept.",
        "exit": "Settle.",
        "persist": "State persists."
    })
    plan_content += f"""
### Anchor {idx + 1}: `{k}` (F{v['start_frame']}..F{v['end_frame']}, {v['duration_frames']} frames)
- **ANCHOR:** `{k}` (Words {v['start_word_id']}..{v['end_word_id']}, "{v['phrase']}")
- **WHAT APPEARS NOW:**
  - {details['now']}
- **CENTER-STAGE HERO:** {details['hero']}
- **CAUSE:** {details['cause']}
- **EFFECT / MOTION:** {details['motion']}
- **WHAT MUST NOT APPEAR YET:** {details['not_yet']}
- **COMPREHENSION HOLD:** {details['hold']}
- **CLEANUP / EXIT:** {details['exit']}
- **PERSISTENT STATE:** {details['persist']}

---
"""

with open(plan_file, 'w', encoding='utf-8') as f:
    f.write(plan_content)

print(f"Written framewise plan to {plan_file}")

# Create checklist
checklist_content = """# Scene 11 — Critical Frame QA Checklist
**Question 013: Set Matrix Zeroes (LeetCode 73)**  
**Scene:** `11-optimal-code` (Method 3 Optimal In-Place Python Code)  
**Total Duration:** 3241 frames @ 30fps (108.020s)  

## Critical Review Frames

| Frame | Phase | Description | Invariant to Verify |
|---|---|---|---|
| **F40** | Intro | Clean Editor and Title | Editor scales in at X: 60, Y: 130. Empty cursor at line 2. Header rendered. |
| **F150** | Dimensions | `m = len(matrix)` | Line 2 typed; matrix dimensions M=5 rows shown on right stage. |
| **F230** | Dimensions | `n = len(matrix[0])` | Line 3 typed; matrix dimensions N=5 cols shown on right stage. |
| **F380** | Flags | `firstRowZero = False` | Line 6 typed; firstRowZero card lights slate with False. |
| **F460** | Flags | `firstColZero = False` | Line 7 typed; firstColZero card lights slate with False. |
| **F600** | Rationale | Save Boundary History | Comment line 9 typed; amber halo outlines Row 0 and Col 0. |
| **F690** | Row Loop | `for c in range(n):` | Line 10 typed; gold beam sweeps across Row 0. |
| **F750** | Row Check | `if matrix[0][c] == 0:` | Line 11 typed; beam pauses on zero at cell (0,2). |
| **F810** | Flag 1 | `firstRowZero = True` | Line 12 typed; firstRowZero card flips to True (green). |
| **F870** | Col Loop | `for r in range(m):` | Line 14 typed; vertical gold beam sweeps down Col 0. |
| **F940** | Col Check | `if matrix[r][0] == 0:` | Line 15 typed; beam pauses on zero at cell (2,0). |
| **F990** | Flag 2 | `firstColZero = True` | Line 16 typed; firstColZero card flips to True (green). |
| **F1060** | Protected | Boundary Protected Shield | Dual green shield badge: BOUNDARY HISTORY PROTECTED. |
| **F1150** | Interior Scan | `# 2. Mark interior in boundary` | Comment line 18 typed; inner 4x4 grid highlighted. |
| **F1210** | Loop Start | `for r in range(1, m):` | Line 19 typed; range(1, m) highlighted. |
| **F1260** | Loop Start | `for c in range(1, n):` | Line 20 typed; range(1, n) highlighted. |
| **F1330** | Zero Found | `if matrix[r][c] == 0:` | Line 21 typed; cell (3,3) in matrix pulses gold. |
| **F1420** | Mark Row | `matrix[r][0] = 0` | Line 22 typed; cyan ray from (3,3) to (3,0); cell (3,0) flips to 0. |
| **F1560** | Mark Col | `matrix[0][c] = 0` | Line 23 typed; gold ray from (3,3) to (0,3); cell (0,3) flips to 0. |
| **F1700** | Marker State | Boundary as Markers | Row 0 and Col 0 glowing as in-place marker storage. |
| **F1830** | Apply Pass | `# 3. Apply markers to interior` | Comment line 25 typed; inward arrows appear. |
| **F1900** | Apply Loops | `for r in range(1, m):` & `for c in range(1, n):` | Lines 26-27 typed; interior loops re-engaged. |
| **F2020** | OR Condition | `if matrix[r][0] == 0 or matrix[0][c] == 0:` | Line 28 typed; check rays query row/col markers. |
| **F2160** | Zero Mutation | `matrix[r][c] = 0` | Line 29 typed; interior cells flip to 0. |
| **F2250** | Interior Done | Interior Finalized Badge | Green status badge: INTERIOR FINALIZED. |
| **F2330** | Boundary Wait | Only Boundary Remains | Row 0 and Col 0 highlight pending finalization. |
| **F2390** | Finalize Row | `if firstRowZero:` | Line 31 typed; green beam from firstRowZero card. |
| **F2470** | Zero Row 0 | `matrix[0][c] = 0` | Lines 32-33 typed; Row 0 flips all to 0. |
| **F2540** | Finalize Col | `if firstColZero:` | Line 35 typed; green beam from firstColZero card. |
| **F2610** | Zero Col 0 | `matrix[r][0] = 0` | Lines 36-37 typed; Col 0 flips all to 0. |
| **F2700** | Solved | Complete Optimal Solution | Editor and fully solved matrix glow together. |
| **F2780** | Order Recap | 4 Pipeline Badges | [1. SAVE] [2. MARK] [3. APPLY] [4. FINALIZE] badges appear. |
| **F2820** | Step 1 Recap | Step 1 Highlight | Green bracket around lines 5-16. |
| **F2890** | Step 2 Recap | Step 2 Highlight | Cyan bracket around lines 18-23. |
| **F2950** | Step 3 Recap | Step 3 Highlight | Gold bracket around lines 25-29. |
| **F3010** | Step 4 Recap | Step 4 Highlight | Purple bracket around lines 31-37. |
| **F3100** | Warning | Danger: Order Change | Warning card: ORDER DEPENDENCE CAUTION. |
| **F3200** | Mastery | Markers Destroyed Warning & Outro | Marker loss explanation; O(1) Space Mastery badge. |

## QA Sign-Off Checklist
- [ ] No elements cut through array or matrix borders.
- [ ] Captions at Y: 960 have at least 150px vertical buffer to elements above (stages end at Y: 770).
- [ ] Progressive character-by-character typing matches exact word sync frames.
- [ ] Matrix visualizer cell states reflect exact code line execution.
- [ ] Remotion frame-derived determinism: 100% pure functions of `useCurrentFrame()`.
- [ ] Audio synchronization verified against `11-optimal-code.json`.
"""

with open(checklist_file, 'w', encoding='utf-8') as f:
    f.write(checklist_content)

print(f"Written QA checklist to {checklist_file}")
