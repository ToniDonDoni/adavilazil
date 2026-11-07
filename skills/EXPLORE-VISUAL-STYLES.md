# Explore Visual Styles

Goal: make a reusable visual language, not a filter.

1. Choose one subject and 3 styles from [references](../reference/visual_styles/). Study their origins and examples.
2. **Before prompting**, write a per-style analysis of light, color, form, line, space, composition, texture and emotion. Save as `style_analysis.md`.
3. Generate the same subject separately in all 3 styles and compare results. Preserve the outputs.
4. Select 2 styles. Identify their **shared principle**; derive explicit hybrid rules from the analysis and observable acceptance criteria in `rules.md`.
5. Generate v1 from the saved prompt. Inspect the **actual image**. Mark every rule pass / partial / fail with visible evidence in `review.md`.
6. Change only the failing rules in the next prompt. Regenerate and audit again; repeat or state remaining gaps.
7. Save all prompts, images, analysis and checklist under `test/explore_visual_styles/testN/`. Never claim an untested step was completed.

[Example and its incomplete steps](../test/explore_visual_styles/test1/).
