import sharp from 'sharp';
import { createWriteStream } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const WIDTH = 1200;
const HEIGHT = 630;

// SVG overlay — text and decorations
const svgOverlay = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="titleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#60a5fa" />
      <stop offset="100%" stop-color="#a78bfa" />
    </linearGradient>
    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="rgba(96,165,250,0)" />
      <stop offset="50%" stop-color="rgba(96,165,250,0.3)" />
      <stop offset="100%" stop-color="rgba(96,165,250,0)" />
    </linearGradient>
  </defs>

  <!-- Stars -->
  <circle cx="150" cy="120" r="2" fill="rgba(255,255,255,0.6)" />
  <circle cx="350" cy="80" r="1.5" fill="rgba(255,255,255,0.4)" />
  <circle cx="550" cy="160" r="2.5" fill="rgba(255,255,255,0.5)" />
  <circle cx="800" cy="100" r="1.8" fill="rgba(255,255,255,0.3)" />
  <circle cx="1000" cy="150" r="2" fill="rgba(255,255,255,0.5)" />
  <circle cx="1050" cy="80" r="1.2" fill="rgba(255,255,255,0.4)" />
  <circle cx="200" cy="500" r="1.5" fill="rgba(255,255,255,0.3)" />
  <circle cx="700" cy="520" r="2" fill="rgba(255,255,255,0.4)" />
  <circle cx="950" cy="480" r="1.5" fill="rgba(255,255,255,0.35)" />
  <circle cx="1100" cy="450" r="2.5" fill="rgba(255,255,255,0.25)" />
  <circle cx="450" cy="550" r="1.8" fill="rgba(255,255,255,0.3)" />
  <circle cx="100" cy="300" r="1.2" fill="rgba(255,255,255,0.4)" />

  <!-- Decorative line -->
  <line x1="100" y1="200" x2="1100" y2="200" stroke="url(#lineGrad)" stroke-width="1" />
  <line x1="100" y1="440" x2="1100" y2="440" stroke="url(#lineGrad)" stroke-width="1" />

  <!-- Title -->
  <text x="600" y="270" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="64" font-weight="800" fill="url(#titleGrad)" letter-spacing="-1">Hello, damokeris</text>

  <!-- Tagline -->
  <text x="600" y="350" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="26" fill="rgba(255,255,255,0.55)" font-weight="400" letter-spacing="1">99% 的努力和 1% 的灵感</text>

  <!-- Bottom left domain -->
  <text x="80" y="570" font-family="system-ui, -apple-system, sans-serif" font-size="16" fill="rgba(255,255,255,0.3)" font-weight="400">damokeris.github.io</text>

  <!-- Icon/Logo decorative circle -->
  <circle cx="1120" cy="540" r="30" fill="none" stroke="rgba(96,165,250,0.3)" stroke-width="1.5" />
  <text x="1120" y="548" text-anchor="middle" font-family="system-ui" font-size="22" fill="rgba(96,165,250,0.5)">D</text>
</svg>
`;

// Create gradient background
const gradientBg = Buffer.from(`
  <svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0f172a" />
        <stop offset="50%" stop-color="#1e1b4b" />
        <stop offset="100%" stop-color="#0f172a" />
      </linearGradient>
    </defs>
    <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)" />
  </svg>
`);

async function generate() {
  // Composite: background + overlay (SVG text etc.)
  const image = await sharp(gradientBg)
    .composite([
      {
        input: Buffer.from(svgOverlay),
        top: 0,
        left: 0,
      },
    ])
    .jpeg({ quality: 95 })
    .toFile(join(__dirname, '..', 'static', 'img', 'social-card.jpg'));

  console.log(`✅ Social card generated: ${image.width}×${image.height}, ${image.size} bytes`);
}

generate().catch(console.error);
