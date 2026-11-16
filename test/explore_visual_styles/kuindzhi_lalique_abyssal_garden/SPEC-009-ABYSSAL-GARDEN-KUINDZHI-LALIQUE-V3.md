# SPEC-009: Abyssal Garden, Kuindzhi x Lalique (V3)

## Versions

- **Spec Template:** [2.0.0](../../../engineering/SPEC-TEMPLATE.md)
- **Skills Used:** [Explore Visual Styles 2.4.0](../../../skills/EXPLORE-VISUAL-STYLES.md)
- **Rules Used:** [Color Rules 1.0.0](../../../engineering/COLOR-RULES.md); [Composition Rules 1.0.0](../../../engineering/COMPOSITION-RULES.md)
- **Selected Style References:** [Arkhip Kuindzhi](../../../reference/visual_styles/kuindzhi_moonlit_dnieper/README.md); [René Lalique](../../../reference/visual_styles/lalique_dragonfly_jewellery/README.md)
- **Historical Versions:** [V1](SPEC-009-ABYSSAL-GARDEN.md); [V2](SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V2.md)

## 1. Problem and Current State

The experiment contains an interactive WebGPU aquarium (V1) and an original still-image SVG/PNG study (V2), but the previous requirements are not organized into a complete **artistic method → color/composition decision → observable acceptance check** chain. Neither version explicitly treats the illustration as a visual concept that must be straightforward to reconstruct as a future JavaScript-rendered page.

V3 is a **new, independent visual-reference stage**. Preserve V1/V2 sources, prompts, graphics and reviews. Their old pass statuses do not transfer to V3. Implementing a browser page is a **subsequent stage after review of the SVG**, not part of V3 delivery.

## 2. Required State

Produce one original **1536 × 1024, landscape 3:2 editable SVG visual concept** of a fictional underwater aquarium. It must be an attractive standalone composition **and** define a scene that can readily be translated into a future JavaScript/WebGPU page, with distinct objects, geometry-like shapes, lighting regions, material assignments and spatial planes. Provide a raster PNG preview for pixel-level visual inspection; the SVG is the canonical reference.

### Artistic concept

A vast, ancient underwater canyon conceals precious living flora. The atmosphere evokes **quiet wonder, mystery and monumental scale**, not a bright tropical aquarium or an ornate indoor pavilion. The scene contains a recognizable sunken wooden sailing ship, stone whale-fluke monument, rock canyon, foreground kelp, enchanted coral, one manta ray and a school of small fish.

### Artistic methods and their combination

**Kuindzhi (M1, M2):** most of the setting stays in deep darkness; a single unusually bright **cool** light, its connected underwater beam and receding atmospheric layers determine global illumination and where the viewer looks.

**Lalique (M3, M4):** selected marine organisms have original biomorphic silhouettes, visibly bounded translucent-looking enamel cells, adjacent teal/violet/rose color variation, very thin gold veins and a few localized pearl-like glints. Unselected materials, especially wood and rock, remain matte.

**Combination (M5):** Kuindzhi's lighting governs the entire scene; Lalique's ornament is **local to living things inside that same environment**, never pasted as a separate picture. Norstein/Yarbusova remains an independent comparative study, not a third selected influence.

### Color solution

The environment is predominantly midnight navy/blue-black. Muted petrol and teal distinguish receding water. The **sole dominant** near-white mint light casts a cool cone through the canyon. Teal/violet/rose color stays on selected enamel organisms; muted gold occupies very fine veins and glints. The intended color hierarchy is **light first, precious living details second**.

### Composition solution

Place the sole focal light **near the center of the frame**, approximately (50%, 43%), rather than on a rule-of-thirds intersection. Use deliberately **asymmetric rock edges and organic silhouettes** so that central focus does not become rigid mirror symmetry. A converging canyon opening and tapered beam direct the eye toward that center. Preserve dark negative space, large-to-small scale contrast, and three overlapping planes: near plants and rock; middle wreck, stone fluke, manta and fish; far canyon/haze.

### Feasibility for a future JavaScript page

The visual concept must be expressible as a scene graph: sky/water field, layered canyon geometry, distinct ship/fluke/animal/flora objects, one light source with atmospheric falloff, and separately defined matte versus translucent/enamel materials. The central composition must allow adaptable framing when a browser viewport changes. Create a short **scene mapping** for future implementation; do not build or claim to validate JavaScript behavior yet.

## 3. Acceptance Criteria

### Selected artistic methods and combination

- [ ] **V3-AC01 [M1, Kuindzhi dark field]:** Most of the picture appears blue-black; landscape and ship remain dark instead of having even turquoise illumination.
- [ ] **V3-AC02 [M2, Kuindzhi light path]:** Exactly one cool luminous region dominates attention, with a visibly connected tapered beam reaching into the surrounding water and haze.
- [ ] **V3-AC03 [M3, Lalique enamel]:** At least two selected original coral/flora/fauna silhouettes show bounded colored cells and translucent-looking teal/violet or rose shifts following organic shapes, rather than a uniform flat fill.
- [ ] **V3-AC04 [M4, Lalique filigree]:** Thin, discernible gold contour/vein details and a few pearl-like glints appear on selected marine life, **not** on the canyon or ship.
- [ ] **V3-AC05 [M5, synthesis]:** Both methods are identifiable in the **same continuous** underwater scene; no split-panel collage, unrelated jewelry object or visible third artistic method overrides the two-artist combination.

### Color solution

- [ ] **V3-AC06 [C1, dominance]:** Navy/blue-black remains the clearly dominant environmental family through background, midground and foreground; no wall of bright saturated teal destroys the dark mood.
- [ ] **V3-AC07 [C2, cool illumination]:** The single mint-white light is brighter than nearby water, and a muted teal/petrol progression visibly connects that illumination to deeper, darker water.
- [ ] **V3-AC08 [C3, enamel distribution]:** Teal, violet and dusty rose accents are contained predominantly in selected organic enamel, leaving rock/wood matte and desaturated.
- [ ] **V3-AC09 [C4, warm restraint]:** Gold stays thin and low-area, subordinate in visual weight to the mint light; the first glance does not land on gold or another highly saturated corner.

### Composition solution

- [ ] **V3-AC10 [P1, central hierarchy]:** The main luminous focal region is visibly **near the center** (target around 50% width, 43% height); it is unique and surrounded by deliberately asymmetric environment shapes.
- [ ] **V3-AC11 [P2, leading lines]:** Canyon walls and the continuous convergent light shaft guide attention inward **toward the central source** rather than pointing in contradictory directions.
- [ ] **V3-AC12 [P3, three-plane depth]:** Foreground foliage and rock, a readable intermediate ship/fluke/animals, and a lower-contrast distant canyon are visibly separated by occlusion, size or atmospheric value.
- [ ] **V3-AC13 [P4, negative space]:** The neighborhood of the central source retains uncluttered dark water; pearl glints and ornaments are not scattered uniformly across the image.
- [ ] **V3-AC14 [P5, scale and balance]:** Tiny fish/ship appear small relative to massive canyon walls, and bright organic accents balance the margins without rivaling the central beacon.

### Content, reproducibility and later implementation

- [ ] **V3-AC15 [subject]:** Canyon, distinct **wrecked** sailing ship, discernible **split-tail stone whale-fluke**, kelp, coral, manta and fish school can all be located without captions, even at the full-image view.
- [ ] **V3-AC16 [originality]:** One original artwork with no text, labels, UI, copied painting layout, copied jewel, human glass figure, indoor pavilion or multiple panels.
- [ ] **V3-AC17 [reference output]:** An editable **3:2 SVG**, its PNG raster preview and a named scene mapping are committed using this spec's common `SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V3` filename stem.
- [ ] **V3-AC18 [J1, JavaScript portability]:** A developer-facing scene map identifies objects, approximate layering/placement, light source, color/material assignments, and viewport adaptation so that a JavaScript scene could be built from the reference **without** treating the SVG as a single baked background; this criterion does not claim any JavaScript implementation exists.

## 4. Analysis

Kuindzhi's global tonal method and Lalique's local material design coexist at **different visual scales**. Their tension is the distribution of attention: ornamental highlights easily undermine one dominant light. Limit gold/pearls and saturated enamel to marginal plants and animals, retain dark matte geology and wood, and keep the light uniquely strongest. For a future page, visual beauty alone is insufficient: a recognizable object hierarchy is easier to reconstruct than painterly noise or an opaque flattened image.

V2 used an off-center light. V3 intentionally changes to a **central** source and offsets this potential rigidity through asymmetrical wall, plant and ship placement. A static reference can demonstrate apparent iridescence and material differentiation; it **cannot** prove temporal shader behavior, keyboard input or camera movement.

## 5. Proposed Solution

### Artistic methods

**M1. Kuindzhi: dark-field contrast.** Apply deep shadow to most water, wood and stone. It works by giving a small area of light a higher relative luminance than its neighbors; it supports [Color Rules §§1 and 5](../../../engineering/COLOR-RULES.md).

**M2. Kuindzhi: one atmospheric light.** Place one mint-white source near center, with a conical luminous path fading into darker water. Connected illumination establishes environmental depth and a focus, as described by [Color Rule §6](../../../engineering/COLOR-RULES.md) and [Composition Rules §§2 and 4](../../../engineering/COMPOSITION-RULES.md).

**M3. Lalique: biomorphic enamel.** Use original curved coral and manta-fin silhouettes with bounded cells of colored translucency. Repeating compartments and hue progression make living forms read as opalescent handcrafted material instead of flat colored objects; keep surfaces distinguishable from matte stone/ship ([Color Rules §§1 and 10](../../../engineering/COLOR-RULES.md)).

**M4. Lalique: thin filigree and jewels.** Outline only selected cells/veins with hairline muted gold and place a few pearl highlights at organic intersections. These small high-detail marks support the precious-material effect without overwhelming [Color Rule §5](../../../engineering/COLOR-RULES.md).

**M5. Artistic synthesis.** Apply M1/M2 to the **whole scene** and M3/M4 only to selected **living forms**. The global/local division makes both historical methods readable without a pasted poster or an extra style.

### Color solution

**C1. Dark dominance:** ink navy `#02091B` and blue-black `#092338` form the main water/rock range. [Color Rules §§5 and 8](../../../engineering/COLOR-RULES.md) favor one immersive dark family for quiet mystery.

**C2. Cool light:** mint-white `#E8FFF1`, teal glow `#83DFCE`, muted petrol `#17475B` and depth teal `#2B7180`. [Color Rules §§1 and 6](../../../engineering/COLOR-RULES.md) explain why contextual contrast and colored environmental illumination increase apparent depth.

**C3. Living enamel:** restrained teal `#55BEB4`, violet `#8A74C4` and dusty rose `#C67FA8` appear in local organic cells. [Color Rules §§5 and 10](../../../engineering/COLOR-RULES.md) justify controlled saturation and a predominantly cool color relationship.

**C4. Warm accent:** narrow veins of aged gold `#C69A54`, pearl highlights on selected flora/fauna only. Restriction protects the color dominance and focal hierarchy ([Color Rules §§1 and 5](../../../engineering/COLOR-RULES.md)).

### Composition solution

**P1. Central focal hierarchy:** place the light near (50%,43%) in a spacious opening. Surround it with asymmetric left/right masses rather than strict mirror symmetry. [Composition Rules §§3, 7 and 9](../../../engineering/COMPOSITION-RULES.md) explain isolation, deliberate asymmetry and visual weight.

**P2. Leading lines:** guide eyes from reef, ship and tapering canyon edges toward the central bright opening along the beam's convergent direction. [Composition Rule §2](../../../engineering/COMPOSITION-RULES.md) establishes a coherent viewing path.

**P3. Three-plane depth:** use dark detailed kelp and coral foreground, readable wreck/fluke/fauna midground, and faint blue-gray canyon distance. Occlusion, reduced contrast and scale create depth ([Composition Rule §4](../../../engineering/COMPOSITION-RULES.md)).

**P4. Negative space:** maintain a quiet volume of water around and underneath the source instead of filling it with uniformly distributed details. This protects the beacon as the primary focus ([Composition Rule §3](../../../engineering/COMPOSITION-RULES.md)).

**P5. Scale and balance:** use tiny schooling fish and the small wreck against enormous dark canyon walls; limit opal-coral accents to a few asymmetrically distributed regions. [Composition Rules §§8 and 9](../../../engineering/COMPOSITION-RULES.md) preserve awe without competing focal anchors.

### Translation-ready scene architecture

**J1. Scene decomposition:** preserve named, separable SVG groups for `water`, `distance`, `canyon`, `light`, `shipwreck`, `fluke`, `manta`, `fish`, `kelp`, `coral` and `particles`. In a companion scene map, explain their stacking order, approximate location, conceptual geometry, material classes and resize behavior. The future JavaScript page may implement these using generated meshes, shaders and camera transforms; this V3 only delivers a visual plan, not working code.

## 6. ToDo

1. Preserve all existing V1 and V2 specifications, images, sources and reviews.
2. Commit this V3 specification using Spec Template v2.0.0, keeping all V3 acceptance checkboxes **unchecked** until observed verification.
3. Create one original editable V3 SVG visual reference with the central focal source and named scene groups; render a PNG preview.
4. Inspect the **actual raster** and SVG grouping against **V3-AC01 through V3-AC18**; record pass/partial/fail and direct visible evidence in a separately versioned report.
5. If failures are found, archive the initial reference, correct the SVG, re-render and inspect the revision. Preserve accurate evidence and unresolved gaps.
6. Commit the final reference, PNG, scene mapping and verification report. Present the SVG to the user **before starting any JavaScript implementation**.

## 7. Implementation Verification

**Pending V3 reference creation and inspection.** Detailed evidence, criterion statuses, visual observations and any revisions belong exclusively in the separate [V3 verification v1](SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V3-VERIFICATION-v1.md). The report's filename contains this spec's exact stem and verification version; the spec is not used as a verification ledger.
