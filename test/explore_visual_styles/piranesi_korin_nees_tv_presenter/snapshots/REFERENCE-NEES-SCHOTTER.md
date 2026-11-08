# Archived source: reference/visual_styles/nees_schotter/README.md

Source revision: `9eeea3914787f8b788735d23af50b3a9de7d21dc`. Verbatim snapshot; relative links in the fenced text refer to the original source location.

```markdown
# Georg Nees's Schotter Generative Graphics

## Overview

A reference for *Schotter* (Gravel), Georg Nees's late-1960s computer-generated composition of square outlines. A regular arrangement progressively loosens through changes in position and angle. Its subject is the visible transition between order and disorder, rather than a depiction of actual stones.

The Computer Arts Society archive dates its *Schotter* entry to 1968–1970 and links it to the V&A collection. Nees worked in Germany, using programming and a drawing machine as artistic tools; the Digital Art Museum documents his Siemens background, ALGOL practice and studies with Max Bense.

The image design and the medium of a particular impression are separate questions: CAS labels its example a plotter print, while Hunter's caption identifies the reproduced V&A impression as a lithograph after a computer-generated graphic. Do not assume every surviving copy was drawn directly by a plotter.

The requirements below are an editorial style guide, not an exact reconstruction of an original impression or its random-number sequence. Backlog origin: FS-236.

## Influenced By

- Max Bense's generative aesthetics: Nees studied under Bense in Stuttgart; their documented collaboration connects his graphics to an explicit investigation of aesthetic systems.
- Mathematical programming and mechanical drawing: ALGOL and the Zuse Graphomat Z64 provided the means to turn formal rules into line drawings. This is a technical foundation, not a claim of descent from a particular earlier painting.

## Influenced To

- Contemporary creative-coding studies: Zellyn Hunter's documented reconstruction translates the work into Python and investigates its original random generators. This is a concrete example of later reuse, rather than a claim that all generative art descends from *Schotter*.
- Computational art discourse: Nees's 1969 thesis, later published as a book, helped establish computer graphics as a subject of aesthetic research. The Digital Art Museum documents this contribution at the level of his practice, not solely this image.

## Relations

- Vera Molnár's *Interruptions*: a related investigation of geometry and disrupted order within early computational art; the V&A documents her independent practice. This comparison does not establish direct influence between the two artists.
- [Kōrin's Irises](../korin_irises/README.md): an editorial comparison in repetition and spacing. Plant clusters and disturbed squares create rhythm through very different materials and organizing principles.

## Style Requirements

- **Unit:** Use closed, unfilled squares of constant side length; do not deform them into arbitrary quadrilaterals.
- **Initial order:** Establish a clearly legible rectangular lattice at the top of a portrait-oriented field.
- **Progression:** Compare the upper, middle and lower regions: positional scatter and the range of square angles should widen overall downward. Avoid an abrupt boundary between a perfect grid and an unrelated random pile.
- **Variation:** Let individual squares differ within that progression; do not force every lower square to be more tilted than the one above.
- **Overlap:** Allow increasingly disturbed squares to intersect while keeping each outline traceable.
- **Mark:** Use thin, substantially uniform dark lines on a light ground, without shading, solid fills or simulated three-dimensional cubes.
- **Composition:** Keep the overall field taller than wide and approximately rectangular, with clear paper margins. Allow local gaps and denser overlaps as the squares move; do not force uniform density.

Review the top, middle and bottom at the same display scale; check both center displacement and angle variation, not just the amount of overlap. A uniform random scatter, a rigid grid of rotating squares with fixed centers, or a perspective stack of cubes each misses a defining feature.

The familiar portrait composition has 12 squares across and 22 rows. For an exact reconstruction, the ordering of the drawing operations and the random generators also matter. A new seed, a changed grid size or a row-only disturbance rule should be labeled as a variation. No reconstruction or generated artwork is included here.

## Sources

- [Computer Arts Society: CAS Collection at the V&A, Schotter entry CAS/A/0006](https://www.computer-arts-society.com/casarchive/cas/cas-collection.html) — archive identity and 1968–1970 date range.
- [V&A: Schotter, object O221321](https://collections.vam.ac.uk/item/O221321/schotter-print-nees-georg/) — direct object locator linked by CAS; unavailable to the research tool, so not used as independently read evidence.
- [Digital Art Museum: Georg Nees](https://dam.org/museum/artists_ui/artists/nees-georg/) — German context, equipment, Bense collaboration and the 1969 thesis.
- [V&A: Digital Art](https://www.vam.ac.uk/articles/digital-art) — plotter-based computational art and Molnár's independent practice.
- [Zellyn Hunter: Schotter — Georg Nees, Part 1](https://zellyn.com/2024/06/schotter-1/) — reproduced historical code and the author's modern translation; used for the operational reading of the composition.
- [Zellyn Hunter: Schotter — Georg Nees, Part 2](https://zellyn.com/2024/06/schotter-2/) — firsthand reconstruction research, drawing-order differences and random-generator investigation.

Research checked: 2026-11-08. The V&A object page could not be fetched during this research; the collection link and date above were checked through the originating CAS archive.
```
