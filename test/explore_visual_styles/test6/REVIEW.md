# Review: Verification Against SPEC-004 Acceptance Criteria

**Authority:** [SPEC-004-VOICE-ACROSS-THE-CITY.md](SPEC-004-VOICE-ACROSS-THE-CITY.md)  
**Skill:** EXPLORE-VISUAL-STYLES 2.3.0

The SVGs were rasterized to 900 x 1200 previews and visually inspected. Source checks confirmed canvas dimensions, editable vector elements and absence of external assets or embedded fonts. Statuses are qualitative visual assessments, not automated aesthetic scores.

| Criterion | V1 status | V2 status | Evidence |
| --- | --- | --- | --- |
| **AC-01 Subject invariant** | pass | **pass** | All four files reuse the blonde hair silhouette, grey irises, face geometry, dark jacket and lapel microphone. The ON AIR cartouche identifies the broadcast context. |
| **AC-02 Hiroshige study** | pass | **pass** | 01-HIROSHIGE.svg uses a portrait print field, oversized cropped blossom branch, layered skyline, mountain, oblique bridge and river lines, flat color planes, selective sky and water gradation and crisp dark contours. |
| **AC-03 Tomaszewski study** | pass | **pass** | 02-TOMASZEWSKI.svg reduces the subject to a poster image with a dominant dark silhouette, vermilion gesture, asymmetrical framing, hand-drawn accent marks and concise visual phrase. |
| **AC-04 Single hybrid** | pass | **pass** | Both hybrid versions are single portrait compositions. Neither is a triptych or a panel collage. |
| **AC-05 Hiroshige contribution** | pass | **pass** | The hybrid retains the cropped branch, mountain, city and river layers, bridge lines, woodblock contours and atmospheric gradation. |
| **AC-06 Tomaszewski contribution** | pass | **pass** | A single bold vermilion gesture supplies the poster's graphic metaphor; the compact hierarchy and hand-painted accents remain visible. |
| **AC-07 Integration** | **fail** | **pass** | V1's red gesture floats above the presenter's head and is detached from the microphone. V2 starts the red gesture at the lapel microphone and carries it into the bridge-like river path. |
| **AC-08 Subject readability** | pass | **pass** | Neither hybrid covers the eyes or face. In V2 the signal ribbon stays on the lower jacket and river. |
| **AC-09 Palette and surface** | pass | **pass** | Indigo, cream, ochre and vermilion dominate; gradients are confined to sky and water; printed grain and crisp contours remain visible. |
| **AC-10 Output integrity** | pass | **pass** | All four outputs are 900 x 1200 SVGs. No image elements, external hrefs, embedded fonts, logos or watermarks are present. |
| **AC-11 Revision** | pending | **pass** | V2 fixes the specific V1 failure by connecting the red gesture to the microphone and river bridge path. The acceptance criterion itself is unchanged. |
| **AC-12 Reproducibility** | pass | **pass** | Specification, analysis, implementation notes, four exact briefs, four editable SVGs, review and revision history are saved in this test. |

**V1:** 10 pass / 1 fail / 1 pending.  
**V2:** **12 pass / 0 partial / 0 fail**.

## Revision

- **V1:** the red gesture was placed above the head as an independent curved shape. It looked decorative rather than like a visual consequence of the presenter speaking. This failed AC-07.
- **V2:** the gesture begins at the lapel microphone, follows the lower jacket and becomes a bridge-like signal path over the river. The eyes and face remain unobstructed. Dry-brush accents make the stroke less mechanically uniform.

## Conclusion

The two visual languages can be combined without treating one as a filter over the other. Hiroshige provides spatial composition and print surface; Tomaszewski provides the compact metaphor and expressive graphic gesture. The final hybrid satisfies the defined Acceptance Criteria. The result is a procedural vector interpretation of the references, not a claim to reproduce either artist's original hand or a historical print.
