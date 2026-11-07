# Explore Visual Styles

**Version:** 2.2.0

**Inspired by:** https://youtu.be/ftugIJ-NPEs

**Goal:** Build reusable visual languages from testable Style Requirements.

1. Choose one subject and several [reference styles](../reference/visual_styles/) structured using the [style template](../engineering/STYLE-TEMPLATE.md).
2. Define the task **declaratively** using [SPEC-TEMPLATE.md](../engineering/SPEC-TEMPLATE.md). Derive Acceptance Criteria from the applicable Style Requirements.
3. Implement the same subject separately according to each style's Style Requirements. Save each visual artifact and review its compliance.
4. Choose two styles. Compare **which Style Requirements combine**, resolve conflicts and define the hybrid requirements in the spec.
5. **Implement v1 according to the spec.** Use generative or procedural methods; static visuals and animations are both valid.
6. Check the result against **every applicable Acceptance Criterion** (pass / partial / fail with evidence).
7. Revise failed or partial results, implement v2 and check again. Preserve the spec, implementation inputs or code, outputs and reviews in the test.

**Recommendation:** Record the skill version and any prompts used in each test.

[Example: test3](../test/explore_visual_styles/test3/README.md).
