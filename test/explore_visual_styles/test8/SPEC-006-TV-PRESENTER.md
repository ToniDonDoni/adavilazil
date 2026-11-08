# SPEC-006: Blonde Television Presenter with Gray Eyes

**Skill:** Explore Visual Styles v2.3.0.

**Reference revision:** `9eeea3914787f8b788735d23af50b3a9de7d21dc`.

**Subject:** a fictional adult television presenter, blonde bob, gray eyes.

## 1. Problem and Current State

PR #4 adds researched style references but has no generated-image experiment for them. A documentation review does not establish that the vocabulary transfers to a new subject.

## 2. Required State

Three separate application studies depict the same subject: an adult blonde female television presenter with visible gray eyes, handheld microphone, blank cue card, broadcast desk and a tripod studio camera. The studies apply Piranesi, Korin and Nees respectively. A fourth image combines their compatible properties into one coherent studio.

These are contemporary adaptations, not historical reconstructions. Piranesi controls the hybrid's space and ink structure; Korin controls only its flat decorative desk fascia; Nees controls only its bounded studio display. No real broadcaster, celebrity, branding or text is intended.

## 3. Acceptance Criteria

Subject criteria S1–S3 apply separately to every study and hybrid revision.

- [x] **S1:** One adult female presenter has visibly pale blonde bobbed hair and inspectable neutral gray irises; gray eyes obscured or too small to assess are partial, not pass.
- [x] **S2:** A microphone, one blank cue card, a low desk and a tripod television camera are identifiable. The camera is directed toward the host.
- [x] **S3:** No readable words, numbers, logos or watermarks appear.

Piranesi study criteria P1–P3 apply to the architectural study and hybrid architecture.

- [x] **P1:** An oblique or low view shows supports taller than the host, architecture occupying most of the composition, and foreground/middle/distant layers.
- [x] **P2:** Thick masonry and beams carry stairs or walkways that disappear behind structures; ropes or lifting hardware interrupt a sightline. No simple unobstructed exit resolves the whole space.
- [x] **P3:** Visible irregular hatching, dark structural masses and pale distant passages create readable depth. The individual study is monochrome; the hybrid permits color only in its designated decorative region.

Korin study criteria K1–K4 apply to the flat screen-painting study; K2–K3 also apply to the hybrid desk fascia.

- [x] **K1:** A broad horizontal composition with two non-mirrored screen-like fields remains flat, without a perspective room or cast shadows on gold.
- [x] **K2:** Rounded blue iris petals and long narrow green leaves remain legible against open gold; the gold is visible above and between/within groups.
- [x] **K3:** Motifs repeat with different heights, spacing and density rather than tiling the entire field; plant modeling is primarily flat color, without photographic highlights.
- [x] **K4:** Across the pair, some plant groups meet the lower edge and others end above it with gold beneath. No bridge or travel landscape appears.

Nees study criteria N1–N3 apply ONLY inside its studio display and the hybrid display; the host and props are explicitly outside that region.

- [ ] **N1:** The field comprises closed unfilled square outlines of visually consistent size and thin line weight, without cubes, fills or intentionally deformed quadrilaterals.
- [x] **N2:** Both positional scatter and angle range increase overall from top to bottom, with local variation, gaps and intersections; not merely a grid of fixed-center rotating shapes.
- [x] **N3:** The complete flat field is taller than wide, approximately rectangular, and contained by clear pale margins; no host, cable or prop occludes its interior.

Hybrid criteria H1–H2 apply to every hybrid revision.

- [x] **H1:** All three contributions appear in one studio: etched architecture, botanical gold desk fascia and square-field display. These are attached to identifiable scene objects rather than floating overlays or separate comparison panels.
- [x] **H2:** The host's face, microphone and cue card remain unobscured by the decorative or geometric fields.

- [x] **D1:** Preserve skill/spec/reference snapshots, exact generation prompts, all outputs, a criterion-by-criterion visual review and a revision/re-review for unmet criteria.

## 4. Analysis

Piranesi's spatial depth conflicts with Korin's flat gold space; using Korin on a physical flat desk surface keeps the scopes explicit. Piranesi's monochrome palette is retained outside this decorative insert. Nees's abstract squares cannot themselves depict a realistic gray-eyed presenter without violating the square vocabulary, so this is a region-scoped application study, not a pure Schotter composition of the whole picture.

Korin's original exclusion of narrative scenery cannot apply to a presenter adaptation. The subject is a deliberate exception, declared before generation. K1/K4 are not required in the hybrid because its desk fascia is one surface rather than a pair of screens. N1–N3 remain mandatory within the complete display. The exact 12-by-22 historical grid, random seed and original plotter sequence are not acceptance criteria for this stylistic variation.

Reference coverage: P1 covers Viewpoint/Scale/Depth; P2 covers Circulation/Structure/Details; P3 covers Line/Tone/Palette. K1 covers Format/Space, K2 Palette/Flowers/Leaves/Ground, K3 Rhythm/Modeling, K4 Placement/Version boundary subject to the declared new-subject exception. N1 covers Unit/Mark, N2 Progression/Variation/Overlap, N3 Composition.

## 5. Proposed Solution

Generate each study separately using the built-in image generator. Save each exact prompt before generation. Inspect actual outputs at whole-image and facial-detail scale. Generate the hybrid under the same subject constraints. Where a criterion fails or remains partial, retain v1, issue a targeted revision and assess it again without silently changing the acceptance criteria.

## 6. ToDo

- [x] Save pre-generation specification, analysis and snapshots.
- [x] Generate and inspect three individual studies.
- [x] Generate and inspect hybrid v1.
- [x] Revise unmet criteria and verify again.
- [x] Preserve outputs, inputs and honest per-criterion results in the PR.

## 7. Implementation Verification

The [pre-generation specification](snapshots/SPEC-PRE-GENERATION.md) preserves the original wording. Acceptance criteria and their scopes were not relaxed after generation; only completion/status and this verification section were updated.

[REVIEW-V1.md](REVIEW-V1.md) and [REVIEW-V2.md](REVIEW-V2.md) evaluate every applicable criterion per image. Latest results: **31 pass / 1 partial / 1 fail** across 32 visual checks and one package check. N1 remains partial in the Nees study and fails in the hybrid: lower squares vary in size and some hybrid outlines remain broken. All other applicable checks pass at the documented visual-review level.

The production and revision loop is complete; **full visual acceptance is not claimed**. An unchecked N1 is not accepted. No procedural replacement of generated geometry was performed.

[IMPLEMENTATION.md](IMPLEMENTATION.md) records tool settings, exact prompts and image lineage. [MANIFEST.json](MANIFEST.json) records asset dimensions, sizes and SHA-256 hashes. Repeating the procedure is supported; identical pixels are not guaranteed.
