# V3 WebGPU living reference

[Open the standalone HTML page](index-v3.html) in a recent desktop Chrome with WebGPU enabled. The page contains the complete procedural 3D scene, shaders and controls; it downloads no models, textures or libraries. The earlier V1 [index.html](index.html) is preserved.

Click **Enter the abyss**. Use WASD to swim, Q to descend, E to ascend, Shift to accelerate, the mouse to look, R to reset, H to toggle the HUD and Esc to release the mouse. A narrow viewport keeps the light visible, but touch navigation is not implemented.

## Reference and provenance

The artistic target is the [V3 SVG](images/SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V3.svg), [V3 specification](SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V3.md) and [scene map](SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V3-SCENE-MAP.md). This is a navigable interpretation, not a geometrically identical reconstruction of the illustration.

The engine was adapted from [the soft-light handoff](https://github.com/ToniDonDoni/abyssal-garden-gpt62-sol-high-tst/tree/feat/v3-soft-light-verification-handoff), commit `9fd6f6613ab31cb48567b2d17b7fe51e9bb5c55e`. The engine's MIT notice is preserved in [V3-WEBGPU-LICENSE.txt](V3-WEBGPU-LICENSE.txt). The source repository was not updated.

## What changed

The old cone shell and small additive halo sprite have been replaced by a depth-aware water pass: three nested world-space Gaussian light volumes and three feathered shafts. The pass reads the nearest of four MSAA depth samples and integrates only the water in front of opaque geometry. This is an approximation, without full shadow mapping from the emitter.

A fullscreen background UV error was corrected. The initial beacon is centered near `(0.50, 0.43)`. The central channel is deeper, background arches are moved toward the margins, fish sit below the nucleus, and surface light and incidental glints are subdued. The original procedural scene categories and free camera remain.

## Open and edit

[index-v3.html](index-v3.html) is the complete, readable page. Open it in a recent desktop Chrome browser to view the scene. Edit that same file to change the page; no package installation or separate processing is required.

Artistic assessment is recorded in [V3-VISUAL-REVIEW.md](V3-VISUAL-REVIEW.md): compare the rendered page with the SVG for light hierarchy, halo spread, beam softness, dark negative space and local enamel details. Review the image at its opening view and while moving through the scene.
