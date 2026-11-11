# SPEC-007: AI-Free Programming: Beyond the Algorithm

**Skill:** [Explore Visual Styles v2.3.0](../../../skills/EXPLORE-VISUAL-STYLES.md)
**Template:** [SPEC-TEMPLATE.md](../../../engineering/SPEC-TEMPLATE.md)
**Selected references:** [Gustave Dore: Dante Engraving](../../../reference/visual_styles/dore_dante_engraving/README.md) and [Karl Sims: Panspermia](../../../reference/visual_styles/sims_panspermia_procedural_life/README.md)
**Target image model:** OpenAI GPT Image, API model identifier **gpt-image-2.5-flare** (planned, not executed).
**Target artifact:** PNG, 1024 x 1536, portrait 2:3. Generator should be called once per prompt; record returned model and any deviations.
**Status:** prompt-only preparation. No images have been generated or evaluated.

## 1. Problem and Current State

The future-style backlog contains two unpromoted candidates: nineteenth-century Dore (FS-065) and late-twentieth-century Sims (FS-253). This experiment explores their complementary artistic principles to challenge the purely utilitarian concept of software development. Unlike an office-code advertisement, the new work must suggest that AI releases programming to become a medium for investigating nature and creating possible worlds.

## 2. Required State

Produce two individual style studies of a single fixed subject (a human investigator tracing a symbolic code seed into an invented world), then a unified hybrid V1 and a targeted V2 revision. In the final hybrid, an explorer approaches a luminous threshold in a vast engraved landscape; a small abstract code seed branches into a richly varied speculative ecosystem that continues through the same physical space. The image must make exploration and worldmaking, not software production, its subject.

The title is **AI-Free Programming: Beyond the Algorithm**. Include it legibly on the hybrid artwork as a modest independently designed text lockup, avoiding any other readable writing. Do not reproduce particular artworks, movie frames or distinctive forms.

## 3. Acceptance Criteria

For each completed image, evaluate only its declared scope. Individual-style studies and hybrid versions must be retained separately.

- [ ] **AC-01 Subject invariance:** both studies and both hybrid versions show a recognizable human investigator, symbolic code seed, and an invented environment; the underlying concept does not change.
- [ ] **AC-02 Dore baseline:** the historic study clearly has tiny explorer/immense terrain scale, three spatial layers, dramatic dark/light threshold and varied engraving-like hatching.
- [ ] **AC-03 Sims baseline:** the procedural study clearly shows a simple initiating structure, non-identical branches and a traceable spread toward complex invented life forms.
- [ ] **AC-04 Single integrated hybrid:** the hybrid is one continuous artwork, not a triptych, split panel, or a photograph with a separately pasted procedural illustration.
- [ ] **AC-05 R1-R2:** the hybrid shows a small explorer dwarfed by a deep layered landscape.
- [ ] **AC-06 R3-R4:** the hybrid contains a clear luminous threshold and discernible directional engraved lines on chosen terrain surfaces.
- [ ] **AC-07 R5:** a single identifiable abstract code seed visibly connects to an emerging ecological network.
- [ ] **AC-08 R6-R7:** at least three visibly different branches and an intelligible simple-to-complex growth progression are identifiable.
- [ ] **AC-09 R8:** branches visibly belong to the depicted terrain and follow its spatial depth rather than floating as a disconnected overlay.
- [ ] **AC-10 R9:** the artwork reads as exploration of natural processes and worldmaking, without office screens, business dashboards, logos or stock AI robots.
- [ ] **AC-11 R10:** the hybrid title reads exactly 'AI-Free Programming: Beyond the Algorithm', without missing or invented letters.
- [ ] **AC-12 R11:** no copied artist composition, specific film still, recognizable Sims creature or recognizable Dore plate is used; author checks against the documented references.
- [ ] **AC-13 Reproducibility:** complete prompts, intended/actual model, generated image files, per-criterion V1/V2 reviews and revision notes are stored in this test before claiming completion.

## 4. Analysis

[STYLE-ANALYSIS.md](STYLE-ANALYSIS.md) contains the consolidated R1-R11 list with origin, compatibility, conflicts and selection rationale. Dore contributes spatial experience and discovery; Sims contributes systems that turn simple code-like rules into novel forms. Neither provides a composition to copy.

## 5. Proposed Solution

Run [01-DORE-STUDY.md](prompts/01-DORE-STUDY.md), [02-SIMS-STUDY.md](prompts/02-SIMS-STUDY.md), then [03-HYBRID-V1.md](prompts/03-HYBRID-V1.md). Inspect the resulting image pixels at full view and title-detail zoom. Record pass / partial / fail for each applicable AC in [REVIEW-TEMPLATE.md](REVIEW-TEMPLATE.md). Update the conditional candidate [04-HYBRID-V2-CANDIDATE.md](prompts/04-HYBRID-V2-CANDIDATE.md) based on actual V1 failures and then generate V2. Preserve V1 and V2 rather than replacing either.

Custom generation prompts are exact standalone bodies in the linked prompt files. Image model target: **gpt-image-2.5-flare**. Intended output names are recorded in [GENERATION-PLAN.md](GENERATION-PLAN.md).

## 6. ToDo

- [x] Research two previously unadded backlog artists and create both style references.
- [x] Consolidate selected principles and write acceptance criteria.
- [x] Save exact prompts for both studies and hybrid V1.
- [x] Save a provisional V2 prompt that can be amended after observed feedback.
- [ ] Generate and preserve both individual style studies.
- [ ] Generate and preserve hybrid V1 and document actual failures.
- [ ] Adapt the V2 prompt based on those failures and preserve the exact final V2 prompt.
- [ ] Generate and preserve hybrid V2; inspect, compare and review every criterion.
- [ ] Complete artifact and model-provenance inventory.

## 7. Implementation Verification

**Not started.** This PR deliberately contains no generated images. The criterion checkboxes above are unverified, not failed and not passed. No first-pass review, revised-prompt effectiveness, or final acceptance score can be asserted without real images. See [REVIEW-TEMPLATE.md](REVIEW-TEMPLATE.md) and [CHECKLIST.md](CHECKLIST.md).
