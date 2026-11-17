# V3 WebGPU living reference

[Play the standalone HTML build](index-v3.html) in a recent desktop Chrome with WebGPU enabled. The page contains the complete procedural 3D scene, shaders and controls; it downloads no models, textures or libraries. The earlier V1 [index.html](index.html) is preserved.

Click **Enter the abyss**. Use WASD to swim, Q to descend, E to ascend, Shift to accelerate, the mouse to look, R to reset, H to toggle the HUD and Esc to release the mouse. A narrow viewport keeps the light visible, but touch navigation is not implemented.

## Reference and provenance

The artistic target is the [V3 SVG](images/SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V3.svg), [V3 specification](SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V3.md) and [scene map](SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V3-SCENE-MAP.md). This is a navigable interpretation, not a geometrically identical reconstruction of the illustration.

The engine was adapted from [the soft-light handoff](https://github.com/ToniDonDoni/abyssal-garden-gpt62-sol-high-tst/tree/feat/v3-soft-light-verification-handoff), commit `9fd6f6613ab31cb48567b2d17b7fe51e9bb5c55e`. Its [README](https://github.com/ToniDonDoni/abyssal-garden-gpt62-sol-high-tst/blob/9fd6f6613ab31cb48567b2d17b7fe51e9bb5c55e/index_README.md) and [implementation TODO](https://github.com/ToniDonDoni/abyssal-garden-gpt62-sol-high-tst/blob/9fd6f6613ab31cb48567b2d17b7fe51e9bb5c55e/index_TODO.md) explain the source brief. The engine's MIT notice is preserved in [V3-WEBGPU-LICENSE.txt](V3-WEBGPU-LICENSE.txt). The source repository was not updated.

## What changed

The old cone shell and small additive halo sprite have been replaced by a depth-aware water pass: three nested world-space Gaussian light volumes and three feathered shafts. The pass reads the nearest of four MSAA depth samples and integrates only the water in front of opaque geometry. This is an approximation, without full shadow mapping from the emitter.

A fullscreen background UV error was corrected. The initial beacon is centered near `(0.50, 0.43)`. The central channel is deeper, background arches are moved toward the margins, fish sit below the nucleus, and surface light and incidental glints are subdued. The original procedural scene categories and free camera remain.

## Build and verify

The checked-in [index-v3.html](index-v3.html) is already built. Its readable source is [index-v3-source.html](index-v3-source.html). No installation is necessary to play.

From this experiment's `tools/` directory:

```sh
npm ci
npm run build:v3
npm run verify:v3
```

The browser test uses installed Google Chrome, a temporary localhost server and the real WebGPU adapter. It exercises pointer lock, mouse look, every documented key, six fixed poses, desktop and narrow framing, and a 60-second traversal. Screenshots and a streamed WebM recording are generated in `rendered/v3/`, alongside JSON results. These generated images/video are intentionally kept out of Git; the page is the new deliverable. The run's compact metrics and poses are preserved in [verification/v3/results.json](verification/v3/results.json).

For source syntax and optional Naga validation from the repository root:

```sh
node test/explore_visual_styles/kuindzhi_lalique_abyssal_garden/tools/validate.mjs test/explore_visual_styles/kuindzhi_lalique_abyssal_garden/index-v3-source.html --syntax-only
```

Omit `--syntax-only` when Naga is installed. Actual Chrome shader compilation, GPU errors, controls, comparison, timings and outstanding limitations are recorded separately in [index_TODO-VERIFICATION-v1.md](index_TODO-VERIFICATION-v1.md). The original RTX performance target and an independent visual review remain unverified; this is not full acceptance of every external TODO criterion.
