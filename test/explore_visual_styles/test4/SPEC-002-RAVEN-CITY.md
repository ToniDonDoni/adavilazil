# SPEC-002: Raven, Golden Key and Unstable City

**Skill:** EXPLORE-VISUAL-STYLES v2.3.0

## 1. Problem and Current State

Earlier raven experiments were designed around prompts and checked against hybrid rules. This test evaluates the same motif using a declarative specification as the authority for implementation and verification.

## 2. Required State

Create a portrait visual artwork of a **black raven holding a clearly visible antique golden key in its beak**, perched on an angular stone spire overlooking a visually unstable city. The bird, key and city must remain recognizable. No words or logos.

Produce separate studies of the same composition in:
- [German Expressionist poster](../../../reference/visual_styles/german_poster/README.md)
- [Soviet Constructivist poster](../../../reference/visual_styles/soviet_poster/README.md)
- [1960s psychedelic poster](../../../reference/visual_styles/psychedelic_poster/README.md)

Then create a hybrid of **German Expressionism + psychedelia**. Expressionist shadow and angular pressure govern the underlying architecture; psychedelic rhythm must emerge **within the raven and city geometry**, not as an unrelated overlay. The final image should communicate uneasy wonder.

The implementation medium is open: generative imagery or procedural art. All studies use the same portrait aspect ratio.

## 3. Acceptance Criteria

- [ ] **AC-01:** Three single-style studies exist at portrait ratio and clearly depict the raven, golden key and city.
- [ ] **AC-02:** The German study visibly uses hard black shadow masses, angular distortion, incised strokes and a strong diagonal.
- [ ] **AC-03:** The Constructivist study visibly uses a red-black-cream dominant palette, flat geometric planes and a directional composition.
- [ ] **AC-04:** The psychedelic study visibly uses at least three saturated hues, repeating fluid contours and warped space.
- [ ] **AC-05:** The hybrid clearly shows a black raven, a gold key **held in its beak**, and a recognizable, distorted city below.
- [ ] **AC-06:** In the hybrid, large angular black shadow masses and carved-looking irregular strokes establish an Expressionist structure.
- [ ] **AC-07:** Saturated psychedelic color is concentrated in repeated fluid forms **within the raven's wing/feathers or city structures**, with at least two visibly connected flowing passages rather than a pasted-on background effect.
- [ ] **AC-08:** The city skyline is tilted, compressed or spatially warped and supports one dominant diagonal of visual tension.
- [ ] **AC-09:** The hybrid exhibits intentional irregular ink/print texture and has both psychological unease and optical wonder.
- [ ] **AC-10:** All produced images contain no lettering, logos or watermarks.
- [ ] **AC-11:** Preserve the spec, implementation method or generator prompts, artwork files, a visual review of **every** Acceptance Criterion, and a revision if v1 is not fully accepted.

## 4. Analysis

**Compatible properties:** Both German Expressionism and psychedelia distort recognizable forms and communicate emotion through visual space. Angular carved edges may serve as the underlying structure while flowing contours emerge from within them.

**Conflicts:** German Expressionist limited color conflicts with psychedelic saturation; use restrained black and paper tones as structural mass, reserving saturated colors for internal currents. Jagged and flowing lines conflict; transition from angular feather and architectural outlines to curving internal marks without losing subject identity.

The Constructivist image serves as an independent baseline, not as a required third influence on the final hybrid.

## 5. Proposed Solution

Implement the three visual studies first. Implement a hybrid v1 according to the Required State and Acceptance Criteria. Inspect each artifact against the matching criteria, record visible evidence and status, then revise any unmet hybrid criteria.

## 6. ToDo

- [ ] Create three baseline studies.
- [ ] Create the hybrid v1.
- [ ] Check every applicable Acceptance Criterion against actual artwork.
- [ ] Revise unmet criteria if needed, and verify the new image.
- [ ] Save images, implementation instructions and review.

## 7. Implementation Verification

Pending image implementation and direct visual inspection.
