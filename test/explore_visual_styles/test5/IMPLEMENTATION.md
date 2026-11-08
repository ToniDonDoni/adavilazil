# Implementation

**Spec:** [SPEC-003-TV-PRESENTER.md](SPEC-003-TV-PRESENTER.md)

**Method:** hand-authored, self-contained SVG (900 x 1200, 3:4). Every study draws the same subject from primitives - ellipses, paths, rectangles and text - and differs only in its style rules. No raster imagery, no external assets, no embedded fonts; type is set in the generic `Helvetica, Arial, sans-serif` stack.

- **Swiss:** visible four-column grid, type block flush left on column one, black shoulders, gold hair, cream face, a dashed gold ring repeated around the head, one dominant asymmetry (subject right, type left).
- **Fukuda:** two values only. A profile, a microphone capsule and the cream counterform between them; the counterform is the second reading, a screen-shaped gap. `LIVE` is the only type.
- **Kruger:** achromatic split-exposure portrait (dark half, light half), blonde hair as a pale tone, grey irises, two red bars with white bold italic type, the upper bar crossing the face.
- **Hybrid v1:** Swiss layout with Kruger bars, but the bars sit in the outer margin and the background uses a `linearGradient`. Both choices are deliberate violations so the review has something to catch.
- **Hybrid v2:** gradient removed, palette flattened, bars re-cut to the grid columns (`x=80..520` and `x=300..860`), the first bar crossing the head.

**Subject:** blonde hair (`#e0a83c` in color studies, pale tone in the achromatic study), grey irises (`#8d9b9c`), microphone or earpiece in every study.

**Verification:** each Acceptance Criterion is checked against the SVG source and its geometry in [REVIEW.md](REVIEW.md). Outputs open directly in a browser or on GitHub; no rasterization step is required.

**Environment note:** this workspace had no headless renderer available, so the review was done against the SVG source (element coordinates, fills, text) rather than a rendered bitmap. Each check cites the elements that satisfy or miss it.
