# Per-criterion verification for SPEC-004

Method: manual visual and SVG-geometry review of five original source files. Not an independent model-image quality rating.

| AC | v1 / baseline | Final v2 | Visible or code-based evidence |
| --- | --- | --- | --- |
| AC-01 | pass | pass | 01/02/03 have long pale hair, two gray iris circles, paper and microphone |
| AC-02 | pass | pass | 01 has city silhouette, small street details, diffuse pastel sky and broken colored strokes |
| AC-03 | pass | pass | 02 has controlled gray background and deliberately modeled studio figure |
| AC-04 | pass | pass | 03 combines tinted vertical window-like frames with blurred/cropped urban fragments |
| AC-05 | pass | pass | Both 04 and 05 use Pimenov base geometry with Leiter-inspired glass additions |
| AC-06 | partial | pass | 04 crosses portrait center with thick opaque-looking red pane; 05 displaces the pane to the far-right edge and decreases alpha |
| AC-07 | pass | pass | 05 preserves irregular painterly dabs underneath color and glass layers |
| AC-08 | pending | pass | All five SVG files and spec, implementation guide and revision record in test6 |
| AC-09 | partial | partial | Face and hands are vector approximations and not fully lifelike; no human-blind review |

**Final status:** 8 pass, 1 partial, 0 fail. The user requested Pimenov as the winner, therefore choice is a fixed experiment condition, not an unbiased comparison score.

**Explicit changes v1 -> v2:** central red stroke x≈230 moved to right x≈775; dark structural stroke x≈550 moved left x≈55; optical layer alpha 0.72 -> 0.26; subject, pale hair, gray eyes, painted street and microphone are unchanged.

**Remaining gap:** photorealistic anatomy and naturalistic eye appearance require a separate higher-fidelity generation and genuine external inspection. Do not claim full compliance.
