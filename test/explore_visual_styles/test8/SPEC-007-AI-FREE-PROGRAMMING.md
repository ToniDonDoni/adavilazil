# SPEC-007: AI-Free Programming: Beyond the Algorithm

**Skill:** [Explore Visual Styles v2.3.0](../../../skills/EXPLORE-VISUAL-STYLES.md)
**Template:** [SPEC-TEMPLATE.md](../../../engineering/SPEC-TEMPLATE.md)
**Artists:** [Gustave Dore, nineteenth-century engraved sublime](../../../reference/visual_styles/dore_dante_engraving/README.md) and [Karl Sims, 1990 procedural emergence](../../../reference/visual_styles/sims_panspermia_procedural_life/README.md)
**Planned generator:** OpenAI GPT Image, API model ID `gpt-image-2.5-flare` (not run)
**Output target:** PNG, portrait 1024 x 1536
**Status:** exactly one V1 generation prompt exists. No images or reviews yet.

## 1. Problem and Current State

The project has now added two previously absent backlog references (FS-065 and FS-253). This experiment tests whether their complementary general principles can express an original idea: AI frees programming from purely utilitarian software production, turning code into a medium for investigating nature and creating possible worlds. Do not recreate an existing work or closely imitate a living artist's distinctive style.

## 2. Required State

Create **one original hybrid V1** showing a small human investigator at the threshold of an immense imagined world. A symbolic code seed visibly develops into varied, branching speculative life integrated into the terrain. Preserve the dramatic spatial organization of nineteenth-century engraving and the abstract concept of computational emergence in one coherent portrait poster. The exact artwork title is **AI-Free Programming: Beyond the Algorithm**.

**Current boundary:** only [01-HYBRID-V1.md](prompts/01-HYBRID-V1.md) is authorized as a generation prompt. **Do not write a V2 prompt before reviewing the actual V1 image.** Standalone artist studies are out of scope for this one-image phase; the hybrid must nevertheless be tested against both documented contributions.

## 3. Acceptance Criteria

The following criteria apply to the real hybrid V1 image. They are not marked as passed until observable evidence is recorded.

- [ ] **AC-01 Unified composition:** one coherent 2:3 portrait poster, not separate panels or a collage.
- [ ] **AC-02 Fixed subject:** a recognizable human investigator, one symbolic code seed and an original environment are visible.
- [ ] **AC-03 Dore scale and depth:** the investigator is small against monumental terrain, with distinct foreground, middle and distant layers.
- [ ] **AC-04 Dore light and mark-making:** a luminous threshold, dark tonal masses and inspectable directional hatch-like terrain marks appear.
- [ ] **AC-05 Sims emergence:** the code seed visibly connects to a growing speculative ecological system rather than floating independently.
- [ ] **AC-06 Sims variation:** at least three connected branches show distinct directions, scales or structural details.
- [ ] **AC-07 Growth and integration:** an understandable simple-to-complex progression follows the same perspective as the terrain.
- [ ] **AC-08 Concept:** exploration of nature and worldmaking is communicated without office software, productivity dashboards, stock AI robots or branding.
- [ ] **AC-09 Exact title:** the image legibly reads 'AI-Free Programming: Beyond the Algorithm' without spelling or punctuation errors.
- [ ] **AC-10 Originality:** identifiable Dore plates, Sims film frames and signature life forms are not copied; compare actual output with sourced references.
- [ ] **AC-11 Provenance and evaluation:** save the PNG, exact executed prompt, actual model identifier (or disclose if hidden), and an evidence-based pass/partial/fail review before declaring the experiment evaluated.

## 4. Analysis

[STYLE-ANALYSIS.md](STYLE-ANALYSIS.md) documents the single consolidated R1-R11 list, identifying each selected artistic principle, the artist behind it, why it belongs, compatibility and conflicts. Dore supplies the grandeur of exploration; Sims supplies rule-driven emergence and variation. The new work supplies its own subject and composition.

## 5. Proposed Solution

1. Generate hybrid V1 from the **single exact custom prompt** in [01-HYBRID-V1.md](prompts/01-HYBRID-V1.md), using planned model `gpt-image-2.5-flare`.
2. Save the actual image as `images/01-HYBRID-V1.png`; record model and artifact provenance.
3. Inspect V1 at full view and title-detail scale. Review every AC using [REVIEW-TEMPLATE.md](REVIEW-TEMPLATE.md) with actual evidence and pass/partial/fail statuses.
4. **Only after that review**, create a new, targeted V2 prompt addressing observed defects. Preserve V1 and the first prompt; generate V2 and compare it in a later change.

No V2 prompt or image is part of the current proposal.

## 6. ToDo

- [x] Add two new sourced artist references and update the catalog/backlog.
- [x] Select and justify consolidated requirements.
- [x] Write a declarative specification and criteria.
- [x] Save exactly one executable custom prompt for hybrid V1.
- [ ] Generate V1 and preserve its actual image and model information.
- [ ] Inspect V1 against every acceptance criterion.
- [ ] Write and save an evidence-based V1 review.
- [ ] Derive and save a V2 prompt from the observed V1 shortcomings.
- [ ] Generate V2 and compare both results in a subsequent update.

## 7. Implementation Verification

**Not started.** No image is committed and no acceptance criterion has been visually verified. The next prompt will be created only after the real first image has been inspected.
