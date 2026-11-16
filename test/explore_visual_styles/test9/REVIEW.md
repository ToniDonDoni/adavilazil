# SPEC-009: Implementation Verification

**Reviewed artifacts:** original SVG studies at [images/](images/), actual Chrome WebGPU renders from [GitHub Actions run 43937856296](https://github.com/ToniDonDoni/adavilazil/actions/runs/43937856296), and the exact [test HTML](index.html). The screenshot artifact in the workflow is named `abyssal-swiftshader-screenshots`. Review is by the implementer, not an independent visual critic.

**Method:** evaluate the actual saved 1200 x 800 SVG raster previews and two 960 x 600 Chrome/SwiftShader WebGPU frames, then compare visible features and code against the fixed acceptance criteria. Statuses are **pass**, **partial** and **unverified**. Source-code presence is not sufficient to claim that temporal appearance or mouse input behaves correctly.

| Criterion | Status | Evidence and remaining gaps |
| --- | --- | --- |
| AC-01 References | **pass** | New source-backed FS-153, FS-225, FS-209 entries from Task 0001 have six required style sections and observable requirements. Backlog and style index updated. |
| AC-02 Shared subject | **pass** | All four rendered SVGs contain canyon, kelp, shipwreck, fluke sculpture and marine life in a comparable layout. |
| AC-03 Selection | **pass** | The final page and hybrid SVG implement Kuindzhi and Lalique; Norstein is preserved exclusively as a third individual study. |
| AC-04 Dark field | **pass** | Final hybrid SVG mean luminance **45.56**, below Lalique's **56.04** and Norstein's **107.56**; final browser frames show dark canyon/wood and blue-black water instead of uniform bright cyan. |
| AC-05 Focus / light path | **pass** | Both SVG and actual WebGPU frames show a cool light focal region against darker water; the shader adds a fixed grotto source and connected volumetric-style shaft. The focal region remains relatively small. |
| AC-06 Three-plane depth | **pass** | Near kelp and rock masses overlap intermediate ship/fluke and distant attenuated scenery; inspected camera poses reveal spatial parallax composition. |
| AC-07 Opalescence | **partial** | SVG study visibly contains teal/lilac/pink enamel; WGSL `opal` and `irid` use world position, facing angle and time. Two still frames do **not** establish the intended temporal hue shifting or flicker-free motion. |
| AC-08 Gold filigree | **partial** | The SVG shows continuous thin gold edges and compartments; WGSL `border`, `veins`, and `filigree` apply only to selected biomorphic kinds. At 960 x 600 the gold delineation remains subtle and has not been visually verified close-up in the real WebGPU view. |
| AC-09 Jewel glints | **pass** | SVGs show localized pearl/gold flecks and the WebGPU frames show dispersed small light points without the previous dominant bubble glare; shader `pearl` only affects a subset of flora/fauna kinds. |
| AC-10 Integration | **pass** | Actual WebGPU screenshots show one continuous aquarium, not a split-panel mockup; dark terrain and luminous organic forms coexist. |
| AC-11 Self-contained controls | **partial** | Chrome loads and renders a self-contained `index.html` with no scene assets or libraries. Pose changes work via `window.__abyssal.setPose`. WASD/Q/E/Shift and pointer-lock handlers exist but **automated physical-input behavior was not exercised**. |
| AC-12 Compile and raster | **pass** | GitHub Actions `artwork`, `shaders`, `browser` **all passed** on `1e56424ba103983d454057443cc5f9bcdd5279ee`. Naga validates both WGSL modules; Chrome SwiftShader saved two distinct nonblank actual WebGPU frames without page errors. |
| AC-13 Reproducibility | **pass** | Exact prompts, style analyses, 4 original SVGs, HTML source, spec, checklist, procedural test scripts, all source links, workflow and recorded limitations are preserved. |

**Summary: 10 pass / 3 partial / 0 fail.** There is **no claim that all 13 criteria fully pass**. The unverified aspects are animated color behavior, close-up filigree legibility and physically exercised keyboard/mouse controls.

## Revisions from actual visual review

1. **SVG V1 issue:** a full-page grain overlay suppressed the light anchor, especially in the fog study. **Correction:** reduced grain coverage and introduced a light transparent filter fill. All four SVGs rasterized successfully and preserved focal and tonal hierarchy.
2. **Initial browser issue:** very bright tall kelp and oversized close bubbles overwhelmed the focal hierarchy. **Correction:** reduced kelp emission, scaled bubble geometry down, lowered bubble glow, and moved central kelp to open the camera corridor.
3. **Second browser issue:** no recognizable focal point beyond the coral. **Correction:** added a single world-anchored cool grotto source and a localized shaft in WGSL, then re-ran all CI gates.

## Evidence locations

- [SVG studies](images/) and reproducible [artwork test](verify_artwork.py).
- [WebGPU browser smoke test](browser_smoke.py), [Naga validator](tools/validate.mjs), [single-file aquarium](index.html).
- [Run 43937856296](https://github.com/ToniDonDoni/adavilazil/actions/runs/43937856296): green checks for all three jobs, and archived SVG PNGs and two WebGPU screenshots.
- The screenshot test runs **Chrome with a SwiftShader software WebGPU adapter**, not the target RTX hardware. The removed FPS benchmark was not reinstated.

## Next inspection if full acceptance is required

Interactively navigate the scene using real pointer-lock mouse and Q/E/Shift/WASD, capture moving material highlights and near-coral closeups to verify iridescence and filigree at actual display resolution. Do not reinterpret shader source or still PNGs as proof of those observations.
