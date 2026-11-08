# SPEC-005: Voice Across the City

**Skill:** [EXPLORE-VISUAL-STYLES 2.3.0](../../../skills/EXPLORE-VISUAL-STYLES.md)  
**Template:** [SPEC-TEMPLATE.md](../../../engineering/SPEC-TEMPLATE.md)

## 1. Problem and Current State

The two selected style references describe distinct visual languages but have not yet been tested individually or in combination on the same subject. The experiment must show that their requirements can be combined without turning the result into a collage or losing the subject.

## 2. Required State

Create a portrait 3:4 artwork of one fictional adult female TV presenter: blonde, grey-eyed, wearing a dark tailored jacket, on air, with a visible lapel microphone or earpiece. Keep the same recognizable subject across both individual studies and both hybrid versions.

Produce individual studies of:
- [Hiroshige's One Hundred Famous Views of Edo](../../../reference/visual_styles/hiroshige_edo_views/README.md)
- [Henryk Tomaszewski's Polish film posters](../../../reference/visual_styles/tomaszewski_film_posters/README.md)

Then combine them in one cohesive poster, not a triptych. The hybrid's central metaphor is **the presenter's voice becoming a bridge across the city**: one vermilion hand-painted signal ribbon begins at her microphone and continues into a bridge-like curve over the river.

## 3. Acceptance Criteria

- [x] **AC-01 Subject invariant:** All four artworks show the same fictional adult female TV presenter with blonde hair, grey eyes, a dark jacket and a visible microphone or earpiece; an on-air cue is present.
- [x] **AC-02 Hiroshige study:** The individual study uses a vertical print composition, a dramatically cropped blossom branch, an oblique bridge and river view, flat printed color areas, selective bokashi, crisp contours and seasonal weather.
- [x] **AC-03 Tomaszewski study:** The individual study reads as a concise film-poster image, with a dominant metaphor, expressive hand-drawn marks, asymmetrical composition and a small purposeful palette.
- [x] **AC-04 Single hybrid:** The combined result is one coherent portrait image, not a triptych, split panel or pasted collage.
- [x] **AC-05 Hiroshige contribution:** The hybrid retains the cropped foreground branch, layered city and river depth, bridge structure, woodblock contours and selective color gradation.
- [x] **AC-06 Tomaszewski contribution:** The hybrid uses one bold vermilion brush gesture as its central graphic metaphor, with poster-like visual hierarchy and hand-painted accents.
- [x] **AC-07 Integration:** The red signal ribbon starts at the lapel microphone or cable and becomes the bridge-like path across the river; it is not a detached decorative shape.
- [x] **AC-08 Subject readability:** The ribbon does not cover the presenter's eyes or face; the presenter remains the dominant, immediately recognizable subject.
- [x] **AC-09 Palette and surface:** Indigo, cream, ochre and vermilion dominate; bokashi is limited to atmospheric areas; printed-paper texture and crisp linework remain visible.
- [x] **AC-10 Output integrity:** All artwork is editable 3:4 SVG with no external image assets, embedded fonts, logos or watermarks.
- [x] **AC-11 Revision:** V2 directly fixes the integration failure identified in V1 and passes the affected criterion on visual inspection.
- [x] **AC-12 Reproducibility:** The test preserves exact design briefs, source artwork, implementation notes, review evidence and revision history.

## 4. Analysis

See [ANALYSIS.md](ANALYSIS.md) for compatibility and conflict resolution.

## 5. Proposed Solution

Create one baseline for each style, then create a hybrid using the shared subject. Review the hybrid against every Acceptance Criterion. Revise the specific failed integration rule and verify the new version without silently changing the specification.

The artwork is implemented as self-contained SVG. The SVG files are the editable implementation source; the saved prompts are the exact design briefs used to guide each study and iteration.

## 6. ToDo

- [x] Analyze both source references and select compatible requirements.
- [x] Write the declarative specification and Acceptance Criteria before finalizing the hybrid.
- [x] Create and preserve both individual style studies.
- [x] Create hybrid V1 and review every Acceptance Criterion.
- [x] Revise the detached red gesture so it connects to the microphone and becomes the bridge path.
- [x] Create hybrid V2 and verify the revision.
- [x] Preserve prompts, SVG artwork, implementation notes and review.

## 7. Implementation Verification

- **Individual studies:** [Hiroshige](images/01-HIROSHIGE.svg), [Tomaszewski](images/02-TOMASZEWSKI.svg).
- **Hybrid iterations:** [V1](images/03-HYBRID-V1.svg), [V2](images/04-HYBRID-V2.svg).
- **Exact design briefs:** [prompts/](prompts/).
- **Review:** [REVIEW.md](REVIEW.md). V1 fails AC-07 because its red gesture is detached. V2 passes AC-07 because the gesture starts at the lapel microphone and becomes the bridge-like river path. All other criteria pass on visual inspection and SVG-source checks.
