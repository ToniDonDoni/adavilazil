# Generation Plan and Provenance

**Status:** awaiting manual V1 generation by the repository owner.
**Requested generator:** OpenAI GPT Image via the Images API.
**Target model ID:** `gpt-image-2.5-flare` (planned, not executed).
**Parameters:** size 1024x1536; output format png; n=1; otherwise capture actual settings used.
**Documentation:** https://developers.openai.com/api/docs/guides/tools-image-generation

## Current prompt and output

| Stage | Saved prompt | Expected filename | Status |
| --- | --- | --- | --- |
| Hybrid V1 | [01-HYBRID-V1.md](prompts/01-HYBRID-V1.md) | images/01-HYBRID-V1.png | not generated |

The only generation prompt is the verbatim text below the 'Exact generation prompt' heading of the linked file.

## Required next steps

1. Run the V1 prompt exactly as saved and preserve the resulting PNG.
2. Record the actual generation date/time, tool/API, model ID if exposed, size, executed prompt and artifact SHA-256, and any deviations.
3. Review the real V1 image against every applicable AC in [REVIEW-TEMPLATE.md](REVIEW-TEMPLATE.md); record concrete visual evidence.
4. **Create the V2 prompt only after this V1 review**. Use actual failed or partial criteria to justify every requested change.
5. Preserve both executed prompts and both images for later comparative verification. Do not overwrite the first version.

If the runtime hides its model version, write 'not exposed' rather than claiming a model was observed. No images or reviews have been produced in this PR.
