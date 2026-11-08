# Piranesi, Korin and Nees Reference Review

This historical audit covers the reference documents before later catalogue additions. The generated-image experiment, prompts, revisions and per-image acceptance review are in [test8](../explore_visual_styles/test8/README.md). Inventory counts below describe this audit stage, not the current catalogue.

Date: 2026-11-08

Scope: PR #4, three style references, catalogue index and candidate-list changes.

Input revision: `281a4f33eb29beabb43f128f967e62593e3fd6d9`.

Method: author self-review; not an independent reviewer approval.

## Findings and Corrections

| Finding | Correction in this revision |
| --- | --- |
| Schotter's composition rule could require uniform density despite displacement and overlap. | Require the portrait field and margins, explicitly allowing local gaps and dense overlaps. |
| Piranesi's corridor counterexample could be read as a ban on single-point perspective. | Evaluate visible routes and spatial ambiguity; explicitly exclude vanishing-point count as a standalone test. |
| Piranesi's palette rule reduced tonal construction to line density. | Include paper and ink tone as well as linework. |
| Korin's spacing rules could over-isolate every plant clump or discourage legitimate motif repetition. | Permit connected groups and repeated motifs; distinguish them from tiling the entire composition. |
| Korin's paired composition lacked its contrasting relationship to the lower edge. | Add a placement rule for cropped groups versus groups with gold beneath. |
| Schotter's image system could be confused with the physical medium of every impression. | Attribute CAS and Hunter's medium descriptions separately; add the direct V&A object locator with its access limitation. |

## Evidence and Coverage

- [Piranesi reference](../../reference/visual_styles/piranesi_carceri/README.md): the Met object record was reread for architectural scale, spatial ambiguity and the use of several printmaking techniques. The existing Princeton and Morgan sources distinguish early publication from the 1761 revision. The museum source on Escher supports the stated reception; visual comparisons remain labeled as editorial.
- [Korin reference](../../reference/visual_styles/korin_irises/README.md): the Nezu exhibition text was reread for rhythmic grouping, pigment colors and followers. Both screen images linked from the Nezu object page were inspected in the browser. Their different relationships to the lower edge support the added placement rule. This remains a reference to the Nezu pair, not the Met's separate bridge composition.
- [Nees reference](../../reference/visual_styles/nees_schotter/README.md): Hunter's account was reread and its reproduction of the V&A image inspected in the browser. The lower field contains both gaps and overlaps, making uniform local density an inappropriate requirement. The cited reconstruction distinguishes changes in position from changes in angle.

## Verification

- All three entries retain the template's six sections in order.
- Requirements total 26: Piranesi 9, Korin 10, Nees 7. Count is an inventory, not a quality score.
- Each entry covers composition, characteristic forms, surface or mark, palette/value, and a review method with failure examples.
- Requirements use observable comparisons rather than invented historical numeric thresholds. Some artistic judgment remains necessary.
- Candidate inventory: 253 before, 250 after; only FS-061, FS-096 and FS-236 are removed. Other candidate text, order and IDs are preserved.
- The catalogue has seven unique style entries, including exactly three additions.
- Relative Markdown targets and changed-text credential/machine-path checks pass.

## Limits

This is a documentary and reference-image review, not a generated-image experiment or a reconstruction of historical code. Nezu images were sufficient for composition checks, not fine pigment analysis. The V&A Schotter object page remained blocked to the web research tool; CAS supplies the collection/date link and Hunter supplies the attributed reproduction/medium caption. A browser attempt to open the Piranesi reception article failed, so this pass makes no new visual-inspection claim for its plates.

Conclusion: suitable as scoped style references after the corrections above. Fidelity of future generated artwork still needs evaluation against the references.
