# Explore Visual Styles

**Version:** 2.1.2

**Inspired by:** https://youtu.be/ftugIJ-NPEs

**Goal:** Build reusable visual languages from testable Style Requirements.

1. Choose one subject and three [reference styles](../reference/visual_styles/) structured using the [style template](../engineering/STYLE-TEMPLATE.md).
2. Define the test **declaratively** using [SPEC-TEMPLATE.md](../engineering/SPEC-TEMPLATE.md). Derive Acceptance Criteria from the applicable Style Requirements.
3. Generate the same subject **according to each style's Style Requirements**. Save the three images and review their compliance.
4. Choose two styles. Compare **which Style Requirements combine**, resolve conflicts and define the hybrid requirements.
5. Write a prompt from the combined Style Requirements and generate v1.
6. Check the image against **every Style Requirement** (pass / partial / fail with evidence).
7. Revise failed or partial criteria, generate v2 and check again. Preserve prompts, images and findings in the test.

**Recommendation:** Include the skill version used in each test prompt.

[Example: test3](../test/explore_visual_styles/test3/README.md).
