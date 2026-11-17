# Explore Visual Styles

**Version:** 2.4.0

**Inspired by:** https://youtu.be/ftugIJ-NPEs

**Goal:** Build repeatable visual languages through spec-driven development.

1. Choose one subject and several [reference styles](../reference/visual_styles/) using the [style template](../engineering/STYLE-TEMPLATE.md).
2. Analyze their Style Requirements, identify compatible and conflicting properties, and decide which styles to combine.
   - Propose a color solution based on the best-fitting [Color Rules](../engineering/COLOR-RULES.md). Document the decision in the spec.
   - Propose a composition solution based on the best-fitting [Composition Rules](../engineering/COMPOSITION-RULES.md). Document the decision in the spec.
3. Define the task **declaratively** using [SPEC-TEMPLATE.md](../engineering/SPEC-TEMPLATE.md). Specify the Required State and derive **Acceptance Criteria** for individual style studies and the combined result.
4. Implement the individual style studies **according to the spec**; preserve and compare the outputs.
5. **Implement the combined visual result according to the spec.** Generative and procedural methods are both valid, including static images and animations.
6. Verify **every applicable Acceptance Criterion in the spec** against the actual results. Record pass / partial / fail with evidence under Implementation Verification.
7. Address unmet Acceptance Criteria, implement a revision and verify again. Save the spec, implementation inputs or code, visual outputs and verification in the test.

**Documentation:** Cite the skill version in each spec; record any prompts used in the test.

[Example: Kuindzhi x Lalique — Abyssal Garden](../test/explore_visual_styles/kuindzhi_lalique_abyssal_garden/README.md).
