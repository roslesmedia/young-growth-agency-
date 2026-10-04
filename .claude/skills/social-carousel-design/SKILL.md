---
name: social-carousel-design
description: Plan, write and design Instagram/LinkedIn/TikTok carousels for creator launches and content — slide structures that drive saves/shares/comments, copy rules, sizes, and designing each carousel in the creator's own visual style, exported to PNG with html-render-pdf-png (or Canva). Use for any carousel post. No prefab templates; designs come from the creator's brand kit and feed.
---

# Social carousels

## Sizes
IG feed 1080×1350 (4:5) or 1080×1440 (3:4, IG's newer tall grid format); LinkedIn document carousel 1080×1350 (upload as PDF); TikTok photo mode 1080×1920. Keep key text inside the central safe area (IG grid crops to 3:4 preview; TikTok UI covers bottom ~20% and right edge).

## Structures that perform
- **Listicle**: hook → 5–9 points (one per slide) → recap → CTA.
- **How-to**: hook (outcome) → steps → example → CTA.
- **Myth vs truth**, **mistakes to avoid**, **before/after**, **story** (problem → turning point → result → lesson), **framework reveal** (named method → each part), **product teaser** ("what's inside" pages, launch posts).

## Copy rules
- Slide 1 = the hook: specific outcome or curiosity, ≤ 12 words, huge type (see hooks-and-headlines).
- Slide 2 must pay off immediately (people decide here whether to keep swiping).
- One idea per slide, ≤ 30 words; use audience language.
- Last slide = one CTA: comment KEYWORD (DM automation), save, share, follow, or link in bio.
- Caption: expand on the post, include keyword CTA, 3–5 niche hashtags max.

## Design approach (per creator)
Pull palette, fonts, texture and layout feel from `04-brand-kit.md` and the creator's best-performing posts — the carousel should look like it belongs in their grid. Consider: creator photo on slide 1 (faces lift stops), consistent progress cue (numbers/dots), contrast for mobile readability (min ~36px body at 1080 width), swipe cue on slide 1, handle on every slide (screenshots travel).

## Build
HTML/CSS with one `.slide` element per slide at the target size → `node html-render-pdf-png/scripts/render.mjs png carousel.html out/ --selector=.slide --scale=1`. For LinkedIn, export the slides as a PDF instead. Or build in Canva if the creator's team edits there.
