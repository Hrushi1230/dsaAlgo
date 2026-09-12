# CODE WITH ANIMATION — 10s Japanese Intro
## One-Shot · Exact 300-Frame Motion / SVG / Camera / SFX Production Plan

**Format:** 1920×1080 · 30fps · 300 rendered frames (`F000–F299`) · 10.0 sec  
**Shot rule:** **ONE CONTINUOUS SHOT. ZERO HARD CUTS.** The viewer stays on the same animation-production sheet from the first paper fiber until the sheet physically lifts away and reveals the lesson underneath.  
**Style lock:** Japanese genga → clean-up → graphic motion; warm washi, blue pencil, indigo ink, vermilion paint; no green, no black, no generic tech particles, no random zooms.

## 1. Non-negotiable motion grammar

1. **One idea at a time.** A state changes, then movement happens, then it settles.
2. **Fixed geometry.** Array slots, title anchors, stamp anchor and subtitle baseline are absolute coordinates; never flex-shift.
3. **30fps object motion + 15fps contour boil.** A/B/C/D hand-drawn SVG variants swap every 2 frames while transforms remain smooth at 30fps.
4. **No opacity-only reveals for hero graphics.** Use path drawing, shared-element morphs, paint mattes and physical sheet motion.
5. **Camera moves only for meaning.** Push in for code/cleanup, pull back for typography construction and brand reveal, then lock for the final transition.
6. **No hard cut to the lesson.** The Japanese production sheet itself becomes the transition mask.
7. **All randomness is seeded/deterministic.** No `Math.random()` in render code.

## 2. Final stage geometry

| Element | Final optical position |
|---|---|
| Paper/world | `1920×1080`, center `(960,540)` |
| Production grid safe area | `x=80..1840`, `y=70..1010` |
| Rough/clean array | 8 fixed slots, start `x=519`, cell step `112`, center `y≈520` |
| Pointer lane | `y≈410`, directly over array |
| `CODE` | centered `x=960`, baseline `y≈388` |
| `WITH` | centered under/alongside CODE, visual center `y≈445` |
| `ANIMATION` | centered `x=960`, baseline `y≈558` |
| Enso | center `(960,520)`, approx `640–700px` diameter |
| Subtitle | center `x=960`, baseline `y≈708` |
| CWA hanko | center approx `(1288,692)` |
| Paper exit edge | horizontal boundary traveling `y=1080→0` as sheet lifts |

## 3. Asset → animation mechanism

| Assets | Role | Real animation |
|---|---|---|
| `01–04` | paper/fiber/graphite/dry-ink | raster material layers only; opacity/parallax ≤ 1px |
| `05–08` | brush slash A–D | inline SVG path draw + A/B/C/D line boil + drybrush texture matte |
| `09–12` | enso A–D | `evolvePath()` path draw + 2-frame variant swap; never close the circle |
| `13–16` | underline A–D | path draw + line boil; reused as WITH gesture construction language |
| `17–20` | arrow A–D | smooth Bezier translation at 30fps + contour swap every 2f |
| `21` | peg registration | stroke-dash draw-on |
| `22` | crop marks | corners draw inward, then stay faint |
| `23` | blue-pencil grid | 6–10% opacity production reference; fades after cleanup |
| `24` | timing ticks | sequential SVG draw; faint only |
| `25` | frame-note arrows | production annotation, path draw + short line boil |
| `26` | vermilion cel paint | raster painted body traveling left→right |
| `27` | vermilion edge mask | alpha/luma matte controlling irregular reveal boundary |
| `28` | indigo drybrush | texture matte clipped inside brush/enso SVG |
| `29` | clean CWA hanko | final settled seal |
| `30` | rough CWA hanko | physical stamp-impact frame before clean-up |
| `31` | paper sheet edge | textured physical edge riding final sheet-lift mask |

### Critical implementation note

For SVG draw/morph, **do not render the SVGs as plain `<Img>` elements**. Import/convert them to React SVG components (or export their `d` strings) so Remotion can control each `<path>`.

Use:
```ts
const {strokeDasharray, strokeDashoffset} = evolvePath(progress, pathD);
const d = interpolatePath(progress, fromPath, toPath);
const boilIndex = Math.floor(frame / 2) % 4;
```

A/B/C/D variants are **swapped**, not morphed. Shared-element geometry such as array-edge → letter-stroke is **morphed** with topology-compatible procedural paths.

## 4. Camera rig — one continuous camera

Apply a single parent transform to the paper-world:
```ts
transform:
  translate3d(camX, camY, 0)
  scale(camScale)
  rotate(camRot)
```
Use cubic-bezier-like easing `0.16, 1, 0.3, 1`. Never spring the camera.

| Range | Scale | X | Y | Rotation | Why |
|---|---:|---:|---:|---:|---|
| F000–023 | 1.000 | 0 | 0 | 0° | Still production sheet / ma |
| F024–035 | 1.000→1.028 | 0→+12 | 0→−8 | 0→−0.18° | Follow brush attack without a cut |
| F036–051 | 1.028→1.018 | +12→+6 | −8→−6 | −0.18→−0.08° | Settle around code marks |
| F052–083 | 1.018→1.050 | +6→0 | −6→+8 | →0° | Array becomes center-stage hero |
| F084–103 | 1.050→1.070 | 0→+18 | +8→+2 | 0° | Follow clean-up sweep left→right |
| F104–115 | 1.070→1.060 | +18→0 | +2→0 | 0° | Cleanup settles |
| F116–149 | 1.060→1.000 | 0 | 0→−8 | 0° | Pull back to give shards room |
| F150–167 | 1.000→1.045 | 0 | −8 | 0° | Push into CODE construction |
| F168–207 | 1.045→1.030 | 0 | −8→0 | 0° | WITH resolves |
| F208–245 | 1.030→0.970 | 0 | 0→+6 | 0° | Pull back for complete brand + enso |
| F246–269 | 0.970→1.000 | 0 | +6→0 | 0° | Final identity settles |
| F270–285 | 1.000 | 0 | 0 | 0° | Stamp impact only; camera refuses to react |
| F286–299 | 1.000 | 0 | 0 | 0° | Transition is paper motion, not camera motion |

## 5. SFX + sonic-logo cue sheet

**Mix principle:** tactile, dry, intimate. No EDM rise, no cyber glitch, no stock “technology” whoosh. Keep transients short so the animation stays premium.

| Frame | Time | SFX | Mix / purpose |
|---|---:|---|---|
| F000 | 0.00s | `paper-roomtone.wav` | −31 dB loop, almost subliminal paper/room air |
| F008 | 0.27s | `pencil-contact.wav` | −22 dB, pencil touches sheet |
| F009–016 | 0.30–0.53s | `pencil-scratch-short.wav` | −27 dB, follows registration SVG draw |
| F016 | 0.53s | `pencil-flick.wav` | −25 dB, tiny animator-arrow gesture |
| F024 | 0.80s | `indigo-brush-rip.wav` | −12 dB hero transient, 0.35–0.45s |
| F036 | 1.20s | `graphite-reveal.wav` | −24 dB |
| F044 | 1.47s | `wood-tick-soft.wav` | −23 dB, bracket geometry changes |
| F052–059 | 1.73–1.97s | `cell-pencil-tick.wav` | −31 dB each, very restrained sequential ticks |
| F060 | 2.00s | `red-pencil-tap.wav` | −21 dB |
| F064/F068/F072/F076 | 2.13/2.27/2.40/2.53s | `pointer-tick.wav` | −27 dB each |
| F084 | 2.80s | `cleanup-pencil-bed.wav` | −26 dB, 0.65s textured sweep |
| F104 | 3.47s | `ink-clean-lock.wav` | −24 dB |
| F120 | 4.00s | `segment-release.wav` | −25 dB, not an explosion |
| F136–149 | 4.53–4.97s | `paper-vector-whoosh.wav` | −18 dB, short layered air movement |
| F150/F154/F158/F162 | 5.00/5.13/5.27/5.40s | `type-lock.wav` | −25 dB, four quiet construction locks |
| F168 | 5.60s | `pencil-line-start.wav` | −26 dB |
| F180–198 | 6.00–6.60s | `brush-pen-write.wav` | −25 dB continuous WITH gesture |
| F198 | 6.60s | `clean-resolve.wav` | −27 dB, soft tonal click |
| F212 | 7.07s | `vermilion-gouache-swash.wav` | −11 dB second hero transient |
| F232–244 | 7.73–8.13s | `enso-brush-circle.wav` | −21 dB, follows open-circle arc |
| F246–269 | 8.20–8.97s | **intentional near-silence** | preserve `ma`; room tone only |
| F270 | 9.00s | `hanko-hit.wav` | −9 dB, dry low-mid stamp |
| F273 | 9.10s | `paper-dust-puff.wav` | −26 dB |
| F286 | 9.53s | `pencil-transition.wav` | −23 dB |
| F289 | 9.63s | `paper-cut-swish.wav` | −17 dB |
| F292–299 | 9.73–9.97s | `paper-sheet-lift.wav` | −15 dB, ends exactly into lesson |

### Optional 3-note sonic logo
Use three subtle tuned percussion notes only:
- **F024**: low note, brush attack
- **F150**: middle note, `CODE` construction
- **F270**: high/final note layered under hanko

Do not use obvious shamisen/koto clichés. The Japanese identity comes from drawing grammar, paper, timing, negative space and production aesthetics—not stereotype instrumentation.

## 6. Master 300-frame choreography

| Range | Beat | Assets | Motion | Camera | SFX |
|---|---|---|---|---|---|
| F000–007 | Paper establishes | 01–04 | Washi/fiber/grain resolve; nothing branded | Locked | room tone |
| F008–015 | Registration draw | 21,22 | SVG stroke draw from corners/peg marks | Locked | pencil contact/scratch |
| F016–023 | Animator note / ma | 23,24,25 | Arrow line-boil A/B/C/D; grid/ticks faint | Locked | pencil flick |
| F024–035 | Brush attack | 05–08,28 | Path draw + variant swap + Trail + drybrush matte | Push 1.028 | brush rip |
| F036–043 | Code marks | procedural | [ i ] revealed under ink | Settle | graphite reveal |
| F044–051 | Code→cell geometry | procedural | bracket paths rotate/morph into first cell edges | Settle | soft wood tick |
| F052–059 | 8-cell rough array | procedural | fixed slots populate sequentially | Push 1.05 | tiny cell ticks |
| F060–079 | Pointer trace | 17–20 | smooth Bezier translation + 15fps line boil | Hold 1.05 | red-pencil taps |
| F080–083 | Trace freeze | 17–20 | no state changes; contour breath only | Hold | silence |
| F084–103 | Genga→cleanup | 23,25 + procedural clean array | clean vector traces over rough | Push/follow +18px | cleanup pencil bed |
| F104–115 | Cleanup settle | 23,25 | notes fade; rough layer 18%→0 | Settle | clean lock |
| F116–135 | Detach array edges | procedural segments | predetermined segment detachment | Pull back | segment releases |
| F136–149 | Shards→CODE scaffold | procedural paths | Bezier flights + motion blur, no randomness | Pull to 1.0 | vector whoosh |
| F150–167 | CODE constructs | procedural + 13–16 accent language | C→O→D→E rough→clean | Push 1.045 | four type locks |
| F168–179 | CODE hold | 13–16 | underline + →motion note then erase | Hold | pencil line |
| F180–197 | WITH gesture | 13–16 | single continuous hand-drawn connector line | Settle | brush-pen write |
| F198–207 | WITH cleanup | procedural type | clean type overlays rough then rough vanishes | Settle | clean resolve |
| F208–211 | Open hero band | 01–04 | negative-space preparation | Pull begins | silence |
| F212–225 | ANIMATION paint reveal | 26,27 | paint travels; title visibility tied to matte edge | Pull 0.985 | gouache swash |
| F226–231 | Paint separates | 26 | paint breaks into 3 subtle streak layers | Pull | paint tail |
| F232–243 | Enso draw | 09–12,28 | path draw + line boil + drybrush matte | Pull 0.97 | enso brush |
| F244–245 | Enso settle | 09–12 | open gap holds | Hold | silence |
| F246–257 | Subtitle reveal | 22,23 | mask reveal only | Settle 1.0 | near-silence |
| F258–269 | Final brand ma | all final layers | absolute readability hold | Locked | room tone |
| F270–275 | Hanko impact | 30 | rough stamp hit/compress + dust | Locked | hanko hit |
| F276–285 | Hanko cleanup | 29 | rough→clean shared-position resolve | Locked | dust decay |
| F286–291 | Paper-cut setup | 31 + procedural line | blue-pencil line becomes mask boundary | Locked | pencil + cut swish |
| F292–299 | Sheet lift→lesson | 31 | entire paper world exits upward; lesson fixed beneath | Locked | paper lift |

## 7. Full per-frame execution — F000–F299

> This section is intentionally literal. Use it as the implementation/QA checklist. `Camera` values are the one-shot parent transform targets/interpolated state for that frame.

| Frame | Beat | Exact visual / SVG action | Camera | SFX event |
|---:|---|---|---|---|
| **F000** | Paper establishes | Washi sheet only. Opacity 96%; fibers 0%; graphite 0%. No logo, no title. | `S1.000 · X+0 · Y+0 · R+0.00°` | room tone begins |
| **F001** | Paper establishes | Hold paper; fibers rise toward 0.6% and graphite toward 0.4%. No object motion. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F002** | Paper establishes | Hold paper; fibers rise toward 1.1% and graphite toward 0.7%. No object motion. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F003** | Paper establishes | Hold paper; fibers rise toward 1.7% and graphite toward 1.1%. No object motion. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F004** | Paper establishes | Hold paper; fibers rise toward 2.3% and graphite toward 1.4%. No object motion. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F005** | Paper establishes | Hold paper; fibers rise toward 2.9% and graphite toward 1.8%. No object motion. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F006** | Paper establishes | Hold paper; fibers rise toward 3.4% and graphite toward 2.1%. No object motion. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F007** | Paper establishes | Hold paper; fibers rise toward 4% and graphite toward 2.5%. No object motion. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F008** | Registration draws | Start SVG draw of 21 peg-registration and the central registration point; pencil contact begins. | `S1.000 · X+0 · Y+0 · R+0.00°` | pencil contact |
| **F009** | Registration draws | Continue production-mark draw: peg/crosshair 14% complete; 22 crop marks reveal from corners inward. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F010** | Registration draws | Continue production-mark draw: peg/crosshair 29% complete; 22 crop marks reveal from corners inward. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F011** | Registration draws | Continue production-mark draw: peg/crosshair 43% complete; 22 crop marks reveal from corners inward. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F012** | Registration draws | Continue production-mark draw: peg/crosshair 57% complete; 22 crop marks reveal from corners inward. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F013** | Registration draws | Continue production-mark draw: peg/crosshair 71% complete; 22 crop marks reveal from corners inward. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F014** | Registration draws | Continue production-mark draw: peg/crosshair 86% complete; 22 crop marks reveal from corners inward. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F015** | Registration draws | Continue production-mark draw: peg/crosshair 100% complete; 22 crop marks reveal from corners inward. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F016** | Animator arrow / ma | Introduce 25 frame-note arrow using variant A; 23 blue-pencil grid appears only at 7% opacity. | `S1.000 · X+0 · Y+0 · R+0.00°` | pencil flick |
| **F017** | Animator arrow / ma | Arrow line-boil variant A; hold geometry. Timing ticks 24 at 40% visual opacity; no camera cut. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F018** | Animator arrow / ma | Arrow line-boil variant B; hold geometry. Timing ticks 24 at 40% visual opacity; no camera cut. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F019** | Animator arrow / ma | Arrow line-boil variant B; hold geometry. Timing ticks 24 at 40% visual opacity; no camera cut. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F020** | Animator arrow / ma | Arrow line-boil variant C; hold geometry. Timing ticks 24 at 40% visual opacity; no camera cut. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F021** | Animator arrow / ma | Arrow line-boil variant C; hold geometry. Timing ticks 24 at 28% visual opacity; no camera cut. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F022** | Animator arrow / ma | Arrow line-boil variant D; hold geometry. Timing ticks 24 at 28% visual opacity; no camera cut. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F023** | Animator arrow / ma | Arrow line-boil variant D; hold geometry. Timing ticks 24 at 28% visual opacity; no camera cut. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F024** | Indigo brush slash | Brush attack: 05 brush-slash-A begins at x=245,y=420, rotate -11°. Path draw 0→1 starts; Trail enabled. | `S1.001 · X+0 · Y-0 · R-0.00°` | brush rip |
| **F025** | Indigo brush slash | Brush slash variant A; path progress 9%; 28 drybrush masks the stroke; tail opacity decays behind leading edge. | `S1.002 · X+1 · Y-1 · R-0.01°` | — |
| **F026** | Indigo brush slash | Brush slash variant B; path progress 18%; 28 drybrush masks the stroke; tail opacity decays behind leading edge. | `S1.004 · X+2 · Y-1 · R-0.03°` | — |
| **F027** | Indigo brush slash | Brush slash variant B; path progress 27%; 28 drybrush masks the stroke; tail opacity decays behind leading edge. | `S1.007 · X+3 · Y-2 · R-0.05°` | — |
| **F028** | Indigo brush slash | Brush slash variant C; path progress 36%; 28 drybrush masks the stroke; tail opacity decays behind leading edge. | `S1.011 · X+5 · Y-3 · R-0.07°` | — |
| **F029** | Indigo brush slash | Brush slash variant C; path progress 45%; 28 drybrush masks the stroke; tail opacity decays behind leading edge. | `S1.014 · X+6 · Y-4 · R-0.09°` | — |
| **F030** | Indigo brush slash | Brush slash variant D; path progress 55%; 28 drybrush masks the stroke; tail opacity decays behind leading edge. | `S1.017 · X+7 · Y-5 · R-0.11°` | — |
| **F031** | Indigo brush slash | Brush slash variant D; path progress 64%; 28 drybrush masks the stroke; tail opacity decays behind leading edge. | `S1.021 · X+9 · Y-6 · R-0.13°` | — |
| **F032** | Indigo brush slash | Brush slash variant A; path progress 73%; 28 drybrush masks the stroke; tail opacity decays behind leading edge. | `S1.024 · X+10 · Y-7 · R-0.15°` | — |
| **F033** | Indigo brush slash | Brush slash variant A; path progress 82%; 28 drybrush masks the stroke; tail opacity decays behind leading edge. | `S1.026 · X+11 · Y-7 · R-0.17°` | — |
| **F034** | Indigo brush slash | Brush slash variant B; path progress 91%; 28 drybrush masks the stroke; tail opacity decays behind leading edge. | `S1.027 · X+12 · Y-8 · R-0.18°` | — |
| **F035** | Indigo brush slash | Brush slash variant B; path progress 100%; 28 drybrush masks the stroke; tail opacity decays behind leading edge. | `S1.028 · X+12 · Y-8 · R-0.18°` | — |
| **F036** | Code marks reveal | Reveal procedural '[' beneath the ink as blue-pencil line, 0→35% draw. | `S1.028 · X+12 · Y-8 · R-0.18°` | graphite reveal |
| **F037** | Code marks reveal | Complete '[' to 70%; keep 'i' hidden. | `S1.028 · X+12 · Y-8 · R-0.18°` | — |
| **F038** | Code marks reveal | Finish '['; start handwritten 'i' stem. | `S1.027 · X+11 · Y-8 · R-0.17°` | — |
| **F039** | Code marks reveal | Finish 'i' stem; dot appears with 2-frame graphite pop. | `S1.026 · X+11 · Y-8 · R-0.16°` | — |
| **F040** | Code marks reveal | Start procedural ']' path at 0→40%. | `S1.026 · X+11 · Y-8 · R-0.16°` | — |
| **F041** | Code marks reveal | ']' reaches 75%; brush slash dims to 72%. | `S1.025 · X+10 · Y-7 · R-0.15°` | — |
| **F042** | Code marks reveal | ']' completes; code group optically centered at x=960,y=502. | `S1.024 · X+10 · Y-7 · R-0.14°` | — |
| **F043** | Code marks reveal | One-frame comprehension hold; code marks stable. | `S1.023 · X+9 · Y-7 · R-0.13°` | — |
| **F044** | Brackets morph to cell geometry | Begin bracket-to-cell-edge morph. '[' top arm rotates +18°; ']' top arm rotates -18°. | `S1.022 · X+8 · Y-7 · R-0.12°` | soft wood tick |
| **F045** | Brackets morph to cell geometry | Continue shared-element morph 14%: bracket strokes become first array border segments; 'i' drops toward index baseline. | `S1.021 · X+8 · Y-7 · R-0.11°` | — |
| **F046** | Brackets morph to cell geometry | Continue shared-element morph 29%: bracket strokes become first array border segments; 'i' drops toward index baseline. | `S1.020 · X+7 · Y-6 · R-0.10°` | — |
| **F047** | Brackets morph to cell geometry | Continue shared-element morph 43%: bracket strokes become first array border segments; 'i' drops toward index baseline. | `S1.020 · X+7 · Y-6 · R-0.10°` | — |
| **F048** | Brackets morph to cell geometry | Continue shared-element morph 57%: bracket strokes become first array border segments; 'i' drops toward index baseline. | `S1.019 · X+7 · Y-6 · R-0.09°` | — |
| **F049** | Brackets morph to cell geometry | Continue shared-element morph 71%: bracket strokes become first array border segments; 'i' drops toward index baseline. | `S1.018 · X+6 · Y-6 · R-0.08°` | — |
| **F050** | Brackets morph to cell geometry | Continue shared-element morph 86%: bracket strokes become first array border segments; 'i' drops toward index baseline. | `S1.018 · X+6 · Y-6 · R-0.08°` | — |
| **F051** | Brackets morph to cell geometry | Continue shared-element morph 100%: bracket strokes become first array border segments; 'i' drops toward index baseline. | `S1.018 · X+6 · Y-6 · R-0.08°` | — |
| **F052** | 8-cell rough array builds | Build rough array cell 0 in fixed slot x=519; draw outline from 0→100% this frame pair; previous cells remain fixed. | `S1.019 · X+6 · Y-6 · R-0.08°` | cell tick |
| **F053** | 8-cell rough array builds | Build rough array cell 1 in fixed slot x=631; draw outline from 0→100% this frame pair; previous cells remain fixed. | `S1.020 · X+6 · Y-5 · R-0.07°` | cell tick |
| **F054** | 8-cell rough array builds | Build rough array cell 2 in fixed slot x=743; draw outline from 0→100% this frame pair; previous cells remain fixed. | `S1.023 · X+5 · Y-4 · R-0.07°` | cell tick |
| **F055** | 8-cell rough array builds | Build rough array cell 3 in fixed slot x=855; draw outline from 0→100% this frame pair; previous cells remain fixed. | `S1.026 · X+4 · Y-2 · R-0.06°` | cell tick |
| **F056** | 8-cell rough array builds | Build rough array cell 4 in fixed slot x=967; draw outline from 0→100% this frame pair; previous cells remain fixed. | `S1.030 · X+4 · Y-1 · R-0.05°` | cell tick |
| **F057** | 8-cell rough array builds | Build rough array cell 5 in fixed slot x=1079; draw outline from 0→100% this frame pair; previous cells remain fixed. | `S1.034 · X+3 · Y+1 · R-0.04°` | cell tick |
| **F058** | 8-cell rough array builds | Build rough array cell 6 in fixed slot x=1191; draw outline from 0→100% this frame pair; previous cells remain fixed. | `S1.038 · X+2 · Y+3 · R-0.03°` | cell tick |
| **F059** | 8-cell rough array builds | Build rough array cell 7 in fixed slot x=1303; draw outline from 0→100% this frame pair; previous cells remain fixed. | `S1.042 · X+2 · Y+4 · R-0.02°` | cell tick |
| **F060** | Pointer establishes i0 | Red-pencil pointer appears above cell 0 at x=568,y=410; small 'i=0' note appears below array. | `S1.045 · X+1 · Y+6 · R-0.01°` | red-pencil tap |
| **F061** | Pointer establishes i0 | Pointer compresses 0.96→1.00; array unchanged. | `S1.048 · X+0 · Y+7 · R-0.01°` | — |
| **F062** | Pointer establishes i0 | Pointer line-boil switches to arrow variant B; tiny red tick lands on index 0. | `S1.049 · X+0 · Y+8 · R-0.00°` | — |
| **F063** | Pointer establishes i0 | Hold pointer at index 0; prepare movement lane. | `S1.050 · X+0 · Y+8 · R+0.00°` | — |
| **F064** | Pointer trace 0→1→2→3 | Pointer travels index 0→1 along shallow Bezier arc; progress 0%; arrow variants line-boil every 2f. | `S1.050 · X+0 · Y+8 · R+0.00°` | pointer tick |
| **F065** | Pointer trace 0→1→2→3 | Pointer travels index 0→1 along shallow Bezier arc; progress 33%; arrow variants line-boil every 2f. | `S1.050 · X+0 · Y+8 · R+0.00°` | — |
| **F066** | Pointer trace 0→1→2→3 | Pointer travels index 0→1 along shallow Bezier arc; progress 67%; arrow variants line-boil every 2f. | `S1.050 · X+0 · Y+8 · R+0.00°` | — |
| **F067** | Pointer trace 0→1→2→3 | Pointer travels index 0→1 along shallow Bezier arc; progress 100%; arrow variants line-boil every 2f. | `S1.050 · X+0 · Y+8 · R+0.00°` | — |
| **F068** | Pointer trace 0→1→2→3 | Pointer travels index 1→2; progress 0%; 'i++' updates only after pointer settles. | `S1.050 · X+0 · Y+8 · R+0.00°` | pointer tick |
| **F069** | Pointer trace 0→1→2→3 | Pointer travels index 1→2; progress 33%; 'i++' updates only after pointer settles. | `S1.050 · X+0 · Y+8 · R+0.00°` | — |
| **F070** | Pointer trace 0→1→2→3 | Pointer travels index 1→2; progress 67%; 'i++' updates only after pointer settles. | `S1.050 · X+0 · Y+8 · R+0.00°` | — |
| **F071** | Pointer trace 0→1→2→3 | Pointer travels index 1→2; progress 100%; 'i++' updates only after pointer settles. | `S1.050 · X+0 · Y+8 · R+0.00°` | — |
| **F072** | Pointer trace 0→1→2→3 | Pointer travels index 2→3; progress 0%; leave faint 12%-opacity pencil trace behind. | `S1.050 · X+0 · Y+8 · R+0.00°` | pointer tick |
| **F073** | Pointer trace 0→1→2→3 | Pointer travels index 2→3; progress 33%; leave faint 12%-opacity pencil trace behind. | `S1.050 · X+0 · Y+8 · R+0.00°` | — |
| **F074** | Pointer trace 0→1→2→3 | Pointer travels index 2→3; progress 67%; leave faint 12%-opacity pencil trace behind. | `S1.050 · X+0 · Y+8 · R+0.00°` | — |
| **F075** | Pointer trace 0→1→2→3 | Pointer travels index 2→3; progress 100%; leave faint 12%-opacity pencil trace behind. | `S1.050 · X+0 · Y+8 · R+0.00°` | — |
| **F076** | Pointer trace 0→1→2→3 | Pointer settles over index 3; micro 2px down/up compression; 'i=3' final state holds. | `S1.050 · X+0 · Y+8 · R+0.00°` | pointer tick |
| **F077** | Pointer trace 0→1→2→3 | Pointer settles over index 3; micro 2px down/up compression; 'i=3' final state holds. | `S1.050 · X+0 · Y+8 · R+0.00°` | — |
| **F078** | Pointer trace 0→1→2→3 | Pointer settles over index 3; micro 2px down/up compression; 'i=3' final state holds. | `S1.050 · X+0 · Y+8 · R+0.00°` | — |
| **F079** | Pointer trace 0→1→2→3 | Pointer settles over index 3; micro 2px down/up compression; 'i=3' final state holds. | `S1.050 · X+0 · Y+8 · R+0.00°` | — |
| **F080** | Trace freeze | Freeze entire rough-array state for readability; only 15fps line-boil remains. | `S1.050 · X+0 · Y+8 · R+0.00°` | — |
| **F081** | Trace freeze | Freeze entire rough-array state for readability; only 15fps line-boil remains. | `S1.050 · X+0 · Y+8 · R+0.00°` | — |
| **F082** | Trace freeze | Freeze entire rough-array state for readability; only 15fps line-boil remains. | `S1.050 · X+0 · Y+8 · R+0.00°` | — |
| **F083** | Trace freeze | Freeze entire rough-array state for readability; only 15fps line-boil remains. | `S1.050 · X+0 · Y+8 · R+0.00°` | — |
| **F084** | Genga → cleanup | Duplicate array: lower layer stays blue-pencil rough; upper clean dark-indigo layer starts at cell 0. | `S1.050 · X+0 · Y+8 · R+0.00°` | cleanup pencil bed |
| **F085** | Genga → cleanup | Cleanup sweep 5% left→right. Clean SVG reaches around cell 0; cleaned rough portions fade toward 18%. | `S1.051 · X+1 · Y+8 · R+0.00°` | — |
| **F086** | Genga → cleanup | Cleanup sweep 11% left→right. Clean SVG reaches around cell 0; cleaned rough portions fade toward 18%. | `S1.051 · X+1 · Y+8 · R+0.00°` | — |
| **F087** | Genga → cleanup | Cleanup sweep 16% left→right. Clean SVG reaches around cell 1; cleaned rough portions fade toward 18%. | `S1.052 · X+2 · Y+7 · R+0.00°` | — |
| **F088** | Genga → cleanup | Cleanup sweep 21% left→right. Clean SVG reaches around cell 1; cleaned rough portions fade toward 18%. | `S1.053 · X+3 · Y+7 · R+0.00°` | — |
| **F089** | Genga → cleanup | Cleanup sweep 26% left→right. Clean SVG reaches around cell 2; cleaned rough portions fade toward 18%. | `S1.054 · X+4 · Y+7 · R+0.00°` | — |
| **F090** | Genga → cleanup | Cleanup sweep 32% left→right. Clean SVG reaches around cell 2; cleaned rough portions fade toward 18%. | `S1.056 · X+5 · Y+6 · R+0.00°` | — |
| **F091** | Genga → cleanup | Cleanup sweep 37% left→right. Clean SVG reaches around cell 2; cleaned rough portions fade toward 18%. | `S1.057 · X+6 · Y+6 · R+0.00°` | — |
| **F092** | Genga → cleanup | Cleanup sweep 42% left→right. Clean SVG reaches around cell 3; cleaned rough portions fade toward 18%. | `S1.059 · X+8 · Y+5 · R+0.00°` | — |
| **F093** | Genga → cleanup | Cleanup sweep 47% left→right. Clean SVG reaches around cell 3; cleaned rough portions fade toward 18%. | `S1.060 · X+9 · Y+5 · R+0.00°` | — |
| **F094** | Genga → cleanup | Cleanup sweep 53% left→right. Clean SVG reaches around cell 4; cleaned rough portions fade toward 18%. | `S1.061 · X+10 · Y+5 · R+0.00°` | — |
| **F095** | Genga → cleanup | Cleanup sweep 58% left→right. Clean SVG reaches around cell 4; cleaned rough portions fade toward 18%. | `S1.063 · X+12 · Y+4 · R+0.00°` | — |
| **F096** | Genga → cleanup | Cleanup sweep 63% left→right. Clean SVG reaches around cell 5; cleaned rough portions fade toward 18%. | `S1.064 · X+13 · Y+4 · R+0.00°` | — |
| **F097** | Genga → cleanup | Cleanup sweep 68% left→right. Clean SVG reaches around cell 5; cleaned rough portions fade toward 18%. | `S1.066 · X+14 · Y+3 · R+0.00°` | — |
| **F098** | Genga → cleanup | Cleanup sweep 74% left→right. Clean SVG reaches around cell 5; cleaned rough portions fade toward 18%. | `S1.067 · X+15 · Y+3 · R+0.00°` | — |
| **F099** | Genga → cleanup | Cleanup sweep 79% left→right. Clean SVG reaches around cell 6; cleaned rough portions fade toward 18%. | `S1.068 · X+16 · Y+3 · R+0.00°` | — |
| **F100** | Genga → cleanup | Cleanup sweep 84% left→right. Clean SVG reaches around cell 6; cleaned rough portions fade toward 18%. | `S1.069 · X+17 · Y+2 · R+0.00°` | — |
| **F101** | Genga → cleanup | Cleanup sweep 89% left→right. Clean SVG reaches around cell 7; cleaned rough portions fade toward 18%. | `S1.069 · X+17 · Y+2 · R+0.00°` | — |
| **F102** | Genga → cleanup | Cleanup sweep 95% left→right. Clean SVG reaches around cell 7; cleaned rough portions fade toward 18%. | `S1.070 · X+18 · Y+2 · R+0.00°` | — |
| **F103** | Genga → cleanup | Cleanup sweep 100% left→right. Clean SVG reaches around cell 7; cleaned rough portions fade toward 18%. | `S1.070 · X+18 · Y+2 · R+0.00°` | — |
| **F104** | Cleanup settle | Clean array complete. 25 note arrow points to cleaned edge; handwritten CLEAN-UP/F084 appears at 42% opacity. | `S1.070 · X+18 · Y+2 · R+0.00°` | clean lock |
| **F105** | Cleanup settle | Clean array complete. 25 note arrow points to cleaned edge; handwritten CLEAN-UP/F084 appears at 42% opacity. | `S1.069 · X+17 · Y+2 · R+0.00°` | — |
| **F106** | Cleanup settle | Clean array complete. 25 note arrow points to cleaned edge; handwritten CLEAN-UP/F084 appears at 42% opacity. | `S1.068 · X+15 · Y+2 · R+0.00°` | — |
| **F107** | Cleanup settle | Clean array complete. 25 note arrow points to cleaned edge; handwritten CLEAN-UP/F084 appears at 42% opacity. | `S1.067 · X+13 · Y+1 · R+0.00°` | — |
| **F108** | Cleanup settle | Production annotations fade 42%→18%; clean vector remains 100%; rough array remains 18%. | `S1.066 · X+11 · Y+1 · R+0.00°` | — |
| **F109** | Cleanup settle | Production annotations fade 42%→18%; clean vector remains 100%; rough array remains 18%. | `S1.065 · X+9 · Y+1 · R+0.00°` | — |
| **F110** | Cleanup settle | Production annotations fade 42%→18%; clean vector remains 100%; rough array remains 18%. | `S1.064 · X+7 · Y+1 · R+0.00°` | — |
| **F111** | Cleanup settle | Production annotations fade 42%→18%; clean vector remains 100%; rough array remains 18%. | `S1.063 · X+5 · Y+1 · R+0.00°` | — |
| **F112** | Cleanup settle | Remove annotation layer entirely; reduce rough underdrawing 18%→0%. Clean array is now the only hero. | `S1.062 · X+3 · Y+0 · R+0.00°` | — |
| **F113** | Cleanup settle | Remove annotation layer entirely; reduce rough underdrawing 18%→0%. Clean array is now the only hero. | `S1.061 · X+1 · Y+0 · R+0.00°` | — |
| **F114** | Cleanup settle | Remove annotation layer entirely; reduce rough underdrawing 18%→0%. Clean array is now the only hero. | `S1.060 · X+0 · Y+0 · R+0.00°` | — |
| **F115** | Cleanup settle | Remove annotation layer entirely; reduce rough underdrawing 18%→0%. Clean array is now the only hero. | `S1.060 · X+0 · Y+0 · R+0.00°` | — |
| **F116** | Pre-fracture tension | Pre-fracture tension: cell corners separate by 1–3px; no flying yet. Camera begins giving negative space. | `S1.060 · X+0 · Y-0 · R+0.00°` | — |
| **F117** | Pre-fracture tension | Pre-fracture tension: cell corners separate by 1–3px; no flying yet. Camera begins giving negative space. | `S1.059 · X+0 · Y-0 · R+0.00°` | — |
| **F118** | Pre-fracture tension | Pre-fracture tension: cell corners separate by 1–3px; no flying yet. Camera begins giving negative space. | `S1.057 · X+0 · Y-0 · R+0.00°` | — |
| **F119** | Pre-fracture tension | Pre-fracture tension: cell corners separate by 1–3px; no flying yet. Camera begins giving negative space. | `S1.055 · X+0 · Y-0 · R+0.00°` | — |
| **F120** | Cell edges detach | Detach one predetermined cell segment set (mapping group 0); translate 4–18px away from cell with no random explosion; opacity stays 100%. | `S1.053 · X+0 · Y-1 · R+0.00°` | segment release |
| **F121** | Cell edges detach | Detach one predetermined cell segment set (mapping group 1); translate 4–18px away from cell with no random explosion; opacity stays 100%. | `S1.050 · X+0 · Y-1 · R+0.00°` | — |
| **F122** | Cell edges detach | Detach one predetermined cell segment set (mapping group 2); translate 4–18px away from cell with no random explosion; opacity stays 100%. | `S1.047 · X+0 · Y-1 · R+0.00°` | — |
| **F123** | Cell edges detach | Detach one predetermined cell segment set (mapping group 3); translate 4–18px away from cell with no random explosion; opacity stays 100%. | `S1.044 · X+0 · Y-1 · R+0.00°` | — |
| **F124** | Cell edges detach | Detach one predetermined cell segment set (mapping group 4); translate 4–18px away from cell with no random explosion; opacity stays 100%. | `S1.041 · X+0 · Y-2 · R+0.00°` | — |
| **F125** | Cell edges detach | Detach one predetermined cell segment set (mapping group 5); translate 4–18px away from cell with no random explosion; opacity stays 100%. | `S1.038 · X+0 · Y-2 · R+0.00°` | — |
| **F126** | Cell edges detach | Detach one predetermined cell segment set (mapping group 6); translate 4–18px away from cell with no random explosion; opacity stays 100%. | `S1.034 · X+0 · Y-2 · R+0.00°` | — |
| **F127** | Cell edges detach | Detach one predetermined cell segment set (mapping group 7); translate 4–18px away from cell with no random explosion; opacity stays 100%. | `S1.031 · X+0 · Y-3 · R+0.00°` | — |
| **F128** | Cell edges detach | Detach one predetermined cell segment set (mapping group 0); translate 4–18px away from cell with no random explosion; opacity stays 100%. | `S1.028 · X+0 · Y-3 · R+0.00°` | — |
| **F129** | Cell edges detach | Detach one predetermined cell segment set (mapping group 1); translate 4–18px away from cell with no random explosion; opacity stays 100%. | `S1.025 · X+0 · Y-3 · R+0.00°` | — |
| **F130** | Cell edges detach | Detach one predetermined cell segment set (mapping group 2); translate 4–18px away from cell with no random explosion; opacity stays 100%. | `S1.022 · X+0 · Y-3 · R+0.00°` | — |
| **F131** | Cell edges detach | Detach one predetermined cell segment set (mapping group 3); translate 4–18px away from cell with no random explosion; opacity stays 100%. | `S1.020 · X+0 · Y-4 · R+0.00°` | — |
| **F132** | Cell edges detach | Detach one predetermined cell segment set (mapping group 4); translate 4–18px away from cell with no random explosion; opacity stays 100%. | `S1.018 · X+0 · Y-4 · R+0.00°` | — |
| **F133** | Cell edges detach | Detach one predetermined cell segment set (mapping group 5); translate 4–18px away from cell with no random explosion; opacity stays 100%. | `S1.016 · X+0 · Y-4 · R+0.00°` | — |
| **F134** | Cell edges detach | Detach one predetermined cell segment set (mapping group 6); translate 4–18px away from cell with no random explosion; opacity stays 100%. | `S1.015 · X+0 · Y-4 · R+0.00°` | — |
| **F135** | Cell edges detach | Detach one predetermined cell segment set (mapping group 7); translate 4–18px away from cell with no random explosion; opacity stays 100%. | `S1.015 · X+0 · Y-4 · R+0.00°` | — |
| **F136** | Shards fly into CODE scaffold | Typography shard flight 0% with motion blur: verticals target C/D stems, horizontals target E bars, curved guide targets O. Camera tracks aggregate centroid only. | `S1.015 · X+0 · Y-4 · R+0.00°` | vector whoosh begins |
| **F137** | Shards fly into CODE scaffold | Typography shard flight 8% with motion blur: verticals target C/D stems, horizontals target E bars, curved guide targets O. Camera tracks aggregate centroid only. | `S1.014 · X+0 · Y-4 · R+0.00°` | — |
| **F138** | Shards fly into CODE scaffold | Typography shard flight 15% with motion blur: verticals target C/D stems, horizontals target E bars, curved guide targets O. Camera tracks aggregate centroid only. | `S1.013 · X+0 · Y-4 · R+0.00°` | — |
| **F139** | Shards fly into CODE scaffold | Typography shard flight 23% with motion blur: verticals target C/D stems, horizontals target E bars, curved guide targets O. Camera tracks aggregate centroid only. | `S1.012 · X+0 · Y-5 · R+0.00°` | — |
| **F140** | Shards fly into CODE scaffold | Typography shard flight 31% with motion blur: verticals target C/D stems, horizontals target E bars, curved guide targets O. Camera tracks aggregate centroid only. | `S1.011 · X+0 · Y-5 · R+0.00°` | — |
| **F141** | Shards fly into CODE scaffold | Typography shard flight 38% with motion blur: verticals target C/D stems, horizontals target E bars, curved guide targets O. Camera tracks aggregate centroid only. | `S1.009 · X+0 · Y-6 · R+0.00°` | — |
| **F142** | Shards fly into CODE scaffold | Typography shard flight 46% with motion blur: verticals target C/D stems, horizontals target E bars, curved guide targets O. Camera tracks aggregate centroid only. | `S1.007 · X+0 · Y-6 · R+0.00°` | — |
| **F143** | Shards fly into CODE scaffold | Typography shard flight 54% with motion blur: verticals target C/D stems, horizontals target E bars, curved guide targets O. Camera tracks aggregate centroid only. | `S1.006 · X+0 · Y-6 · R+0.00°` | — |
| **F144** | Shards fly into CODE scaffold | Typography shard flight 62% with motion blur: verticals target C/D stems, horizontals target E bars, curved guide targets O. Camera tracks aggregate centroid only. | `S1.004 · X+0 · Y-7 · R+0.00°` | — |
| **F145** | Shards fly into CODE scaffold | Typography shard flight 69% with motion blur: verticals target C/D stems, horizontals target E bars, curved guide targets O. Camera tracks aggregate centroid only. | `S1.003 · X+0 · Y-7 · R+0.00°` | — |
| **F146** | Shards fly into CODE scaffold | Typography shard flight 77% with motion blur: verticals target C/D stems, horizontals target E bars, curved guide targets O. Camera tracks aggregate centroid only. | `S1.002 · X+0 · Y-8 · R+0.00°` | — |
| **F147** | Shards fly into CODE scaffold | Typography shard flight 85% with motion blur: verticals target C/D stems, horizontals target E bars, curved guide targets O. Camera tracks aggregate centroid only. | `S1.001 · X+0 · Y-8 · R+0.00°` | — |
| **F148** | Shards fly into CODE scaffold | Typography shard flight 92% with motion blur: verticals target C/D stems, horizontals target E bars, curved guide targets O. Camera tracks aggregate centroid only. | `S1.000 · X+0 · Y-8 · R+0.00°` | — |
| **F149** | Shards fly into CODE scaffold | Typography shard flight 100% with motion blur: verticals target C/D stems, horizontals target E bars, curved guide targets O. Camera tracks aggregate centroid only. | `S1.000 · X+0 · Y-8 · R+0.00°` | — |
| **F150** | CODE constructs | C construction begins: rough C scaffold appears 65%, clean C path begins 0→30%. | `S1.000 · X+0 · Y-8 · R+0.00°` | type lock C |
| **F151** | CODE constructs | C resolves rough→clean; rough outline boils A/B then disappears. | `S1.002 · X+0 · Y-8 · R+0.00°` | — |
| **F152** | CODE constructs | C resolves rough→clean; rough outline boils A/B then disappears. | `S1.003 · X+0 · Y-8 · R+0.00°` | — |
| **F153** | CODE constructs | C resolves rough→clean; rough outline boils A/B then disappears. | `S1.006 · X+0 · Y-8 · R+0.00°` | — |
| **F154** | CODE constructs | O construction begins from pointer arc + array corner curves. | `S1.008 · X+0 · Y-8 · R+0.00°` | type lock O |
| **F155** | CODE constructs | O closes to 92% only during construction, then clean geometric O resolves; rough layer fades. | `S1.012 · X+0 · Y-8 · R+0.00°` | — |
| **F156** | CODE constructs | O closes to 92% only during construction, then clean geometric O resolves; rough layer fades. | `S1.015 · X+0 · Y-8 · R+0.00°` | — |
| **F157** | CODE constructs | O closes to 92% only during construction, then clean geometric O resolves; rough layer fades. | `S1.019 · X+0 · Y-8 · R+0.00°` | — |
| **F158** | CODE constructs | D stem and bowl begin from detached vertical + top/bottom array edges. | `S1.022 · X+0 · Y-8 · R+0.00°` | type lock D |
| **F159** | CODE constructs | D clean path resolves; residual shard guide lines fade. | `S1.026 · X+0 · Y-8 · R+0.00°` | — |
| **F160** | CODE constructs | D clean path resolves; residual shard guide lines fade. | `S1.030 · X+0 · Y-8 · R+0.00°` | — |
| **F161** | CODE constructs | D clean path resolves; residual shard guide lines fade. | `S1.033 · X+0 · Y-8 · R+0.00°` | — |
| **F162** | CODE constructs | E top/middle/bottom bars snap into alignment from three horizontal cell edges. | `S1.037 · X+0 · Y-8 · R+0.00°` | type lock E |
| **F163** | CODE constructs | CODE word settles into final baseline at x=960,y=388; letter spacing eases to final. All construction scraps fade by F167. | `S1.039 · X+0 · Y-8 · R+0.00°` | — |
| **F164** | CODE constructs | CODE word settles into final baseline at x=960,y=388; letter spacing eases to final. All construction scraps fade by F167. | `S1.042 · X+0 · Y-8 · R+0.00°` | — |
| **F165** | CODE constructs | CODE word settles into final baseline at x=960,y=388; letter spacing eases to final. All construction scraps fade by F167. | `S1.043 · X+0 · Y-8 · R+0.00°` | — |
| **F166** | CODE constructs | CODE word settles into final baseline at x=960,y=388; letter spacing eases to final. All construction scraps fade by F167. | `S1.045 · X+0 · Y-8 · R+0.00°` | — |
| **F167** | CODE constructs | CODE word settles into final baseline at x=960,y=388; letter spacing eases to final. All construction scraps fade by F167. | `S1.045 · X+0 · Y-8 · R+0.00°` | — |
| **F168** | CODE hold + → motion note | CODE fully clean. Start 13 underline-A beneath word at 0% draw. | `S1.045 · X+0 · Y-8 · R+0.00°` | pencil line start |
| **F169** | CODE hold + → motion note | Underline line-boil variant A; draw continues. Tiny handwritten '→ motion' begins at lower-right of CODE. | `S1.045 · X+0 · Y-8 · R+0.00°` | — |
| **F170** | CODE hold + → motion note | Underline line-boil variant B; draw continues. Tiny handwritten '→ motion' begins at lower-right of CODE. | `S1.045 · X+0 · Y-8 · R+0.00°` | — |
| **F171** | CODE hold + → motion note | Underline line-boil variant B; draw continues. Tiny handwritten '→ motion' begins at lower-right of CODE. | `S1.045 · X+0 · Y-8 · R+0.00°` | — |
| **F172** | CODE hold + → motion note | Underline line-boil variant C; draw continues. Tiny handwritten '→ motion' begins at lower-right of CODE. | `S1.044 · X+0 · Y-8 · R+0.00°` | — |
| **F173** | CODE hold + → motion note | Complete '→ motion' note; hold 2 frames; no camera move. | `S1.044 · X+0 · Y-8 · R+0.00°` | — |
| **F174** | CODE hold + → motion note | Complete '→ motion' note; hold 2 frames; no camera move. | `S1.044 · X+0 · Y-7 · R+0.00°` | — |
| **F175** | CODE hold + → motion note | Complete '→ motion' note; hold 2 frames; no camera move. | `S1.043 · X+0 · Y-7 · R+0.00°` | — |
| **F176** | CODE hold + → motion note | Complete '→ motion' note; hold 2 frames; no camera move. | `S1.043 · X+0 · Y-7 · R+0.00°` | — |
| **F177** | CODE hold + → motion note | Erase '→ motion' via reverse mask right→left; underline remains 24% as construction residue. | `S1.043 · X+0 · Y-7 · R+0.00°` | — |
| **F178** | CODE hold + → motion note | Erase '→ motion' via reverse mask right→left; underline remains 24% as construction residue. | `S1.042 · X+0 · Y-7 · R+0.00°` | — |
| **F179** | CODE hold + → motion note | Erase '→ motion' via reverse mask right→left; underline remains 24% as construction residue. | `S1.042 · X+0 · Y-6 · R+0.00°` | — |
| **F180** | WITH hand-drawn gesture | Start WITH as one continuous hand-drawn connector gesture; underline variant A becomes writing guide. | `S1.041 · X+0 · Y-6 · R+0.00°` | brush-pen write begins |
| **F181** | WITH hand-drawn gesture | WITH gesture draw 6% using underline/connector variant A; stroke position is smooth 30fps, contour boils 15fps. | `S1.041 · X+0 · Y-6 · R+0.00°` | — |
| **F182** | WITH hand-drawn gesture | WITH gesture draw 12% using underline/connector variant B; stroke position is smooth 30fps, contour boils 15fps. | `S1.040 · X+0 · Y-5 · R+0.00°` | — |
| **F183** | WITH hand-drawn gesture | WITH gesture draw 18% using underline/connector variant B; stroke position is smooth 30fps, contour boils 15fps. | `S1.040 · X+0 · Y-5 · R+0.00°` | — |
| **F184** | WITH hand-drawn gesture | WITH gesture draw 24% using underline/connector variant C; stroke position is smooth 30fps, contour boils 15fps. | `S1.039 · X+0 · Y-5 · R+0.00°` | — |
| **F185** | WITH hand-drawn gesture | WITH gesture draw 29% using underline/connector variant C; stroke position is smooth 30fps, contour boils 15fps. | `S1.039 · X+0 · Y-5 · R+0.00°` | — |
| **F186** | WITH hand-drawn gesture | WITH gesture draw 35% using underline/connector variant D; stroke position is smooth 30fps, contour boils 15fps. | `S1.038 · X+0 · Y-4 · R+0.00°` | — |
| **F187** | WITH hand-drawn gesture | WITH gesture draw 41% using underline/connector variant D; stroke position is smooth 30fps, contour boils 15fps. | `S1.038 · X+0 · Y-4 · R+0.00°` | — |
| **F188** | WITH hand-drawn gesture | WITH gesture draw 47% using underline/connector variant A; stroke position is smooth 30fps, contour boils 15fps. | `S1.037 · X+0 · Y-4 · R+0.00°` | — |
| **F189** | WITH hand-drawn gesture | WITH gesture draw 53% using underline/connector variant A; stroke position is smooth 30fps, contour boils 15fps. | `S1.036 · X+0 · Y-3 · R+0.00°` | — |
| **F190** | WITH hand-drawn gesture | WITH gesture draw 59% using underline/connector variant B; stroke position is smooth 30fps, contour boils 15fps. | `S1.036 · X+0 · Y-3 · R+0.00°` | — |
| **F191** | WITH hand-drawn gesture | WITH gesture draw 65% using underline/connector variant B; stroke position is smooth 30fps, contour boils 15fps. | `S1.035 · X+0 · Y-3 · R+0.00°` | — |
| **F192** | WITH hand-drawn gesture | WITH gesture draw 71% using underline/connector variant C; stroke position is smooth 30fps, contour boils 15fps. | `S1.035 · X+0 · Y-3 · R+0.00°` | — |
| **F193** | WITH hand-drawn gesture | WITH gesture draw 76% using underline/connector variant C; stroke position is smooth 30fps, contour boils 15fps. | `S1.034 · X+0 · Y-2 · R+0.00°` | — |
| **F194** | WITH hand-drawn gesture | WITH gesture draw 82% using underline/connector variant D; stroke position is smooth 30fps, contour boils 15fps. | `S1.034 · X+0 · Y-2 · R+0.00°` | — |
| **F195** | WITH hand-drawn gesture | WITH gesture draw 88% using underline/connector variant D; stroke position is smooth 30fps, contour boils 15fps. | `S1.033 · X+0 · Y-2 · R+0.00°` | — |
| **F196** | WITH hand-drawn gesture | WITH gesture draw 94% using underline/connector variant A; stroke position is smooth 30fps, contour boils 15fps. | `S1.033 · X+0 · Y-1 · R+0.00°` | — |
| **F197** | WITH hand-drawn gesture | WITH gesture draw 100% using underline/connector variant A; stroke position is smooth 30fps, contour boils 15fps. | `S1.032 · X+0 · Y-1 · R+0.00°` | — |
| **F198** | WITH clean-up | Clean typographic WITH appears directly over rough gesture at 25% opacity/scale 0.992. | `S1.032 · X+0 · Y-1 · R+0.00°` | clean resolve |
| **F199** | WITH clean-up | WITH clean layer rises 25%→100%; rough gesture remains offset 1–2px. | `S1.032 · X+0 · Y-1 · R+0.00°` | — |
| **F200** | WITH clean-up | WITH clean layer rises 25%→100%; rough gesture remains offset 1–2px. | `S1.031 · X+0 · Y-1 · R+0.00°` | — |
| **F201** | WITH clean-up | WITH clean layer rises 25%→100%; rough gesture remains offset 1–2px. | `S1.031 · X+0 · Y-0 · R+0.00°` | — |
| **F202** | WITH clean-up | WITH clean layer rises 25%→100%; rough gesture remains offset 1–2px. | `S1.031 · X+0 · Y-0 · R+0.00°` | — |
| **F203** | WITH clean-up | WITH clean layer rises 25%→100%; rough gesture remains offset 1–2px. | `S1.030 · X+0 · Y-0 · R+0.00°` | — |
| **F204** | WITH clean-up | Rough WITH underdrawing fades to 0%; CODE WITH now clean and centered. | `S1.030 · X+0 · Y-0 · R+0.00°` | — |
| **F205** | WITH clean-up | Rough WITH underdrawing fades to 0%; CODE WITH now clean and centered. | `S1.030 · X+0 · Y-0 · R+0.00°` | — |
| **F206** | WITH clean-up | Rough WITH underdrawing fades to 0%; CODE WITH now clean and centered. | `S1.030 · X+0 · Y-0 · R+0.00°` | — |
| **F207** | WITH clean-up | Rough WITH underdrawing fades to 0%; CODE WITH now clean and centered. | `S1.030 · X+0 · Y+0 · R+0.00°` | — |
| **F208** | Hero space opens | Open hero space below CODE WITH. Create warm paper band mask area y=445..640; no title reveal yet. | `S1.030 · X+0 · Y+0 · R+0.00°` | — |
| **F209** | Hero space opens | Open hero space below CODE WITH. Create warm paper band mask area y=445..640; no title reveal yet. | `S1.029 · X+0 · Y+0 · R+0.00°` | — |
| **F210** | Hero space opens | Open hero space below CODE WITH. Create warm paper band mask area y=445..640; no title reveal yet. | `S1.028 · X+0 · Y+0 · R+0.00°` | — |
| **F211** | Hero space opens | Open hero space below CODE WITH. Create warm paper band mask area y=445..640; no title reveal yet. | `S1.027 · X+0 · Y+0 · R+0.00°` | — |
| **F212** | Vermilion cel-paint reveal | 26 vermilion cel-paint enters from x=-420 at y=535; 27 edge mask controls leading edge. ANIMATION still hidden. | `S1.025 · X+0 · Y+1 · R+0.00°` | gouache swash |
| **F213** | Vermilion cel-paint reveal | Cel-paint sweep 8% left→right; ANIMATION reveal is exactly clipped to painted coverage. No independent title fade. | `S1.023 · X+0 · Y+1 · R+0.00°` | — |
| **F214** | Vermilion cel-paint reveal | Cel-paint sweep 15% left→right; ANIMATION reveal is exactly clipped to painted coverage. No independent title fade. | `S1.021 · X+0 · Y+1 · R+0.00°` | — |
| **F215** | Vermilion cel-paint reveal | Cel-paint sweep 23% left→right; ANIMATION reveal is exactly clipped to painted coverage. No independent title fade. | `S1.018 · X+0 · Y+2 · R+0.00°` | — |
| **F216** | Vermilion cel-paint reveal | Cel-paint sweep 31% left→right; ANIMATION reveal is exactly clipped to painted coverage. No independent title fade. | `S1.016 · X+0 · Y+2 · R+0.00°` | — |
| **F217** | Vermilion cel-paint reveal | Cel-paint sweep 38% left→right; ANIMATION reveal is exactly clipped to painted coverage. No independent title fade. | `S1.013 · X+0 · Y+2 · R+0.00°` | — |
| **F218** | Vermilion cel-paint reveal | Cel-paint sweep 46% left→right; ANIMATION reveal is exactly clipped to painted coverage. No independent title fade. | `S1.010 · X+0 · Y+3 · R+0.00°` | — |
| **F219** | Vermilion cel-paint reveal | Cel-paint sweep 54% left→right; ANIMATION reveal is exactly clipped to painted coverage. No independent title fade. | `S1.008 · X+0 · Y+3 · R+0.00°` | — |
| **F220** | Vermilion cel-paint reveal | Cel-paint sweep 62% left→right; ANIMATION reveal is exactly clipped to painted coverage. No independent title fade. | `S1.005 · X+0 · Y+3 · R+0.00°` | — |
| **F221** | Vermilion cel-paint reveal | Cel-paint sweep 69% left→right; ANIMATION reveal is exactly clipped to painted coverage. No independent title fade. | `S1.002 · X+0 · Y+4 · R+0.00°` | — |
| **F222** | Vermilion cel-paint reveal | Cel-paint sweep 77% left→right; ANIMATION reveal is exactly clipped to painted coverage. No independent title fade. | `S0.999 · X+0 · Y+4 · R+0.00°` | — |
| **F223** | Vermilion cel-paint reveal | Cel-paint sweep 85% left→right; ANIMATION reveal is exactly clipped to painted coverage. No independent title fade. | `S0.997 · X+0 · Y+4 · R+0.00°` | — |
| **F224** | Vermilion cel-paint reveal | Cel-paint sweep 92% left→right; ANIMATION reveal is exactly clipped to painted coverage. No independent title fade. | `S0.994 · X+0 · Y+5 · R+0.00°` | — |
| **F225** | Vermilion cel-paint reveal | Cel-paint sweep 100% left→right; ANIMATION reveal is exactly clipped to painted coverage. No independent title fade. | `S0.992 · X+0 · Y+5 · R+0.00°` | — |
| **F226** | Paint separates / title remains | Paint body separates into three offset streak layers; streaks drift 6–16px while ANIMATION remains locked and fully readable. | `S0.990 · X+0 · Y+5 · R+0.00°` | — |
| **F227** | Paint separates / title remains | Paint body separates into three offset streak layers; streaks drift 6–16px while ANIMATION remains locked and fully readable. | `S0.988 · X+0 · Y+6 · R+0.00°` | — |
| **F228** | Paint separates / title remains | Paint body separates into three offset streak layers; streaks drift 6–16px while ANIMATION remains locked and fully readable. | `S0.987 · X+0 · Y+6 · R+0.00°` | — |
| **F229** | Paint separates / title remains | Paint body separates into three offset streak layers; streaks drift 6–16px while ANIMATION remains locked and fully readable. | `S0.986 · X+0 · Y+6 · R+0.00°` | — |
| **F230** | Paint separates / title remains | Paint body separates into three offset streak layers; streaks drift 6–16px while ANIMATION remains locked and fully readable. | `S0.985 · X+0 · Y+6 · R+0.00°` | — |
| **F231** | Paint separates / title remains | Paint body separates into three offset streak layers; streaks drift 6–16px while ANIMATION remains locked and fully readable. | `S0.985 · X+0 · Y+6 · R+0.00°` | — |
| **F232** | Enso draw + line boil | Start 09 enso-A at 0% path draw around title center (cx=960,cy=520). | `S0.985 · X+0 · Y+6 · R+0.00°` | enso brush begins |
| **F233** | Enso draw + line boil | Enso draw 9% using variant A; 28 indigo-drybrush textures stroke; open gap remains at upper-right. | `S0.984 · X+0 · Y+6 · R+0.00°` | — |
| **F234** | Enso draw + line boil | Enso draw 18% using variant B; 28 indigo-drybrush textures stroke; open gap remains at upper-right. | `S0.983 · X+0 · Y+6 · R+0.00°` | — |
| **F235** | Enso draw + line boil | Enso draw 27% using variant B; 28 indigo-drybrush textures stroke; open gap remains at upper-right. | `S0.982 · X+0 · Y+6 · R+0.00°` | — |
| **F236** | Enso draw + line boil | Enso draw 36% using variant C; 28 indigo-drybrush textures stroke; open gap remains at upper-right. | `S0.981 · X+0 · Y+6 · R+0.00°` | — |
| **F237** | Enso draw + line boil | Enso draw 45% using variant C; 28 indigo-drybrush textures stroke; open gap remains at upper-right. | `S0.979 · X+0 · Y+6 · R+0.00°` | — |
| **F238** | Enso draw + line boil | Enso draw 55% using variant D; 28 indigo-drybrush textures stroke; open gap remains at upper-right. | `S0.978 · X+0 · Y+6 · R+0.00°` | — |
| **F239** | Enso draw + line boil | Enso draw 64% using variant D; 28 indigo-drybrush textures stroke; open gap remains at upper-right. | `S0.976 · X+0 · Y+6 · R+0.00°` | — |
| **F240** | Enso draw + line boil | Enso draw 73% using variant A; 28 indigo-drybrush textures stroke; open gap remains at upper-right. | `S0.974 · X+0 · Y+6 · R+0.00°` | — |
| **F241** | Enso draw + line boil | Enso draw 82% using variant A; 28 indigo-drybrush textures stroke; open gap remains at upper-right. | `S0.973 · X+0 · Y+6 · R+0.00°` | — |
| **F242** | Enso draw + line boil | Enso draw 91% using variant B; 28 indigo-drybrush textures stroke; open gap remains at upper-right. | `S0.972 · X+0 · Y+6 · R+0.00°` | — |
| **F243** | Enso draw + line boil | Enso draw 100% using variant B; 28 indigo-drybrush textures stroke; open gap remains at upper-right. | `S0.971 · X+0 · Y+6 · R+0.00°` | — |
| **F244** | Enso settle | Enso reaches final open state; motion stops except 1px contour breath. | `S0.970 · X+0 · Y+6 · R+0.00°` | — |
| **F245** | Enso settle | Enso reaches final open state; motion stops except 1px contour breath. | `S0.970 · X+0 · Y+6 · R+0.00°` | — |
| **F246** | Subtitle reveal | Start subtitle mask reveal: VISUAL LEARNING · PATTERN BY PATTERN at y=708. | `S0.970 · X+0 · Y+6 · R+0.00°` | — |
| **F247** | Subtitle reveal | Subtitle reveal 9% left→right. Crop marks remain faint; no other new motion. | `S0.971 · X+0 · Y+6 · R+0.00°` | — |
| **F248** | Subtitle reveal | Subtitle reveal 18% left→right. Crop marks remain faint; no other new motion. | `S0.971 · X+0 · Y+6 · R+0.00°` | — |
| **F249** | Subtitle reveal | Subtitle reveal 27% left→right. Crop marks remain faint; no other new motion. | `S0.972 · X+0 · Y+6 · R+0.00°` | — |
| **F250** | Subtitle reveal | Subtitle reveal 36% left→right. Crop marks remain faint; no other new motion. | `S0.973 · X+0 · Y+5 · R+0.00°` | — |
| **F251** | Subtitle reveal | Subtitle reveal 45% left→right. Crop marks remain faint; no other new motion. | `S0.975 · X+0 · Y+5 · R+0.00°` | — |
| **F252** | Subtitle reveal | Subtitle reveal 55% left→right. Crop marks remain faint; no other new motion. | `S0.976 · X+0 · Y+5 · R+0.00°` | — |
| **F253** | Subtitle reveal | Subtitle reveal 64% left→right. Crop marks remain faint; no other new motion. | `S0.978 · X+0 · Y+4 · R+0.00°` | — |
| **F254** | Subtitle reveal | Subtitle reveal 73% left→right. Crop marks remain faint; no other new motion. | `S0.979 · X+0 · Y+4 · R+0.00°` | — |
| **F255** | Subtitle reveal | Subtitle reveal 82% left→right. Crop marks remain faint; no other new motion. | `S0.981 · X+0 · Y+4 · R+0.00°` | — |
| **F256** | Subtitle reveal | Subtitle reveal 91% left→right. Crop marks remain faint; no other new motion. | `S0.983 · X+0 · Y+3 · R+0.00°` | — |
| **F257** | Subtitle reveal | Subtitle reveal 100% left→right. Crop marks remain faint; no other new motion. | `S0.985 · X+0 · Y+3 · R+0.00°` | — |
| **F258** | Final identity ma | Absolute brand hold ('ma'). Only paper-fiber drift <0.5px and enso line-boil at 6% perceptual strength. | `S0.987 · X+0 · Y+3 · R+0.00°` | — |
| **F259** | Final identity ma | Absolute brand hold ('ma'). Only paper-fiber drift <0.5px and enso line-boil at 6% perceptual strength. | `S0.989 · X+0 · Y+2 · R+0.00°` | — |
| **F260** | Final identity ma | Absolute brand hold ('ma'). Only paper-fiber drift <0.5px and enso line-boil at 6% perceptual strength. | `S0.991 · X+0 · Y+2 · R+0.00°` | — |
| **F261** | Final identity ma | Absolute brand hold ('ma'). Only paper-fiber drift <0.5px and enso line-boil at 6% perceptual strength. | `S0.992 · X+0 · Y+2 · R+0.00°` | — |
| **F262** | Final identity ma | Absolute brand hold ('ma'). Only paper-fiber drift <0.5px and enso line-boil at 6% perceptual strength. | `S0.994 · X+0 · Y+1 · R+0.00°` | — |
| **F263** | Final identity ma | Absolute brand hold ('ma'). Only paper-fiber drift <0.5px and enso line-boil at 6% perceptual strength. | `S0.995 · X+0 · Y+1 · R+0.00°` | — |
| **F264** | Final identity ma | Absolute brand hold ('ma'). Only paper-fiber drift <0.5px and enso line-boil at 6% perceptual strength. | `S0.997 · X+0 · Y+1 · R+0.00°` | — |
| **F265** | Final identity ma | Absolute brand hold ('ma'). Only paper-fiber drift <0.5px and enso line-boil at 6% perceptual strength. | `S0.998 · X+0 · Y+0 · R+0.00°` | — |
| **F266** | Final identity ma | Absolute brand hold ('ma'). Only paper-fiber drift <0.5px and enso line-boil at 6% perceptual strength. | `S0.999 · X+0 · Y+0 · R+0.00°` | — |
| **F267** | Final identity ma | Absolute brand hold ('ma'). Only paper-fiber drift <0.5px and enso line-boil at 6% perceptual strength. | `S0.999 · X+0 · Y+0 · R+0.00°` | — |
| **F268** | Final identity ma | Absolute brand hold ('ma'). Only paper-fiber drift <0.5px and enso line-boil at 6% perceptual strength. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F269** | Final identity ma | Absolute brand hold ('ma'). Only paper-fiber drift <0.5px and enso line-boil at 6% perceptual strength. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F270** | Rough hanko impact | 30 rough CWA hanko enters from x=1288,y=692, scale 0.78, rotation -3.5°. | `S1.000 · X+0 · Y+0 · R+0.00°` | hanko hit |
| **F271** | Rough hanko impact | Hanko accelerates into contact: scale 0.78→1.08, rotation -3.5°→0.6°. Dust burst begins on contact. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F272** | Rough hanko impact | Hanko accelerates into contact: scale 0.78→1.08, rotation -3.5°→0.6°. Dust burst begins on contact. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F273** | Rough hanko impact | Hanko accelerates into contact: scale 0.78→1.08, rotation -3.5°→0.6°. Dust burst begins on contact. | `S1.000 · X+0 · Y+0 · R+0.00°` | dust puff |
| **F274** | Rough hanko impact | Stamp compresses 1.08→0.96; rough mark stays visible; pigment dust decays. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F275** | Rough hanko impact | Stamp compresses 1.08→0.96; rough mark stays visible; pigment dust decays. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F276** | Clean hanko settle | Crossfade rough hanko 30 → clean hanko 29 over same transform, no positional jump. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F277** | Clean hanko settle | Clean hanko settles 0.96→1.00. Final identity holds; all motion finishes by F285. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F278** | Clean hanko settle | Clean hanko settles 0.96→1.00. Final identity holds; all motion finishes by F285. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F279** | Clean hanko settle | Clean hanko settles 0.96→1.00. Final identity holds; all motion finishes by F285. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F280** | Clean hanko settle | Clean hanko settles 0.96→1.00. Final identity holds; all motion finishes by F285. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F281** | Clean hanko settle | Clean hanko settles 0.96→1.00. Final identity holds; all motion finishes by F285. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F282** | Clean hanko settle | Clean hanko settles 0.96→1.00. Final identity holds; all motion finishes by F285. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F283** | Clean hanko settle | Clean hanko settles 0.96→1.00. Final identity holds; all motion finishes by F285. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F284** | Clean hanko settle | Clean hanko settles 0.96→1.00. Final identity holds; all motion finishes by F285. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F285** | Clean hanko settle | Clean hanko settles 0.96→1.00. Final identity holds; all motion finishes by F285. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F286** | Transition pencil line | Blue-pencil transition line begins under title from center, extending both directions. | `S1.000 · X+0 · Y+0 · R+0.00°` | transition pencil |
| **F287** | Transition pencil line | Transition line completes across ~72% width; title still fully visible. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F288** | Transition pencil line | Transition line completes across ~72% width; title still fully visible. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F289** | Paper-cut acceleration | Line accelerates to full width and becomes paper-cut mask boundary. | `S1.000 · X+0 · Y+0 · R+0.00°` | paper-cut swish |
| **F290** | Paper-cut acceleration | Mask thickens 2px→14px and catches 31 paper-sheet-edge texture; underlying lesson becomes visible as 3–8px slit. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F291** | Paper-cut acceleration | Mask thickens 2px→14px and catches 31 paper-sheet-edge texture; underlying lesson becomes visible as 3–8px slit. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F292** | Animation sheet lifts | Whole production paper sheet lifts upward 0% (y 0→-1080). 31 paper-sheet-edge rides the moving boundary; lesson remains fixed underneath. | `S1.000 · X+0 · Y+0 · R+0.00°` | paper-lift begins |
| **F293** | Animation sheet lifts | Whole production paper sheet lifts upward 17% (y 0→-1080). 31 paper-sheet-edge rides the moving boundary; lesson remains fixed underneath. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F294** | Animation sheet lifts | Whole production paper sheet lifts upward 33% (y 0→-1080). 31 paper-sheet-edge rides the moving boundary; lesson remains fixed underneath. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F295** | Animation sheet lifts | Whole production paper sheet lifts upward 50% (y 0→-1080). 31 paper-sheet-edge rides the moving boundary; lesson remains fixed underneath. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F296** | Animation sheet lifts | Whole production paper sheet lifts upward 67% (y 0→-1080). 31 paper-sheet-edge rides the moving boundary; lesson remains fixed underneath. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F297** | Animation sheet lifts | Whole production paper sheet lifts upward 83% (y 0→-1080). 31 paper-sheet-edge rides the moving boundary; lesson remains fixed underneath. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F298** | Animation sheet lifts | Whole production paper sheet lifts upward 100% (y 0→-1080). 31 paper-sheet-edge rides the moving boundary; lesson remains fixed underneath. | `S1.000 · X+0 · Y+0 · R+0.00°` | — |
| **F299** | Lesson fully revealed | Intro sheet is fully gone. Lesson frame fills 1920×1080. No black frame, no fade. | `S1.000 · X+0 · Y+0 · R+0.00°` | paper-lift resolves |

## 8. Remotion component architecture

```text
CodeWithAnimationIntro.tsx
├─ PaperWorld
│  ├─ 01-washi-paper.webp
│  ├─ 02-paper-fibers.webp
│  ├─ 03-graphite-grain.webp
│  └─ 04-dry-ink-texture.webp
├─ ProductionMarks
│  ├─ SvgDraw(21)
│  ├─ SvgDraw(22)
│  ├─ SvgDraw(23)
│  ├─ SvgDraw(24)
│  └─ SvgDraw(25)
├─ LineBoil
│  ├─ BrushSlash(05..08)
│  ├─ Enso(09..12)
│  ├─ Underline(13..16)
│  └─ Arrow(17..20)
├─ CodeToArray
│  └─ fixed procedural SVG cells / pointer / indices
├─ GengaCleanup
│  └─ rough path + clean path reveal
├─ ArrayToCodeMorph
│  └─ topology-compatible segment paths
├─ WithGesture
├─ CelPaintMatte
│  ├─ 26-vermilion-cel-paint.webp
│  └─ 27-vermilion-edge-mask.webp
├─ HankoStamp
│  ├─ 30 rough
│  └─ 29 clean
├─ PaperLiftTransition
│  └─ 31-paper-sheet-edge.webp
└─ LessonUnderlay
```

## 9. Exact line-boil component behavior

```ts
const boilIndex = Math.floor(frame / 2) % 4;
const variant = [A, B, C, D][boilIndex];

// IMPORTANT:
// position/scale/rotation use current frame smoothly at 30fps.
// only the drawing contour changes every 2 frames.
```

Do not change variant bounds/anchor points drastically. The optical center and bounding box of A/B/C/D must remain stable, otherwise the line will visibly jump instead of breathe.

## 10. Paint matte implementation

The hero reveal must be:
```text
paint position → matte coverage → title visibility
```
not:
```text
paint moves + title independently fades
```

Recommended SVG/CSS compositing:
1. Place `ANIMATION` fully rendered underneath.
2. Animate a mask group whose leading edge uses `27-vermilion-edge-mask.webp`.
3. Place `26-vermilion-cel-paint.webp` visually above that same mask position.
4. Both use the **same frame-derived X progress**, so the visible paint and the reveal edge cannot drift.

## 11. Shared-element morph rules

Array → `CODE` mapping must be authored, not random:

```text
cell vertical edges → C/D structural stems
cell horizontal edges → E bars
pointer arc / curved construction guide → O curvature
index tick marks → temporary type guides
```

For every segment:
- source path and target path use compatible topology,
- start point is the exact on-screen source segment,
- target point is the exact final letter stroke,
- all transforms are absolute coordinates,
- use motion blur only during F136–F149,
- no shatter/explosion.

## 12. Final visual state at F269 / F285

```text
                 CODE WITH

        [open indigo enso around identity]

               ANIMATION
     [vermilion painted residual texture]

      VISUAL LEARNING · PATTERN BY PATTERN

                              [CWA hanko]
```

Background:
- warm ivory washi
- faint crop marks
- one registration reference
- almost invisible fibers/grain
- **no random particles**

## 13. QA — reject the render if any of these happen

- A/B/C/D variants visibly change overall size or anchor position.
- Brush or enso appears as a PNG sliding across the screen instead of a drawing.
- `ANIMATION` begins fading before the vermilion matte reaches it.
- Array cells shift horizontally when new cells appear.
- Shards explode randomly rather than mapping to letters.
- Camera performs a generic zoom unrelated to the active transformation.
- Final title is not held cleanly for at least F258–F269.
- Stamp makes the camera shake.
- Transition fades to black.
- Lesson appears only after the paper leaves instead of already existing underneath.
- Green/black/cyber-tech styling appears anywhere in this intro.
