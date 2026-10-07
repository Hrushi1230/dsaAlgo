import json

with open('questions/01-arrays-hashing/014-rotate-image/sync/06-method2-trace.anchors.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

anchors = data['anchors']

lines = []
lines.append("# Scene 06 Frame QA Checklist: Method 2 Trace (Concentric Rings & 4-Way Swaps)")
lines.append("")
lines.append("> **Question 14**: Rotate Image (LeetCode 48) · Pattern 01 (Arrays & Hashing)")
lines.append("> **Scene**: 06 · `06-method2-trace`")
lines.append("> **Audio Duration**: 246.200s (7,386 frames @ 30fps)")
lines.append("> **Checkpoints**: 26 framewise checkpoints")
lines.append("")
lines.append("---")
lines.append("")
lines.append("## Verification Checkpoints")
lines.append("")

for i, (anchor_id, d) in enumerate(anchors.items(), 1):
    mid_frame = (d['start_frame'] + d['end_frame']) // 2
    sf = d['start_frame']
    ef = d['end_frame']
    phrase = d['phrase']
    note = d['note']
    lines.append(f"### Checkpoint {i:02d}: `{anchor_id}` (Target Frame: {mid_frame}, Range: {sf}..{ef})")
    lines.append(f"- **Spoken Anchor**: *\"{phrase}\"*")
    lines.append(f"- **Key Fact / State**: {note}")
    lines.append(f"- **Visual Layout Criteria**:")
    lines.append(f"  - [ ] 5×5 Matrix is centered at X: 764, Y: 215.")
    lines.append(f"  - [ ] Top zone (Y: 36..105) contains only clean metadata badges.")
    lines.append(f"  - [ ] Left stage contains active cycle info / temp box without overlapping matrix.")
    lines.append(f"  - [ ] Right stage contains layer hierarchy without overlapping matrix.")
    lines.append(f"  - [ ] Digits inside cells are 100% crisp with zero lines cutting through numbers.")
    lines.append(f"  - [ ] Captions at Y: 960..1010 have >= 195px clearance above them.")
    lines.append(f"- **Status**: PENDING VERIFICATION")
    lines.append("")

with open('questions/01-arrays-hashing/014-rotate-image/plans/06-method2-trace_FRAME_QA_CHECKLIST.md', 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

print("Created questions/01-arrays-hashing/014-rotate-image/plans/06-method2-trace_FRAME_QA_CHECKLIST.md successfully!")
