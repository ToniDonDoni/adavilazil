# SPEC-002: Raven, Golden Key and Unstable City

**Skill:** EXPLORE-VISUAL-STYLES v2.3.0

## 1. Problem and Current State

Earlier raven experiments were designed around prompts and checked against hybrid rules. This test evaluates the same motif using a declarative specification as the authority for implementation and verification.

## 2. Required State

Create a portrait artwork of a **black raven holding a clearly visible antique golden key in its beak**, perched on an angular stone spire overlooking an unstable city. The bird, key and city must remain recognizable. No words or logos.

Produce separate studies of the same subject and composition in:
- [German Expressionist poster](../../../reference/visual_styles/german_poster/README.md)
- [Soviet Constructivist poster](../../../reference/visual_styles/soviet_poster/README.md)
- [1960s psychedelic poster](../../../reference/visual_styles/psychedelic_poster/README.md)

Then create a hybrid of **German Expressionism + psychedelia**. Expressionist shadow and angular pressure govern the structure; psychedelic rhythm emerges **within the raven and city geometry**, not as an unrelated overlay. The result should communicate uneasy wonder.

Generative imagery or procedural art may be used. All studies share a portrait aspect ratio.

## 3. Acceptance Criteria

- [x] **AC-01:** Three single-style studies exist at portrait ratio and clearly depict the raven, golden key and city.
- [x] **AC-02:** The German study visibly uses hard black shadow masses, angular distortion, incised strokes and a strong diagonal.
- [x] **AC-03:** The Constructivist study visibly uses a red-black-cream dominant palette, flat geometric planes and a directional composition.
- [x] **AC-04:** The psychedelic study visibly uses at least three saturated hues, repeating fluid contours and warped space.
- [x] **AC-05:** The hybrid clearly shows a black raven, a gold key **held in its beak**, and a recognizable distorted city below.
- [ ] **AC-06:** In the hybrid, large angular black shadow masses and carved-looking irregular strokes establish an Expressionist structure.
- [x] **AC-07:** Saturated psychedelic color is concentrated in repeated fluid forms **within the raven's wing/feathers or city structures**, with at least two visibly connected flowing passages rather than a pasted-on background effect.
- [x] **AC-08:** The city skyline is tilted, compressed or spatially warped and supports one dominant diagonal of visual tension.
- [ ] **AC-09:** The hybrid exhibits intentional irregular ink/print texture and has both psychological unease and optical wonder.
- [x] **AC-10:** All produced images contain no lettering, logos or watermarks.
- [x] **AC-11:** Preserve the spec, implementation method or generator prompts, artwork files, a visual review of **every** Acceptance Criterion, and a revision if v1 is not fully accepted.

**Unchecked items are partially met, not accepted.** See [REVIEW.md](REVIEW.md) for evidence.

## 4. Analysis

**Compatible properties:** Both German Expressionism and psychedelia distort recognizable forms and communicate emotion through visual space. Angular carved edges can establish the structure while flowing contours emerge from within them.

**Conflicts:** Expressionist limited color conflicts with psychedelic saturation; use black and paper tones as structural mass, reserving saturated colors for internal currents. Jagged and flowing lines conflict; transition from angular outlines to curving internal strokes without losing recognizable anatomy.

The Constructivist image is an independent study, not a third influence on the final hybrid.

## 5. Proposed Solution

Use procedural SVG illustration for each style study and the hybrid. Implement v1 according to the spec, verify each Acceptance Criterion from the artwork, and revise unmet outcomes. Preserve the resulting artifacts and their verification.

## 6. ToDo

- [x] Create three baseline studies.
- [x] Create the hybrid v1.
- [x] Check every applicable Acceptance Criterion against actual artwork.
- [x] Revise unmet criteria and verify v2.
- [x] Save images, implementation method and review.
- [ ] Refine AC-06 and AC-09 to full acceptance.

## 7. Implementation Verification

- **Method:** original procedural SVG illustrations with the same geometric subject. See [IMPLEMENTATION.md](IMPLEMENTATION.md).
- **Artwork:** [three baseline studies](README.md), [v1](images/04-hybrid-v1.svg), [v2](images/05-hybrid-v2.svg).
- **Evidence:** [REVIEW.md](REVIEW.md) checks each AC individually against the output.
- **v2 status:** **9 pass / 2 partial / 0 fail**; **AC-06** and **AC-09** remain unaccepted.
