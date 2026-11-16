# Explore Visual Styles

**Version:** 2.4.0

**Inspired by:** https://youtu.be/ftugIJ-NPEs

**Goal:** Build repeatable visual languages through spec-driven development.

1. Choose one subject and several [reference styles](../reference/visual_styles/) using the [style template](../engineering/STYLE-TEMPLATE.md).
2. Analyze their Style Requirements, identify compatible and conflicting properties, and decide which styles to combine.
3. **Proposed Color Solution:** select only the best-fitting [Color Rules](../engineering/COLOR-RULES.md). State the palette, distribution, intended effect, and brief rationale in the spec.
4. **Proposed Composition Solution:** select only the best-fitting [Composition Rules](../engineering/COMPOSITION-RULES.md). State the focal point, visual hierarchy, viewing path, and brief rationale in the spec.
5. Define the task **declaratively** using [SPEC-TEMPLATE.md](../engineering/SPEC-TEMPLATE.md). Specify the Required State and derive **Acceptance Criteria** for individual style studies and the combined result.
6. Implement the individual style studies **according to the spec**; preserve and compare the outputs.
7. **Implement the combined visual result according to the spec.** Generative and procedural methods are both valid, including static images and animations.
8. Verify **every applicable Acceptance Criterion in the spec** against the actual results. Record pass / partial / fail with evidence under Implementation Verification.
9. Address unmet Acceptance Criteria, implement a revision and verify again. Save the spec, implementation inputs or code, visual outputs and verification in the test.

**Documentation:** Cite the skill version in each spec; record any prompts used in the test.

[Example: test3](../test/explore_visual_styles/test3/README.md).
