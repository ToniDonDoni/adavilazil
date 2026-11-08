# SPEC-006 Implementation: Piranesi, Korin and Nees Presenter

**Task:** [0001 — Future Style List](../../../Tasks/0001-FUTURE-STYLE-LIST.md).

**Change:** [PR #4](https://github.com/ToniDonDoni/adavilazil/pull/4). **Experiment:** Piranesi, Korin and Nees presenter / SPEC-006.

**Document purpose:** Generation procedure, exact inputs and image lineage.

**Acceptance authority:** [SPEC-006](SPEC-006-PIRANESI-KORIN-NEES-TV-PRESENTER.md).

**Results and navigation:** [experiment overview](README.md).

Skill: [Explore Visual Styles v2.3.0 snapshot](snapshots/EXPLORE-VISUAL-STYLES-PIRANESI-KORIN-NEES.md). Reference revision: `9eeea3914787f8b788735d23af50b3a9de7d21dc`.

## Method

All eight images used the built-in `image_gen` tool: four separate generation calls followed by four edit calls. User-specified subject: a female television presenter with blonde hair and gray eyes. A bob, jacket, microphone, cue card, desk and studio camera make the role visually testable.

The user's screenshot documented the prior PR audit; it was not an image-generation reference. No real person's photograph or identity was used.

No model version or seed was exposed by the tool. Prompts and reference files reproduce the procedure, not identical pixels. No result was manually painted, programmatically composited or geometrically repaired after generation. The preserved PNGs are unmodified outputs.

## Exact Inputs and Lineage

Every call used `transparent_background: false`.

| Call | Exact prompt | Input image | Output |
| --- | --- | --- | --- |
| 1 | [Piranesi v1](prompts/01-PIRANESI.md) | None | [Piranesi v1](images/01-piranesi-v1.png) |
| 2 | [Korin v1](prompts/02-KORIN.md) | None | [Korin v1](images/02-korin-v1.png) |
| 3 | [Nees v1](prompts/03-NEES.md) | None | [Nees v1](images/03-nees-v1.png) |
| 4 | [Hybrid v1](prompts/04-HYBRID-PIRANESI-KORIN-NEES-V1.md) | None | [Hybrid v1](images/04-hybrid-piranesi-korin-nees-v1.png) |
| 5 | [Piranesi v2](prompts/05-PIRANESI-V2.md) | 01-piranesi-v1.png | [Piranesi v2](images/05-piranesi-v2.png) |
| 6 | [Korin v2](prompts/06-KORIN-V2.md) | 02-korin-v1.png | [Korin v2](images/06-korin-v2.png) |
| 7 | [Nees v2](prompts/07-NEES-V2.md) | 03-nees-v1.png | [Nees v2](images/07-nees-v2.png) |
| 8 | [Hybrid v2](prompts/08-HYBRID-PIRANESI-KORIN-NEES-V2.md) | [Hybrid v1 input](images/04-hybrid-piranesi-korin-nees-v1.png) | [Hybrid v2](images/08-hybrid-piranesi-korin-nees-v2.png) |

For a new generation, send only the text inside the prompt file's `text` code fence as `prompt` (exclude its navigation metadata), with no reference-image argument. For an edit, send the prompt and the locally resolved input PNG through `referenced_image_paths`. No machine-specific path is part of this recipe.

## Verification

Inspect the full image, then the eyes, props and display at native resolution. Apply only the scopes declared in the spec. Review tables are an evaluation checklist, not assumed results for a new generation. Preserve attempts and record partial/fail rather than relaxing criteria.

[MANIFEST-PIRANESI-KORIN-NEES.json](MANIFEST-PIRANESI-KORIN-NEES.json) inventories artifact paths relative to this test, byte sizes and SHA-256 hashes, plus PNG dimensions. It is not a visual-fidelity test.

## Saved Inputs

The snapshots directory belongs only to this Piranesi, Korin and Nees experiment. Its skill and template files are archived inputs, not new shared skills or templates. The pre-generation specification retains its original SPEC-003 identifier; the active specification is SPEC-006. The criteria are unchanged.
