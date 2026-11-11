# Piranesi, Korin and Nees: Blonde Gray-Eyed Television Presenter

**Task:** [0001 — Future Style List](../../../tasks/0001-FUTURE-STYLE-LIST.md).

**Change:** [PR #4](https://github.com/ToniDonDoni/adavilazil/pull/4). **Experiment:** Piranesi, Korin and Nees presenter / SPEC-006.

**Document purpose:** Experiment overview and comparison of initial and revised images.

**Acceptance authority:** [SPEC-006](SPEC-006-PIRANESI-KORIN-NEES-TV-PRESENTER.md).

**Skill:** [Explore Visual Styles v2.3.0](../../../skills/EXPLORE-VISUAL-STYLES.md) ([saved version](snapshots/EXPLORE-VISUAL-STYLES-PIRANESI-KORIN-NEES.md)).

**Specification:** [SPEC-006-PIRANESI-KORIN-NEES-TV-PRESENTER.md](SPEC-006-PIRANESI-KORIN-NEES-TV-PRESENTER.md).

**Inputs:** [exact prompts and image lineage](IMPLEMENTATION-PIRANESI-KORIN-NEES.md).

**Review:** [v1](REVIEW-PIRANESI-KORIN-NEES-V1.md) → [v2](REVIEW-PIRANESI-KORIN-NEES-V2.md).

**Result:** **31 pass / 1 partial / 1 fail**. N1 remains partial in the Nees study and fails in the hybrid; full acceptance is not claimed.

The subject is a fictional adult blonde television presenter with gray eyes. The three references added in PR #4 are tested through separate applications and one combined studio. The previous [documentation audit](REFERENCE-REVIEW-PIRANESI-KORIN-NEES.md) concerns the reference documents; this folder contains the actual generation experiment.

## Individual Studies: Original and Repeated Result

| Study | Initial result | Revised result |
| --- | --- | --- |
| Piranesi | ![Piranesi v1](images/01-piranesi-v1.png) | ![Piranesi v2](images/05-piranesi-v2.png) |
| Korin | ![Korin v1](images/02-korin-v1.png) | ![Korin v2](images/06-korin-v2.png) |
| Nees application | ![Nees v1](images/03-nees-v1.png) | ![Nees v2](images/07-nees-v2.png) |

## Hybrid: Original and Repeated Result

| Initial result | Revised result |
| --- | --- |
| ![Hybrid v1](images/04-hybrid-piranesi-korin-nees-v1.png) | ![Hybrid v2](images/08-hybrid-piranesi-korin-nees-v2.png) |

Piranesi governs the architecture, Korin the gold botanical desk fascia, and Nees the bounded studio display. These scopes and conflicts were defined before generation. The Nees study is also a bounded application: the presenter is outside its abstract field.

## What the Test Demonstrated

The revision clarified gray eyes, corrected the Nees-study camera direction and removed the hybrid display's perspective skew. It did **not** completely preserve equal-size closed squares. Successful changes and remaining defects are documented per criterion.

The package preserves eight PNGs, eight exact prompts, the original and completed spec, source snapshots, implementation settings and [artifact hashes](MANIFEST-PIRANESI-KORIN-NEES.json). Generation used the built-in image tool; deterministic pixel-identical reproduction is not claimed.

## Research Scope and Archived Inputs

This experiment applies the three references selected for the existing Task 0001. The follow-up request tests them on a blonde, gray-eyed female television presenter with initial generation, review, revision and repeated review.

| Candidate | Reference |
| --- | --- |
| FS-061 | [Piranesi: Carceri](../../../reference/visual_styles/piranesi_carceri/README.md) |
| FS-096 | [Ogata Korin: Irises](../../../reference/visual_styles/korin_irises/README.md) |
| FS-236 | [Georg Nees: Schotter](../../../reference/visual_styles/nees_schotter/README.md) |

All experiment-specific prompts, images, reviews and archived inputs live inside `test/explore_visual_styles/piranesi_korin_nees_tv_presenter/`. The `snapshots/` subdirectory is local to this experiment. Its artist-named skill and template copies preserve the inputs used for these images; the shared skill and template remain in their existing repository locations.
