# Experiment Checklist

- [x] Use an isolated feature branch; never modify main directly.
- [x] Add two new academic references and a consolidated artistic specification.
- [x] Preserve first hybrid prompt and V1 visual review.
- [x] Derive the second prompt from actual V1 observations.
- [x] Inspect the actual user-supplied V2 original image.
- [x] Compare V2 against all 11 unchanged acceptance criteria.
- [x] Save an evidence-based [V2 review](REVIEW-V2.md), including observed improvements and remaining partials.
- [x] Record both user-provided image filenames, sizes, modes and SHA-256 values for reproducible identity checks.
- [x] Commit supplied V1 PNG to `images/01-HYBRID-V1.png`.
- [x] Commit supplied V2 PNG to `images/02-HYBRID-V2.png`.
- [x] Verify attachment checksums before committing both binaries.
- [ ] Complete originality comparison if a stronger claim is required.
- [ ] Confirm V2 runtime model if its generator provides it; otherwise leave unexposed.

**V1:** 7 pass / 4 partial / 0 fail.
**V2:** 8 pass / 3 partial / 0 fail.
AC-11 remains partial because the V2 runtime model identifier is not exposed.
