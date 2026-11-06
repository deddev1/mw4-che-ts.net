import sharp from 'sharp';
import { writeFileSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
/** Replace this file with your own square/circular artwork (PNG or JPEG). */
const sourcePath = path.join(root, 'scripts/favicon-source.png');

const resizeOpts = {
  fit: 'cover',
  position: 'center',
};

function src() {
  return sharp(sourcePath);
}

const sizes = [
  ['favicon-16.png', 16],
  ['favicon-32.png', 32],
  ['favicon-192.png', 192],
  ['favicon-512.png', 512],
  ['apple-touch-icon.png', 180],
  ['android-chrome-192.png', 192],
  ['android-chrome-512.png', 512],
  ['logo.png', 64],
];

for (const [name, size] of sizes) {
  await src().resize(size, size, resizeOpts).png().toFile(path.join(root, 'public', name));
}

function pngToIco(pngBuffers) {
  const count = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  let offset = 6 + count * 16;
  const entries = [];
  for (const png of pngBuffers) {
    const w = png.readUInt32BE(16);
    const h = png.readUInt32BE(20);
    const meta = Buffer.alloc(16);
    meta[0] = w >= 256 ? 0 : w;
    meta[1] = h >= 256 ? 0 : h;
    meta.writeUInt16LE(1, 4);
    meta.writeUInt16LE(32, 6);
    meta.writeUInt32LE(png.length, 8);
    meta.writeUInt32LE(offset, 12);
    entries.push(meta);
    offset += png.length;
  }

  return Buffer.concat([header, ...entries, ...pngBuffers]);
}

const p16 = await src().resize(16, 16, resizeOpts).png().toBuffer();
const p32 = await src().resize(32, 32, resizeOpts).png().toBuffer();
const p48 = await src().resize(48, 48, resizeOpts).png().toBuffer();
writeFileSync(path.join(root, 'public/favicon.ico'), pngToIco([p16, p32, p48]));

const svgWrapper = (href) => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" aria-label="MW4 Cheats">
  <image href="${href}" width="512" height="512" preserveAspectRatio="xMidYMid slice"/>
</svg>
`;

writeFileSync(path.join(root, 'public/favicon.svg'), svgWrapper('/favicon-512.png'));
writeFileSync(path.join(root, 'public/logo.svg'), svgWrapper('/favicon-512.png'));

// Optional: full-size copy for reference / OG fallbacks
writeFileSync(path.join(root, 'public/favicon.png'), readFileSync(path.join(root, 'public/favicon-512.png')));

console.log('Wrote favicon from scripts/favicon-source.png → favicon.ico, favicon.svg, logo.svg, PNG sizes');
