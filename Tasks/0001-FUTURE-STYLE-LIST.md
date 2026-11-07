# Task 0001: Future Style List

**Status:** backlog

## Task

Select a candidate below that does not already have a style reference under [Visual Styles](../reference/visual_styles/). Create its style reference using the [style template](../engineering/STYLE-TEMPLATE.md), follow the [contribution rules](../CONTRIBUTING.md), and add the new style reference to that folder.

## Museum and archive source directory

Source IDs used in the candidate list are **search starting points**, not claims that a specific work is currently held by a given institution. Confirm each item, attribution and availability during research.

| ID | Search starting point |
| --- | --- |
| MOMA | [Museum of Modern Art collection](https://www.moma.org/collection/) |
| MET | [The Met collection and Open Access API](https://www.metmuseum.org/art/collection) |
| AIC | [Art Institute of Chicago collection and API](https://www.artic.edu/collection) |
| PH | [Poster House digital collection](https://collection-open.posterhouse.org/) |
| LA | [Letterform Archive online archive](https://letterformarchive.org/online-archive/) |
| VAM | [Victoria and Albert Museum collections](https://collections.vam.ac.uk/) |
| BL | [British Library collections](https://www.bl.uk/collection) |
| LOC | [Library of Congress digital collections](https://www.loc.gov/collections/) |
| NGA | [National Gallery of Art collection](https://www.nga.gov/artworks.html) |
| GET | [Getty collections, research and vocabularies](https://www.getty.edu/research/) |
| CH | [Cooper Hewitt collection](https://www.cooperhewitt.org/collections/) |
| RJK | [Rijksmuseum collection and data](https://www.rijksmuseum.nl/en/collection) |
| MAK | [MAK Vienna collection](https://www.mak.at/en) |
| BFI | [British Film Institute collections](https://www.bfi.org.uk/) |
| CHM | [Asian art collections (verify relevant institution and object)](https://asia.si.edu/) |
| RUS | [Tretyakov Gallery publications and collection](https://www.tretyakovgallery.ru/) |

Additional discovery and terminology: [Getty Art & Architecture Thesaurus / Union List of Artist Names](https://www.getty.edu/research/tools/vocabularies/), [Europeana](https://www.europeana.eu/), [Cleveland Museum of Art Open Access](https://www.clevelandart.org/open-access), [Smithsonian Open Access](https://www.si.edu/openaccess), [Wikimedia Commons](https://commons.wikimedia.org/) (verify attribution against primary sources).

## GitHub catalogues worth mining

**Direct style discovery (priority order):**

1. [AI Visual Prompt Cookbook](https://github.com/VigoZhao/AI-Visual-Prompt-Cookbook): structured per-style `style.json` files, prompt constraints and previews. Its current README advertises 182 styles / 364 previews. Useful for extracting *candidate visual vocabulary*, not a historical source of truth.
2. [GPT Image Style Atlas](https://github.com/acesjohnny/gpt-image-style-atlas): 116 style cards, one common comparison scene, prompts and JSON. Particularly useful for finding narrower media traditions and designing consistent baseline comparisons.
3. [Aesthetics](https://github.com/ZaynJarvis/aesthetics): 337 style prompts in YAML and a coverage audit. Mine narrower lanes, then cross-check that they are not merely moods, aesthetics or generic movements.
4. [StableDiffusion-CheatSheet](https://github.com/SupaGruen/StableDiffusion-CheatSheet): over 833 manually tested artist-inspired styles, searchable examples and metadata. Good high-volume artist discovery; do not assume model behavior accurately represents an artist's actual work.

## Future style candidates

Candidates below are deliberately concise and **unverified**. Not all source locations will carry every listed work. Source codes are intended as starting queries. Add precise object URLs and evidence only when promoting an item to a full reference entry.

### Experimental typography and graphic systems

- [ ] **FS-001** Piet Zwart: NKF cable catalogues (1920s–1930s): typographic diagonals, photography and scale. Search: LA,MOMA.
- [ ] **FS-002** El Lissitzky: For the Voice book design (1923): navigational tabs, geometric typography. Search: MOMA,LA.
- [ ] **FS-003** El Lissitzky: Proun lithographs (1919–1920s): floating architectonic geometry. Search: MOMA,MET.
- [ ] **FS-004** Alexander Rodchenko: LEF and Novy LEF covers (1920s): constructivist typography, hard photomontage. Search: MOMA,LA.
- [ ] **FS-005** Varvara Stepanova: Soviet textile and magazine layouts (1920s): severe diagonals and patterned geometry. Search: MOMA,MET.
- [ ] **FS-006** Gustav Klutsis: Soviet photomontage posters (1920s–1930s): monumental cropped figures and perspective. Search: MOMA,PH.
- [ ] **FS-007** Karel Teige: Abeceda (1926): dance, photographic alphabet, type geometry. Search: MOMA,LA.
- [ ] **FS-008** László Moholy-Nagy: Bauhaus typophoto studies (1920s): light, type and photographic structure. Search: MOMA,LA.
- [ ] **FS-009** Herbert Bayer: Bauhaus universal-type experiments (1920s): modular lowercase geometry. Search: MOMA,LA.
- [ ] **FS-010** Joost Schmidt: Bauhaus exhibition graphics (1923): dramatic lettering and spatial wedges. Search: MOMA,LA.
- [ ] **FS-011** Jan Tschichold: New Typography layouts (1920s–1930s): asymmetry and purposeful white space. Search: LA,VAM.
- [ ] **FS-012** Willem Sandberg: Stedelijk catalogues (1940s–1960s): hand-torn letterforms, paper texture. Search: LA,MOMA.
- [ ] **FS-013** Ladislav Sutnar: Sweet's catalog layouts (1940s–1950s): information hierarchy, tabular navigation. Search: MOMA,LA.
- [ ] **FS-015** Armin Hofmann: Basel theater posters (1950s–1960s): stark photo/type contrasts. Search: LA,MOMA.
- [ ] **FS-016** Karl Gerstner: Swiss programmatic graphic systems (1960s): modular systems and combinatorial grids. Search: MOMA,LA.
- [ ] **FS-017** Otl Aicher: Munich Olympics pictograms (1972): standardized silhouettes and strict grids. Search: MOMA,LA.
- [ ] **FS-018** Massimo Vignelli: New York subway diagram (1972): geometric route simplification. Search: MOMA,LA.
- [ ] **FS-019** Herb Lubalin: Avant Garde magazine lettering (1968–1970s): tightly interlocked editorial typography. Search: LA,MOMA.
- [ ] **FS-020** Wolfgang Weingart: experimental Swiss typography (1970s–1980s): fractured grids, offset texture. Search: LA,MOMA.
- [ ] **FS-021** April Greiman: Does It Make Sense? (1986): early digital layering and pixel aesthetics. Search: LA,MOMA.
- [ ] **FS-022** Zuzana Licko: Emigre type specimen layouts (1980s–1990s): bitmap type and deliberate resolution. Search: LA,MOMA.
- [ ] **FS-023** Neville Brody: The Face editorial layouts (1980s): expressive bespoke type and cropping. Search: LA,VAM.
- [ ] **FS-024** David Carson: Ray Gun layouts (1990s): disrupted reading order and expressive layering. Search: LA,VAM.
- [ ] **FS-025** Paula Scher: Public Theater identity/posters (1990s): massive theatrical type in urban arrangements. Search: MOMA,PH.
- [ ] **FS-026** M. C. Escher: Circle Limit woodcuts (1958–1960): hyperbolic tessellations and shrinking motifs. Search: NGA,MET.
- [ ] **FS-027** Bruno Munari: unreadable books (1950s): color and sequencing without conventional text. Search: MOMA,LA.
- [ ] **FS-028** Muriel Cooper and MIT Visible Language Workshop: Information Landscapes (1994): spatial 3D typography and navigable data layers. Search: MOMA,LA.

### Poster traditions and campaigns

- [ ] **FS-029** Stenberg brothers: Man with a Movie Camera film poster (1929): cinematic figure fragmentation and diagonal photomontage. Search: MOMA,PH.
- [ ] **FS-030** Aleksandr Deyneka: sports and aviation posters (1930s): monumental athletic geometry. Search: MOMA,PH.
- [ ] **FS-031** Dmitry Moor: early Soviet agitprop posters (1920s): skeletal silhouettes and limited red/black. Search: PH,LOC.
- [ ] **FS-032** John Heartfield: anti-fascist AIZ covers (1930s): sharply political photomontage. Search: MOMA,PH.
- [ ] **FS-033** Lucian Bernhard: Sachplakat object posters (1900s–1910s): product isolation and flat color. Search: PH,VAM.
- [ ] **FS-034** Ludwig Hohlwein: commercial posters (1910s–1930s): hard-edged chiaroscuro shapes. Search: PH,VAM.
- [ ] **FS-035** A. M. Cassandre: Nord Express and railway posters (1920s–1930s): machine-age vanishing points. Search: MOMA,PH.
- [ ] **FS-036** E. McKnight Kauffer: London Underground posters (1920s–1930s): abstracted movement and travel geometry. Search: PH,VAM.
- [ ] **FS-037** Edward Bawden: London Transport posters (1930s): patterned linocut-like urban scenes. Search: PH,VAM.
- [ ] **FS-038** Tom Purvis: LNER railway posters (1930s): compressed landscape color blocks. Search: PH,VAM.
- [ ] **FS-039** Henryk Tomaszewski: Polish film posters (1940s–1960s): metaphorical brushstroke graphic design. Search: MOMA,PH.
- [ ] **FS-040** Jan Lenica: Wozzeck opera poster (1964): distorted organic figure, psychedelic lines and oppressive contrast. Search: MOMA,PH.
- [ ] **FS-041** Waldemar Świerzy: jazz and film posters (1950s–1980s): painterly portraits and rough gestures. Search: PH,MOMA.
- [ ] **FS-042** Roman Cieślewicz: Polish-French posters (1960s–1970s): surreal mirror collage and high contrast. Search: MOMA,PH.
- [ ] **FS-043** Franciszek Starowieyski: theater posters (1960s–1980s): dense baroque anatomical drawing. Search: PH,MOMA.
- [ ] **FS-044** Yusaku Kamekura: Tokyo Olympics posters (1964): sun-disc geometry and photographic action. Search: MOMA,PH.
- [ ] **FS-045** Ikko Tanaka: Nihon Buyo poster (1981): geometric face and color segmentation. Search: MOMA,PH.
- [ ] **FS-047** Kazumasa Nagai: Life poster series (1980s–1990s): animal silhouettes and graphic gradients. Search: MOMA,PH.
- [ ] **FS-048** Tadanori Yokoo: theater and event posters (1960s): pop collage, Japanese iconography, psychedelic density. Search: MOMA,PH.
- [ ] **FS-049** Wes Wilson: Fillmore concert posters (1966–1967): compressed undulating lettering. Search: PH,CH.
- [ ] **FS-050** Victor Moscoso: Neon Rose posters (1960s): optical vibration and complementary colors. Search: PH,CH.
- [ ] **FS-051** Bonnie MacLean: Fillmore concert posters (1967–1969): curving lettering and outlined figures. Search: PH,CH.
- [ ] **FS-052** Milton Glaser: Bob Dylan poster (1966): flat silhouette and colorful hair arabesques. Search: MOMA,PH.
- [ ] **FS-053** Seymour Chwast: Push Pin Studio posters (1960s–1970s): decorative historical remix and flat illustration. Search: MOMA,PH.
- [ ] **FS-055** Emory Douglas: Black Panther newspaper covers (1960s–1970s): blunt woodcut-like figures and slogans. Search: MOMA,PH.
- [ ] **FS-056** Shepard Fairey: early Obey Giant posters (1990s): stenciled portrait and propaganda geometry. Search: PH,MOMA.

### European printmaking and books

- [ ] **FS-057** Albrecht Dürer: Apocalypse woodcuts (1498): dense parallel carving and dramatic scale. Search: MET,NGA.
- [ ] **FS-058** Albrecht Dürer: Melencolia I engraving (1514): microscopic hatching, symbolic geometry. Search: MET,NGA.
- [ ] **FS-059** Hans Holbein the Younger: Dance of Death woodcuts (1520s–1530s): small narrative figures and biting contrast. Search: MET,NGA.
- [ ] **FS-060** Hendrick Goltzius: virtuoso engraving portraits (1580s–1590s): swelling line and sculpted contours. Search: MET,NGA.
- [ ] **FS-061** Giovanni Battista Piranesi: Carceri d'Invenzione (1740s–1760s): impossible prisons and receding arches. Search: MET,NGA.
- [ ] **FS-062** Francisco Goya: Los Caprichos etchings (1799): satirical darkness and aquatint atmospheres. Search: MET,NGA.
- [ ] **FS-063** Francisco Goya: Disasters of War prints (1810s): stark figures and unstable tonal fields. Search: MET,NGA.
- [ ] **FS-064** William Blake: illuminated books (1790s–1820s): handwritten text merging with mythic ornament. Search: MET,BL.
- [ ] **FS-065** Gustave Doré: Dante engravings (1861): extreme scale, luminous atmospheric hatching. Search: MET,BL.
- [ ] **FS-066** Honoré Daumier: lithographic caricatures (1830s–1860s): compressed faces and expressive tonal marks. Search: MET,NGA.
- [ ] **FS-067** Käthe Kollwitz: Weavers series (1890s): distressed black masses and social emotion. Search: MOMA,MET.
- [ ] **FS-068** Käthe Kollwitz: War woodcuts (1920s): grieving gestures and carved silhouettes. Search: MOMA,MET.
- [ ] **FS-069** Ernst Ludwig Kirchner: Die Brücke woodcuts (1900s–1910s): jagged cuts and compressed figures. Search: MOMA,MET.
- [ ] **FS-070** Erich Heckel: color woodcuts (1900s–1910s): coarse registration and explosive silhouettes. Search: MOMA,MET.
- [ ] **FS-071** Karl Schmidt-Rottluff: woodcuts (1910s): blocky faces, energetic angular carving. Search: MOMA,MET.
- [ ] **FS-072** Edvard Munch: Madonna lithographs (1890s–1900s): moody contour echoes and saturated washes. Search: MOMA,MET.
- [ ] **FS-073** Odilon Redon: Noirs charcoal/lithographs (1870s–1890s): floating eye and dreamlike charcoal fog. Search: MOMA,MET.
- [ ] **FS-074** Aubrey Beardsley: Salomé illustrations (1894): ornamental black-white silhouettes. Search: MET,VAM.
- [ ] **FS-075** Arthur Rackham: Peter Pan illustrations (1906): intricate ink silhouettes and washed colors. Search: VAM,BL.
- [ ] **FS-076** Edmund Dulac: Arabian Nights illustrations (1907): jewelled color fields and fine silhouettes. Search: VAM,BL.
- [ ] **FS-077** Kay Nielsen: East of the Sun and West of the Moon (1914): tall decorative figures and narrow palettes. Search: VAM,BL.
- [ ] **FS-078** Eric Gill: wood-engraved book illustrations (1920s–1930s): clean carved outlines and shape rhythm. Search: VAM,BL.
- [ ] **FS-079** Lynd Ward: Gods' Man woodcut novel (1929): silent high-contrast narrative sequences. Search: MET,BL.
- [ ] **FS-080** Frans Masereel: Passionate Journey woodcut novel (1919): silhouetted urban storytelling. Search: MET,BL.

### East Asian painting and print

- [ ] **FS-081** Katsushika Hokusai: Thirty-six Views of Mount Fuji (1830s): layered horizons and cropped wave geometry. Search: MET,RJK.
- [ ] **FS-082** Katsushika Hokusai: Hokusai Manga sketches (1810s onward): economical motion studies and lively line. Search: MET,BL.
- [ ] **FS-083** Utagawa Hiroshige: One Hundred Famous Views of Edo (1850s): foreground framing and atmospheric gradients. Search: MET,LOC.
- [ ] **FS-084** Utagawa Hiroshige: Tōkaidō Road prints (1830s): weather, travel and spatial sequencing. Search: MET,LOC.
- [ ] **FS-085** Kitagawa Utamaro: bijin-ga portraits (1790s): cropped heads and delicate pattern. Search: MET,LOC.
- [ ] **FS-086** Torii Kiyonaga: theatrical triptychs (1780s): rhythmic kimono patterns and paired silhouettes. Search: MET,LOC.
- [ ] **FS-087** Tōshūsai Sharaku: kabuki portraits (1794–1795): caricatured actors against mica grounds. Search: MET,LOC.
- [ ] **FS-088** Utagawa Kuniyoshi: warrior triptychs (1840s–1850s): crowded heroic movement and ornate fabric. Search: MET,LOC.
- [ ] **FS-089** Tsukioka Yoshitoshi: One Hundred Aspects of the Moon (1880s): moon-centered dramatic narratives. Search: MET,LOC.
- [ ] **FS-090** Kawanabe Kyōsai: satirical ink drawings (1860s–1880s): grotesque brush movement and humor. Search: MET,BL.
- [ ] **FS-091** Kobayashi Kiyochika: Tokyo views in changing light (1870s–1880s): gaslight, silhouettes, modern streets. Search: MET,LOC.
- [ ] **FS-092** Kawase Hasui: shin-hanga night landscapes (1920s–1950s): humid blue layers and luminous windows. Search: MET,LOC.
- [ ] **FS-093** Hiroshi Yoshida: woodblock landscape prints (1920s–1940s): finely controlled atmospheric color. Search: MET,LOC.
- [ ] **FS-094** Itō Jakuchū: Colorful Realm bird-and-flower paintings (1750s–1760s): dense feathers and patterned flora. Search: MET,RJK.
- [ ] **FS-095** Maruyama Ōkyo: naturalist screens (1700s): illusionistic birds and open space. Search: MET,RJK.
- [ ] **FS-096** Ogata Kōrin: Irises screens (early 1700s): flat botanical repetition over gold ground. Search: MET,RJK.
- [ ] **FS-097** Tawaraya Sōtatsu: Wind and Thunder Gods screens (1600s): energetic figures on gold-cloud space. Search: MET,RJK.
- [ ] **FS-098** Sesshū Tōyō: ink landscapes (1400s–1500s): dry-brush cliffs and misted emptiness. Search: MET,RJK.
- [ ] **FS-099** Shitao: landscape albums (late 1600s): expressive brushstroke structures. Search: MET,CHM.
- [ ] **FS-100** Qi Baishi: shrimp and insects ink paintings (1900s–1940s): minimal gesture and careful negative space. Search: MET,CHM.
- [ ] **FS-101** Xu Beihong: running horse ink paintings (1930s–1940s): gestural anatomy and wet brush. Search: MET,CHM.
- [ ] **FS-102** Wu Guanzhong: modern ink landscapes (1970s–1990s): abstract black rhythm and bright accents. Search: MET,CHM.
- [ ] **FS-103** Zhang Daqian: splashed-ink landscapes (1960s–1970s): layered pigments and atmospheric abstraction. Search: MET,CHM.

### Illustration, children's books and narrative drawing

- [ ] **FS-104** Howard Pyle: pirate illustrations (1900s): theatrical historic scenes and shape lighting. Search: LOC,BL.
- [ ] **FS-105** N. C. Wyeth: Treasure Island paintings (1911): bold pirate figures and high drama. Search: LOC,BL.
- [ ] **FS-106** Jessie Willcox Smith: children's magazine covers (1900s–1920s): intimate decorative scenes. Search: LOC,BL.
- [ ] **FS-107** J. C. Leyendecker: Saturday Evening Post covers (1900s–1940s): crisp fabrics and sculptural brushwork. Search: LOC,PH.
- [ ] **FS-108** Norman Rockwell: Four Freedoms paintings (1943): narrative American realism and staged light. Search: LOC,PH.
- [ ] **FS-109** Charles Dana Gibson: Gibson Girl illustrations (1890s–1910s): confident elastic pen lines. Search: LOC,BL.
- [ ] **FS-110** Heinrich Kley: animal caricatures (1900s–1920s): lively crosshatching and humanlike motion. Search: MET,BL.
- [ ] **FS-111** Edward Gorey: Gashlycrumb Tinies (1963): Victorian macabre fine-line architecture. Search: BL,LA.
- [ ] **FS-112** Maurice Sendak: Where the Wild Things Are (1963): crosshatched monsters and warm theatrical rooms. Search: BL,VAM.
- [ ] **FS-113** Leo Lionni: Little Blue and Little Yellow (1959): torn-paper abstraction and storytelling. Search: BL,VAM.
- [ ] **FS-114** Eric Carle: Very Hungry Caterpillar collages (1969): tissue-paper textures and bright silhouettes. Search: BL,VAM.
- [ ] **FS-115** Miroslav Šašek: This Is... travel books (1950s–1970s): playful mid-century city details. Search: BL,LA.
- [ ] **FS-116** Charley Harper: The Giant Golden Book of Biology illustrations (1961): highly geometric animals and layered educational diagrams. Search: CH,LOC.
- [ ] **FS-117** Mary Blair: Disney concept art (1940s–1950s): flat playful architecture and modernist color. Search: CH,VAM.
- [ ] **FS-118** Tove Jansson: early Moomin illustrations (1940s–1960s): dark stippling and whimsical landscapes. Search: BL,VAM.
- [ ] **FS-119** Sven Nordqvist: Pettson and Findus illustrations (1980s onward): densely populated absurd domestic details. Search: BL,VAM.
- [ ] **FS-120** Jill Barklem: Brambly Hedge illustrations (1980s): miniature botanical interiors and meticulous detail. Search: BL,VAM.
- [ ] **FS-121** Shaun Tan: The Arrival (2006): sepia cinematic panels and invented architecture. Search: BL,VAM.
- [ ] **FS-122** Chris Van Allsburg: The Mysteries of Harris Burdick (1984): enigmatic charcoal scenes and tonal contrast. Search: BL,VAM.
- [ ] **FS-123** Maira Kalman: New Yorker covers (1980s–2000s): naive bright urban painting and idiosyncratic lettering. Search: MOMA,LA.
- [ ] **FS-124** Quentin Blake: Roald Dahl book illustrations (1970s–1990s): splashed watercolor and agile pen marks. Search: BL,VAM.
- [ ] **FS-125** Ralph Steadman: Fear and Loathing illustrations (1971): splattered grotesque inks and exaggerated faces. Search: VAM,BL.

### Painting: narrow periods and series

- [ ] **FS-126** Claude Monet: Rouen Cathedral series (1890s): colored atmosphere transforming solid facades. Search: MET,AIC.
- [ ] **FS-127** Claude Monet: late Water Lilies panels (1910s–1920s): dissolved horizon and layered reflections. Search: MOMA,MET.
- [ ] **FS-128** Vincent van Gogh: Arles night paintings (1888–1889): directional color strokes and intense contours. Search: MET,AIC.
- [ ] **FS-129** Paul Cézanne: Mont Sainte-Victoire watercolors (1900s): fractured color planes with visible white paper. Search: MET,AIC.
- [ ] **FS-130** Georges Seurat: Conté crayon drawings (1880s): grainy luminous silhouettes. Search: MOMA,MET.
- [ ] **FS-131** Henri de Toulouse-Lautrec: Moulin Rouge lithographs (1890s): cropped dancers and flat spot-color. Search: MOMA,MET.
- [ ] **FS-132** Henri Matisse: Jazz cutouts (1947): saturated paper shapes and musical spacing. Search: MOMA,MET.
- [ ] **FS-133** Pablo Picasso: Vollard Suite etchings (1930s): classical line and unstable anatomy. Search: MET,NGA.
- [ ] **FS-134** Georges Braque: papier collé works (1912–1914): faux surfaces and planar interruptions. Search: MOMA,MET.
- [ ] **FS-135** Juan Gris: synthetic cubist still lifes (1910s–1920s): ordered planar intersections and printed fragments. Search: MOMA,MET.
- [ ] **FS-136** Fernand Léger: mechanical figure paintings (1920s): tubular bodies and machine palette. Search: MOMA,MET.
- [ ] **FS-137** Giorgio de Chirico: metaphysical piazzas (1910s): deserted arcades and impossible shadows. Search: MOMA,MET.
- [ ] **FS-138** Paul Klee: Tunis watercolors (1914): patchwork geometry and translucent color. Search: MOMA,MET.
- [ ] **FS-139** Wassily Kandinsky: Bauhaus period compositions (1920s): geometric color-point interactions. Search: MOMA,MET.
- [ ] **FS-140** Kazimir Malevich: late Suprematist constructions (1910s–1920s): suspended planes and asymmetry. Search: MOMA,MET.
- [ ] **FS-141** Lyubov Popova: Painterly Architectonics (1910s): overlapping diagonal painted volumes. Search: MOMA,MET.
- [ ] **FS-142** Natalia Goncharova: rayonist paintings (1910s): intersecting colored light-rays. Search: MOMA,MET.
- [ ] **FS-143** Hilma af Klint: The Ten Largest (1907): botanical diagrams and monumental spirals. Search: MOMA,MET.
- [ ] **FS-144** František Kupka: Amorpha compositions (1912–1913): rhythmic chromatic circular movement. Search: MOMA,MET.
- [ ] **FS-145** Sonia Delaunay: Electric Prisms (1914): circular simultaneity and optical color. Search: MOMA,MET.
- [ ] **FS-146** Robert Delaunay: Eiffel Tower paintings (1909–1912): shattered architectural color planes. Search: MOMA,MET.
- [ ] **FS-147** Umberto Boccioni: States of Mind paintings (1911): lines of force and kinetic space. Search: MOMA,MET.
- [ ] **FS-148** Giacomo Balla: Dynamism of a Dog on a Leash (1912): stroboscopic repeated limbs. Search: MOMA,MET.
- [ ] **FS-149** Egon Schiele: seated figure gouaches (1910s): razor contours and expressive anatomical breaks. Search: MET,NGA.
- [ ] **FS-150** Gustav Klimt: Beethoven Frieze (1902): gold ornament and flattened decorative figures. Search: MET,VAM.
- [ ] **FS-151** Ivan Bilibin: Russian fairy-tale illustrations (1899–1900s): decorative borders and stylized folk figures. Search: BL,VAM.
- [ ] **FS-152** Anna Ostroumova-Lebedeva: Saint Petersburg color woodcuts (1902–1908): layered printed color and rhythmic architectural silhouettes. Search: RUS,MET.
- [ ] **FS-153** Arkhip Kuindzhi: Moonlit Night on the Dnieper (1880): concentrated luminous moonlight against almost-black river and sky. Search: RUS,MET.

### Surrealism, assemblage, collage and conceptual graphics

- [ ] **FS-154** Hannah Höch: Berlin Dada photomontages (1910s–1920s): fractured body and magazine machinery. Search: MOMA,MET.
- [ ] **FS-155** Raoul Hausmann: Mechanical Head (1920): found-object facial assemblage. Search: MOMA,MET.
- [ ] **FS-156** Max Ernst: Une Semaine de Bonté collage novel (1934): Victorian engraving hybrids and nightmares. Search: MOMA,BL.
- [ ] **FS-157** Max Ernst: Histoire Naturelle frottages (1926): rubbed surfaces and emergent imagery. Search: MOMA,MET.
- [ ] **FS-158** Man Ray: rayographs (1920s): camera-less shadow impressions. Search: MOMA,GET.
- [ ] **FS-159** László Moholy-Nagy: photograms (1920s–1930s): floating transparent light silhouettes. Search: MOMA,GET.
- [ ] **FS-160** Meret Oppenheim: fur-covered Object (1936): tactile material contradictions. Search: MOMA,MET.
- [ ] **FS-161** René Magritte: The Human Condition paintings (1930s): picture-within-picture and impossible continuity. Search: MOMA,MET.
- [ ] **FS-162** Salvador Dalí: paranoid-critical landscapes (1930s): double images, low horizons, sharp shadows. Search: MOMA,MET.
- [ ] **FS-163** Dorothea Tanning: Birthday (1942): uncanny doors and staged interiors. Search: MOMA,MET.
- [ ] **FS-164** Leonora Carrington: alchemical paintings (1940s–1960s): mythic creatures and pale interior worlds. Search: MOMA,MET.
- [ ] **FS-165** Remedios Varo: embroidered-science figures (1950s–1960s): slender occult mechanisms and warm veils. Search: MOMA,MET.
- [ ] **FS-166** Joseph Cornell: boxed assemblages (1930s–1960s): miniature vitrines and nostalgic fragments. Search: MOMA,MET.
- [ ] **FS-167** Robert Rauschenberg: Combines (1950s): painterly material collision and found images. Search: MOMA,MET.
- [ ] **FS-168** Richard Hamilton: early Pop collages (1950s–1960s): cut-out consumer imagery and interior montage. Search: MOMA,VAM.
- [ ] **FS-169** Eduardo Paolozzi: Bunk collages (1940s–1950s): pulp imagery layered with science fiction. Search: MOMA,VAM.
- [ ] **FS-170** John Baldessari: dot-over-face works (1980s–1990s): found photographs and flat color disks. Search: MOMA,MET.
- [ ] **FS-171** Jenny Holzer: Truisms street posters (1977–1980s): declarative text-as-environment. Search: MOMA,PH.

### Photography and cinema image language

- [ ] **FS-172** Eadweard Muybridge: Animal Locomotion plates (1887): gridded sequential silhouettes. Search: MET,GET.
- [ ] **FS-173** Étienne-Jules Marey: chronophotographs (1880s–1890s): multiple motion phases in a single field. Search: MET,GET.
- [ ] **FS-174** Alfred Stieglitz: Camera Work photogravures (1900s): tonal mist and Pictorialist softness. Search: MET,GET.
- [ ] **FS-176** Paul Strand: Wall Street (1915): human scale versus architectural shadows. Search: MET,GET.
- [ ] **FS-177** László Moholy-Nagy: New Vision architectural photographs (1920s): disorienting high/low viewpoints. Search: MOMA,GET.
- [ ] **FS-178** Alexander Rodchenko: street photographs (1920s–1930s): extreme diagonal perspectives. Search: MOMA,GET.
- [ ] **FS-179** André Kertész: Distortions series (1933): mirrored anatomy and spatial bending. Search: MET,GET.
- [ ] **FS-180** Brassaï: Paris de nuit (1930s): glowing fog, lamps and wet pavement. Search: MET,GET.
- [ ] **FS-181** Manuel Álvarez Bravo: surreal Mexican photography (1930s–1950s): poetic object juxtapositions. Search: MET,GET.
- [ ] **FS-182** Dorothea Lange: Farm Security Administration portraits (1930s): documentary gestures and direct eyes. Search: LOC,GET.
- [ ] **FS-183** Walker Evans: FSA storefront photographs (1930s): flat signage, vernacular facades. Search: LOC,GET.
- [ ] **FS-184** Gordon Parks: American Gothic, Washington, D.C. (1942): social portrait and emblematic staging. Search: LOC,GET.
- [ ] **FS-185** Robert Frank: The Americans (1958–1959): off-balance candid framing and grain. Search: MET,GET.
- [ ] **FS-187** William Klein: New York street photographs (1950s): abrasive grain and close wide-angle energy. Search: MOMA,GET.
- [ ] **FS-188** Daido Moriyama: Provoke-era photographs (late 1960s): high contrast, blur and coarse grain. Search: MOMA,GET.
- [ ] **FS-189** Hiroshi Sugimoto: Seascapes (1980s onward): minimalist horizon and long exposure. Search: MET,GET.
- [ ] **FS-190** Cindy Sherman: Untitled Film Stills (1977–1980): staged cinematic identities. Search: MOMA,GET.
- [ ] **FS-191** Gregory Crewdson: Twilight photographs (1990s–2000s): elaborately lit suburban tableaux. Search: GET,MOMA.
- [ ] **FS-192** Alexey Titarenko: City of Shadows (1990s): long-exposure ghost crowds. Search: GET,MOMA.
- [ ] **FS-193** Saul Bass: The Man with the Golden Arm titles (1955): cut-paper kinetic silhouette. Search: MOMA,LA.
- [ ] **FS-194** Saul Bass: Anatomy of a Murder titles (1959): fragmented figure and moving typography. Search: MOMA,LA.
- [ ] **FS-195** Maurice Binder: James Bond opening titles (1960s): projected silhouettes and graphic circles. Search: MOMA,LA.
- [ ] **FS-196** Pablo Ferro: Dr. Strangelove titles (1964): hand-drawn letters over documentary images. Search: MOMA,LA.

### Comics, animation and sequential design

- [ ] **FS-197** Winsor McCay: Little Nemo in Slumberland (1905–1910s): architectural dream panels and pastel pattern. Search: LOC,BL.
- [ ] **FS-198** Lyonel Feininger: The Kin-der-Kids comics (1906): angular boats and fantasy perspective. Search: LOC,BL.
- [ ] **FS-199** George Herriman: Krazy Kat strips (1910s–1940s): desert geometry and lyrical panel rhythm. Search: LOC,BL.
- [ ] **FS-200** Hergé: early Tintin ligne claire pages (1930s): clean contour and readable planar color. Search: BL,VAM.
- [ ] **FS-201** Hugo Pratt: Corto Maltese black-ink pages (1960s–1980s): bold silhouette and sparse wash. Search: BL,VAM.
- [ ] **FS-202** Alberto Breccia: Mort Cinder pages (1962–1964): scratched noir textures and chiaroscuro. Search: BL,VAM.
- [ ] **FS-203** Sergio Toppi: historical comics (1970s–2000s): ornamental hatching and borderless collage. Search: BL,VAM.
- [ ] **FS-204** Moebius: Arzach comics (1970s): airy science-fiction line and silent landscapes. Search: BL,VAM.
- [ ] **FS-205** Katsuhiro Otomo: Akira manga city pages (1980s): technical urban linework and motion debris. Search: BL,VAM.
- [ ] **FS-206** Osamu Tezuka: Phoenix manga pages (1950s–1980s): cinematic transitions and elastic figures. Search: BL,VAM.
- [ ] **FS-207** Taiyō Matsumoto: Tekkonkinkreet pages (1990s): nervous architecture and floating camera. Search: BL,VAM.
- [ ] **FS-208** Lotte Reiniger: The Adventures of Prince Achmed (1926): layered cut-paper silhouettes. Search: BFI,VAM.
- [ ] **FS-209** Yuri Norstein: Hedgehog in the Fog (1975): cutout depth, fine haze and staged light. Search: BFI,VAM.
- [ ] **FS-210** Jiří Trnka: puppet-film miniature sets (1940s–1960s): carved folk forms and theatrical staging. Search: BFI,VAM.
- [ ] **FS-211** Jan Švankmajer: Dimensions of Dialogue (1982): tactile stop-motion surreal transformations. Search: BFI,VAM.
- [ ] **FS-212** René Laloux: Fantastic Planet (1973): surreal flat-color worlds and alien biology. Search: BFI,VAM.
- [ ] **FS-213** Yōji Kuri: experimental animation shorts (1960s): spare grotesques and graphic loops. Search: BFI,VAM.
- [ ] **FS-214** Norman McLaren: Begone Dull Care (1949): hand-painted abstract film rhythm. Search: BFI,MOMA.
- [ ] **FS-215** Oskar Fischinger: optical abstract films (1930s): synchronized colored circles and deep-space forms. Search: MOMA,BFI.

### Pattern, textiles, ornament, architecture

- [ ] **FS-216** William Morris: Strawberry Thief textile (1883): dense interlocking botanical repeat. Search: VAM,MET.
- [ ] **FS-217** William Morris: Willow Bough wallpaper (1887): layered foliage rhythm. Search: VAM,MET.
- [ ] **FS-218** Owen Jones: Grammar of Ornament plates (1856): comparative chromatic ornament diagrams. Search: VAM,BL.
- [ ] **FS-219** Christopher Dresser: Aesthetic Movement surface designs (1870s–1880s): reduced Japanese-inspired botanical geometry. Search: VAM,MET.
- [ ] **FS-220** Josef Hoffmann: Wiener Werkstätte surface patterns (1900s–1910s): checkerboard grids and luxury geometry. Search: VAM,MAK.
- [ ] **FS-221** Koloman Moser: Secession textiles and posters (1900s): stylized botanical repeat and flat borders. Search: VAM,MAK.
- [ ] **FS-222** Alphonse Mucha: Seasons lithographs (1896): halo framing and interlaced decorative hair. Search: MET,VAM.
- [ ] **FS-223** Hector Guimard: Paris Métro entrance designs (1900): cast-iron organic lettering and structures. Search: VAM,MAK.
- [ ] **FS-224** Émile Gallé: cameo-glass floral designs (1890s–1900s): layered translucent botanical silhouettes. Search: VAM,MET.
- [ ] **FS-225** René Lalique: dragonfly and insect jewels (1890s–1900s): iridescent translucent biomorphic ornament. Search: MET,VAM.
- [ ] **FS-226** Mariano Fortuny: Delphos dresses and printed silks (1900s–1920s): pleats and metallic textile layers. Search: MET,VAM.
- [ ] **FS-227** Anni Albers: Bauhaus wall hangings (1920s–1930s): woven structural abstraction. Search: MOMA,MET.
- [ ] **FS-228** Gunta Stölzl: Bauhaus weaving samples (1920s–1930s): rhythmic warp/weft blocks. Search: MOMA,VAM.
- [ ] **FS-229** Sonia Delaunay: simultaneous dresses and textiles (1920s): wearable circular color geometry. Search: MOMA,VAM.
- [ ] **FS-230** Vera Molnár: Interruptions plotter series (1968–1969): rigid line grids disturbed by controlled randomness and omissions. Search: VAM,NGA.
- [ ] **FS-231** Zaha Hadid: early competition paintings (1980s): deconstructed floating architectural planes. Search: MOMA,VAM.
- [ ] **FS-232** Archigram: Walking City drawings (1960s): technical speculative collage. Search: MOMA,VAM.
- [ ] **FS-233** Superstudio: Continuous Monument collages (1969–1970): mirrored Cartesian mega-grids. Search: MOMA,VAM.
- [ ] **FS-234** Ettore Sottsass: Memphis Carlton and surface patterns (1980s): clashing laminate geometry. Search: MOMA,VAM.
- [ ] **FS-235** Nathalie du Pasquier: Memphis fabric and object patterns (1980s): playful geometric fragments. Search: VAM,MOMA.

### Early computer, generative and scientific visuals

- [ ] **FS-236** Georg Nees: Schotter / Gravel (1968–1970): a regular square grid progressively disrupted by rotation and displacement. Search: VAM,GET.
- [ ] **FS-237** Frieder Nake: Hommage à Paul Klee plotter graphics (1965): computed hatch and probabilistic geometry. Search: MOMA,GET.
- [ ] **FS-238** Michael Noll: computer-generated Mondrian studies (1960s): statistical rectangular compositions. Search: MOMA,GET.
- [ ] **FS-239** Charles Csuri: Sine Curve Man computer plotter drawing (1967): digitally distorted figure outlines. Search: MOMA,GET.
- [ ] **FS-240** Manfred Mohr: Cubic Limit I plotter works (1973–1976): cube-edge alphabets and combinatorial line structures. Search: MOMA,GET.
- [ ] **FS-241** Harold Cohen: AARON drawings (1970s–1990s): rule-based evolving line figures. Search: MOMA,GET.
- [ ] **FS-242** Lillian Schwartz and Ken Knowlton: Pixillation (1970): colorized computer textures intercut with analog visual sequences. Search: MOMA,GET.
- [ ] **FS-243** John Whitney: Catalog film (1961): parametric orbital motion. Search: MOMA,BFI.
- [ ] **FS-244** Stan VanDerBeek: Movie-Drome projections (1960s): layered multimedia collage. Search: MOMA,BFI.
- [ ] **FS-245** Ken Knowlton and Leon Harmon: Studies in Perception I (1966): mosaics from symbolic tonal cells. Search: MOMA,GET.
- [ ] **FS-246** Nicolas Schöffer: cybernetic light sculpture studies (1950s–1960s): electronic kinetics and shadows. Search: MOMA,GET.
- [ ] **FS-247** Roman Verostko: pen-plotter algorithmic drawings (1980s–1990s): robotic calligraphy and generative ink. Search: MOMA,GET.
- [ ] **FS-248** Casey Reas: Process / Software Structures (2000s): code-generated organic line systems. Search: MOMA,GET.
- [ ] **FS-249** Ben Fry: Valence visualization (1999–2002): spatial networks generated from text and information relationships. Search: MOMA,GET.
- [ ] **FS-250** Refik Anadol: data-driven installation visuals (2010s–2020s): fluid volumetric data fields. Search: MOMA,GET.
- [ ] **FS-251** Aaron Koblin: Flight Patterns visualization (2005): luminous aggregated trajectories. Search: MOMA,GET.
- [ ] **FS-252** Marius Watz: generative geometric screenprints (2000s–2010s): parametric polygon growth. Search: GET,MOMA.
- [ ] **FS-253** Karl Sims: Panspermia procedural animation (1990): branching artificial-life forms and dynamic simulated growth. Search: MOMA,BFI.

