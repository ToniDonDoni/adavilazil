# SPEC-006 Review V2: Piranesi, Korin and Nees Presenter

**Task:** [0001 — Future Style List](../../../Tasks/0001-FUTURE-STYLE-LIST.md).

**Change:** [PR #4](https://github.com/ToniDonDoni/adavilazil/pull/4). **Experiment:** Piranesi, Korin and Nees presenter / SPEC-006.

**Document purpose:** Author review of the four revised images; remaining acceptance gaps.

**Acceptance authority:** [SPEC-006](SPEC-006-PIRANESI-KORIN-NEES-TV-PRESENTER.md).

**Results and navigation:** [experiment overview](README.md).

Author visual inspection of the actual saved images, not an independent evaluation. Pass requires visible evidence; partial means not fully established; fail identifies a clear contradiction. Criteria and scopes were fixed before generation.

## Piranesi

Image: [05-piranesi-v2.png](images/05-piranesi-v2.png).

Edited from [01-piranesi-v1.png](images/01-piranesi-v1.png).

| Criterion | Status | Evidence |
| --- | --- | --- |
| S1 | pass | Pale bob and visible neutral-gray irises around dark pupils. In monochrome, blondness is represented by light hair mass, not verified natural pigment. |
| S2 | pass | Microphone, blank card, lower desk and right tripod camera remain intact and appropriately arranged. |
| S3 | pass | No readable text, logo or watermark visible. |
| P1 | pass | Foreground piers, intermediate bridges and far vaults remain; architecture occupies most of the image and towers over the host. |
| P2 | pass | Stonework, beams, ropes and pulley persist; routes disappear behind supports. |
| P3 | pass | Warm tint removed; irregular gray/black hatching and dark/pale depth layers retained. |

Revision scope: Remove warm cast; retain composition and clarify gray irises.

## Korin

Image: [06-korin-v2.png](images/06-korin-v2.png).

Edited from [02-korin-v1.png](images/02-korin-v1.png).

| Criterion | Status | Evidence |
| --- | --- | --- |
| S1 | pass | Golden-blonde bob and clearly neutral light-gray iris rings around dark pupils. |
| S2 | pass | Mic, blank card, green desk and left-facing camera lens remain readable. |
| S3 | pass | No readable text, logo or watermark visible. |
| K1 | pass | Broad divided gold field retains unequal halves and flat space; no room or cast shadows on gold. |
| K2 | pass | Rounded blue petals and long green blades contrast with exposed gold above and within groups. |
| K3 | pass | Group height/spacing variation and flat pigment fills persist. |
| K4 | pass | Lower groups crop at picture edge while upper-right groups leave gold beneath; no bridge/travel scene. |

Revision scope: Change only iris color to neutral silver-gray.

## Nees application

Image: [07-nees-v2.png](images/07-nees-v2.png).

Edited from [03-nees-v1.png](images/03-nees-v1.png).

| Criterion | Status | Evidence |
| --- | --- | --- |
| S1 | pass | Pale blonde bob and neutral-gray irises remain readable. |
| S2 | pass | Left camera now shows a side view with lens pointing right toward the host; mic, card and desk remain. |
| S3 | pass | No readable text or branding. Small camera-control marks do not form legible lettering. |
| N1 | partial | Closure and straight edges improve, but lower squares visibly become larger than top units. Constant-size geometry is not achieved. |
| N2 | pass | Upper alignment transitions into increasing lower displacement and rotation, with gaps and intersections. |
| N3 | pass | Complete tall front-facing field with pale margins and no obstruction. |

Revision scope: Turn camera toward host and repair square closure/size with a sparser requested 6-by-10 field. The count is an implementation aid, not a new acceptance criterion.

## Hybrid

Image: [08-hybrid-piranesi-korin-nees-v2.png](images/08-hybrid-piranesi-korin-nees-v2.png).

Edited from [04-hybrid-piranesi-korin-nees-v1.png](images/04-hybrid-piranesi-korin-nees-v1.png).

| Criterion | Status | Evidence |
| --- | --- | --- |
| S1 | pass | Blonde bob and neutral gray-toned irises remain visible. |
| S2 | pass | Mic, blank card, low desk and inward-facing camera persist. |
| S3 | pass | No readable text, logo or watermark visible. |
| P1 | pass | Large dark supports, middle bridge and pale distant stairs retain scale and depth. |
| P2 | pass | Masonry, beams, ropes and lifting hardware remain, with occluded routes and no simple exit. |
| P3 | pass | Irregular linework and dark/pale separation survive; architectural regions remain monochrome. |
| K2 | pass | Gold fascia, blue petals and narrow green leaves remain legible with exposed gold. |
| K3 | pass | Unequal flower groups remain flat decoration attached to the desk. |
| N1 | fail | Upper outlines improve, but multiple lower units still have broken corners and irregular sides. These are not closed squares; the same failure classification as v1 applies despite the improved display orientation. |
| N2 | pass | Center displacement and angle variation increase downward, yielding gaps and overlaps. |
| N3 | pass | Display now has level edges, a front-facing rectangle, pale margins and no occluding prop. |
| H1 | pass | Decorated desk, mounted display and etched architecture remain one studio. |
| H2 | pass | Presenter and handheld objects remain unobscured. |

Revision scope: Make display front-facing and repair its squares; preserve the rest of the composition.

## Package Criterion

| Criterion | Status | Evidence |
| --- | --- | --- |
| D1 | pass | Skill/template/reference and pre-generation spec snapshots, eight exact prompts, eight PNGs, both reviews, lineage and file manifest are preserved. |

**Totals: 31 pass / 1 partial / 1 fail**, across 32 visual checks and one package check.

**Full acceptance is not claimed.** N1 remains partial in the Nees study and fails in the hybrid. Lower units must not be excused as intentional perspective or a valid constant-size field.

The revision improved eye color, camera direction and display orientation. Raster generation still failed to preserve all geometric invariants. A further geometry-specific attempt or an explicitly procedural construction could address this; no procedural substitution was made here.

Visual checks were performed at saved resolution and whole-image scale, not by automated geometric measurement. Eye color is evaluated as rendered appearance. Cross-style facial identity is approximate; the specified subject attributes and role are the invariants. Generative edits also changed some surrounding texture pixels, despite preservation prompts.
