---
name: html-render-pdf-png
description: Neutral rendering tool — turn hand-designed HTML/CSS into print-ready PDFs (ebooks, workbooks, planners) or PNG images (carousel slides, covers, mockups, ad creatives) with headless Chromium via scripts/render.mjs, plus print-CSS techniques and known renderer pitfalls. Use whenever a designed product or social asset must be exported to a file.
---

# HTML → PDF / PNG rendering

`scripts/render.mjs` (Playwright/Chromium). It contains no design — you design every product fresh for the creator.

```bash
node scripts/render.mjs pdf  product.html product.pdf --format=Letter   # A4 | Letter | A5 | 6x9
node scripts/render.mjs png  slides.html out/ --selector=.slide --scale=1   # each .slide → 01.png, 02.png…
node scripts/render.mjs shot page.html cover.png --width=1600 --height=1000
```
Requires Playwright (`npm i -D playwright`; in Claude Code cloud it's preinstalled). Preview a PDF as images: `pdftoppm -png -r 40 product.pdf pg`.

## Print CSS essentials (Chromium supports these)
- `@page { size: Letter; margin: .8in; }` and named pages: `@page cover { margin: 0 }` + `.cover { page: cover }`.
- Page numbers / running headers via margin boxes: `@page { @bottom-center { content: counter(page) } }`; suppress on named pages with `content: none`.
- `break-before: page` for chapters, `break-inside: avoid` for boxes/tables, `break-after: avoid` for headings, `orphans/widows: 3`.
- `print-color-adjust: exact` so backgrounds print.
- Internal links (`<a href="#ch2">`) become clickable in the PDF → use for TOC and hyperlinked digital planners.

## Fonts
Headless Chromium may not reach Google Fonts through a proxy. Download the chosen fonts (woff2, check license — Google Fonts are OFL) next to the HTML and use `@font-face` with relative URLs. Verify embedding: `pdffonts product.pdf`.

## Known pitfalls (verified)
- `mix-blend-mode` on overlays can render as **black patches** in PDFs → use plain opacity instead.
- Gradients to `transparent` can tint grey/black in some PDF viewers → fade to the same color at alpha 0 (`rgba(r,g,b,0)`).
- `target-counter()` (auto page numbers in a TOC) is NOT supported in Chromium → hardcode page numbers after a first render, or omit.
- Keep images ≤ 2× display size; compress so the final PDF stays small enough to email/download (< 20–30MB).
- Always wait for `document.fonts.ready` (the script does).
