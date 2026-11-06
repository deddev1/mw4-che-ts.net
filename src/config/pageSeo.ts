/**
 * Unique titles/descriptions per route — all MW4-focused, no duplicate SERP copy.
 * Titles ~50–60 chars; descriptions ~140–155 chars.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Buy MW4 Cheats 2026 | Undetected ESP & Aimbot',
    description:
      'Undetected Modern Warfare 4 tools for PC—player ESP, loot markers, aim assist, no recoil and stream-proof overlays. Compare Lite, Pro and Elite at mw4-cheats.net.',
  },
  '/products/mw4-cheats/': {
    title: 'All MW4 Cheat Products | Lite, Pro, Elite Hub',
    description:
      'Hub for MW4 cheat tiers and utilities: Lite, Pro, Elite, HWID Spoofer, UGC and Unlock All—feature tables, screenshots and Zadeyo checkout links in one place.',
  },
  '/products/mw4-cheats/elite/': {
    title: 'MW4 Elite Cheats for Sale | Full Suite & Priority Patches',
    description:
      'Elite tier: full ESP and radar, aimbot, no recoil, Camo & XP Helpers, Skin Changer, and priority loader delivery after Ricochet patches—Multiplayer and Warzone.',
  },
  '/products/mw4-cheats/hwid-spoofer/': {
    title: 'MW4 HWID Spoofer for Sale | Reset After Ricochet Ban',
    description:
      'Hardware fingerprint reset for PC after Ricochet flags—disk, MAC and GPU rotation with portal walkthrough. Pair with a clean Steam account when reputation is burned.',
  },
  '/products/mw4-cheats/ugc/': {
    title: 'MW4 UGC Recovery Tool | Steam & Ban Appeals',
    description:
      'Case workspace for Steam restrictions and Ricochet appeals—timelines, evidence notes and status tracking so you can coordinate Activision-facing follow-ups.',
  },
  '/products/mw4-cheats/unlock-all/': {
    title: 'Unlock All & Skin Changer | Local Cosmetics',
    description:
      'Local-only weapon and operator cosmetic previews on PC—see skins in your client without market spend; standalone Unlock All or bundled with Elite where listed.',
  },
  '/products/mw4-cheats/utilities/': {
    title: 'Compare Cheat Utilities | HWID Spoofer & UGC',
    description:
      'Side-by-side HWID Spoofer vs UGC: when to rotate hardware IDs vs organize ban appeals. Links to full specs; Skin Changer lives on the Unlock All product page.',
  },
  '/blog/': {
    title: 'Buy Guides & Checkout Tips | Lite, Pro, Elite',
    description:
      'Long-form MW4 guides: tier picks, Ricochet patch checklists, ESP tuning, aimbot and HWID recovery—read before you open secure checkout.',
  },
  '/forum/': {
    title: 'Buyer Forum Q&A | ESP, Radar & Spoofer Help',
    description:
      'Short Q&amp;A threads from our guides—overlay distance, radar noise, spoofer prep and post-patch testing. Full detail stays on the linked blog posts.',
  },
  '/reviews/': {
    title: 'MW4 Cheats Reviews | Buyer Ratings & Feedback',
    description:
      'Buyer quotes on Elite combat tools, spoofer results, UGC flows and Skin Changer—use as social proof alongside the feature pages and FAQ.',
  },
  '/faq/': {
    title: 'Buying FAQ | MW4 Tiers, Checkout & Ricochet Risk',
    description:
      'Quick answers: supported platforms, tier differences, ban risk, delivery after purchase and HWID limits—filter by topic or jump to a full guide.',
  },
  '/terms/': {
    title: 'MW4 Cheats Terms of Sale | License & Refunds',
    description:
      'License scope, refunds, personal-use limits, third-party risk and Ricochet policy context for purchases made through mw4-cheats.net checkout links.',
  },
  '/about/': {
    title: 'About Our Cheats Store | Steam PC Tools',
    description:
      'Who runs mw4-cheats.net: MW4-focused storefront, patch-day loader updates, utilities lineup and Discord-led support after you complete checkout.',
  },
  '/support/': {
    title: 'MW4 Cheats Discord Support | Loader Help Tickets',
    description:
      'Open a Discord ticket with order ID, Windows build and screenshots—loader failures, spoofer steps and portal access, scoped to products you purchased.',
  },
  '/privacy/': {
    title: 'Privacy Policy | Data, Cookies & Your Rights',
    description:
      'What mw4-cheats.net collects locally (theme), what checkout partners handle (payments), Discord ticket content and how to request deletion or export.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
