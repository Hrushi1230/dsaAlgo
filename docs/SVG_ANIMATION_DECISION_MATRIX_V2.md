# SVG Animation Decision Matrix V2

| Situation | SVG class | Preferred mechanism | Do NOT |
|---|---|---|---|
| New directional relation appears | S1 DRAW_NEW | evolvePath + relation arrowhead | Fade whole arrow |
| Old relation becomes invalid | S2 ERASE_OLD | explicit reverse/retract + then new path | Morph into unrelated edge |
| Existing relation is retraced for teaching | S3 REDRAW_CONFIRM | short evolve/retrace overlay | Recreate state |
| Runner traverses stable chain | S4 TRACE_PATH | point/tangent marker over stable path | Redraw chain every time |
| Object must exactly follow route | S5 MOVE_ALONG_PATH | point/tangent sampling or existing BezierFlight | Treat object as stroke |
| One segment among many is active | S6 HIGHLIGHT_SEGMENT | overlay/highlight segment | Mutate base path |
| Arrow shaft + head | S7 COMPOUND_SEQUENCE | shaft then head | Global dash animation |
| Same edge reroutes with same topology | S8 MORPH_SAME_PATH | Phase 5 T3 + interpolatePath | Morph if topology changes |
| Different endpoints after linked-list insertion | S2 + S1 | erase old edge, draw new edges | One→two path morph |
| Dashed hypothetical relation draws in | S1 + mask | dashed visible path + evolving mask | Overwrite semantic dasharray |
| Rough.js chalk line draws | S1 | evolve exact generated path d | estimate length |
| Filled status region appears | T0/state reveal | opacity/fill state | strokeDash on fill |
| Arrow tracer travels along curved route | S4 | point + tangent | approximate angle |
| Static background bracket/grid | S0 | no animation | Animate for energy |
