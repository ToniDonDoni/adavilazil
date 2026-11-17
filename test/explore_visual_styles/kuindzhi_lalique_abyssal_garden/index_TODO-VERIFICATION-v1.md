# index_TODO: WebGPU verification v1

Date: 2026-11-17. Scope: a separately built V3 page in this artistic-method experiment, after local comparison; V1 and the reference SVG remain preserved.

## Result and scope

The broad mint halo, dark outer teal haze and feathered water shafts now reproduce the reference's lighting hierarchy substantially more closely than the handoff checkpoint. This is **lighting acceptance by local self-review**, not full acceptance of every external criterion or an exact reconstruction of the 2D artwork.

Specification: the source [index_TODO.md](https://github.com/ToniDonDoni/abyssal-garden-gpt62-sol-high-tst/blob/9fd6f6613ab31cb48567b2d17b7fe51e9bb5c55e/index_TODO.md). Artistic reference: [V3 SVG](images/SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V3.svg). Runtime: [built HTML](index-v3.html); [readable source](index-v3-source.html); [reproduction instructions](V3-WEBGPU.md).

## Actual environment and evidence

- Chrome **157.0.8103.79**, macOS, actual WebGPU adapter `apple / metal-3`; no SwiftShader adapter was requested.
- Native canvas **1536 x 1024**, DPR 1, four-sample MSAA. Additional 1600 x 900 and 390 x 844 captures.
- Built page SHA-256: `ae097483e40a6ca8ec95f3a443232edddde06825eb67f410507080444a78c2be`.
- [Results, six exact camera poses and all control outcomes](verification/v3/results.json); [raw GPU/frame samples](verification/v3/samples.json).
- Actual generated evidence was inspected locally: `opening.png`, `approach.png`, `wreck.png`, `monument.png`, `reef.png`, `side_light.png`, desktop/narrow captures and `flythrough.webm`. The reproducible runner regenerates these under `rendered/v3/`. Screenshots and video are deliberately not new committed artworks; a local delivery bundle retains them.
- Captures freeze animation at 2 seconds. The fly-through restores time progression and smoothly interpolates opening -> approach -> wreck -> reef -> side_light -> monument -> opening for 60 wall-clock seconds.
- The final browser run exited **0**. Every control outcome is true; recorded JavaScript/GPU/device-loss errors: **0**. Esc is explicitly handled, rather than relying exclusively on the browser's native trusted-key escape behavior.

## Diagnosed causes and corrections

The background fullscreen triangle supplied half-range UVs, so its glow direction did not agree with the scene camera. The small billboard also confined the strong halo to a few projected pixels, while the cone shell produced a hard triangular boundary. Layer presence alone was not the problem.

The replacement pass integrates nested Gaussian volumes and three Gaussian-width shafts through visible water, using the scene's nearest depth sample for termination. The small nucleus remains real 3D geometry. Background UVs, source framing and the open channel were corrected; surface/glint competition was reduced. The result remains free-camera procedural 3D, with all original named subject categories.

## SVG comparison

Both images were compared at 1536 x 1024. The source projects near pixel `(768, 440)`. A horizontal sample through open water to the right of that point gives the following RGB values. These samples demonstrate halo falloff, not full-image identity or an objective beauty score.

| Radius (px) | Actual WebGPU RGB | Actual SVG RGB |
| --- | --- | --- |
| 0 | 255, 255, 255 | 237, 255, 244 |
| 10 | 187, 255, 237 | 185, 247, 225 |
| 30 | 169, 240, 219 | 166, 236, 214 |
| 50 | 143, 213, 197 | 133, 214, 195 |
| 80 | 98, 164, 157 | 83, 169, 159 |
| 100 | 71, 133, 132 | 66, 145, 140 |
| 150 | 30, 83, 89 | 31, 88, 98 |
| 200 | 16, 59, 68 | 13, 53, 70 |
| 250 | 11, 45, 56 | 10, 43, 63 |

The white nucleus is smaller than the SVG dot and may clip to white over a few pixels; the surrounding mint gradation stays visible. The shafts are softer and follow 3D water/depth rather than the SVG's flat triangle paths. Close to the source the light naturally occupies more of the viewport. The original 3D wreck, sculpture, vegetation and canyon are coarser and differently placed than their illustrated equivalents; those differences are not silently treated as solved.

## Criterion outcomes

| Criterion | Status | Observed evidence / limit |
| --- | --- | --- |
| JS-AC01 | PASS | Opening view remains predominantly dark blue-black; bright water is localized. |
| JS-AC02 | PASS | A compact brightest nucleus remains; no opaque lamp-sized disk. |
| JS-AC03 | PASS | Broad mint halo and teal atmosphere are visible at full frame; radial samples above. |
| JS-AC04 | PASS | Three connected diffuse shafts are visible down the channel; no hard cone shell. |
| JS-AC05 | PASS (approximation) | Nearest MSAA scene depth truncates visible-water integration. Foreground geometry stays opaque in wreck, reef and monument views. No emitter shadow map is implemented. |
| JS-AC06 | PASS | Opening hierarchy remains light, then localized enamel, then narrow gold. |
| JS-AC07 | PASS | Opening source is approximately (0.50, 0.43); the centerline remains open. |
| JS-AC08 | PARTIAL | Bounded teal/violet/rose panels and gold ribs are present; close views still show faceted, largely opaque surfaces rather than the SVG material finesse. |
| JS-AC09 | PARTIAL | All named subjects are present. The fluke still has a plant-like silhouette, and the inherited ship is less visibly damaged than the SVG wreck. |
| JS-AC10 | PASS | Real browser pointer lock, mouse movement, WASD, Q/E, Shift, R, H and Esc passed; all results are in results.json. |
| JS-AC11 | PASS | Chrome initialized real Apple Metal WebGPU, compiled all three shaders and ran the traversal without recorded JS/GPU/device-loss errors. |
| JS-AC12 | PASS (sampled) | Six captures and the recorded traversal retain procedural scene categories, animation, surface and depth. Existing close-up mesh faceting remains; exhaustive frame-by-frame inspection is not claimed. |
| JS-AC13 | PASS (desktop) | 1536x1024 and 1600x900 retain central focus. A 390x844 render keeps the light visible but crops peripheral subjects; touch controls are unsupported. |
| JS-AC14 | PASS | The built page is standalone WebGPU, without external runtime assets or engines. Source/build sizes are measured below. |
| JS-AC15 | PARTIAL | Six actual rendered poses and a 60-second video were produced and self-reviewed. No independent output-only reviewer was used, so this gate is not fully accepted. |
| JS-AC16 | PASS (lighting scope) | The actual SVG and gameplay opening were compared at 1536x1024. Halo values and placement are close; geometry, beam trajectories and nucleus size differ. |
| JS-AC17 | NOT VERIFIED (original target) | Actual local GPU timestamps are reported below. Windows 11 / RTX 5070 Ti / 2560x1440 was unavailable; no pass is claimed for that target. |
| JS-AC18 | PASS | This versioned report separates evidence/statuses from the source specification; partial/unverified items remain explicit. |

## Performance observations

The warmed 60-second recorded path yielded **3603** asynchronous GPU timestamp samples. Each measures the sum of the scene pass and the atmospheric pass; it excludes CPU work, timestamp resolve/map overhead, presentation and video encoding. Metrics were snapshotted at traversal completion, before recording export. The recording itself runs concurrently and can affect performance.

| Metric | Average | p99 | Maximum |
| --- | ---: | ---: | ---: |
| GPU render passes | 11.026 ms | 16.034 ms | 21.945 ms |
| Browser frame interval (3602 samples) | 16.666 ms | 16.800 ms | 16.800 ms |

The local GPU maximum exceeds 16.7 ms and the average is approximately 11 ms. These observations do **not** establish the original RTX target. It remains **NOT VERIFIED**, with no claim that every frame satisfies its limit.

Readable HTML: **35,875 bytes**. Minified standalone HTML: **33,031 bytes**. Gzip of that build: **12,771 bytes**. Terser 5.44.0 minifies the inline JavaScript; embedded WGSL remains text. The built HTML itself is the playable delivery.

## Remaining limitations

Independent output-only art review and the specified RTX-machine benchmark remain outstanding. The inherited carved-tail recognition and wreck damage/readability remain partial; enamel is more faceted/opaque than the illustration. Touch navigation and physically complete volumetric shadowing are not implemented. These limitations do not invalidate the observed broad-halo/soft-shaft correction, but prevent a claim of complete external-TODO acceptance.
