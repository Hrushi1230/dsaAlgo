"""
build_s10_plan.py — Generates questions/01-arrays-hashing/013-set-matrix-zeroes/plans/10-optimal-trace_FRAMEWISE_PLAN.md
and 10-optimal-trace_FRAME_QA_CHECKLIST.md
"""
import json
from pathlib import Path

def main():
    anchors_path = Path("questions/01-arrays-hashing/013-set-matrix-zeroes/sync/10-optimal-trace.anchors.json")
    with open(anchors_path, "r", encoding="utf-8") as f:
        anchors = json.load(f)

    plan_lines = [
        "# Scene 10 — Method 3 Full Verified Dry-Run Trace: Framewise Scene Plan",
        "**Question 013: Set Matrix Zeroes (LeetCode 73)**  ",
        "**Pattern 01: Arrays & Hashing**  ",
        "**Scene Name:** `10-optimal-trace`  ",
        "**Audio File:** `10-optimal-trace.mp3`  ",
        "**Total Duration:** 7061 frames @ 30fps (235.360s)  ",
        "**Strict Source of Truth:** `questions/01-arrays-hashing/013-set-matrix-zeroes/sync/10-optimal-trace.json` & `sync/10-optimal-trace.anchors.json`  ",
        "",
        "---",
        "",
        "## 1. Scene Overview & Pedagogical Objective",
        "",
        "Scene 10 is the definitive, authoritative dry-run trace of the optimal $O(1)$ extra space algorithm on the 5×5 master matrix.",
        "Every single cell inspection, flag setting, marker write, boundary query, interior zeroing, and boundary finalization is shown in strict, unhurried pedagogical clarity across 5 phases:",
        "",
        "1. **Phase 1: Boundary History Scan & Protection (F0..F510)**",
        "   - Scan Row 0: `matrix[0][0]=1`, `matrix[0][1]=2`, `matrix[0][2]=0` found $\\rightarrow$ `firstRowZero = true`.",
        "   - Scan Col 0: `matrix[0][0]=1`, `matrix[1][0]=6`, `matrix[2][0]=0` found $\\rightarrow$ `firstColZero = true`.",
        "   - Both boundary history facts are secured in dedicated memory variables.",
        "",
        "2. **Phase 2: Interior Discovery Scan & Outward Projection (F510..F2350)**",
        "   - Row 0 and Col 0 transition into active marker memory.",
        "   - Interior $4 \\times 4$ region is scanned:",
        "     - Row 1: $(1,1)=7, (1,2)=8, (1,3)=9, (1,4)=10$ (no zero $\\rightarrow$ no marker writes).",
        "     - Row 2: $(2,1)=12, (2,2)=13, (2,3)=14, (2,4)=15$ (no interior zero; note `matrix[2][0]=0` already naturally marked row 2).",
        "     - Row 3: $(3,1)=17, (3,2)=18$, then $(3,3)=0$ discovered! Project outward: `matrix[3][0]` becomes $0$ (was $16$), `matrix[0][3]` becomes $0$ (was $4$). Scan $(3,4)=20$.",
        "     - Row 4: $(4,1)=22, (4,2)=23, (4,3)=24, (4,4)=25$ (no zeros).",
        "   - Discovery pass concludes with the intermediate marker matrix.",
        "",
        "3. **Phase 3: Boundary Memory Interpretation (F2350..F3290)**",
        "   - Col 0 reading: Row 1 has 6 (unmarked), Row 2 has 0 (zero!), Row 3 has 0 (zero!), Row 4 has 21 (unmarked).",
        "   - Row 0 reading: Col 1 has 2 (keep), Col 2 has 0 (zero!), Col 3 has 0 (zero!), Col 4 has 5 (keep).",
        "",
        "4. **Phase 4: Interior Inward Application Pass (F3290..F4850)**",
        "   - Row 1: $(1,1) \\rightarrow 7$ stays; $(1,2) \\rightarrow 8$ becomes $0$; $(1,3) \\rightarrow 9$ becomes $0$; $(1,4) \\rightarrow 10$ stays.",
        "   - Row 2: Row marker is 0 $\\rightarrow$ all interior cells become $0$.",
        "   - Row 3: Row marker is 0 $\\rightarrow$ all interior cells become $0$.",
        "   - Row 4: Row marker is 21; $(4,1) \\rightarrow 22$ stays; $(4,2) \\rightarrow 23$ becomes $0$; $(4,3) \\rightarrow 24$ becomes $0$; $(4,4) \\rightarrow 25$ stays.",
        "",
        "5. **Phase 5: Boundary Finalization & Space Confirmation (F4850..F7061)**",
        "   - Boundaries retire from marker duty.",
        "   - Reapply `firstRowZero = true` $\\rightarrow$ complete Row 0 becomes all $0$s.",
        "   - Reapply `firstColZero = true` $\\rightarrow$ complete Col 0 becomes all $0$s.",
        "   - Master matrix verified row-by-row.",
        "   - Triumphant banner: Correct result using $O(1)$ extra space!",
        "",
        "---",
        "",
        "## 2. Spatial Composition & Zero-Collision Invariants",
        "",
        "- **Canvas Dimensions:** 1920 × 1080.",
        "- **Background:** `theme.boardBg` (`#19523C`) dark green chalkboard with subtle chalk dust texture. Zero arbitrary AI cards.",
        "- **Top Header ($Y: 42..108$):**",
        "  - Left: Course badge `● 01 · ARRAYS & HASHING`, `METHOD 3: OPTIMAL TRACE` pill.",
        "  - Center: `OPTIMAL TRACE: MATRIX AS OWN MEMORY` (`fonts.display`, 26px, gold/chalk).",
        "  - Right: `LEETCODE 73` badge.",
        "- **Center Stage — Master 5×5 Matrix ($X: 750..1170$, $Y: 270..690$):**",
        "  - Cell size: $76\\text{px} \\times 76\\text{px}$, gap $10\\text{px}$, pitch $86\\text{px}$. Total matrix dimension: $420\\text{px} \\times 420\\text{px}$.",
        "  - Centered horizontally at $X = 960$.",
        "  - Row 0 boundary tag placed at $Y: 215..255$ above Row 0.",
        "  - Col 0 boundary tag placed at $X: 610..735$ to the left of Col 0.",
        "- **Right Zone — Saved History Flags ($X: 1240..1520$, $Y: 300..480$):**",
        "  - `firstRowZero` card: $X: 1250, Y: 310$, width $260\\text{px}$.",
        "  - `firstColZero` card: $X: 1250, Y: 400$, width $260\\text{px}$.",
        "- **Bottom Callout Zone ($X: 460..1460$, $Y: 760..860$):**",
        "  - Step explanation and operation banner with minimum $100\\text{px}$ clearance above captions at $Y: 960$.",
        "",
        "---",
        "",
        "## 3. Framewise Anchor Choreography (All 61 Anchors in 9-Field Schema)",
        ""
    ]

    beat_num = 1
    anchor_items = list(anchors.items())

    # Metadata for rich descriptions
    for i, (aid, a) in enumerate(anchor_items):
        sf = a["start_frame"]
        ef = a["end_frame"]
        # calculate hold to next anchor or end
        next_sf = anchor_items[i+1][1]["start_frame"] if i+1 < len(anchor_items) else 7061
        hold_range = f"F{ef}..F{next_sf}" if next_sf > ef else "Immediate transition"

        phrase = a["phrase"]
        note = a["note"]

        plan_lines.append(f"### BEAT {beat_num:02d} — Anchor `{aid}` [F{sf}..F{ef})")
        plan_lines.append(f"- **ANCHOR:** `{phrase}` ({a['start_word_id']}..{a['end_word_id']})")
        
        # Determine specific details based on anchor ID
        if aid == "S10_START":
            what_now = "Original 5x5 master matrix appears center stage with all original integer values intact (three original zeros at (0,2), (2,0), (3,3))."
            hero = "Untouched 5x5 Master Matrix."
            cause = "Narration introduces the execution on the original master matrix."
            effect = "Grid smoothly fades in at center; cells and index labels crisp."
            not_yet = "Do not show boolean flags or marker tags yet."
            exit_act = "Maintain master matrix center stage."
            state = "Original matrix displayed."
        elif aid.startswith("S10_FIRSTROW") or aid.startswith("S10_R0"):
            what_now = f"Row 0 focus active; scanning across Row 0 cells. {note}."
            hero = "Row 0 Boundary Scan."
            cause = "Checking original Row 0 for any zeros before it is repurposed as marker memory."
            effect = "Row 0 cells highlight with scan beam; active cell outlined in gold."
            not_yet = "Do not mutate any cell values."
            exit_act = "Keep scan focus moving along Row 0."
            state = "Row 0 inspection active."
        elif aid == "S10_FR_TRUE":
            what_now = "`firstRowZero` boolean badge materializes in right zone with value TRUE in vivid mint/green."
            hero = "`firstRowZero = true` Protection."
            cause = "Encountered zero at `matrix[0][2]`."
            effect = "`firstRowZero` badge slides in at (X: 1250, Y: 310) with glowing green border pulse."
            not_yet = "Do not inspect first column yet."
            exit_act = "`firstRowZero` badge persists in right zone."
            state = "firstRowZero = true locked."
        elif aid == "S10_SAFE1":
            what_now = "Callout badge `🛡️ FIRST ROW HISTORY SECURED` appears below flags."
            hero = "Secured Row 0 Fact."
            cause = "Row 0 history successfully recorded."
            effect = "Confirmation pulse around `firstRowZero` card."
            not_yet = "Col 0 scan not started yet."
            exit_act = "Fade temporary confirmation banner."
            state = "firstRowZero secured."
        elif aid.startswith("S10_FIRSTCOL") or aid.startswith("S10_C0"):
            what_now = f"Col 0 focus active; scanning down Col 0 cells. {note}."
            hero = "Col 0 Boundary Scan."
            cause = "Checking original Col 0 for any zeros before repurposing."
            effect = "Col 0 cells highlight with vertical scan beam; cell outlined in gold."
            not_yet = "Do not mutate any cell values."
            exit_act = "Keep scan focus moving down Col 0."
            state = "Col 0 inspection active."
        elif aid == "S10_FC_TRUE":
            what_now = "`firstColZero` boolean badge materializes below `firstRowZero` with value TRUE in vivid mint/green."
            hero = "`firstColZero = true` Protection."
            cause = "Encountered zero at `matrix[2][0]`."
            effect = "`firstColZero` badge slides in at (X: 1250, Y: 400) with glowing green border pulse."
            not_yet = "Do not start interior scan yet."
            exit_act = "`firstColZero` badge persists in right zone."
            state = "firstColZero = true locked."
        elif aid == "S10_BOTH_SAFE":
            what_now = "Both boolean cards pulse together with connected green halo; callout `🛡️ BOTH BOUNDARY HISTORIES PROTECTED`."
            hero = "Dual Boundary Protection."
            cause = "Prerequisite for optimal space algorithm fulfilled."
            effect = "Harmonious green aura across both flags."
            not_yet = "Do not repurpose boundaries yet."
            exit_act = "Clear callout."
            state = "Both flags secured."
        elif aid == "S10_USEBOUND":
            what_now = "`ROW MARKERS` cyan tag docks to left of Col 0; `COLUMN MARKERS` gold tag docks above Row 0."
            hero = "Boundary Role Transformation."
            cause = "Boundaries can now safely serve as in-place marker memory."
            effect = "Row 0 and Col 0 cell borders glow with role colors; role tags slide in."
            not_yet = "Interior scan not started yet."
            exit_act = "Maintain docked marker tags."
            state = "Boundaries act as marker storage."
        elif aid == "S10_INTERIOR_SCAN":
            what_now = "Interior $4 \\times 4$ region ($r: 1..4, c: 1..4$) glows with subtle chalk dashed boundary."
            hero = "Interior Scan Region."
            cause = "Only interior cells are scanned for zeros during discovery."
            effect = "Interior region softly brightens; boundaries stay locked as targets."
            not_yet = "Do not inspect specific rows yet."
            exit_act = "Interior boundary stays visible."
            state = "Interior active."
        elif "ROW1" in aid:
            what_now = f"Row 1 interior cells (7, 8, 9, 10) scan across. {note}."
            hero = "Row 1 Interior Scan."
            cause = "Checking Row 1 for zeros."
            effect = "Cells highlight sequentially; green check appears indicating no zeros."
            not_yet = "No marker writes to boundaries."
            exit_act = "Advance to Row 2."
            state = "Row 1 clean."
        elif "ROW2" in aid:
            what_now = f"Row 2 interior cells (12, 13, 14, 15) scan across. {note}."
            hero = "Row 2 Interior & Natural Marker."
            cause = "Checking Row 2; noticing `matrix[2][0]=0` already acts as marker naturally."
            effect = "Row 2 scans clean; cell `matrix[2][0]` pulses in cyan as already marked."
            not_yet = "No writes needed for Row 2."
            exit_act = "Advance to Row 3."
            state = "Row 2 naturally marked."
        elif aid in ["S10_ROW3_SCAN", "S10_ROW3_17_18"]:
            what_now = f"Row 3 interior scan: checking cells 17 and 18. {note}."
            hero = "Row 3 Discovery Scan."
            cause = "Scanning row 3 interior."
            effect = "Cells (3,1) and (3,2) highlight briefly as non-zero."
            not_yet = "Do not jump to (3,3) zero yet."
            exit_act = "Proceed to (3,3)."
            state = "Row 3 in progress."
        elif aid in ["S10_ROW3_ZERO", "S10_IMPORTANT_ZERO"]:
            what_now = "Interior zero at `matrix[3][3]` illuminates in warning gold with expanding radial radar ripple!"
            hero = "Critical Interior Zero at (3,3)."
            cause = "Interior zero discovered at row 3, column 3."
            effect = "Cell (3,3) pulses intensely; callout: `🚨 INTERIOR ZERO DISCOVERED AT (3,3)`."
            not_yet = "Do not write markers until spoken."
            exit_act = "Maintain focus on (3,3)."
            state = "Zero at (3,3) active."
        elif aid in ["S10_MARK_ROW", "S10_WRITE_M30"]:
            what_now = "Cyan projection ray shoots from (3,3) leftward to `matrix[3][0]`; value 16 morphs into 0!"
            hero = "Row Marker Write: matrix[3][0] = 0."
            cause = "Row 3 must be marked for zeroing."
            effect = "Cyan beam travels left; number 16 strikes through and 0 chalk text fades in with cyan glow."
            not_yet = "Column marker not written yet."
            exit_act = "Row marker write complete."
            state = "matrix[3][0] = 0."
        elif aid in ["S10_MARK_COL", "S10_WRITE_M03"]:
            what_now = "Gold projection ray shoots from (3,3) upward to `matrix[0][3]`; value 4 morphs into 0!"
            hero = "Column Marker Write: matrix[0][3] = 0."
            cause = "Column 3 must be marked for zeroing."
            effect = "Gold beam travels up; number 4 strikes through and 0 chalk text fades in with gold glow."
            not_yet = "Interior not mutated yet."
            exit_act = "Column marker write complete."
            state = "matrix[0][3] = 0."
        elif aid == "S10_SENT_INFO":
            what_now = "Both projection rays pulse gently connecting (3,3) to its boundary markers (3,0) and (0,3)."
            hero = "Information Projection Confirmed."
            cause = "Zero at (3,3) has safely recorded its coordinates in the boundary."
            effect = "Callout: `📡 ZERO INFORMATION SAFELY PROJECTED TO BOUNDARIES`."
            not_yet = "Do not resume scan yet."
            exit_act = "Fade projection rays."
            state = "Markers recorded."
        elif aid == "S10_ROW3_20":
            what_now = "Cell `matrix[3][4]=20` highlighted and confirmed non-zero."
            hero = "Cell (3,4) Scan."
            cause = "Completing Row 3 scan."
            effect = "Cell 20 pulses green."
            not_yet = "Row 4 not scanned yet."
            exit_act = "Proceed to Row 4."
            state = "Row 3 complete."
        elif aid == "S10_ROW4_SCAN":
            what_now = "Row 4 interior cells (22, 23, 24, 25) scan across; all confirmed non-zero."
            hero = "Row 4 Scan."
            cause = "Checking final interior row."
            effect = "Horizontal scan beam sweeps Row 4; green checks appear."
            not_yet = "Do not modify markers."
            exit_act = "Discovery pass ends."
            state = "Row 4 clean."
        elif aid == "S10_MARKER_STAGE":
            what_now = "Matrix state locks as the Intermediate Marker Matrix. All 5 rows shown clearly."
            hero = "Marker Matrix State."
            cause = "Discovery pass complete."
            effect = "Entire matrix glints; boundary marker cells (0,2), (0,3), (2,0), (3,0) highlighted."
            not_yet = "Do not zero interior cells yet."
            exit_act = "Prepare for boundary reading."
            state = "Marker matrix locked."
        elif aid == "S10_READ_BOUND":
            what_now = "Boundary cells light up as dedicated query registers; callout: `📖 READING BOUNDARIES AS MEMORY`."
            hero = "Boundary Memory Reading Phase."
            cause = "Transitioning to application pass."
            effect = "Cyan and gold boundary borders pulse in sequence."
            not_yet = "Do not update interior yet."
            exit_act = "Boundary reading begins."
            state = "Reading boundaries."
        elif aid.startswith("S10_FC_"):
            what_now = f"Reading Col 0 cell for row status: {note}."
            hero = f"Col 0 Inspection: {note}."
            cause = "Col 0 cells dictate which rows must become zero."
            effect = "Col 0 cell illuminates with indicator: KEEP (if non-zero) or ZERO ROW (if 0)."
            not_yet = "Interior row not zeroed yet."
            exit_act = "Proceed down Col 0."
            state = "Row marker verified."
        elif aid.startswith("S10_FR_"):
            what_now = f"Reading Row 0 cell for column status: {note}."
            hero = f"Row 0 Inspection: {note}."
            cause = "Row 0 cells dictate which columns must become zero."
            effect = "Row 0 cell illuminates with indicator: KEEP (if non-zero) or ZERO COL (if 0)."
            not_yet = "Interior column not zeroed yet."
            exit_act = "Proceed across Row 0."
            state = "Column marker verified."
        elif aid == "S10_APPLY_INTERIOR":
            what_now = "Direction reverses! Large inward arrows point from boundaries into the interior."
            hero = "Application Pass: Inward Decision."
            cause = "Interior cells now query their row & column markers."
            effect = "Inward flow arrows animate; callout: `🎯 INWARD PASS: CELLS QUERY (ROW_MARKER == 0 || COL_MARKER == 0)`."
            not_yet = "Do not zero all cells at once."
            exit_act = "Begin Row 1 application."
            state = "Inward pass active."
        elif aid.startswith("S10_APP_R1"):
            what_now = f"Row 1 interior cell evaluation: {note}."
            hero = f"Row 1 Application: {note}."
            cause = "Testing row marker (6) and col marker for each cell in Row 1."
            effect = "Query rays from left (6) and top markers hit active cell; cell value updates accordingly."
            not_yet = "Do not touch Row 2 yet."
            exit_act = "Advance to next cell."
            state = "Row 1 updated."
        elif aid == "S10_APP_R2":
            what_now = "Row 2 row marker is 0! Inward wave turns all Row 2 interior cells (12, 13, 14, 15) to 0 simultaneously."
            hero = "Row 2 Complete Zeroing."
            cause = "matrix[2][0] == 0 marks entire row."
            effect = "Cyan zeroing sweep washes across Row 2 interior; values flip to 0 in mint chalk."
            not_yet = "Row 3 not updated yet."
            exit_act = "Row 2 interior all zeroed."
            state = "Row 2 interior = 0."
        elif aid == "S10_APP_R3":
            what_now = "Row 3 row marker is 0! Inward wave turns all Row 3 interior cells (17, 18, 0, 20) to 0 simultaneously."
            hero = "Row 3 Complete Zeroing."
            cause = "matrix[3][0] == 0 marks entire row."
            effect = "Cyan zeroing sweep washes across Row 3 interior; values flip to 0 in mint chalk."
            not_yet = "Row 4 not updated yet."
            exit_act = "Row 3 interior all zeroed."
            state = "Row 3 interior = 0."
        elif aid.startswith("S10_APP_R4"):
            what_now = f"Row 4 interior cell evaluation: {note}."
            hero = f"Row 4 Application: {note}."
            cause = "Row marker is 21 (non-zero); only column markers trigger zeroing."
            effect = "Top column marker queries determine cell fate: 22 stays, 23->0, 24->0, 25 stays."
            not_yet = "Do not finalize boundaries yet."
            exit_act = "Advance through Row 4."
            state = "Row 4 updated."
        elif aid == "S10_INTERIOR_FINISHED":
            what_now = "Interior application pass complete! Matrix shows updated interior with boundary markers still intact."
            hero = "Interior Finished State."
            cause = "All interior cells (r:1..4, c:1..4) have been updated."
            effect = "Interior frame glows mint; boundary marker role tags begin to dim."
            not_yet = "Boundaries not finalized yet."
            exit_act = "Prepare for boundary finalization."
            state = "Interior complete."
        elif aid == "S10_MARKER_JOB_DONE":
            what_now = "`ROW MARKERS` and `COLUMN MARKERS` tags fade out gracefully; boundaries retire from marker role."
            hero = "Marker Job Concluded."
            cause = "Interior is fully updated; boundary markers are no longer needed."
            effect = "Marker role tags dissolve; boundaries return to normal cell styling."
            not_yet = "Do not zero Row 0 or Col 0 yet."
            exit_act = "Focus shifts to saved booleans."
            state = "Marker duty ended."
        elif aid in ["S10_FINALIZE_R0_CALL", "S10_FINALIZE_R0_EXEC"]:
            what_now = "`firstRowZero` card on right pulses intensely; golden beam shoots across Row 0 turning all 5 cells to 0!"
            hero = "Row 0 Finalization (firstRowZero = true)."
            cause = "Original Row 0 had a zero, recorded in firstRowZero."
            effect = "Row 0 cells (1, 2, 0, 0, 5) all flip to 0 in glowing mint chalk."
            not_yet = "Col 0 not finalized yet."
            exit_act = "Row 0 fully zeroed."
            state = "Row 0 = [0, 0, 0, 0, 0]."
        elif aid in ["S10_FINALIZE_C0_CALL", "S10_FINALIZE_C0_EXEC"]:
            what_now = "`firstColZero` card on right pulses intensely; cyan beam shoots down Col 0 turning all 5 cells to 0!"
            hero = "Col 0 Finalization (firstColZero = true)."
            cause = "Original Col 0 had a zero, recorded in firstColZero."
            effect = "Col 0 cells (0, 6, 0, 0, 21) all flip to 0 in glowing mint chalk."
            not_yet = "Do not show final summary banner yet."
            exit_act = "Col 0 fully zeroed."
            state = "Col 0 = [0, 0, 0, 0, 0]^T."
        elif aid == "S10_FINAL_MATRIX":
            what_now = "Entire final matrix shines in verified mint chalk; every cell confirmed row-by-row."
            hero = "Verified Final Matrix."
            cause = "Algorithm trace complete; matrix matches ground truth."
            effect = "Soft mint halo surrounds the 5x5 matrix."
            not_yet = "Do not show O(1) banner yet."
            exit_act = "Hold final matrix."
            state = "Final matrix verified."
        elif aid in ["S10_CORRECT_RESULT", "S10_O1_SPACE"]:
            what_now = "Triumphant banner: `✨ VERIFIED: CORRECT RESULT · O(1) EXTRA SPACE` in gold and mint!"
            hero = "Optimal Algorithm Triumph."
            cause = "All constraints and testcases successfully solved in constant extra memory."
            effect = "Celebratory chalk particle sparkles; banner springs up at center bottom."
            not_yet = "Scene ends naturally."
            exit_act = "Hold until scene completion at F7061."
            state = "Trace successfully completed."
        else:
            what_now = f"{note}."
            hero = f"{aid}."
            cause = "Narration progresses through optimal trace."
            effect = "State updates smoothly."
            not_yet = "No future states."
            exit_act = "Maintain visual continuity."
            state = "Trace in progress."

        plan_lines.append(f"- **WHAT APPEARS NOW:** {what_now}")
        plan_lines.append(f"- **CENTER-STAGE HERO:** {hero}")
        plan_lines.append(f"- **CAUSE:** {cause}")
        plan_lines.append(f"- **EFFECT / MOTION:** {effect}")
        plan_lines.append(f"- **WHAT MUST NOT APPEAR YET:** {not_yet}")
        plan_lines.append(f"- **COMPREHENSION HOLD:** {hold_range}")
        plan_lines.append(f"- **CLEANUP / EXIT:** {exit_act}")
        plan_lines.append(f"- **PERSISTENT STATE:** {state}")
        plan_lines.append("")
        beat_num += 1

    plan_lines.extend([
        "---",
        "",
        "## 4. Verification Checkpoints",
        "",
        "- Total Frames: 7061 frames @ 30fps = 235.36s.",
        "- Invariants Checked:",
        "  - Zero vertical collision between matrix bottom ($Y: 690$) and callout container ($Y: 760$).",
        "  - Minimum $100\\text{px}$ clearance between callouts ($Y: 860$) and bottom captions ($Y: 960$).",
        "  - No CSS transitions or wall-clock timestamps.",
        "  - All mutations strictly match locked algorithm truth."
    ])

    out_plan = Path("questions/01-arrays-hashing/013-set-matrix-zeroes/plans/10-optimal-trace_FRAMEWISE_PLAN.md")
    with open(out_plan, "w", encoding="utf-8") as f:
        f.write("\n".join(plan_lines))
    print("Successfully wrote", out_plan)

    # Now generate the QA checklist
    checklist_lines = [
        "# Scene 10 — Critical Frame QA Checklist",
        "**Question 013: Set Matrix Zeroes (LeetCode 73)**  ",
        "**Scene:** `10-optimal-trace` (Method 3 Full Verified Dry-Run Trace)  ",
        "**Total Duration:** 7061 frames @ 30fps (235.360s)  ",
        "",
        "## Critical Review Frames",
        "",
        "| Frame | Phase | Description | Invariant to Verify |",
        "|---|---|---|---|",
        "| **F30** | Phase 1 | Original untouched 5x5 matrix | Centered at X=960, Y=270..690. All 3 original zeros visible at (0,2), (2,0), (3,3). No flags yet. |",
        "| **F260** | Phase 1 | Row 0 zero discovered at (0,2) | Cell (0,2) highlighted in gold scan; scan beam on Row 0. |",
        "| **F340** | Phase 1 | `firstRowZero = true` | Right-side badge appears at (X: 1250, Y: 310) with glowing green border. |",
        "| **F720** | Phase 1 | Col 0 zero discovered at (2,0) | Cell (2,0) highlighted in gold scan down Col 0. |",
        "| **F820** | Phase 1 | `firstColZero = true` | Right-side badge appears at (X: 1250, Y: 400) with glowing green border. |",
        "| **F920** | Phase 1 | Both flags protected | Both boolean badges active; halo effect; callout visible. |",
        "| **F1000** | Phase 2 | Boundary role transformation | Cyan `ROW MARKERS` on left, Gold `COLUMN MARKERS` on top. |",
        "| **F1100** | Phase 2 | Interior scan begins | Interior $4 \\times 4$ box outlined; Row 1 scanned clean. |",
        "| **F1400** | Phase 2 | Row 2 naturally marked | Cell (2,0) highlighted as already marked; interior clean. |",
        "| **F1650** | Phase 2 | Interior zero at (3,3) discovered | Cell (3,3) pulses with warning radar ripple; hero focus. |",
        "| **F1850** | Phase 2 | Row marker write: `matrix[3][0]=0` | Cyan ray from (3,3) to (3,0); 16 morphs into 0. |",
        "| **F2050** | Phase 2 | Col marker write: `matrix[0][3]=0` | Gold ray from (3,3) to (0,3); 4 morphs into 0. |",
        "| **F2300** | Phase 2 | Discovery pass complete | Intermediate marker matrix locked; Row 4 clean. |",
        "| **F2600** | Phase 3 | Boundary reading: Col 0 | Col 0 cells inspected as row markers. |",
        "| **F3100** | Phase 3 | Boundary reading: Row 0 | Row 0 cells inspected as column markers. |",
        "| **F3500** | Phase 4 | Inward application pass starts | Inward arrows point into interior. |",
        "| **F3900** | Phase 4 | Row 1 interior updated | Cell (1,2) becomes 0, (1,3) becomes 0; 7 and 10 stay. |",
        "| **F4300** | Phase 4 | Row 2 & 3 interior zeroed | All cells in rows 2 & 3 become 0. |",
        "| **F4700** | Phase 4 | Row 4 interior updated | (4,2) and (4,3) become 0; 22 and 25 stay. |",
        "| **F5000** | Phase 5 | Marker job retired | Boundary role tags dissolve; ready for finalization. |",
        "| **F5500** | Phase 5 | Row 0 finalized | Row 0 all flips to 0 via `firstRowZero = true`. |",
        "| **F6100** | Phase 5 | Col 0 finalized | Col 0 all flips to 0 via `firstColZero = true`. |",
        "| **F6700** | Phase 5 | Final matrix read-through | Complete verified master matrix displayed. |",
        "| **F7000** | Phase 5 | Outro triumph banner | `O(1) EXTRA SPACE` celebratory banner centered. |",
        "",
        "## QA Sign-Off Checklist",
        "- [ ] No elements cut through array or matrix borders.",
        "- [ ] Captions at Y: 960 have at least 100px vertical buffer to elements above.",
        "- [ ] All cell value transitions match the verified algorithm trace.",
        "- [ ] Remotion frame-derived determinism: 100% pure functions of `useCurrentFrame()`.",
        "- [ ] Audio synchronization verified against `10-optimal-trace.json`."
    ]

    out_checklist = Path("questions/01-arrays-hashing/013-set-matrix-zeroes/plans/10-optimal-trace_FRAME_QA_CHECKLIST.md")
    with open(out_checklist, "w", encoding="utf-8") as f:
        f.write("\n".join(checklist_lines))
    print("Successfully wrote", out_checklist)

if __name__ == "__main__":
    main()
