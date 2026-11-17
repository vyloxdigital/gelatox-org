Gelatox — images folder (gelatox-org.vercel.app)
==============================================

Drop your fifteen image files into this folder, using these exact filenames.
The page references these and nothing else.

File                                 Used where                   Rendered box    Suggested source size
-----------------------------------  ---------------------------  --------------  ---------------------
gelatox-hero.webp                    Hero (LCP image)             1120 x 840 (4:3) 2240 x 1680
gelatox-6-bottles-guarantee.webp     Package table, column 3      104 x 104 (1:1)   520 x 520
gelatox-3-bottles-guarantee.webp     Package table, column 2      104 x 104 (1:1)   520 x 520
gelatox-2-bottles-guarantee.webp     Package table, column 1      104 x 104 (1:1)   520 x 520
gelatox-review-1.webp                Photographs, first           560 x 420 (4:3)  1120 x 840
gelatox-review-2.webp                Photographs, second          560 x 420 (4:3)  1120 x 840
gelatox-review-3.webp                Photographs, third           560 x 420 (4:3)  1120 x 840
gelatox-guarantee.webp               Refund section seal          400 x 400 (1:1)   800 x 800
gelatox-bonus-1.webp                 Guide list, row 1             88 x 117 (3:4)   440 x 587
gelatox-bonus-2.webp                 Guide list, row 2             88 x 117 (3:4)   440 x 587
gelatox-bonus-3.webp                 Guide list, row 3             88 x 117 (3:4)   440 x 587
gelatox-bonus-4.webp                 Guide list, row 4             88 x 117 (3:4)   440 x 587
gelatox-bonus-5.webp                 Guide list, row 5             88 x 117 (3:4)   440 x 587
gelatox-bonus-6.webp                 Guide list, row 6             88 x 117 (3:4)   440 x 587
favicon.png                          Browser tab + app icon       any              512 x 512

The bonus images map to these titles, in this order:
  1  Say Goodbye to Varicose Veins
  2  Stretch Mark Eraser Guide
  3  Facial Rejuvenation
  4  Renova Flora Protocol
  5  Flat Butts and Defined Thighs
  6  Personalized Usage Guide

If your bonus artwork arrives in a different order, swap the FILES rather than
editing the HTML — each numbered row's heading is fixed to the order above.

Notes
-----

1. Every image slot uses a fixed CSS aspect-ratio with object-fit: contain.
   Your real files do NOT have to match the ratios above exactly: nothing
   stretches or crops, and the layout will not shift while images load
   (cumulative layout shift stays at zero). Matching the ratio only makes the
   box sit more tightly around the artwork.

2. gelatox-hero.webp is the Largest Contentful Paint image. It is preloaded
   with fetchpriority="high" and sits in a 4:3 frame inside the dark hero
   panel, so it is the one file worth compressing hardest — aim for under
   80 KB. All thirteen other images are lazy-loaded and matter far less.

   On this site the six bonus covers render as small 88px thumbnails in a
   numbered list rather than as large cards, so they can be exported lighter
   here than on gelatox-us.vercel.app.

3. Keep the .webp extension. The filenames appear in index.html, sitemap.xml
   and the Open Graph / Twitter meta tags; renaming one means editing three.

4. favicon.png should be a square PNG. 512 x 512 covers both the browser tab
   and the Android home-screen icon declared in manifest.json.

5. Export WebP at quality 78-82. Past that the file grows without a visible
   gain at these rendered sizes.
