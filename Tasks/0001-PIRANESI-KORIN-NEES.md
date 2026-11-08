# Task 0001 Execution Record: Piranesi, Korin and Nees

**Parent task:** [0001 — Future Style List](0001-FUTURE-STYLE-LIST.md).

**Delivery:** [PR #4](https://github.com/ToniDonDoni/adavilazil/pull/4), targeting `main`.

**Experiment:** [test8 / SPEC-006 — blonde gray-eyed television presenter](../test/explore_visual_styles/test8/README.md).

**Status:** research and two visual iterations delivered for review; full visual acceptance remains unmet (31 pass / 1 partial / 1 fail).

## Requested Work

Select three candidates from Task 0001, research them online, add references using the style template, remove those candidates from the backlog, and deliver through a PR based on main. Review the reference requirements for completeness and verifiability.

The follow-up request adds a practical Explore Visual Styles experiment using the added styles and a fictional adult female television presenter with blonde hair and gray eyes. Preserve the skill version, specification, exact prompts, generated results, review, revised results and repeated review in the repository.

This file records that specific batch and follow-up; it does not mark the whole Task 0001 backlog complete or describe experiments contributed in other PRs.

## Selected Candidates and Research Deliverables

| Candidate | Researched style | Reference review |
| --- | --- | --- |
| FS-061 | [Piranesi: Carceri](../reference/visual_styles/piranesi_carceri/README.md) | [Task 0001 reference audit](../test/style_reference_review/REVIEW-TASK-0001-PIRANESI-KORIN-NEES.md) |
| FS-096 | [Ogata Korin: Irises](../reference/visual_styles/korin_irises/README.md) | Same audit |
| FS-236 | [Georg Nees: Schotter](../reference/visual_styles/nees_schotter/README.md) | Same audit |

## Experiment and Evidence

| Artifact | Purpose |
| --- | --- |
| [Explore Visual Styles v2.3.0](../test/explore_visual_styles/test8/snapshots/EXPLORE-VISUAL-STYLES.md) | Saved skill used for this experiment |
| [SPEC-006](../test/explore_visual_styles/test8/SPEC-006-TV-PRESENTER.md) | Required state, style conflicts, scopes and acceptance criteria |
| [Implementation and prompt/output map](../test/explore_visual_styles/test8/IMPLEMENTATION.md) | Eight exact prompts, input-image lineage and corresponding output links |
| [Visual comparison](../test/explore_visual_styles/test8/README.md) | Three individual studies and a hybrid, each before and after revision |
| [V1 review](../test/explore_visual_styles/test8/REVIEW-SPEC-006-V1.md) | Initial findings and revision targets: 26 pass / 5 partial / 2 fail |
| [V2 review](../test/explore_visual_styles/test8/REVIEW-SPEC-006-V2.md) | Repeated evaluation: 31 pass / 1 partial / 1 fail |
| [Current review index](../test/explore_visual_styles/test8/REVIEW-SPEC-006.md) | Entry point for acceptance status |
| [Manifest](../test/explore_visual_styles/test8/MANIFEST.json) | Artifact hashes, sizes and image dimensions |

N1 remains partial in the Nees application because square sizes vary, and fails in the hybrid because several outlines are broken or non-square. The completed production/review loop is not evidence of full visual acceptance. Reviews are author self-reviews, not independent approval.
