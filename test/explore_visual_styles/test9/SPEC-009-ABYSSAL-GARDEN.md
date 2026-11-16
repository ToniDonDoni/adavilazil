# SPEC-009: Moonlit Enamel Abyssal Garden

**Skill:** [Explore Visual Styles 2.3.0](../../../skills/EXPLORE-VISUAL-STYLES.md)  
**Template:** [SPEC-TEMPLATE](../../../engineering/SPEC-TEMPLATE.md)

## 1. Problem and Current State

The earlier [Abyssal Garden WebGPU aquarium](https://github.com/ToniDonDoni/abyssal-garden-gpt62-sol-high-tst) is procedurally animated and navigable but has no explicit two-artist treatment. The new test must ground the work in the repository's visual reference framework. Three backlog candidates are absent from the established catalog.

## 2. Required State

Register and study **FS-153 Arkhip Kuindzhi**, **FS-225 René Lalique** and **FS-209 Yuri Norstein** (with Francheska Yarbusova's contribution acknowledged). Create three independent original visual studies of one invented underwater scene, then select **exactly Kuindzhi and Lalique** for one original interactive WebGPU hybrid, stored as a single self-contained `index.html` in this test. The atmosphere uses Kuindzhi-like darkness and a primary cool-light source, while biomorphic material uses Lalique-like opalescent enamel, veins and pearl glints. Preserve source, prompts, studies, reviews and validation.

## 3. Acceptance Criteria

- [ ] **AC-01 References:** Three newly added styles originate in Task 0001, use every six-section style-template heading, state visually testable requirements and cite credible art sources.
- [ ] **AC-02 Shared subject:** The three original SVG studies and hybrid SVG all contain the same clearly identifiable underwater canyon, kelp, sunken ship, stone fluke and living creatures.
- [ ] **AC-03 Selection:** Exactly two styles are implemented in the live hybrid, Kuindzhi and Lalique; Norstein is an unselected comparison, not secretly counted as a third.
- [ ] **AC-04 Dark field:** The hybrid is substantially darker than the Lalique and Norstein studies; matte rock and wood remain dark rather than evenly cyan lit.
- [ ] **AC-05 Focus and light path:** One concentrated cool light is brighter than the surrounding dark water, with a continuous tapering cool beam/path.
- [ ] **AC-06 Three-plane depth:** Overlapping canyon and kelp, a navigable mid-scene ship/fluke and distant blue mist offer near/middle/far separation and negative space.
- [ ] **AC-07 Opalescence:** Selected coral/foliage and manta-like forms vary between cool teal, violet and pink; shaders depend on facing angle and animated phase.
- [ ] **AC-08 Gold filigree:** Thin warm-gold boundary/vein strokes on selected organic forms remain secondary to the cool light and are absent from matte geology.
- [ ] **AC-09 Jewel glints:** A few concentrated pearls/sparkles appear on flora and fauna, not as uniform glare over all surfaces.
- [ ] **AC-10 Integration:** One unified 3D view combines atmospheric lighting and enamel-like material rather than a pasted poster overlay or side-by-side studies.
- [ ] **AC-11 Self-contained controls:** One `index.html` uses WebGPU/WGSL, procedural scene, WASD/mouse/Q/E/Shift fly-camera and no external textures/models/engines.
- [ ] **AC-12 Compile and raster checks:** JS syntax, two WGSL modules, SVG/XML integrity, images, luminance hierarchy and structural scene markers are checked by CI.
- [ ] **AC-13 Reproducibility and disclosure:** Source styles, exact study briefs, previous version, hybrid implementation, test tooling and criterion-by-criterion statuses are preserved; unexecuted GPU tests are labeled unverified.

## 4. Analysis

[STYLE-ANALYSIS](STYLE-ANALYSIS.md) compares compatible and conflicting requirements and maps them to [composition rules](../../../engineering/COMPOSITION-RULES.md) and [color rules](../../../engineering/COLOR-RULES.md).

## 5. Proposed Solution

Use the initial WebGPU page as a baseline. Make three same-subject static style studies, choose the two strongest complementary treatments, then update background, fog, terrain illumination, flora and creature shader materials. Preserve original geometry/camera controls. Rasterize and inspect SVGs; compile WGSL with Naga and check JavaScript in CI; do not infer live GPU appearance from source checks alone. Repair any detected failures without weakening acceptance rules.

## 6. ToDo

- [ ] Register three researched reference entries.
- [ ] Produce three SVG style studies and a hybrid composition study.
- [ ] Modify and preserve one self-contained WebGPU `index.html`.
- [ ] Validate actual SVG raster output and script/shader compilation.
- [ ] Record per-criterion results and limitations.
- [ ] Open a pull request after test results are reviewed.

## 7. Implementation Verification

See [REVIEW.md](REVIEW.md) for the verification ledger and links to rendered studies / GitHub Actions. Visual GPU and interactive controls require a WebGPU-capable browser to claim runtime pass.
