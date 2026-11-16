# Implementation: Kuindzhi x Lalique Abyssal Garden

## Baseline

The original self-contained [Abyssal Garden HTML](https://github.com/ToniDonDoni/abyssal-garden-gpt62-sol-high-tst/blob/feat/procedural-webgpu-abyssal-garden/index.html) was the baseline. Its generated terrain, canyon arches, ship wreck, whale-fluke monument, kelp, fish, manta rays and camera controls were preserved as the common subject.

## Changes to the WebGPU hybrid

- **FS-153 Kuindzhi:** dark blue-black environment background, a narrower cool luminous focal disk and connected tapered `moonPath`, subdued fog and rock/ship tonal treatment.
- **FS-225 Lalique:** biologically isolated WGSL `enamel` material, angular `opal` hue variations, narrow gold `border` and `veins`, limited `pearl` highlights and contrasting matte terrain/wood.
- **No third style:** Norstein's fog-study cut-paper design is recorded as an SVG only; it did not set the hybrid's design requirements.
- **Camera:** original WASD/Q/E/Shift/pointer-lock control remains; 4x MSAA and procedural GPU geometry are retained.

## Exact visual inputs

Three original independent SVG studies and one combined SVG preserve the same subject with different media. Their design briefs are saved under [prompts](prompts/). These are procedural graphic studies, not claims that any historical artist created these specific forms.

## Reproducible verification

`python test/explore_visual_styles/kuindzhi_lalique_abyssal_garden/verify_artwork.py` checks SVG structural layers, renders PNGs, verifies luminance focal hierarchy and inspects key runtime markers. `node test/explore_visual_styles/kuindzhi_lalique_abyssal_garden/tools/validate.mjs` extracts inline WGSL, checks JavaScript syntax and compiles both shader modules using Naga CLI 30.0.1. CI executes both. Missing GPU-browser visual observations are disclosed in [REVIEW.md](REVIEW.md).

## Executed tests and observations

GitHub Actions [run 43937856296](https://github.com/ToniDonDoni/adavilazil/actions/runs/43937856296) completed all three jobs successfully:

- `artwork`: rendered each editable SVG at 1200 x 800 with CairoSVG and checked object layers, center/corner light, original file integrity and scene markers.
- `shaders`: validated the embedded JavaScript with Node.js 22 and both WGSL modules with Naga.
- `browser`: rendered the actual `index.html` with GPU-API-enabled headless Chrome and SwiftShader software WebGPU at two fixed 960 x 600 camera positions. The script rejected JS runtime errors and uniform/blank frames and uploaded the screenshots.

The SVGs were directly inspected after the initial grain overlay produced an unnaturally dark image; their grain opacity and fill were corrected. First browser screenshots showed overbright kelp and an oversized luminous bubble, corrected by reducing light emission and bubble geometry and opening the central corridor. A localized light source/shaft was added, and final browser screenshots were inspected. This is **real software-WebGPU raster output**, not evidence of RTX hardware frame times. Pointer-lock input and temporal iridescence have not been exercised in an interactive browser test; see [REVIEW.md](REVIEW.md).


## V2: original still illustration, separate from WebGPU V1

The [SPEC-009 V2](SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V2.md) explicitly justifies selected Color Rules and Composition Rules under **Explore Visual Styles 2.4.0**. The delivered new [PNG](images/SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V2.png) is rendered from [original procedural SVG geometry](images/SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V2.svg), **not** from an accepted text-to-image model output. The archived [generation brief](prompts/SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V2-PROMPT.md) describes intended art direction, while SVG is the exact editable pixel-source geometry. Initial and final PNG/SVG assets are both committed; the [model-led visual review](SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V2-REVIEW.md) describes two targeted corrections (stone whale tail and broken ship masts) and all 15 acceptance checks. The original WebGPU page and its separate V1 acceptance report remain unchanged.
