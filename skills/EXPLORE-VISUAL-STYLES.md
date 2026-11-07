# Explore Visual Styles

**Version:** 1.0.0

Goal: build a repeatable visual language, not a filter.

1. Choose one subject and three [reference styles](../reference/visual_styles/).
2. **Before writing a prompt**, analyze each style: light, color, form, line, space, composition, texture, emotion. Save `style_analysis.md`.
3. Generate the same subject separately in each style; compare and save all three.
4. Select two styles. Identify their shared principle and **write explicit hybrid rules with observable acceptance criteria** in `rules.md`.
5. Only then write the prompt, noting **skill name and version**, and generate v1.
6. Inspect the actual output; score **every rule** pass / partial / fail with visible evidence in `review.md`.
7. Fix failed or partial rules in a revised prompt; regenerate and recheck. Save each prompt, image, review and checklist under `test/explore_visual_styles/testN/`.

**Required test header:** `Skill: EXPLORE-VISUAL-STYLES | Version: 1.0.0`. Never retroactively relabel a legacy test as performed with a newer version. Don't claim an unperformed step was completed.

[Legacy example and missing steps](../test/explore_visual_styles/test1/).
