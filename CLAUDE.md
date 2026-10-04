# Young Growth Agency

We partner with creators to build and launch digital products (PDF guides/ebooks, workbooks/planners, templates, courses). Our job: vet the creator, research their audience, create the product itself (content + design), and help the creator launch it on their socials for maximum sales.

## How to work in this repo
- Start any creator project with the `creator-product-pipeline` skill; it routes to every stage's skill.
- Keep each creator's work in `creators/<handle>/` using the numbered files the pipeline defines (01-fit-scorecard.md … 11-launch-report.md, product/, assets/).
- **Design rule:** never use prefab templates or a house style. Every design (product, cover, carousel, mockup, sales page) is created fresh for the specific creator, niche and product, from `creator-brand-kit-extraction` output and the creator's own content. Don't make designs or templates unless the user asks for a specific product.
- Write in the creator's voice (`creator-voice-guide`), use the audience's own language (`creator-audience-research`), verify facts, and make no income or health guarantees (`legal-and-compliance-basics`).
- Export designed HTML to PDF/PNG with `.claude/skills/html-render-pdf-png/scripts/render.mjs`.
- Websites and sales pages: the animated-site skills (start with `award-site-architecture`).

## Skill uploads for other chats
`skill-uploads/` has one zip per skill, ready to upload at claude.ai → Settings → Capabilities → Skills, so they work outside this repo. See `skill-uploads/README.md`.
