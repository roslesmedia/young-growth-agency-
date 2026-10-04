---
name: product-mockups
description: Create product mockups and promotional visuals for digital products (3D ebook covers, iPad/phone/laptop screens, printed workbook scenes, bundle stacks, "what's inside" page spreads) designed for the specific creator and product, via CSS 3D/HTML rendered to PNG, photo-based mockups, or Canva. Use when the store, sales page, ads or launch posts need visuals of the product.
---

# Product mockups

Mockups make an intangible product feel real and valuable. Design them for the creator's brand and the niche — no stock template look.

## Mockup types & where they're used
| Type | Use |
|---|---|
| 3D book/ebook cover | store thumbnail, sales page hero, ads |
| Device screens (iPad, phone, laptop) showing real pages | course/template/digital planner products |
| "What's inside" spread grid (6–12 real pages) | sales page, carousel slide, story |
| Bundle stack (all products + bonuses together) | value stack section, launch posts |
| Printed workbook on a desk/flat lay | printables, planners |
| Creator holding/using product (photo or composite) | highest trust — ask the creator to shoot it |

## Methods
1. **HTML/CSS 3D** (fully custom): `transform-style: preserve-3d`, front cover with the real cover image, spine (cover color darkened), page edge (repeating light lines), soft blurred shadow, background built from the creator's palette; render with html-render-pdf-png (`png` mode). Real page screenshots come from rendering the product PDF (`pdftoppm`).
2. **Device frames**: rounded rect + screen image; tilt with subtle rotation; consistent light direction for shadows.
3. **Photo mockups**: creator photographs a tablet/printout with the product on screen; or licensed mockup photos (check license, e.g. commercial-use mockup packs).
4. **Canva**: Canva plugin "Smartmockups"/frames if connected.

## Rules
- Show real interior pages, not lorem ipsum.
- Readable at thumbnail size (title on cover must read at 300px wide).
- Export sizes: store thumbnail (often square 1:1 or 4:3), sales page hero (~1600×1000), feed 1080×1350, story 1080×1920.
- Optional badges (page count, ratings) only if true.
