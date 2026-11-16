# Abyssal Garden: Kuindzhi x Lalique

**Original V1 skill:** [Explore Visual Styles v2.3.0](../../../skills/EXPLORE-VISUAL-STYLES.md)  
**V1 spec:** [SPEC-009](SPEC-009-ABYSSAL-GARDEN.md) (archived unchanged)  
**V2 skill:** [Explore Visual Styles v2.4.0](../../../skills/EXPLORE-VISUAL-STYLES.md)  
**V2 spec:** [SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V2](SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V2.md)  
**V2 hybrid image:** [image](images/SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V2.png)  
**V2 visual review:** [review](SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V2-REVIEW.md)  
**Selected hybrid:** Kuindzhi (FS-153, nocturnal light) + Lalique (FS-225, opalescent enamel).  
**Independent third candidate:** Norstein (FS-209, multiplane fog).

This is an original browser-based underwater experiment adapted from the earlier [procedural WebGPU Abyssal Garden](https://github.com/ToniDonDoni/abyssal-garden-gpt62-sol-high-tst). The runnable artifact is [index.html](index.html), containing its own WGSL, JavaScript and CSS, with no texture or model files.

## Artwork

| Study | Visual output |
| --- | --- |
| Kuindzhi, nocturnal light | [SVG](images/01-KUINDZHI.svg) |
| Lalique, enamel and filigree | [SVG](images/02-LALIQUE.svg) |
| Norstein, fog and cut paper | [SVG](images/03-NORSTEIN.svg) |
| Selected Kuindzhi + Lalique hybrid | [SVG](images/04-HYBRID-KUINDZHI-LALIQUE.svg) |

The SVGs are original editable compositional studies, not screenshots of the GPU scene.

## Usage and verification

Open [index.html](index.html) in a WebGPU-enabled Chrome browser; click to capture the mouse. **WASD** moves, **Q/E** up/down, **Shift** accelerates, **Esc** releases mouse and **H** toggles HUD.

- [Style analysis](STYLE-ANALYSIS.md)
- [Exact design briefs](prompts/)
- [Implementation notes](IMPLEMENTATION.md)
- [Acceptance review](REVIEW.md)
- [Checklist](CHECKLIST.md)
- [Reproducible raster and HTML checks](verify_artwork.py)
- [JavaScript and Naga WGSL validator](tools/validate.mjs)

The V2 image has a separate model-led visual review. GitHub Actions validates the source and renders study previews. A synthetic SVG preview or shader compilation is not a substitute for inspection of a real GPU-rendered browser frame.

## Validation report

[GitHub Actions run 43937856296](https://github.com/ToniDonDoni/adavilazil/actions/runs/43937856296) passed SVG raster checks, JavaScript syntax, Naga WGSL validation and two actual Chrome SwiftShader WebGPU render smoke screenshots. See [REVIEW.md](REVIEW.md) for acceptance criteria, remaining partial observations, and limitations of software rather than hardware rendering.
