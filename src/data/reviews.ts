export interface Review {
  id: string;
  name: string;
  handle: string;
  rating: 1 | 2 | 3 | 4 | 5;
  product: string;
  productHref: string;
  title: string;
  body: string;
  date: string;
  verified: boolean;
}

export const reviews: Review[] = [
  {
    id: 'r1',
    name: 'Marcus K.',
    handle: 'season_scout',
    rating: 5,
    product: 'MW4 Elite',
    productHref: '/products/mw4-cheats/elite/',
    title: 'Elite ESP + camo helpers in Multiplayer',
    body: 'Bought Elite before a season update. Player ESP and loot markers made map control runs cleaner, and Camo & XP Helpers cut grind time. Portal presets loaded fast—Discord helped me tune aimbot smoothing on day one.',
    date: 'Sep 12, 2026',
    verified: true,
  },
  {
    id: 'r2',
    name: 'Elena R.',
    handle: 'stream_safe',
    rating: 5,
    product: 'MW4 Elite',
    productHref: '/products/mw4-cheats/elite/',
    title: 'Stream-proof overlays for creators',
    body: 'Needed stream-proof so OBS never shows ESP. Worked on game capture after the checklist in the blog. Soft aim stays human with the default FOV circle—no snap reports from my duo.',
    date: 'Sep 4, 2026',
    verified: true,
  },
  {
    id: 'r3',
    name: 'Jordan P.',
    handle: 'ak_main',
    rating: 5,
    product: 'MW4 Elite',
    productHref: '/products/mw4-cheats/elite/',
    title: 'No recoil profiles for AK / TAQ-56',
    body: 'Per-weapon recoil profiles saved my sprays in Warzone. Started conservative like the guide said, then tightened. Patch after Thursday update landed before I joined a lobby again.',
    date: 'Aug 28, 2026',
    verified: true,
  },
  {
    id: 'r4',
    name: 'Sam T.',
    handle: 'hwid_reset',
    rating: 5,
    product: 'HWID Spoofer',
    productHref: '/products/mw4-cheats/hwid-spoofer/',
    title: 'HWID Spoofer after a Ricochet hardware flag',
    body: 'Fresh accounts died instantly on one PC. Followed the restore-point checklist, spoofed, cold reboot, then verified IDs. Got back into MW4 the same night—support walked me through Discord.',
    date: 'Aug 21, 2026',
    verified: true,
  },
  {
    id: 'r5',
    name: 'Chris V.',
    handle: 'loot_radar',
    rating: 4,
    product: 'MW4 Elite',
    productHref: '/products/mw4-cheats/elite/',
    title: 'Equipment ESP & radar for roams',
    body: 'Radar + loot ESP is what I use most. Distance filters took a session to dial in, but once set I stop walking into AFK players. Would love more map presets out of the box—still a solid buy.',
    date: 'Aug 15, 2026',
    verified: true,
  },
  {
    id: 'r6',
    name: 'Priya N.',
    handle: 'skin_preview',
    rating: 5,
    product: 'Skin Changer',
    productHref: '/products/mw4-cheats/unlock-all/',
    title: 'Skin Changer for loadout previews',
    body: 'Bought Unlock All standalone to preview weapon and clothing skins locally. Other players still see my real inventory, which matches the product page. Fast checkout and portal download.',
    date: 'Aug 9, 2026',
    verified: true,
  },
  {
    id: 'r7',
    name: 'Diego M.',
    handle: 'ugc_help',
    rating: 4,
    product: 'UGC Recovery',
    productHref: '/products/mw4-cheats/ugc/',
    title: 'UGC appeal workspace after a Steam hold',
    body: 'UGC organized my ban docs and follow-ups—no magic unban, which they are honest about. Status tracking made Discord tickets clearer. Pairing with HWID tips from the blog helped decide next steps.',
    date: 'Aug 2, 2026',
    verified: true,
  },
  {
    id: 'r8',
    name: 'Alex W.',
    handle: 'patch_day',
    rating: 5,
    product: 'MW4 Elite',
    productHref: '/products/mw4-cheats/elite/',
    title: 'Loader updates after Ricochet patches',
    body: 'Status banner + Discord #status kept me from launching mid-patch. New loader build showed up within the window they advertise. Checkout to first match was under an hour with portal presets.',
    date: 'Jul 26, 2026',
    verified: true,
  },
  {
    id: 'r9',
    name: 'Nina L.',
    handle: 'duo_main',
    rating: 5,
    product: 'MW4 Elite',
    productHref: '/products/mw4-cheats/elite/',
    title: 'Soft aim that does not look obvious',
    body: 'Bone select and smoothing defaults feel fair in Multiplayer. Duo noticed fewer wild snaps versus free cheats we tried years ago. Support answered a loader question same evening.',
    date: 'Jul 18, 2026',
    verified: true,
  },
];

export function getReviewStats(items: Review[] = reviews) {
  const count = items.length;
  const sum = items.reduce((acc, r) => acc + r.rating, 0);
  const average = count ? Math.round((sum / count) * 10) / 10 : 0;
  const fiveStar = items.filter((r) => r.rating === 5).length;
  return { count, average, fiveStar, verified: items.filter((r) => r.verified).length };
}

export function getRatingBreakdown(items: Review[] = reviews) {
  const total = items.length || 1;
  return ([5, 4, 3, 2, 1] as const).map((stars) => {
    const count = items.filter((r) => r.rating === stars).length;
    return {
      stars,
      count,
      pct: Math.round((count / total) * 100),
    };
  });
}

export function getReviewProducts(items: Review[] = reviews) {
  return [...new Set(items.map((r) => r.product))];
}
