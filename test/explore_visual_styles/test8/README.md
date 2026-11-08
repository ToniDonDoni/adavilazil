# Test 8 / SPEC-006: Piranesi, Korin and Nees — Blonde Gray-Eyed Presenter

**Task:** [0001 / Piranesi, Korin and Nees research and presenter experiment](../../../Tasks/0001-PIRANESI-KORIN-NEES.md).

**Change:** [PR #4](https://github.com/ToniDonDoni/adavilazil/pull/4). **Experiment:** test8 / SPEC-006.

**Document purpose:** Experiment overview and comparison of initial and revised images.

**Acceptance authority:** [SPEC-006](SPEC-006-TV-PRESENTER.md).

**Skill:** [Explore Visual Styles v2.3.0](../../../skills/EXPLORE-VISUAL-STYLES.md) ([saved version](snapshots/EXPLORE-VISUAL-STYLES.md)).

**Specification:** [SPEC-006-TV-PRESENTER.md](SPEC-006-TV-PRESENTER.md).

**Inputs:** [exact prompts and image lineage](IMPLEMENTATION.md).

**Review:** [v1](REVIEW-SPEC-006-V1.md) → [v2](REVIEW-SPEC-006-V2.md).

**Result:** **31 pass / 1 partial / 1 fail**. N1 remains partial in the Nees study and fails in the hybrid; full acceptance is not claimed.

The subject is a fictional adult blonde television presenter with gray eyes. The three references added in PR #4 are tested through separate applications and one combined studio. The previous [documentation audit](../../style_reference_review/REVIEW-TASK-0001-PIRANESI-KORIN-NEES.md) concerns the reference documents; this folder contains the actual generation experiment.

## Individual Studies: Original and Repeated Result

| Study | Initial result | Revised result |
| --- | --- | --- |
| Piranesi | ![Piranesi v1](images/01-piranesi-v1.png) | ![Piranesi v2](images/05-piranesi-v2.png) |
| Korin | ![Korin v1](images/02-korin-v1.png) | ![Korin v2](images/06-korin-v2.png) |
| Nees application | ![Nees v1](images/03-nees-v1.png) | ![Nees v2](images/07-nees-v2.png) |

## Hybrid: Original and Repeated Result

| Initial result | Revised result |
| --- | --- |
| ![Hybrid v1](images/04-hybrid-v1.png) | ![Hybrid v2](images/08-hybrid-v2.png) |

Piranesi governs the architecture, Korin the gold botanical desk fascia, and Nees the bounded studio display. These scopes and conflicts were defined before generation. The Nees study is also a bounded application: the presenter is outside its abstract field.

## What the Test Demonstrated

The revision clarified gray eyes, corrected the Nees-study camera direction and removed the hybrid display's perspective skew. It did **not** completely preserve equal-size closed squares. Successful changes and remaining defects are documented per criterion.

The package preserves eight PNGs, eight exact prompts, the original and completed spec, source snapshots, implementation settings and [artifact hashes](MANIFEST.json). Generation used the built-in image tool; deterministic pixel-identical reproduction is not claimed.
