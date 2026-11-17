# SPEC-009: V1 Visual Review

**Reviewed artifacts:** original [SVG studies](images/) and selected rendered views of the original [V1 page](index.html). Review is by the implementer, not an independent visual critic.

**Method:** compare visible light, color, material, composition and subjects with the artistic criteria. Still images do not establish temporal iridescence or interactive behavior.

| Criterion | Status | Evidence and remaining gaps |
| --- | --- | --- |
| AC-01 References | **pass** | New source-backed FS-153, FS-225, FS-209 entries from Task 0001 have six required style sections and observable requirements. Backlog and style index updated. |
| AC-02 Shared subject | **pass** | All four rendered SVGs contain canyon, kelp, shipwreck, fluke sculpture and marine life in a comparable layout. |
| AC-03 Selection | **pass** | The final page and hybrid SVG implement Kuindzhi and Lalique; Norstein is preserved exclusively as a third individual study. |
| AC-04 Dark field | **pass** | The hybrid SVG keeps a darker overall field than the Lalique and Norstein studies; final browser frames show dark canyon/wood and blue-black water instead of uniform bright cyan. |
| AC-05 Focus / light path | **pass** | Both SVG and actual WebGPU frames show a cool light focal region against darker water; the shader adds a fixed grotto source and connected volumetric-style shaft. The focal region remains relatively small. |
| AC-06 Three-plane depth | **pass** | Near kelp and rock masses overlap intermediate ship/fluke and distant attenuated scenery; inspected camera poses reveal spatial parallax composition. |
| AC-07 Opalescence | **partial** | SVG study visibly contains teal/lilac/pink enamel; WGSL `opal` and `irid` use world position, facing angle and time. Two still frames do **not** establish the intended temporal hue shifting or flicker-free motion. |
| AC-08 Gold filigree | **partial** | The SVG shows continuous thin gold edges and compartments; WGSL `border`, `veins`, and `filigree` apply only to selected biomorphic kinds. At 960 x 600 the gold delineation remains subtle and has not been visually verified close-up in the real WebGPU view. |
| AC-09 Jewel glints | **pass** | SVGs show localized pearl/gold flecks and the WebGPU frames show dispersed small light points without the previous dominant bubble glare; shader `pearl` only affects a subset of flora/fauna kinds. |
| AC-10 Integration | **pass** | Actual WebGPU screenshots show one continuous aquarium, not a split-panel mockup; dark terrain and luminous organic forms coexist. |
| AC-11 Self-contained controls | **partial** | Chrome loads and renders a self-contained `index.html` with no scene assets or libraries. WASD/Q/E/Shift and pointer-lock handlers exist but **interactive input behavior was not established by the inspected stills**. |

## Revisions from visual inspection

1. A full-page grain overlay suppressed the SVG light anchor. Grain coverage was reduced and the filter fill made more transparent.
2. Bright kelp and oversized bubbles overwhelmed the page's focal hierarchy. Their visual weight was reduced and the central corridor opened.
3. The scene initially lacked a recognizable focal point beyond the coral. A world-anchored cool source and connected shaft were added.

## Further inspection

Inspect moving material highlights and close-up coral views for iridescence and fine gold detail. Keep the unresolved observations above distinct from the later [V3 visual review](V3-VISUAL-REVIEW.md).
