# SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V3: Scene Map for Future JavaScript Implementation

**Related spec:** [SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V3.md](SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V3.md)  
**Canonical concept:** [SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V3.svg](images/SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V3.svg)  
**Purpose:** Map an editable *visual reference* into potential procedural JavaScript/WebGPU objects. This is design data, **not** implemented JavaScript and **not** a claim of tested runtime behavior.

## Global conventions

- Canvas: SVG `viewBox="0 0 1536 1024"`, **3:2**; origin at top left, x to the right, y down. Normalized x is `x/1536`, normalized y is `y/1024`.
- **Camera:** concept is a single wide shot looking into a canyon. Future implementation may use perspective with a stationary startup pose and controllable camera later; no literal camera is encoded in the SVG.
- **Central focal source:** `(768,440)` = `(0.50,0.43)`, cool near-white mint. One main source with spatial falloff.
- **Composition:** asymmetrical heavy cliffs on both sides; center retained as quiet bright focus; objects should not be rescaled into distortions.
- **Not a texture sheet:** reconstructed geometry/materials should be separate. Do not render the SVG as a single textured plane to claim implementation of the scene.

## Independent scene groups and mapping

| SVG group ID | Depth / approximate region | Proposed JavaScript representation | Material & lighting | Role |
| --- | --- | --- | --- | --- |
| `water` | full viewport, far | backdrop / fog / water medium | near-black navy `#02091B`, muted blue gradients | C1 dark immersion |
| `distance` | upper/distant canyon | distant terrain silhouettes / distant mesh ridge | desaturated blue-black, haze | P3 far plane |
| `light` | central `(0.50,0.43)`, cone down | one light object, volumetric-scattering approximation or transparent procedural cone | mint `#E8FFF1` to teal `#83DFCE`, falloff in water | M2/C2/P1/P2 |
| `canyon` | left/right edges, foreground-to-middle | separate terrain faces with occlusion and dark mass asymmetry | matte `#092338` and `#17475B` | M1/P3/P5 |
| `sunken-ship` | lower-left/middle, ~`(0.42,0.77)` | generated broken hull, disconnected spars, incomplete mast, plank openings | matte dark green-gray wood, no gold filigree | AC15 recognizable wreck |
| `stone-whale-fluke` | lower-right/middle, ~`(0.75,0.80)` | carved split-tail stone mesh and distinct cracked plinth | matte gray-teal carved stone, not translucent | AC15 monument |
| `manta-ray` | middle-right, ~`(0.65,0.59)` | original bent-wing creature mesh / animation path (future only) | very restrained partly opaline fins, optional gold edge | M3 and scale |
| `fish-school` | middle/center, ~`(0.52,0.59)` | small instanced fish meshes or generated 2D billboards | dim bluish-gray, no significant emission | P5 scale |
| `framing-kelp` | lower side margins / foreground | repeated curved fronds, generated spline geometry | dark desaturated green, mostly matte | P3 near plane & P2 framing |
| `enamel-coral-with-gold-filigree` | lower-left/right margins / foreground | individual organic coral fan meshes with separate cell/vein geometry | translucent-looking teal `#55BEB4`, violet `#8A74C4`, dusty rose `#C67FA8`; thin gold `#C69A54` vein geometry | M3/M4/C3/C4 |
| `pearls` | sparse localized near coral | isolated small highlights or pearl/bright bead meshes | small high-specular near-white spots | M4; never uniform bloom |
| `sea-dust` | low-contrast mixed-depth | sparse instanced particles, non-dominant | pale teal, low opacity | water depth |
| `central-beacon` | at focal position, front of distant light plane | concentrated emitter disk/core with falloff | brightest mint-white core; no competing second source | P1/C2 |

### Draw order and depth policy

The SVG is a 2D illustration with explicit painter's order: `water → distance → light → canyon → ship → fluke → manta → fish → kelp → coral → pearls → sea-dust → central-beacon`. This order describes the **reference rendering** only; a 3D implementation must use world-space occlusion, depth testing and transparency sorting rather than trusting 2D layer order.

### Materials and chosen art methods

- **Kuindzhi-derived global effect (M1/M2):** dark scene background, almost-black matte terrain and wood, one light and connected haze. Implement as light/environment shading; do **not** flood the scene with white ambient light.
- **Lalique-derived local effect (M3/M4):** only select coral/fauna have bounded enamel cells with teal-violet/rose variation. Gold edges are separate narrow paths/meshes; pearl glints are occasional, not scene-wide bloom.
- **Visual contrast constraints:** the single light remains highest in brightness; organic color remains local; geology and ship stay mattified. Opalescence **in a static reference** is painted gradient shading, not proof of an angle-dependent runtime shader.

## Framing / viewport adaptation

1. Preserve the central beacon at or near **50% width / 43% height** in the default shot.
2. At desktop 3:2 display, use the SVG as composed; in JavaScript choose a camera field of view that contains the ship and sculpture in the lower middle ground.
3. On wider screens, **extend the water/canyon edges** or increase safe outer negative space; do not stretch object geometry.
4. On narrower screens, adjust camera distance/FOV or shift low-priority edge foliage, ensuring the beacon and at least the ship and stone tail remain identifiable. Avoid fixed screen-pixel positions for world objects.
5. Validate light hierarchy and object legibility separately at alternate aspect ratios **during the future JavaScript stage**; V3 reference cannot itself guarantee an interactive responsive scene.

## Provenance and limits

The V3 reference is an **iterative adaptation of the original V2 SVG geometry**, not a wholly new random illustration; its light, object placement, rigging damage, carving plinth and filigree were revised to meet V3. This map specifies conceptual components and a translation plan. **The JavaScript page has not been started.**
