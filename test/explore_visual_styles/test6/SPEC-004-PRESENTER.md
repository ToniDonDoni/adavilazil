# SPEC-004: Blonde News Presenter in a City

## 1. Problem and Current State
Existing style tests do not cover Yuri Pimenov's *New Moscow* mode, Edward Steichen's Vogue editorial portraits or Saul Leiter's Early Color. Existing test5 belongs to an independent Swiss/Fukuda/Kruger study and must remain unchanged.

## 2. Required State
Create three separate original 900x1100 visual studies of a fictional blonde, long-haired, gray-eyed female TV news presenter at a desk with papers and microphone. Each study must emphasize one of the above styles. Then create a Pimenov + Leiter hybrid, inspect v1 against acceptance criteria, correct failures in v2, and retain all files plus verification. Pimenov is the mandatory, user-selected base.

## 3. Acceptance Criteria
- [x] AC-01: Three separate original studies show a recognizable presenter with blonde long hair, gray eyes, paper and microphone.
- [x] AC-02: The Pimenov study includes painterly broken strokes, soft city atmosphere and a contemporary street viewpoint.
- [x] AC-03: The Steichen study shows a controlled, strongly modeled editorial portrait and restrained studio background.
- [x] AC-04: The Leiter study has partial foreground framing, reflected glass and spatial muted red color.
- [x] AC-05: The hybrid retains the Pimenov-painted city and figure while adding Leiter's colored-window layering.
- [x] AC-06: In the revised hybrid the gray eyes, hair, microphone and papers are identifiable without a major glass stroke masking the face.
- [x] AC-07: The revised hybrid preserves both fine broken painted strokes and translucent reframing planes.
- [x] AC-08: Sources, independent studies, v1, v2, and a per-criterion visual self-review are linked and preserved.
- [ ] AC-09: The generated figure is genuinely lifelike with fully realistic face and anatomy (partial: procedural SVG is stylized).

## 4. Analysis
Pimenov's soft urban presence and Leiter's photographed reflected color are complementary, but media and focus depth differ. In the hybrid preserve Pimenov's painted soft atmosphere as underlying structure and add Leiter's layers sparingly. Steichen provides a separate contrast rather than a third hybrid component. The explicit Pimenov preference is not presented as comparative evidence.

## 5. Proposed Solution
Procedural self-contained SVG provides versionable, testable images without borrowing copyrighted museum pictures. Independently render three style variants; generate hybrid v1 with dominant red glass veil over central face; inspect; revise v2 by shifting the veil and lowering opacity.

## 6. ToDo
- [x] Select eligible unused backlog entries and verify against open PRs.
- [x] Research and author three six-section style references.
- [x] Create three individual rendered SVG variants.
- [x] Create hybrid v1.
- [x] Inspect each criterion and revise to v2.
- [x] Document evidence and limitations.
- [ ] Optional independent aesthetic assessment and photorealistic generation.

## 7. Implementation Verification
The baseline and hybrid SVG files are embedded in [README.md](README.md). [REVIEW.md](REVIEW.md) records v1 and v2 evidence, including the incomplete AC-09.
