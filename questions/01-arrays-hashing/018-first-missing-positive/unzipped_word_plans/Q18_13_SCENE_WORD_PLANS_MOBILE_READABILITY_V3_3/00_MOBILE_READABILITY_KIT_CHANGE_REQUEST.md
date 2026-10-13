# Q18 Mobile Readability + Typography Kit Change Request

## Purpose
This addendum updates the Q18 word-driven plan package for **mobile-first YouTube 16:9 viewing**.
The user explicitly approved the reference style and asked for:
- medium text size, not tiny and not oversized
- stronger text weight
- brighter text and highlights
- less faded appearance
- better readability on mobile screens
- same green chalkboard identity

This file is a **required override/addendum** for all Q18 scenes except where a larger size would break a trace-critical structure.

---

## Primary visual principle
**Readable on a phone first.**
If a viewer watches in mobile portrait mode or a small in-app player, the main teaching text must still read clearly without zoom.

That means:
1. fewer words visible at once
2. larger body text
3. stronger chalk stroke weight
4. higher contrast between board and text
5. more whitespace between blocks
6. avoid small low-contrast helper labels

---

## Approved visual direction
Use the included reference images as the approved visual target for:
- text size
- chalk stroke weight
- contrast
- spacing
- section hierarchy
- 16:9 board composition

Reference files included in this package:
- `REF_MOBILE_STYLE_TRACE_FRAME.png`
- `REF_MOBILE_STYLE_CODE_FRAME.png`

These images are **style and readability references**, not exact final compositions for every scene.

---

## Board + typography rules

## 1) Chalkboard background
Keep the green chalkboard look, but avoid a muddy or too-dark board.

Target behavior:
- dark green board base
- subtle inner glow / vignette allowed
- no heavy texture that reduces legibility
- no faded gray overlay on text zones
- no black card panels in non-roadmap scenes

## 2) Main title scale
All scene hero titles and key headers must be noticeably larger than before.

Rules:
- scene title should read instantly on mobile
- use strong chalk stroke width
- yellow/cream title contrast preferred
- keep title in the upper band with enough left/right breathing room

Preferred hierarchy:
- primary title: bold and large
- subheader / problem sentence: medium-large
- helper labels: medium
- tiny micro-labels: avoid unless essential

## 3) Body text scale
Previous issue: body text looked too small and faint.

New rule:
- body teaching text should be **medium-large**, never tiny
- default explanatory text should be visually closer to a “presentation subtitle” than a footnote
- if a paragraph is too long to keep readable, split it into shorter stacked lines instead of shrinking it

## 4) Chalk stroke weight
All teaching text should feel more solid.

Required:
- increase stroke thickness / rendered weight for chalk text
- reduce washed-out/faded rendering
- use cleaner, brighter chalk edges
- preserve hand-drawn style but not at the cost of readability

## 5) Color contrast
Text should pop more against the board.

Approved behavior:
- primary text: bright off-white / warm white
- emphasis: yellow / golden chalk
- support accents: cyan / turquoise
- success/confirmation: green
- danger / invalid / stop: warm red/orange only when needed

Avoid:
- pale gray text
- low-opacity labels
- faded green-on-green combinations

## 6) Layout margins
For YouTube 16:9, keep safe margins.

Rules:
- nothing important near extreme edges
- maintain generous left and right padding
- bottom captions / recap lines should stay clear of the lowest edge
- side columns must not become narrow text gutters

---

## Scene-type specific readability rules

## A. Understand / Idea scenes
- use fewer blocks at once
- one main concept in center
- side explanation blocks should use 2–4 short lines, not dense paragraphs
- problem statement can be broken into stacked lines for readability

## B. Trace scenes
- array cells and active values must be large enough to read on mobile
- variable panel must use fewer variables simultaneously
- reasoning steps should be short and stacked vertically
- if too many helper notes are visible, reveal them step-by-step rather than shrinking everything
- answer statement at the bottom should be large and high contrast

## C. Code scenes
- code must be large enough to read in a YouTube player
- show only the relevant block / lines when possible
- if full code is shown, dim future lines softly but keep current visible lines strong
- explanation bullets on the right must be short and readable
- do not overload one frame with too many lines plus too much explanation

## D. Complexity / recap scenes
- use very short text
- emphasize the final comparison or final takeaway
- keep the scene open and airy, not dense

---

## Specific kit change requests
These should be considered implementation-level requests against the current kit usage.

## 1) Chalk text defaults
Need a more readable default text preset:
- larger default font sizing for body text
- stronger stroke weight / opacity
- higher default contrast
- better line spacing

Suggested semantic preset names:
- `chalkTitleMobile`
- `chalkSectionHeaderMobile`
- `chalkBodyMobile`
- `chalkLabelMobile`
- `chalkCodeMobile`

## 2) Code rendering
Current concern: code can become too small on mobile.

Change request:
- increase code font size for lesson scenes
- increase line spacing slightly
- prefer showing fewer lines if needed
- highlighted line should use a stronger emphasis box
- line numbers must remain readable if present

## 3) Array / data-structure labels
- index labels should be larger than old default
- active box highlight must be thicker and brighter
- cell values must remain readable even in 7–8 element arrays
- helper labels like `i`, `target`, `correctIdx`, `candidate` need clearer weight and better contrast

## 4) Divider lines and section markers
- keep them visible but subtle
- do not let them overpower text
- enough spacing around dividers so columns breathe

## 5) Captions / bottom takeaway line
- bottom statement should be bigger and brighter than before
- use this for key conclusions only
- preserve strong center alignment when used

---

## Scene planning override
For all Q18 scene plans in this package, apply this precedence rule:

1. Verified narration truth
2. Verified trace truth
3. Existing semantic layout contract
4. **This mobile readability addendum**
5. Earlier smaller / lighter typography assumptions

If an old scene plan implies a smaller text block that conflicts with this readability addendum,
**follow this addendum and reflow the content rather than shrinking the text.**

---

## Concrete operational guidance for Antigravity
When converting word plans into frame-wise plans:
- do not reduce text size to fit everything at once
- instead, stagger reveals
- split explanations into smaller beats
- preserve a clean center stage
- keep major text readable on a phone screen
- treat the reference images as the target readability standard

---

## Final decision summary
For Q18, the final visual readability target is:
- **same green board identity**
- **medium, readable text**
- **heavier chalk weight**
- **brighter contrast**
- **cleaner 16:9 composition**
- **mobile-first visibility**
- **no faded tiny typography**

