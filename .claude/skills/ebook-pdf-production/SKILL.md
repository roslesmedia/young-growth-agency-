---
name: ebook-pdf-production
description: Write and design ebooks, guides and playbooks as polished PDFs — writing in the creator's voice, editorial layout principles, designing each product fresh from the creator's brand kit and niche conventions, then exporting with html-render-pdf-png. Use when creating a PDF guide/ebook product. No prefab templates: every design is made for the specific creator, niche and product.
---

# Ebook / PDF guide production

## Inputs required
`04-brand-kit.md` + tokens (creator-brand-kit-extraction), `05-voice-guide.md`, approved `08-outline.md`, creator photos, offer details. If any are missing, get them first.

## Writing process
1. Draft chapter 1 fully → creator approves voice and depth → write the rest.
2. Each chapter: hook/story → why it matters → steps → example → common mistakes → action/worksheet → transition.
3. Short paragraphs (2–4 lines), descriptive subheads every ~300 words, bold the key sentence, concrete numbers/examples, creator anecdotes.
4. Voice pass + AI-filler removal (see creator-voice-guide). Fact-check every stat.

## Design: derive from creator + niche (no reused templates)
Decide fresh per product:
- **Niche conventions**: fitness/nutrition → bold, photo-heavy, energetic; finance/career → clean, structured, trustworthy, charts/tables; wellness/journaling → soft, airy, generous whitespace; beauty/fashion → editorial, magazine-like, big photography; business/marketing → modern, punchy, high contrast; cooking → recipe cards, ingredient lists, food photography.
- **Creator brand**: palette, fonts, mood words, imagery style from the brand kit; reuse their signature elements (catchphrases as pull quotes, colors of their set, handwriting/doodles if they use them).
- **Product type**: playbook (step systems, checklists) vs story-led guide (pull quotes, photos) vs reference (tables, quick lookup, tabs).

Design elements to consider: cover (creator photo + outcome title, readable as a thumbnail), welcome letter from the creator, how-to-use page, contents, chapter openers, callouts (tip/mistake/quick win), step lists, checklists, tables, worksheets, pull quotes, stats, creator photos, resource pages, closing page with next-step CTA (upsell/community/review request/social tag).

Typography basics: body 10.5–12pt, line-height 1.5–1.7, 55–75 characters per line, max 2 typefaces, clear hierarchy (H1/H2/H3 sizes ~2.4/1.6/1.25×), consistent spacing scale.

## Build & export
Write semantic HTML + CSS using the creator's tokens; export with `html-render-pdf-png` (`pdf` mode). Preview pages as PNG, review spreads for widows, awkward breaks and empty pages; fix and re-render.

## Deliverables
- `product/<name>.pdf` (screen version, RGB, hyperlinks working)
- Optional print version (no dark full-bleed backgrounds, CMYK-safe colors) if buyers will print
- Cover PNG for the store + mockups (product-mockups)
Run product-quality-review before delivery.
