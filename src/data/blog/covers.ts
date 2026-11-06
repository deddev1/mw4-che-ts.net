/** Hero images for blog posts — same MW4 gameplay library as product galleries. */
import { altForGameplaySrc, gameplayImagePath } from '../gameplayImages';

const gp = (n: number) => gameplayImagePath(n);

const covers: Record<string, { image: string; imageAlt: string }> = {
  'cheat-codes': {
    image: gp(7),
    imageAlt:
      'Undetected MW4 cheats ESP and aimbot gameplay in Call of Duty Modern Warfare 4 multiplayer — console codes guide',
  },
  'console-tips': {
    image: gp(2),
    imageAlt:
      'MW4 Cheats cheat interface with ESP toggles for Modern Warfare 4 on PC — live server upgrade guide',
  },
  'use-codes': {
    image: gp(3),
    imageAlt:
      'MW4 Cheats software panel with aimbot and wallhack settings — post-checkout setup guide screenshot',
  },
  features: {
    image: gp(4),
    imageAlt:
      'MW4 Cheats cheat suite with player ESP in a Modern Warfare 4 firefight — tier features guide',
  },
  'console-cmds': {
    image: gp(5),
    imageAlt:
      'Modern Warfare 4 Ricochet anti-cheat update context for MW4 cheat buyers — Private Match vs live loader guide',
  },
  'lite-vs-pro': {
    image: gp(10),
    imageAlt:
      'Modern Warfare 4 match ESP wallhack showing enemies through cover — Lite vs Pro tier comparison',
  },
  elite: {
    image: gp(4),
    imageAlt:
      'MW4 Elite tier full cheat suite gameplay with player ESP in Modern Warfare 4 multiplayer',
  },
  aimbot: {
    image: gp(11),
    imageAlt:
      'MW4 aimbot FOV circle and target lock during a Modern Warfare 4 gunfight — Pro tier aimbot guide',
  },
  esp: {
    image: gp(10),
    imageAlt:
      'Modern Warfare 4 match ESP wallhack with enemy player boxes — Lite tier ESP and radar setup guide',
  },
  fov: {
    image: gp(8),
    imageAlt:
      'Modern Warfare 4 multiplayer gunfight with MW4 player ESP boxes — FOV hack awareness guide',
  },
  skins: {
    image: gp(12),
    imageAlt:
      'Call of Duty Modern Warfare 4 cheats trainer with unlock all menu — Skin Changer utility guide',
  },
  'ricochet-patch': {
    image: gp(5),
    imageAlt:
      'MW4 Ricochet anti-cheat patch day checklist — season update news for cheat status checks',
  },
  hwid: {
    image: gp(6),
    imageAlt:
      'MW4 season update and Ricochet headline for HWID spoofer buyers after a hardware ban',
  },
  'buy-guide': {
    image: gp(13),
    imageAlt:
      'MW4 cheats trainer showing unlock all, aimbot, and ESP modules — 2026 checkout buy guide',
  },
  bones: {
    image: gp(11),
    imageAlt:
      'MW4 Pro tier aimbot bone select and FOV assist during a Modern Warfare 4 gunfight',
  },
  'ricochet-error': {
    image: gp(6),
    imageAlt:
      'Modern Warfare 4 anti-cheat and patch news screenshot — Ricochet error troubleshooting guide',
  },
  external: {
    image: gp(7),
    imageAlt:
      'Undetected external MW4 cheats with ESP and aimbot in live multiplayer — loader safety guide',
  },
  'stream-proof': {
    image: gp(9),
    imageAlt:
      'Call of Duty MW4 combat with cheat overlay and stream-safe ESP for content creators',
  },
};

export function blogCover(slug: string): { image: string; imageAlt: string } {
  const cover = covers[slug];
  if (!cover) {
    const image = gp(1);
    return { image, imageAlt: altForGameplaySrc(image) };
  }
  const imageAlt = cover.imageAlt.trim() || altForGameplaySrc(cover.image);
  return { image: cover.image, imageAlt };
}
