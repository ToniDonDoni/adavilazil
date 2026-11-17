# SPEC-009: Abyssal Garden, Kuindzhi x Lalique (V2)

**Version:** 2.0 (new specification; V1 retained unchanged)  
**Skill used:** [Explore Visual Styles **v2.4.0**](../../../skills/EXPLORE-VISUAL-STYLES.md)  
**Engineering:** [Color Rules **v1.0.0**](../../../engineering/COLOR-RULES.md), [Composition Rules **v1.0.0**](../../../engineering/COMPOSITION-RULES.md), [SPEC-TEMPLATE](../../../engineering/SPEC-TEMPLATE.md)  
**Selected styles:** [Kuindzhi: moonlight and darkness](../../../reference/visual_styles/kuindzhi_moonlit_dnieper/README.md) + [Lalique: enamel and jewellery](../../../reference/visual_styles/lalique_dragonfly_jewellery/README.md)  
**Unselected third study:** [Norstein / Yarbusova](../../../reference/visual_styles/norstein_hedgehog_fog/README.md), retained only as a separate historical study.  
**V1:** [Original specification](SPEC-009-ABYSSAL-GARDEN.md) and [original review](REVIEW.md), preserved for comparison.  
**V2 output:** [image](images/SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V2.png) | [exact image-generation brief](prompts/SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V2-PROMPT.md) | [V2 review](./SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V2-REVIEW.md).

## 1. Problem and Current State

The existing WebGPU underwater aquarium and its original static studies are functional starting points, but the V1 specification does not explain **why** its colors and composition were selected from the repository's engineering rules. The earlier review also leaves three technical/artistic criteria partial. This new V2 is an **independent original still-image study**, not a claim that a still PNG proves animation or fly-camera controls. Preserve the historical HTML, SVGs, V1 spec and review.

## 2. Required State

Deliver **one original, coherent 3:2 horizontal image (target 1536 x 1024)** of the same fantasy underwater world: a deep canyon framed by kelp and coral; a small recognizable sunken wooden ship; a stone whale-fluke sculpture; small schooling fish and a manta ray. The core experience is **awe and quiet discovery**. Combine **exactly two** named artistic approaches: Kuindzhi's concentrated luminous atmosphere against dominant darkness, and Lalique's organic, translucent-looking enamel, selective gold filigree and pearls. The image must be pictorial rather than a diagram, diptych or UI screenshot. No lettering or reproduction of the source artworks.

## 3. Acceptance Criteria

### Subject and style selection

- [x] **V2-AC01:** Exactly Kuindzhi and Lalique shape the hybrid; their respective methods are visibly distinct yet integrated. Norstein's cut-paper fog is not an additional hybrid method.
- [x] **V2-AC02:** One uninterrupted underwater world includes a discernible **sunken ship, whale-fluke sculpture, kelp, bioluminescent coral, manta ray and small fish school**. At least the ship and fluke can be identified without labels.
- [x] **V2-AC03:** The picture is original and **contains no text, border, split screen, obvious copied jewel design or copied painting composition**.

### Selected color rules (engineering/COLOR-RULES.md)

- [x] **V2-AC04 [Color §§1,5,8]:** Deep blue-black / midnight navy dominates roughly two-thirds of the scene. The world reads as nocturnal/deep underwater, **not** evenly lit turquoise.
- [x] **V2-AC05 [Color §§2,6,10]:** The palette has clear roles: navy environment; restrained analogous blue/teal depth; a single near-white mint light; localized teal-violet-rose opalescence; **very limited** warm gold. Saturated colors do not compete everywhere.
- [x] **V2-AC06 [Color §§1,6]:** Cool near-white focal illumination is perceptibly brighter than nearby water and visually affects surrounding haze/terrain. The luminous beam connects to the focal region rather than appearing painted on.
- [x] **V2-AC07 [Color §§5,10]:** Lalique's teal/violet/rose hues appear predominantly **inside** selected organic coral, fronds or fins, with thin gold edge veins and some pearl glints; **rocks and ship stay matte**.
- [x] **V2-AC08 [Color §§1,5]:** Gold and bright coral accents are subordinate to the light; no competing saturated foreground object or giant bubble steals the first glance.

### Selected composition rules (engineering/COMPOSITION-RULES.md)

- [x] **V2-AC09 [Composition §§1,3]:** One luminous focal region sits off-center, approximately near the **right-upper rule-of-thirds intersection**; adjacent dark negative space makes it readable.
- [x] **V2-AC10 [Composition §§2,5]:** An observable **tapering beam and converging canyon/kelp contours** carry the gaze toward the focal region; the eye does not stop at an unrelated foreground object.
- [x] **V2-AC11 [Composition §§4,10]:** Separate spatial planes are visible: dark detailed foreground fronds/stone; intermediate wreck, fluke and marine life; distant blue-hazed canyon/water. The atmospheric values recede with depth.
- [x] **V2-AC12 [Composition §§8,9]:** Small fish and the fragile wreck read against enormous canyon walls; brighter jewelled flora balances but does not outweigh the primary light.
- [x] **V2-AC13 [Composition §§3,9]:** A calm stretch of visually quiet, dark water surrounds the focal light; detailed decorations stay clustered to chosen areas rather than filling the entire frame.

### Evidence and delivery

- [x] **V2-AC14:** A single PNG meeting the requested aspect ratio is committed under `images/`, and its exact brief is preserved under `prompts/` using this spec's common filename stem.
- [x] **V2-AC15:** A *model-led visual review* examines the actual generated pixels, checks **all 14 visual/delivery criteria individually**, records pass/partial/fail with visible reasons, and explicitly compares at least one revision if the first result misses requirements. Do not use source-marker or mean-brightness scripts as proof of artistic style.

## 4. Analysis

Kuindzhi determines **where the eye goes** through luminous contrast; Lalique determines **what the nearest living forms look like** through material rhythm and translucency. The two methods can coexist because they operate at different scales. The primary conflict is Lalique's jewel-like decorative intensity versus Kuindzhi's luminous restraint: limit opalescence to localized life and keep the rocks, wood and water dark. The second conflict is a fixed pictorial focal point versus a free-camera interactive environment: this specification checks only a composed **single still view**. Previous HTML animation and control acceptance remain separate and are **not silently marked complete** by the PNG.

### Proposed Color Solution

Based on **selected** [Color Rules §§1 (context/contrast), 2 (authorial interpretation), 5 (dominance), 6 (temperature/immersive light), 8 (total immersion), 10 (analogous harmony)](../../../engineering/COLOR-RULES.md), not an indiscriminate application of every rule:

- **Dominant deep environment (about 65-70%):** near-black ink navy `#02091B` with blue-black canyon `#092338`. **Why:** Color §§5,8 extend one atmospheric feeling across depth; low luminance creates the context against which Kuindzhi-like light becomes exceptional.
- **Distance and transition (about 20-25%):** muted petrol `#17475B`, desaturated teal `#2B7180`. **Why:** Color §§1,6 make neighboring cool hues read as deepening water while avoiding an abrupt flat black-to-white graphic jump.
- **One primary light:** near-white mint `#E8FFF1`, fading through `#83DFCE` in the tapered shaft. **Why:** Color §§1,2 establish the first glance through local brightness contrast, expressing the discovery of light in darkness rather than generic tropical brightness.
- **Secondary living enamel:** opalescent teal `#55BEB4`, violet `#8A74C4` and dusty rose `#C67FA8`. **Why:** Color §10 permits a controlled adjacent blue-teal-violet relationship; a narrow rose edge adds exotic material complexity without dissolving the environment's cool dominance.
- **Small metallic details (visually below ~3%):** muted gold `#C69A54`. **Why:** Color §§1,5: warm gold naturally attracts attention, so confinement to thin organic veins preserves the primary cool light's priority.

**Intended feeling:** hushed wonder and ancient grandeur; cool atmospheric immersion first, precious living detail second. The approximate proportions are design targets, **not arbitrary automatic acceptance thresholds**; judge the actual image contextually.

### Proposed Composition Solution

Based on **selected** [Composition Rules §§1 (thirds), 2 (leading lines), 3 (negative space/hierarchy), 4 (three planes/framing), 8 (scale), 9 (visual weight), 10 (color attention)](../../../engineering/COMPOSITION-RULES.md):

- **Off-center focal point:** a distinct pale mint opening/bioluminescent grotto approximately at (67%, 33%) of the frame. **Why:** §1 breaks static central symmetry while §3 gives this light a surrounding uncluttered dark region.
- **Viewing path:** diagonal/tapered light enters the canyon from upper right toward the middle distance; the curve of reef edges and small fish lead back into the illuminated opening. **Why:** §2 supplies directional guidance, and §9 ensures details are not separate attention traps.
- **Three planes:** shadowed foreground kelp and jewelled corals frame the margins; a small wreck and whale-fluke statue form the middle story; distant blue-gray ridges vanish into water haze. **Why:** §4 makes an enormous invented ocean readable through overlap and decreasing contrast.
- **Scale and balance:** tiny fish against monumental walls, dim wreck opposite more colorful plants. **Why:** §§8-9 evoke human-scale fragility without a human figure; small warm details counterbalance the luminous source but remain secondary.
- **Deliberate negative space:** preserve a broad dark volume around the main beam; no second beacon or bright foreground explosion. **Why:** §3 protects hierarchy and §10 uses luminous color only where it advances the story.

## 5. Proposed Solution

1. Preserve all V1 material; use the research entries and the original aquarium as references for shared subject and techniques.
2. Create **one original 3:2 hybrid concept artwork** guided by the [archived V2 art-direction brief](prompts/SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V2-PROMPT.md). Do not paste separate studies together.
3. **Visually inspect the resulting image myself** against V2-AC01 through V2-AC14: actual subject visibility, color context, lighting, material, leading lines and balance.
4. If anything is partial/fail, record the observed defect, generate a targeted revised image, and inspect again. Archive both outputs if a revision occurs.
5. Commit the chosen PNG and [V2 review](./SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V2-REVIEW.md), with honest statuses. Do not claim that the PNG validates the prior animated WebGPU scene.

## 6. ToDo

- [x] Preserve V1 files while moving the experiment to a descriptive artist-name folder.
- [x] Save this skill-v2.4.0 specification and exact generation brief.
- [x] Generate and inspect the hybrid image.
- [x] Correct observed failures, if any, and preserve iteration evidence.
- [x] Commit the chosen image and a criterion-by-criterion visual review.
- [x] Confirm source, image, links and PR diff before reporting completion.

## 7. Implementation Verification

**V2 completed:** [final 1536×1024 original illustration](images/SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V2.png) and [editable vector source](images/SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V2.svg) committed under matching names. [Model-led pixel review](SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V2-REVIEW.md) checks all **15 V2 criteria**, with **15 pass / 0 partial / 0 fail** as a self-assessment of this **still image**. The [initial draft](images/SPEC-009-ABYSSAL-GARDEN-KUINDZHI-LALIQUE-V2-INITIAL.png) was preserved and visibly ambiguous stone-tail / mast shapes were corrected, then the exact final committed PNG was inspected again.

**Provenance:** The image-generator attempts failed to follow the core subject requirements and were rejected. The accepted image was **drawn programmatically as an original SVG** and rendered to PNG, not produced directly from the text-to-image brief. The editable SVG is the exact implementation of the visual solution; the text prompt is the archived art-direction brief.

**Scope limit:** Old V1 WebGPU interactive controls and temporal enamel animation remain separate and at the original **10 pass / 3 partial**; a V2 PNG is not evidence that those behavior criteria are satisfied.
