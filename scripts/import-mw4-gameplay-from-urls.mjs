import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const outDir = path.join(process.cwd(), 'public/images/gameplay');

/** Source order → local PNG basename (without extension) */
const assets = [
  {
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/89ffd662-f17a-4470-ab15-e8c789401030/1793396055209-q9y2fa-arcane-cod-s1-1.webp',
    name: 'mw4-gameplay-01',
  },
  {
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/89ffd662-f17a-4470-ab15-e8c789401030/1793396049171-zvegli-arcane-cod-s2-1.webp',
    name: 'mw4-gameplay-02',
  },
  {
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/89ffd662-f17a-4470-ab15-e8c789401030/1793396043149-bqrwg5-arcane-cod-s3-1.webp',
    name: 'mw4-gameplay-03',
  },
  {
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/89ffd662-f17a-4470-ab15-e8c789401030/1793396032552-7cnluo-arcane-cod-s5-1.webp',
    name: 'mw4-gameplay-04',
  },
  {
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/a9f4c0ff-33ca-4a16-975b-30648c04cb8c/1793370479510-3qcfom-whosimmortal-modern-warfare-4-major-anti-cheat-update-revealed-qjmykad-qwa-989x5.webp',
    name: 'mw4-gameplay-05',
  },
  {
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/a9f4c0ff-33ca-4a16-975b-30648c04cb8c/1793370477529-gtipw8-whosimmortal-modern-warfare-4-major-anti-cheat-update-revealed-qjmykad-qwa-989x5.webp',
    name: 'mw4-gameplay-06',
  },
  {
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/a9f4c0ff-33ca-4a16-975b-30648c04cb8c/1793370473823-vmqxwa-saifskylz-this-is-how-you-use-mw4-cheats-never-get-banned-in-2026-undetected-hwo.webp',
    name: 'mw4-gameplay-07',
  },
  {
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/a9f4c0ff-33ca-4a16-975b-30648c04cb8c/1793370469855-xvypsn-the-rick-modern-warfare-4-is-fcking-pathetic-this-is-bad-gvdovce3plq-989x556-0m0.webp',
    name: 'mw4-gameplay-08',
  },
  {
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/a9f4c0ff-33ca-4a16-975b-30648c04cb8c/1793370459111-w6bmu7-the-rick-modern-warfare-4-is-fcking-pathetic-this-is-bad-gvdovce3plq-989x556-0m0.webp',
    name: 'mw4-gameplay-09',
  },
  {
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/0e8cac87-34a2-43c4-86a8-b81d9b69148b/1793302949078-8ieu6x-modern-warfare-4-match-esp-960.webp',
    name: 'mw4-gameplay-10',
  },
  {
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/2087019d-3b86-4a40-8510-2340ba0cef61/1793212534456-ltus9v-eefan-my-aim-got-me-banned-in-modern-warfare-4-b1kdllicky0-1112x626-5m39s.webp',
    name: 'mw4-gameplay-11',
  },
  {
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/2087019d-3b86-4a40-8510-2340ba0cef61/1793212518776-4hayps-trainerg0dx-call-of-duty-modern-warfare-4-2026-cheats-trainer-unlock-all-aimbot-.webp',
    name: 'mw4-gameplay-12',
  },
  {
    url: 'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/mw4/2087019d-3b86-4a40-8510-2340ba0cef61/1793212434252-uuqu0i-trainerg0dx-call-of-duty-modern-warfare-4-2026-cheats-trainer-unlock-all-aimbot-.webp',
    name: 'mw4-gameplay-13',
  },
];

fs.mkdirSync(outDir, { recursive: true });

for (const { url, name } of assets) {
  const dest = path.join(outDir, `${name}.png`);
  if (fs.existsSync(dest)) {
    console.log('skip existing', name);
    continue;
  }
  let lastErr;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      await sharp(buf)
        .resize({ width: 1600, height: 900, fit: 'inside', withoutEnlargement: false })
        .png({ compressionLevel: 8, effort: 7 })
        .toFile(dest);
      console.log('wrote', path.relative(process.cwd(), dest));
      lastErr = null;
      break;
    } catch (err) {
      lastErr = err;
      console.warn(`attempt ${attempt} failed for ${name}:`, err.message);
      await new Promise((r) => setTimeout(r, 1500 * attempt));
    }
  }
  if (lastErr) throw lastErr;
}

// Remove obsolete gameplay PNGs and their webp derivatives
const legacyPrefixes = [
  'mw4-map-hack',
  'mw4-scripts-combo',
  'mw4-zoom-hack',
  'mw4-skin-changer',
  'mw4-auto-kill-steal',
  'mw4-farm-bot',
  'mw4-player-esp',
];

for (const file of fs.readdirSync(outDir)) {
  if (legacyPrefixes.some((p) => file.startsWith(p))) {
    fs.unlinkSync(path.join(outDir, file));
    console.log('removed legacy', file);
  }
}

console.log('MW4 gameplay import complete.');
