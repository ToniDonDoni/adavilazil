# SPEC-001: Lake at Dusk, Dusk Current

**Skill used:** EXPLORE-VISUAL-STYLES 2.1.0

## 1. Problem and Current State
- Before test3, the four reference styles had formal Style Requirements, but no test had yet been specified against them.

## 2. Required State
- Generate the **same** scene under Levitan-inspired watercolor, German Expressionist and psychedelic poster requirements.
- Fuse Levitan-inspired watercolor with 1960s psychedelia and revise it after checking compliance.
- **Fixed subject:** a leaning pine beside a lake at dusk, distant hills, moon and reflection. Portrait art print; no people or lettering.

## 3. Acceptance Criteria
- [x] **B-01:** Three baseline artworks are saved and reviewed against their source Style Requirements.
- [x] **H-01 / LW-01:** Diffuse, shadowless dusk lighting defines sky and hills.
- [x] **H-02 / LW-02 + PP-02:** At least two-thirds remains muted with narrow saturated accents.
- [ ] **H-03 / LW-03 + PP-03:** The pine's angular trunk or branches transform into flowing contours **within their anatomy**.
- [x] **H-04 / LW-04 + PP-04:** Curves link pine and reflection while distant hills avoid hard outlines.
- [ ] **H-05 / LW-05 + PP-05:** Reflection warps spatial perspective while hills remain lower contrast.
- [x] **H-06 / LW-06 + PP-06:** Open sky and lake preserve a rhythmic path toward the reflected moon.
- [ ] **H-07 / LW-07 + PP-07:** Transparent washes, paper tooth and irregular pigment are convincingly visible.
- [ ] **H-08 / LW-08 + PP-08:** The scene is contemplative but subtly unsettling.
- [x] **H-09:** The lone pine, lake, hills, moon and reflection remain identifiable.
- [x] **V-01:** V1 and v2 prompts, images and per-rule reviews are preserved.

## 4. Analysis
- [Source Style Requirements and conflict analysis](STYLE-ANALYSIS.md).
- **Compatible:** LW-05 / PP-05 (depth), LW-06 / PP-06 (rhythm), LW-07 / PP-07 (surface).
- **Conflicts:** LW-02 muted color versus PP-02 saturation; LW-04 soft edges versus PP-04 continuous contours.
- **Resolution:** mostly muted washes with narrow color currents belonging to the tree and its reflection.

## 5. Proposed Solution
- Generate [three baselines](BASELINE-REVIEW.md) according to their source requirements.
- Apply the [hybrid Style Requirements](RULES.md), assess [v1](REVIEW-V1.md), revise and assess [v2](REVIEW-V2.md).
- Preserve each prompt, image and review.

## 6. ToDo
- [x] Render and review three baselines.
- [x] Render hybrid v1 and review each H requirement.
- [x] Revise targeted failures, render v2 and review again.
- [x] Archive all artifacts and record unresolved criteria.

## 7. Implementation Verification
- Editable deterministic SVG illustrations made from [recorded prompts](prompts/), not stochastic image-model exports.
- [Baseline review](BASELINE-REVIEW.md) is saved for LW, GE and PP requirements.
- [V1 review](REVIEW-V1.md): **3 pass / 4 partial / 2 fail**.
- [V2 review](REVIEW-V2.md): **5 pass / 4 partial / 0 fail**.
- Open: H-03, H-05, H-07 and H-08 are **partial**; acceptance is incomplete.
