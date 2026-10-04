---
name: creator-brand-kit-extraction
description: Derive a product design system from the creator — analyze their feed, thumbnails, existing graphics, outfits/sets, logo and vibe to extract colors, fonts, imagery style, layout feel and mood, then output brand-tokens.css used by every product, carousel, mockup and sales page. Use before ANY design work for a creator; designs must be based on the creator, never on agency defaults.
---

# Creator brand kit extraction

Rule: **we design for the creator, based on the creator.** Products should feel like an extension of their feed so the audience instantly recognizes them.

## Inputs to gather
- Screenshots of their profile grid (last 30 posts), 5 best-performing thumbnails/covers, story highlights covers.
- Existing logo, fonts, brand colors, website, previous products, merch.
- Photos for the product (ask for 10–20 high-res photos: portraits, working, lifestyle) — real photos of the creator sell far better than stock.
- 3 creators/brands they admire visually; anything they dislike.

## Extract
1. **Palette** — sample the dominant colors from their grid/thumbnails (backgrounds, outfits, text overlays). Define: `--bg`, `--ink`, `--brand`, `--accent`, `--soft`, `--muted`. Check contrast (body text ≥ 4.5:1).
   - Quick sampling: render screenshots and read pixel colors, or use the dominant colors the creator uses for text overlays.
2. **Typography** — identify fonts in their overlays/thumbnails (or closest free Google Font). Pick 1 display + 1 body. Note case (all caps?), weight, tracking.
3. **Mood words (3–5)** — e.g. "clean, soft, feminine, calm" vs "bold, loud, gritty, energetic" vs "luxury, editorial, minimal".
4. **Imagery style** — bright/airy vs moody/dark, film grain, flash photography, flat lays, B-roll, illustrations?
5. **Layout cues** — minimal whitespace vs dense, rounded vs sharp corners, stickers/doodles, handwritten notes, emojis.
6. **Signature elements** — catchphrases, recurring icons, colors of their set/background, how they sign off.

## Output 1: `04-brand-kit.md`
Palette swatches (hex + role), fonts (with links + license), mood words, imagery rules, do/don't list, 3 reference layouts described.

## Output 2: `brand-tokens.css` (drop into every template)
```css
:root {
  --bg: #FAF6F0; --ink: #1E1B18; --brand: #C8553D; --accent: #F2A65A; --soft: #F6E7D8; --muted: #7A6F66;
  --display: 'Playfair Display', Georgia, serif;   /* matches their thumbnail titles */
  --body: 'DM Sans', system-ui, sans-serif;
  --radius: 18px; --handle: '@creator';
}
```
Download chosen Google Fonts as woff2 into `fonts/` (OFL) so PDFs embed them (see ebook-pdf-production for the technique).

## Validate with the creator
Show a one-page moodboard (cover direction + 1 interior page + 1 carousel slide) and get sign-off **before** producing the full product. Iterate once; then lock tokens.
