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

`python test/explore_visual_styles/test9/verify_artwork.py` checks SVG structural layers, renders PNGs, verifies luminance focal hierarchy and inspects key runtime markers. `node test/explore_visual_styles/test9/tools/validate.mjs` extracts inline WGSL, checks JavaScript syntax and compiles both shader modules using Naga CLI 30.0.1. CI executes both. Missing GPU-browser visual observations are disclosed in [REVIEW.md](REVIEW.md).
