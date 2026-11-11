# SPEC-007: AI-Free Programming: Beyond the Algorithm

**Skill:** [Explore Visual Styles v2.3.0](../../../skills/EXPLORE-VISUAL-STYLES.md)
**Template:** [SPEC-TEMPLATE.md](../../../engineering/SPEC-TEMPLATE.md)
**Artists:** [Gustave Dore, nineteenth-century engraved sublime](../../../reference/visual_styles/dore_dante_engraving/README.md) and [Karl Sims, 1990 procedural emergence](../../../reference/visual_styles/sims_panspermia_procedural_life/README.md)
**V1 generator (user-reported):** ChatGPT "GPT Images 2". Internal/API model identifier not exposed.
**Initial planned API model:** `gpt-image-2.5-flare` (planning metadata only; not verified as the V1 runtime model).
**Output target:** PNG, portrait 1024 x 1536.
**Status:** both user-supplied original images visually inspected; V1 and V2 reviews completed. The supplied PNG attachments are committed to GitHub; AC-11 remains partial because the exact V2 runtime model ID is unknown.

## 1. Problem and Current State

Two previously absent backlog references (FS-065 and FS-253) were added to this repository. This experiment tests whether their complementary general principles can express an original idea: AI frees programming from purely utilitarian software production, turning code into a medium for investigating nature and creating possible worlds. Do not recreate an existing work or closely imitate a living artist's distinctive style.

## 2. Required State

Create one original hybrid V1 showing a small human investigator at the threshold of an immense imagined world. A symbolic code seed visibly develops into varied, branching speculative life integrated into the terrain. Preserve the dramatic spatial organization of nineteenth-century engraving and the abstract concept of computational emergence in one coherent portrait poster. The exact artwork title is **AI-Free Programming: Beyond the Algorithm**.

After inspecting the actual V1 image, derive one targeted V2 prompt from the observed partial/failed criteria. Retain both prompts and both images if uploaded. Standalone artist studies are out of scope for this experiment; assess both artists' contributions in the unified hybrid.

## 3. Acceptance Criteria

These criteria were fixed before V1 generation. Check completion using actual visual evidence, not compliance asserted in the prompt.

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

[STYLE-ANALYSIS.md](STYLE-ANALYSIS.md) contains the consolidated R1-R11 list with origin, compatibility, conflicts and rationale. Dore contributes spatial experience and discovery; Sims contributes systems that turn simple code-like rules into novel forms. Neither provides a composition to copy.

## 5. Proposed Solution

1. V1 used the original custom body in [01-HYBRID-V1.md](prompts/01-HYBRID-V1.md); the user reported running it in ChatGPT "GPT Images 2". The previous `03-HYBRID-V1.md` link refers to the same prompt body before the prompt-only cleanup.
2. Real V1 was inspected. [REVIEW-V1.md](REVIEW-V1.md) documents observable evidence, specific partial criteria, image dimensions and source checksum.
3. The **new [02-HYBRID-V2.md](prompts/02-HYBRID-V2.md) prompt was written after that inspection**, targeting weak rule-to-growth legibility and the otherwise magical seed. It preserves V1's successful spatial scale, hatching and title.
4. The user generated V2 from [02-HYBRID-V2.md](prompts/02-HYBRID-V2.md). [REVIEW-V2.md](REVIEW-V2.md) compares both real PNGs against the same criteria. The originals are identified by filenames and SHA-256 in [GENERATION-PLAN.md](GENERATION-PLAN.md). The supplied PNG attachments are archived at the paths listed in [GENERATION-PLAN.md](GENERATION-PLAN.md).

## 6. ToDo

- [x] Add two new sourced artist references and update the catalog/backlog.
- [x] Select and justify consolidated requirements.
- [x] Save exactly one first-generation prompt.
- [x] Inspect the user-supplied V1 image and document actual visual results.
- [x] Derive and save the V2 prompt from observed partial criteria.
- [x] Commit the supplied V1 PNG to the repository.
- [x] Inspect the user-supplied V2 PNG and record its image hash.
- [x] Compare both results and write an evidence-based [V2 review](REVIEW-V2.md).
- [x] Commit the supplied V2 PNG to the repository.
- [ ] Complete repository asset and model-provenance inventory.

## 7. Implementation Verification

[REVIEW-V1.md](REVIEW-V1.md) records **7 pass / 4 partial / 0 fail**. Specifically AC-07, AC-08, AC-10 and AC-11 are partial in V1. [REVIEW-V2.md](REVIEW-V2.md) records **8 pass / 3 partial / 0 fail** for the user-supplied V2 image: AC-07 improved to pass while AC-08, AC-10 and AC-11 remain partial. The supplied PNG attachments are in the branch; AC-11 remains partial because the V2 runtime model identifier is unavailable, and no final package acceptance is claimed.
