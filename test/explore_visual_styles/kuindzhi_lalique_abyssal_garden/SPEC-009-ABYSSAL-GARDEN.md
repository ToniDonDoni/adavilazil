# SPEC-009: Moonlit Enamel Abyssal Garden

**Skill:** [Explore Visual Styles 2.3.0](../../../skills/EXPLORE-VISUAL-STYLES.md)  
**Template:** [SPEC-TEMPLATE](../../../engineering/SPEC-TEMPLATE.md)

## 1. Problem and Current State

The earlier [Abyssal Garden WebGPU aquarium](https://github.com/ToniDonDoni/abyssal-garden-gpt62-sol-high-tst) is procedurally animated and navigable but has no explicit two-artist treatment. The new test must ground the work in the repository's visual reference framework. Three backlog candidates are absent from the established catalog.

## 2. Required State

Register and study **FS-153 Arkhip Kuindzhi**, **FS-225 René Lalique** and **FS-209 Yuri Norstein** (with Francheska Yarbusova's contribution acknowledged). Create three independent original visual studies of one invented underwater scene, then select **exactly Kuindzhi and Lalique** for one original interactive WebGPU hybrid, stored as a single self-contained `index.html` in this test. The atmosphere uses Kuindzhi-like darkness and a primary cool-light source, while biomorphic material uses Lalique-like opalescent enamel, veins and pearl glints. Preserve source, prompts, studies, visual reviews and their limitations.

## 3. Acceptance Criteria

- [x] **AC-01 References:** Three newly added styles originate in Task 0001, use every six-section style-template heading, state visually testable requirements and cite credible art sources.
- [x] **AC-02 Shared subject:** The three original SVG studies and hybrid SVG all contain the same clearly identifiable underwater canyon, kelp, sunken ship, stone fluke and living creatures.
- [x] **AC-03 Selection:** Exactly two styles are implemented in the live hybrid, Kuindzhi and Lalique; Norstein is an unselected comparison, not secretly counted as a third.
- [x] **AC-04 Dark field:** The hybrid is substantially darker than the Lalique and Norstein studies; matte rock and wood remain dark rather than evenly cyan lit.
- [x] **AC-05 Focus and light path:** One concentrated cool light is brighter than the surrounding dark water, with a continuous tapering cool beam/path.
- [x] **AC-06 Three-plane depth:** Overlapping canyon and kelp, a navigable mid-scene ship/fluke and distant blue mist offer near/middle/far separation and negative space.
- [ ] **AC-07 Opalescence:** Selected coral/foliage and manta-like forms vary between cool teal, violet and pink; shaders depend on facing angle and animated phase.
- [ ] **AC-08 Gold filigree:** Thin warm-gold boundary/vein strokes on selected organic forms remain secondary to the cool light and are absent from matte geology.
- [x] **AC-09 Jewel glints:** A few concentrated pearls/sparkles appear on flora and fauna, not as uniform glare over all surfaces.
- [x] **AC-10 Integration:** One unified 3D view combines atmospheric lighting and enamel-like material rather than a pasted poster overlay or side-by-side studies.
- [ ] **AC-11 Self-contained controls:** One `index.html` uses WebGPU/WGSL, procedural scene, WASD/mouse/Q/E/Shift fly-camera and no external textures/models/engines.

## 4. Analysis

[STYLE-ANALYSIS](STYLE-ANALYSIS.md) compares compatible and conflicting requirements and maps them to [composition rules](../../../engineering/COMPOSITION-RULES.md) and [color rules](../../../engineering/COLOR-RULES.md).

## 5. Proposed Solution

Use the initial WebGPU page as a baseline. Make three same-subject static style studies, choose the two strongest complementary treatments, then update background, fog, terrain illumination, flora and creature shader materials. Preserve original geometry/camera controls. View the SVGs and the rendered page side by side; assess light hierarchy, color, composition and materials directly. Repair any detected failures without weakening acceptance rules.

## 6. ToDo

- [x] Register three researched reference entries.
- [x] Produce three SVG style studies and a hybrid composition study.
- [x] Modify and preserve one self-contained WebGPU `index.html`.
- [x] Inspect the rendered SVGs and page against the artistic requirements.
- [x] Record per-criterion results and limitations.
- [x] Open a pull request after the visual results are reviewed.

## 7. Implementation Verification

See [REVIEW.md](REVIEW.md) for visible observations and remaining partial criteria. The review distinguishes still-image appearance from unobserved animation and interaction.
