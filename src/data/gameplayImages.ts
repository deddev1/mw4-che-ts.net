/** Canonical alt text and captions for all MW4 gameplay screenshots (01–13). */
export const GAMEPLAY_IMAGE_DIR = '/images/gameplay';

export type GameplayGalleryItem = {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
};

export const gameplayGallery = {
  gp01: {
    src: `${GAMEPLAY_IMAGE_DIR}/mw4-gameplay-01.png`,
    alt: 'MW4 Cheats cheat menu overlay on a live Call of Duty Modern Warfare 4 multiplayer match',
    caption: 'MW4 Cheats suite — match view',
    captionDesc: 'External loader overlay with combat modules active in Multiplayer.',
  },
  gp02: {
    src: `${GAMEPLAY_IMAGE_DIR}/mw4-gameplay-02.png`,
    alt: 'MW4 Cheats cheat interface showing ESP and combat toggles for Modern Warfare 4 on PC',
    caption: 'Module toggles',
    captionDesc: 'Quick access to ESP, radar, and stream-proof options before you queue.',
  },
  gp03: {
    src: `${GAMEPLAY_IMAGE_DIR}/mw4-gameplay-03.png`,
    alt: 'MW4 Cheats software panel with aimbot and wallhack settings for undetected MW4 cheats',
    caption: 'Aim & vision settings',
    captionDesc: 'Tune smoothing, FOV, and ESP distance from one combat tab.',
  },
  gp04: {
    src: `${GAMEPLAY_IMAGE_DIR}/mw4-gameplay-04.png`,
    alt: 'MW4 Cheats cheat suite gameplay screenshot with player ESP in a Modern Warfare 4 firefight',
    caption: 'Full suite in action',
    captionDesc: 'Elite-tier modules stacked for Warzone and Multiplayer sessions.',
  },
  gp05: {
    src: `${GAMEPLAY_IMAGE_DIR}/mw4-gameplay-05.png`,
    alt: 'Modern Warfare 4 Ricochet anti-cheat update news screenshot relevant to MW4 cheat status checks',
    caption: 'Patch & Ricochet awareness',
    captionDesc: 'Check live status after major MW4 and Ricochet updates before you launch.',
  },
  gp06: {
    src: `${GAMEPLAY_IMAGE_DIR}/mw4-gameplay-06.png`,
    alt: 'MW4 season update and anti-cheat headline used alongside mw4-cheats.net status banner guidance',
    caption: 'Season patch context',
    captionDesc: 'Pair portal builds with Discord #status on patch days.',
  },
  gp07: {
    src: `${GAMEPLAY_IMAGE_DIR}/mw4-gameplay-07.png`,
    alt: 'Undetected MW4 cheats ESP and aimbot gameplay in Call of Duty Modern Warfare 4 multiplayer',
    caption: 'Undetected ESP & aim',
    captionDesc: 'Conservative presets for readable overlays in live lobbies.',
  },
  gp08: {
    src: `${GAMEPLAY_IMAGE_DIR}/mw4-gameplay-08.png`,
    alt: 'Modern Warfare 4 multiplayer gunfight with MW4 player ESP boxes highlighting enemies',
    caption: 'Player ESP in fights',
    captionDesc: 'Name, distance, and skeleton ESP during close-quarters combat.',
  },
  gp09: {
    src: `${GAMEPLAY_IMAGE_DIR}/mw4-gameplay-09.png`,
    alt: 'Call of Duty MW4 combat scene with cheat overlay showing enemy positions and loadout intel',
    caption: 'Combat awareness',
    captionDesc: 'Track multiple targets before you push a hot zone.',
  },
  gp10: {
    src: `${GAMEPLAY_IMAGE_DIR}/mw4-gameplay-10.png`,
    alt: 'Modern Warfare 4 match ESP wallhack showing enemy players through cover in MW4 multiplayer',
    caption: 'Match ESP / wallhack',
    captionDesc: 'Wallhack-style boxes tuned for Multiplayer and Warzone readability.',
  },
  gp11: {
    src: `${GAMEPLAY_IMAGE_DIR}/mw4-gameplay-11.png`,
    alt: 'MW4 aimbot FOV circle and target lock during a Modern Warfare 4 gunfight on PC',
    caption: 'Aimbot & soft aim',
    captionDesc: 'FOV-limited aim assist with humanized smoothing for Pro tier buyers.',
  },
  gp12: {
    src: `${GAMEPLAY_IMAGE_DIR}/mw4-gameplay-12.png`,
    alt: 'Call of Duty Modern Warfare 4 2026 cheats trainer with unlock all and aimbot menu on screen',
    caption: 'Unlock All & trainer',
    captionDesc: 'Utility menu for camos, operators, and combat tools after checkout.',
  },
  gp13: {
    src: `${GAMEPLAY_IMAGE_DIR}/mw4-gameplay-13.png`,
    alt: 'MW4 cheats trainer interface showing unlock all, aimbot, and ESP modules for Modern Warfare 4',
    caption: 'Trainer combat stack',
    captionDesc: 'Compare Lite, Pro, and Elite modules before you get access.',
  },
} as const satisfies Record<string, GameplayGalleryItem>;

export type GameplayGalleryKey = keyof typeof gameplayGallery;

export const DEFAULT_GAMEPLAY_ALT = gameplayGallery.gp01.alt;

export function gameplayImagePath(index: number): string {
  return `${GAMEPLAY_IMAGE_DIR}/mw4-gameplay-${String(index).padStart(2, '0')}.png`;
}

/** Resolve alt text for any gameplay asset path (used by blog covers and OG fallbacks). */
export function altForGameplaySrc(src: string): string {
  for (const item of Object.values(gameplayGallery)) {
    if (item.src === src) return item.alt;
  }
  const match = src.match(/mw4-gameplay-(\d{2})/i);
  if (match) {
    const key = `gp${match[1]}` as GameplayGalleryKey;
    const item = gameplayGallery[key];
    if (item) return item.alt;
  }
  return 'MW4 cheats gameplay screenshot on mw4-cheats.net';
}
