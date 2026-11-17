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

## Visual development

The SVGs were directly inspected after the initial grain overlay produced an unnaturally dark image; grain opacity and fill were corrected. Early page views showed overbright kelp and an oversized luminous bubble, corrected by reducing their visual weight and opening the central corridor. A localized cool light and connected shaft were introduced to make the focal hierarchy readable.

[REVIEW.md](REVIEW.md) records visible V1 results and remaining gaps. For the later page, [V3-WEBGPU.md](V3-WEBGPU.md) explains the light treatment and [V3-VISUAL-REVIEW.md](V3-VISUAL-REVIEW.md) compares the rendered result with the reference.

## V2: original still illustration, separate from WebGPU V1

The [SPEC-009 V2](SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V2.md) explicitly justifies selected Color Rules and Composition Rules under **Explore Visual Styles 2.4.0**. The delivered new [PNG](images/SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V2.png) is rendered from [original procedural SVG geometry](images/SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V2.svg), **not** from an accepted text-to-image model output. The archived [generation brief](prompts/SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V2-PROMPT.md) describes intended art direction, while SVG is the exact editable pixel-source geometry. Initial and final PNG/SVG assets are both committed; the [model-led visual review](SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V2-REVIEW.md) describes two targeted corrections (stone whale tail and broken ship masts) and all 15 acceptance checks. The original WebGPU page and its separate V1 acceptance report remain unchanged.
