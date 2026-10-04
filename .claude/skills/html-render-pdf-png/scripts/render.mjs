#!/usr/bin/env node
// Render HTML to PDF or PNG with headless Chromium (Playwright).
// Usage:
//   node render.mjs pdf  input.html output.pdf [--format=A4|Letter|6x9|8.5x11] [--landscape]
//   node render.mjs png  input.html outdir/   [--selector=.slide] [--scale=2]
//     → screenshots every element matching selector (default .slide) as 01.png, 02.png...
//   node render.mjs shot input.html output.png [--width=1200 --height=630]  → one viewport screenshot
// Needs playwright: `npm i -D playwright` (or set NODE_PATH to a global install).
import { createRequire } from 'module'
import path from 'path'
import fs from 'fs'
import { pathToFileURL } from 'url'

const require = createRequire(import.meta.url)
let chromium
for (const m of ['playwright', '@playwright/test', '/opt/node-tools/node_modules/playwright']) {
  try { ({ chromium } = require(m)); break } catch {}
}
if (!chromium) { console.error('Playwright not found. Run: npm i -D playwright && npx playwright install chromium'); process.exit(1) }

const [mode, input, output, ...rest] = process.argv.slice(2)
const opt = Object.fromEntries(rest.map((a) => { const [k, v] = a.replace(/^--/, '').split('='); return [k, v ?? true] }))
if (!mode || !input || !output) { console.error('see usage at top of file'); process.exit(1) }
const url = pathToFileURL(path.resolve(input)).href
const sizes = { '6x9': { width: '6in', height: '9in' }, '8.5x11': { format: 'Letter' }, A4: { format: 'A4' }, Letter: { format: 'Letter' }, A5: { format: 'A5' } }

const browser = await chromium.launch()
const page = await browser.newPage({ deviceScaleFactor: Number(opt.scale || 2), viewport: { width: Number(opt.width || 1080), height: Number(opt.height || 1350) } })
await page.goto(url, { waitUntil: 'networkidle' })
await page.evaluate(() => document.fonts.ready)

if (mode === 'pdf') {
  await page.pdf({ path: output, printBackground: true, preferCSSPageSize: true, landscape: !!opt.landscape, ...(sizes[opt.format || 'Letter'] || sizes.Letter) })
  console.log('PDF →', output)
} else if (mode === 'png') {
  fs.mkdirSync(output, { recursive: true })
  const els = await page.$$(opt.selector || '.slide')
  for (let i = 0; i < els.length; i++) {
    const f = path.join(output, String(i + 1).padStart(2, '0') + '.png')
    await els[i].screenshot({ path: f })
  }
  console.log(`${els.length} PNG(s) →`, output)
} else if (mode === 'shot') {
  await page.screenshot({ path: output })
  console.log('PNG →', output)
}
await browser.close()
