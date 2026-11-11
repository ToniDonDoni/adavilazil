# Generation Plan and Provenance

**Status:** pending manual execution by the repository owner.
**Requested generator:** OpenAI GPT Image via the Images API.
**Explicit target model ID:** gpt-image-2.5-flare (not yet used).
**Parameters:** size 1024x1536; output format png; n=1 per prompt; quality/model defaults unless specifically captured.
**Documentation:** https://developers.openai.com/api/docs/guides/tools-image-generation

## Order and output names

| Stage | Saved prompt | Expected filename | Status |
| --- | --- | --- | --- |
| Dore individual study | [01-DORE-STUDY.md](prompts/01-DORE-STUDY.md) | images/01-DORE-STUDY.png | not generated |
| Sims individual study | [02-SIMS-STUDY.md](prompts/02-SIMS-STUDY.md) | images/02-SIMS-STUDY.png | not generated |
| Hybrid V1 | [03-HYBRID-V1.md](prompts/03-HYBRID-V1.md) | images/03-HYBRID-V1.png | not generated |
| Hybrid V2 | [04-HYBRID-V2-CANDIDATE.md](prompts/04-HYBRID-V2-CANDIDATE.md) | images/04-HYBRID-V2.png | not generated |

The prompt file body beneath the 'Exact generation prompt' heading is intended to be passed verbatim. Record in a separate review or manifest the actual date/time, returned model ID if exposed, generation tool/API, size, prompt SHA-256, asset SHA-256 and deviations. An interface that hides the model version cannot justify a claim of exact runtime model provenance. Record it as 'not exposed' instead.

The V2 candidate exists so the user has a usable second prompt. It is **not** an improvement validated by V1 yet: once V1 is reviewed, preserve this candidate and add a separate final V2 prompt file containing actual changes justified by observed failures if applicable. Do not backfill fake V1/V2 reviews.

No image-generation tools were called for this PR.
