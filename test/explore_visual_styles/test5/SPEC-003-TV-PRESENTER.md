# SPEC-003: TV Presenter, On Air

**Skill:** EXPLORE-VISUAL-STYLES v2.3.0

## 1. Problem and Current State

The style references added in this pull request (Swiss Style poster, Fukuda negative space poster, Kruger image-text montage) have no worked example. This test exercises the full loop - spec, studies, hybrid, per-criterion review, revision - on one subject, so the new references can be evaluated as instructions rather than descriptions.

## 2. Required State

Create a portrait artwork (3:4) of a **blonde female TV presenter with grey eyes, on air**: a recognizable woman with long blonde hair, grey eyes, studio framing and a microphone or earpiece. She must read as a presenter, not as a generic portrait.

Produce separate studies of the same subject in:

- [Swiss Style poster](../../../reference/visual_styles/swiss_style_poster/README.md)
- [Fukuda negative space poster](../../../reference/visual_styles/fukuda_negative_space/README.md)
- [Kruger image-text montage](../../../reference/visual_styles/kruger_image_text/README.md)

Then create a hybrid of **Swiss Style + Kruger montage**. The Swiss grid governs the layout; the Kruger red text bars sit on that grid and cross the presenter. Fukuda remains an independent study and is not an influence on the hybrid.

All artwork is original vector work. No raster photography, no external assets, no logos or watermarks.

## 3. Acceptance Criteria

- [ ] **AC-01:** Three single-style studies exist at 3:4 portrait ratio and each clearly depicts a blonde female presenter with grey eyes, studio framing and a microphone or earpiece.
- [ ] **AC-02:** The Swiss study uses an inferable modular grid, one sans-serif family, at most three flat colors, geometric primitives, an asymmetric balance and at least a third of the field left empty.
- [ ] **AC-03:** The Fukuda study is a two-value figure-ground image with two distinct readings of the same area, at most three flat shapes, no gradient or texture, and it survives a 180-degree turn.
- [ ] **AC-04:** The Kruger study is a black-and-white image layer with white bold italic type inside solid red rectangles; a bar crosses the subject; the phrase is a short declarative statement addressed to the viewer.
- [ ] **AC-05:** The hybrid is clearly the same presenter and combines the Swiss grid with the Kruger red text bars.
- [ ] **AC-06:** In the hybrid every red bar is aligned to a grid column and at least one bar crosses the subject; no bar floats outside the grid.
- [ ] **AC-07:** The hybrid stays within the Swiss palette (flat colors only, no gradients) while keeping the Kruger contrast of red, white and greys.
- [ ] **AC-08:** No study contains photographic raster imagery, external references or embedded fonts.
- [ ] **AC-09:** No study contains a logo or watermark; any type is legible at the stated size.
- [ ] **AC-10:** The spec, implementation method, artwork files, a per-criterion review and a revised hybrid are preserved in this test.
- [ ] **AC-11:** The revised hybrid (v2) resolves every failed criterion recorded for v1.

## 4. Analysis

**Compatible properties:** Swiss Style and the Kruger montage both treat the poster as an assertive statement: a strict layout, a reduced palette and type used as a compositional block. The Swiss grid supplies the columns that the Kruger bars need in order to look placed rather than pasted; the Kruger photograph supplies the human subject the grid otherwise lacks.

**Conflicts:** Swiss Style forbids photographic texture and prefers abstract geometry, while Kruger is built on a photographic layer. The hybrid resolves this by rendering the presenter as a flat, posterized silhouette with grey separation instead of a raster photograph. Swiss typography is quiet and functional; Kruger type is loud and declarative, so the hybrid keeps one Kruger phrase and no additional labels.

The Fukuda study is an independent comparator: its figure-ground reversal is incompatible with a legible single portrait and is not carried into the hybrid.

## 5. Proposed Solution

Author each study as a hand-written, self-contained SVG built from primitives: circles, paths, rectangles and text. Keep every file editable and free of external references. Implement the hybrid twice - v1 follows the spec as written, v2 fixes whatever the review records as failed.

## 6. ToDo

- [ ] Create three single-style studies.
- [ ] Create hybrid v1.
- [ ] Check every Acceptance Criterion against the artwork.
- [ ] Revise failed criteria and verify v2.
- [ ] Save artwork, method and review.

## 7. Implementation Verification

- **Method:** original procedural SVG, see [IMPLEMENTATION.md](IMPLEMENTATION.md).
- **Artwork:** [three studies](README.md), [v1](images/04-hybrid-v1.svg), [v2](images/05-hybrid-v2.svg).
- **Evidence:** [REVIEW.md](REVIEW.md) checks each criterion against the file.
