# Uploading these skills to your Claude account

Skills in `.claude/skills/` load automatically in Claude Code sessions on this repo. To use them in **any** Claude chat:

1. Download the zip(s) from this folder.
2. Go to claude.ai → Settings → Capabilities → Skills → Upload skill, and upload one zip at a time. Code execution must be enabled.
3. Toggle the skill on. Claude uses it automatically when a task matches.

## Upload these first (core creator workflow)
1. creator-product-pipeline (the master playbook)
2. creator-discovery-and-fit-scorecard
3. creator-audience-research
4. creator-brand-kit-extraction
5. digital-product-ideation-validation
6. offer-design-and-pricing
7. ebook-pdf-production
8. creator-product-launch-playbook
9. launch-email-sequences
10. short-form-video-scripts

Then the rest of `creator-products/` as needed. `animated-sites/` holds the 50 website-animation skills.

Note: `html-render-pdf-png` runs a Node/Playwright script. That works in Claude Code; claude.ai's code environment may not have Playwright, in which case Claude falls back to Python PDF tools.
