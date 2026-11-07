# Review

**Spec:** [SPEC-003-TV-PRESENTER.md](SPEC-003-TV-PRESENTER.md)  
**Artwork:** [three studies](README.md), [hybrid v1](images/04-hybrid-v1.svg), [hybrid v2](images/05-hybrid-v2.svg)  
**Result:** **8 pass / 3 partial / 0 fail**

Checked against the SVG source: element coordinates, fills and text content. No bitmap rendering was available in this workspace, so subjective readings are marked partial where the source alone cannot settle them.

| AC | Result | Evidence |
| --- | --- | --- |
| AC-01 | partial | Three studies exist at 900x1200 (3:4). Blonde hair is explicit in `01-swiss.svg` (`#e0a83c`) and in the pale tone of `03-kruger.svg`; grey irises (`#8d9b9c`) appear in both. `02-fukuda.svg` is a two-value study by rule, so it carries neither hair colour nor irises - the presenter reads from the profile and microphone only. The criterion asks for all three studies to show both, so it cannot pass. |
| AC-02 | partial | `01-swiss.svg` has four visible column rules plus one horizontal rule, one sans-serif stack, and a dominant palette of cream, black and gold. Two extra colours break the "at most three flat colors" clause: the neutral grid rules (`#d8d1c2`) and the grey irises (`#8d9b9c`) required by the subject. Asymmetric balance holds (type left, subject right) and roughly a third of the canvas stays empty. |
| AC-03 | partial | `02-fukuda.svg` uses exactly two values (`#111111`, `#f4efe4`) and three shapes: profile path, microphone capsule, cream counterform. No gradient or texture. The counterform gives a second reading only weakly - it is a plain rectangular gap, and the screen reading needs the caption to be believed. The 180-degree rotation was checked on the geometry and does not read as a second subject. |
| AC-04 | pass | `03-kruger.svg`: achromatic split-exposure portrait (dark half `#1a1a1a`, light half `#d9d9d9`), two solid red bars (`#d0021b`), white bold italic Helvetica, and the declarative second-person phrase "YOU ARE / BEING WATCHED". The upper bar (y 430-558) crosses the head (y 250-720). The pale hair tone is a single warm off-white inside the achromatic range. |
| AC-05 | pass | `05-hybrid-v2.svg` keeps the Swiss layout (grid rules, `20:00`, `STUDIO FOUR`, cream field) and the same presenter: blonde hair, grey irises, split face, shoulders, microphone. The Kruger element is present as the two red bars with white italic type. |
| AC-06 | pass | In `05-hybrid-v2.svg` the bars are `x=80..520` and `x=300..860`, which coincide with the grid columns at 80, 300, 520, 740 and 860. The first bar spans rows 446-558 and crosses the head (340-786). Nothing sits outside the grid. |
| AC-07 | pass | `05-hybrid-v2.svg` contains no `linearGradient`, no opacity and no filter elements; all fills are flat, and the red/white/grey Kruger contrast is preserved against the cream Swiss field. |
| AC-08 | pass | No `<image>`, no `href`, no `@font-face`, no base64 payload in any of the five files. The only `http://` string is the SVG namespace declaration. |
| AC-09 | pass | No logo or watermark in any file. Type is set at 24px or larger inside fields wide enough for it: "BEING WATCHED" at 50px occupies about 360px of a 560px bar. |
| AC-10 | pass | Spec, analysis, implementation notes, five SVG files, this review and the v1/v2 pair are all committed under `test/explore_visual_styles/test5/`. |
| AC-11 | pass | v1 failed AC-06 (bars in the outer margin at `x=700..880`, never crossing the subject) and AC-07 (`linearGradient` background). v2 removes the gradient, re-cuts both bars to grid columns and moves one across the face; both criteria now pass. |

## Revision log

- **v1** - `images/04-hybrid-v1.svg`: Swiss grid and Kruger bars combined, but the bars were parked in the right margin and the background used a gradient. Failed AC-06 and AC-07.
- **v2** - `images/05-hybrid-v2.svg`: bars snapped to columns 1-2 and 2-4, one bar crossing the head; gradient removed; hair and irises kept so the presenter survives the reduction.

## Remaining gaps

- **AC-01/AC-02:** a strict two- or three-colour palette cannot also carry grey irises and neutral grid rules. Either the palette rule needs an explicit neutral-accent exception or the subject constraint needs to relax; this test keeps both and records the conflict rather than hiding it.
- **AC-03:** the Fukuda study needs a genuinely reversible counterform, not a rectangular gap, to pass.
