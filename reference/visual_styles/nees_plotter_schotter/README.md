# Nees Plotter Grid

## Overview
A generative drawing idiom from early computer art, defined by Georg Nees (1926–2016) in *Schotter* ("Gravel", 1968–1970). A regular grid of square outlines is drawn from the top of the sheet downward while a program adds progressively larger random rotation and displacement, so order dissolves into a tumbling heap. Nees computed the coordinates at Siemens and drew them on a Zuse Graphomat Z64 pen plotter; the work circulated as a black lithograph. It is a direct demonstration of Max Bense's generative aesthetics: a deterministic structure deliberately modulated by bounded chance.

## Influenced By
- Concrete and constructivist grid art: the module as the basic unit of composition.
- Generative aesthetics (Max Bense, Stuttgart): art produced by explicit rules plus controlled randomness.
- Engineering drawing culture: the pen plotter as the output device, with its uniform stroke and machine precision.

## Influenced To
- Generative and plotter art of the 1970s–1980s: rule-based drawing as a reproducible practice.
- Contemporary creative coding: grid-disruption exercises that remain a standard teaching example.

## Relations
- [Swiss Style poster](../swiss_style_poster/README.md): both trust the grid as an organising system; Nees uses it as the starting point that the program is allowed to break.
- [Soviet Constructivist poster](../soviet_poster/README.md): both compose from repeated geometric units, but Nees removes composition decisions from the author and hands them to a rule set.

## Style Requirements
- **Base order:** Begin from a regular grid of identical cells with equal spacing in both axes.
- **Progressive disorder:** Increase rotation and displacement monotonically along one axis, so one edge stays perfect and the opposite edge collapses.
- **Stroke:** Draw every cell as a visible outline in a single stroke weight; no fills, no anti-aliasing haze, no gradients.
- **Monochrome:** Keep the image to one ink on one paper tone; value comes from density of overlapping lines.
- **Bounded chance:** Cap random offsets so the ordered region remains readable and the disordered region overlaps without leaving the sheet.
- **Repeatability:** The same seed must reproduce the drawing exactly, and a different seed must produce the same statistical profile.
- **Provenance mark:** Keep wide margins and a small machine-like caption block, as on a plotted sheet.
- **Scale:** Use many small cells; the effect depends on counting a large number of units before the drift becomes obvious.

## Sources
- [V&A: Georg Nees, Schotter, 1968–1970 (museum no. E.217-2008)](https://collections.vam.ac.uk/item/O221321/schotter-print-nees-georg)
- [Computer Arts Society: CAS collection at the V&A](https://computer-arts-society.com/cas/cas-collection.html)
- [V&A: Georg Nees, Flur (Korridor)](https://collections.vam.ac.uk/item/O221332/flur-korridor-photograph-unknown)
