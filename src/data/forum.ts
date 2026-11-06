export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
}

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides & Builds', tone: 'blue', icon: 'navBlog' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

function guideDiscussion(input: {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryTone: ForumPost['categoryTone'];
  sourceTitle: string;
  sourcePath: string;
  upvotes: number;
  answer: string;
  detail: string;
  tip: string;
}): ForumPost {
  const { answer, detail, tip, ...post } = input;
  return {
    ...post,
    author: 'guide_team',
    age: '2 days ago',
    commentsCount: 1,
    flair: 'Guide Q&A',
    body: [answer, detail],
    comments: [{ author: 'guide_team', age: 'From the guide', score: 0, body: tip }],
  };
}

const additionalGuidePosts: ForumPost[] = [
  guideDiscussion({
    slug: 'esp-include', title: 'What does Player ESP include before I buy?', upvotes: 73,
    excerpt: 'Player ESP breakdown: boxes, loot, streaks, and radar covered in the ESP buy guide before checkout.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'ESP and radar setup for MW4', sourcePath: '/blog/esp/',
    answer: 'Think of Player ESP as your radar on the HUD: boxes, names, health bars, distance, optional skeletons, plus markers for streaks and key pickups. Which toggles you unlock depends on Lite vs Pro vs Elite—see the product cards for the exact module list.',
    detail: 'It recommends starting with a restrained layout and enabling only the information you can read comfortably during a firefight or when holding a power position.',
    tip: 'Keep the overlay uncluttered: begin with players and the nearest loot, then adjust the distance filters one at a time.',
  }),
  guideDiscussion({
    slug: 'esp-setup', title: 'How should I set up ESP overlay the first time?', upvotes: 58,
    excerpt: 'First-time ESP overlay setup: enable basics, confirm on a quiet server, then tune one setting at a time.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'ESP and radar setup for MW4', sourcePath: '/blog/esp/',
    answer: 'Turn the overlay on in a Private Match first: pick two contrast colors, keep player lines inside your peripheral vision, and shrink boxes until your minimap and weapon info stay readable.',
    detail: 'Test your layout on a low-population or Private Match before relying on it in a busy one. A simple configuration is easier to read than turning on every option immediately.',
    tip: 'If the screen feels crowded, lower the loot distance and hide low-value items before changing colors or sizes.',
  }),
  guideDiscussion({
    slug: 'fov-settings', title: 'What FOV hack settings feel comfortable in PvP?', upvotes: 44,
    excerpt: 'FOV hack tips: widen awareness without stretching the screen or making distant targets hard to track.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'FOV hack guide for MW4', sourcePath: '/blog/fov/',
    answer: 'Widen in small steps: if distant targets look too small or recoil feels exaggerated, you have gone too far—nudge down until tracking mid-range gunfights feels natural again.',
    detail: 'Keep a quick reset hotkey to the default FOV available so you can compare the wider view with familiar framing, especially for building fights.',
    tip: 'Change one step at a time and spend a short session on a quiet server before settling on a new value.',
  }),
  guideDiscussion({
    slug: 'aim-smooth', title: 'How do Aimbot smoothing settings change soft aim?', upvotes: 32,
    excerpt: 'Aimbot smoothing, FOV circles and why the PvP buy guide recommends conservative soft-aim tuning.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Aimbot and recoil scripts for PvP', sourcePath: '/blog/aimbot/',
    answer: 'Smoothing controls how quickly the crosshair moves toward a target. The guide recommends higher smoothing, a small FOV circle and a short test session before making any changes.',
    detail: 'Changing one value at a time is easier to review than adjusting FOV, smoothing and bone selection together.',
    tip: 'Keep a note of each configuration you try so you can return to the last setup that behaved as expected.',
  }),
  guideDiscussion({
    slug: 'recoil-drill', title: 'Best way to test No-recoil weapon profiles?', upvotes: 29,
    excerpt: 'Practice recoil profiles one weapon at a time on a quiet server wall before live PvP.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Aimbot bone select and recoil scripts for MW4', sourcePath: '/blog/bones/',
    answer: 'Choose one weapon and one profile to test at a time. The guide walks through example profiles for the AK, TAQ-56, VEL 46 and bolt rifle, and explains how bone selection fits with recoil compensation.',
    detail: 'A Private Match lets you repeat the same spray at a wall and see which values need adjustment without risking your kit.',
    tip: 'Learn the manual spray pattern first; that makes it much easier to spot when a profile is over-compensating.',
  }),
  guideDiscussion({
    slug: 'elite-tools', title: 'What extra tools ship with Elite tier cheats?', upvotes: 67,
    excerpt: 'Elite tier vs Lite/Pro: Camo & XP Helpers, Skin Changer, priority patches and the full ESP suite.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Elite tier guide: when to upgrade your cheat tools', sourcePath: '/blog/elite/',
    answer: 'The guide describes Elite as including the Lite and Pro feature sets plus additional utilities such as Camo & XP Helpers, the full radar suite, priority patch delivery and Skin Changer.',
    detail: 'It also covers who may benefit from the extra modules and why it makes sense to understand the simpler feature set first.',
    tip: 'Compare the included features against your needs before choosing a tier; the full comparison is linked in the guide.',
  }),
  guideDiscussion({
    slug: 'lite-pro', title: 'How do Lite tier and Pro cheat tiers differ?', upvotes: 53,
    excerpt: 'Lite tier is ESP and radar; Pro adds aimbot and no recoil. Short buyer comparison before checkout.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Lite tier vs Pro: which tier fits you', sourcePath: '/blog/lite-vs-pro/',
    answer: 'The comparison guide describes Lite as focused on awareness tools such as player ESP, loot ESP, radar and FOV. Pro adds Aimbot, Soft Aim and No Recoil on top of that foundation.',
    detail: 'The right choice depends on whether you need map information alone or also want the aim assist modules described in the comparison.',
    tip: 'Use the full side-by-side comparison to check specific modules before making a decision.',
  }),
  guideDiscussion({
    slug: 'skin-info', title: 'What should I know before buying Skin Changer?', upvotes: 38,
    excerpt: 'Unlock All / Camo Changer: local weapon and clothing previews, limits, and what other players see.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Skin changer and Unlock All for MW4', sourcePath: '/blog/skins/',
    answer: 'The guide describes Skin Changer as a local cosmetic preview utility for weapon camos, operator skins, and loadout items. It explains setup, supported options, and how to restore your default appearance.',
    detail: 'Review the compatibility notes and follow the current setup instructions before using the utility.',
    tip: 'Cosmetic changes are local previews that other players do not see; check the guide for current limitations and setup steps.',
  }),
  guideDiscussion({
    slug: 'ricochet-init', title: 'Ricochet failed to initialize—what should I try first?', upvotes: 24,
    excerpt: 'Ricochet Anti-Cheat failed to initialize: verify Steam files and reinstall Ricochet before assuming a ban.',
    category: 'Patch Talk', categoryTone: 'orange', sourceTitle: 'Ricochet Anti-Cheat failed to initialize in MW4', sourcePath: '/blog/ricochet-error/',
    answer: 'The troubleshooting guide says the message can result from game-file problems or software conflicts and does not always mean an account ban. First verify game files through Steam.',
    detail: 'It also recommends fully exiting Steam, reinstalling Ricochet from the game install folder, restarting the PC, and checking for conflicting overlays or drivers before trying more disruptive steps.',
    tip: 'Test a normal Steam launch before starting other software so you can narrow down the cause.',
  }),
  guideDiscussion({
    slug: 'ext-loader', title: 'What does an External cheat loader mean?', upvotes: 46,
    excerpt: 'External cheat loader explained: separate process, overlay UI, portal updates vs risky injectors.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'MW4 external cheat guide', sourcePath: '/blog/external/',
    answer: 'The article describes an external loader as software that runs separately from the MW4 process and presents its interface as an overlay.',
    detail: 'It discusses the architecture at a high level and explains setup, patch updates, and the differences described between external and internal tools.',
    tip: 'Check compatibility and current status information whenever the game or Ricochet receives an update.',
  }),
  guideDiscussion({
    slug: 'stream-check', title: 'How do I check Stream-proof overlay in OBS?', upvotes: 21,
    excerpt: 'Stream-proof setup: record an OBS test so ESP overlays stay off your VOD before you go live.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Stream-proof overlay setup for MW4', sourcePath: '/blog/stream-proof/',
    answer: 'Record a short local test with the exact OBS scene and capture mode you plan to use, then review the playback for any overlay elements.',
    detail: 'The guide recommends testing game capture and display capture separately, since capture methods and multi-monitor setups can behave differently.',
    tip: 'Do not rely on the preview alone; review a saved recording from the same scene you intend to stream.',
  }),
  guideDiscussion({
    slug: 'hwid-check', title: 'After a Ricochet ban, what should I check on HWID?', upvotes: 33,
    excerpt: 'HWID Spoofer vs new account after a Ricochet hardware flag—checks before Discord support.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'HWID spoofer vs new account after a Ricochet ban', sourcePath: '/blog/hwid/',
    answer: 'Start by checking the account and device instructions for your product. The guide explains common HWID questions, when a new Steam account is enough, and when a reset request may be needed.',
    detail: 'Avoid changing several system settings at once. If the product does not recognize your device, contact support with the relevant error details.',
    tip: 'Use the official support path for device resets instead of relying on unrelated third-party tools.',
  }),
  guideDiscussion({
    slug: 'pre-install', title: 'What to review before installing cheat tools?', upvotes: 18,
    excerpt: 'Before installing cheat tools: status banner, Windows/Steam notes, and official setup on mw4-cheats.net.',
    category: 'Community', categoryTone: 'green', sourceTitle: 'cheat tools features: aimbot, ESP, no recoil and more', sourcePath: '/blog/features/',
    answer: 'Read the feature and setup information first, confirm that it matches your system, and check the current update and status notes.',
    detail: 'The site guide describes the available feature groups and links to more specific setup articles for individual modules.',
    tip: 'Use the linked product and support pages as the source of truth for current availability and compatibility.',
  }),
  guideDiscussion({
    slug: 'choose-tier', title: 'How do I choose the right cheat tier to buy?', upvotes: 48,
    excerpt: 'Pick Lite, Pro or Elite cheat tools by feature set, then follow secure checkout on mw4-cheats.net.',
    category: 'Community', categoryTone: 'green', sourceTitle: 'How to buy cheat tools in 2026', sourcePath: '/blog/buy-guide/',
    answer: 'The buying guide recommends comparing included features and choosing the tier that fits your needs before continuing through the official checkout.',
    detail: 'It covers the purchase flow, account access, downloading the current build, and checking setup instructions before launching the game.',
    tip: 'If you have a payment or account question, use the site support page and avoid sharing purchase details publicly.',
  }),
];

export const forumPosts: ForumPost[] = [
  {
    slug: 'dev-multiplayer', category: 'General', categoryTone: 'purple',
    title: 'Can I use private-match dev toggles in public MW4 lobbies?',
    excerpt: 'Quick answer from the console guide: local Private Match settings do not work in live Multiplayer or Warzone.',
    author: 'guide_team', age: '2 hours ago', commentsCount: 3, upvotes: 128, flair: 'Guide Q&A',
    sourceTitle: 'MW4 console commands vs live-server loaders', sourcePath: '/blog/cheat-codes/',
    body: ['No. Bot settings and other Private Match-only toggles stay in your local lobby—they do not carry into public Multiplayer or Warzone.', 'Use Private Match to learn recoil and map flow, then use a paid MW4 loader from mw4-cheats.net when you want ESP and aim assist on live servers. The linked guide explains the difference.'],
    comments: [
      { author: 'ranked_grinder', age: '1 hour ago', score: 24, body: 'Private Match is great for testing sprays; public lobbies need the actual cheat tiers if that is your goal.' },
      { author: 'ak_or_nothing', age: '48 min. ago', score: 11, body: 'Turn off unlimited ammo bots when you want realistic TTK practice before going live.' },
      { author: 'loadout_lab', age: '35 min. ago', score: 8, body: 'Useful distinction. Private Match tools are not the same product as MW4 Cheats.' },
    ],
  },
  {
    slug: 'mw4-console', category: 'General', categoryTone: 'purple',
    title: 'How do I practice in Private Match before buying?',
    excerpt: 'Use bot lobbies and firing range drills from our setup walkthrough before you enable ESP on live servers.',
    author: 'guide_team', age: '4 hours ago', commentsCount: 2, upvotes: 86, flair: 'Guide Q&A',
    sourceTitle: 'How to get MW4 cheats working after checkout', sourcePath: '/blog/use-codes/',
    body: ['Start a Private Match with bots and test recoil on a wall at a fixed distance. That baseline helps you spot when No Recoil profiles are too aggressive later.', 'After checkout, follow the portal launch order and load a conservative preset before joining Multiplayer or Warzone—not before reading the live status banner.'],
    comments: [
      { author: 'ranked_grinder', age: '3 hours ago', score: 17, body: 'I always check Discord status after a patch before I enable anything in a public lobby.' },
      { author: 'carry_curious', age: '2 hours ago', score: 9, body: 'Private Match first, then Lite ESP on a low-pop playlist—worked for me.' },
    ],
  },
  {
    slug: 'spray-safe', category: 'Guides & Builds', categoryTone: 'blue',
    title: 'Safest way to practice recoil patterns?',
    excerpt: 'Practice spray control in Private Match before live Multiplayer or Warzone.',
    author: 'guide_team', age: '6 hours ago', commentsCount: 2, upvotes: 64, flair: 'Guide Q&A',
    sourceTitle: 'From Private Match practice to live MW4 ESP & aimbot', sourcePath: '/blog/console-tips/',
    body: ['Practice in Private Match: pick one weapon, spray at a wall from a fixed distance, and compare each burst so you see how the pattern climbs.', 'The guide also covers when to move from practice lobbies to live MW4 Cheats tiers for ESP and aim assist on public servers.'],
    comments: [
      { author: 'stack_and_pull', age: '5 hours ago', score: 13, body: 'I mark the wall after every magazine to see the shape. Makes tuning No Recoil on Pro much easier.' },
      { author: 'map_reader', age: '4 hours ago', score: 6, body: 'Private Match firing range is enough for spray drills before you tune Pro on live playlists.' },
    ],
  },
  {
    slug: 'after-patch', category: 'Patch Talk', categoryTone: 'orange',
    title: 'What should I check before playing after a Ricochet or game patch?',
    excerpt: 'The patch-day checklist recommends checking build status, updating, and testing on a quiet server before a real session.',
    author: 'guide_team', age: '9 hours ago', commentsCount: 2, upvotes: 42, flair: 'Guide Q&A',
    sourceTitle: 'Ricochet patch day checklist for cheat tools', sourcePath: '/blog/ricochet-patch/',
    body: ['Check the current build and status notice first. After a game or Ricochet update, wait for a compatible build, update the loader, then verify the setup on a quiet or Private Match before returning to busy servers.', 'If anything behaves unexpectedly, stop and review the status notes rather than assuming the old setup still applies. The checklist covers the patch-day routine in more detail.'],
    comments: [
      { author: 'patch_day_vet', age: '8 hours ago', score: 12, body: 'Testing after the update before a real session is the part I used to skip. Now I check the build note and run a quick private test.' },
      { author: 'roamer_main_5', age: '7 hours ago', score: 7, body: 'Agree. If the status has not caught up, wait. A checklist is better than guessing.' },
    ],
  },
  {
    slug: 'lite-or-pro', category: 'Community', categoryTone: 'green',
    title: 'Lite tier or Pro: which tier includes aim assist?',
    excerpt: 'Lite tier is vision tools; Pro adds aimbot and recoil. See which cheat tier to buy for your PvP style.',
    author: 'guide_team', age: '12 hours ago', commentsCount: 1, upvotes: 31, flair: 'Guide Q&A',
    sourceTitle: 'Lite tier vs Pro: which tier fits you', sourcePath: '/blog/lite-vs-pro/',
    body: ['According to the comparison guide, Lite centers on awareness features such as player ESP, equipment and streak ESP, radar, FOV and stream-proof options. Pro includes those features and adds Aimbot, Soft Aim, Bone Select, Trigger Bot and No Recoil.', 'The best fit depends on which features you need. Read the full comparison before choosing.'],
    comments: [
      { author: 'one_more_raid', age: '10 hours ago', score: 10, body: 'The comparison page is useful because it shows which modules are included in each tier instead of only listing headlines.' },
    ],
  },
  {
    slug: 'spray-server', category: 'Guides & Builds', categoryTone: 'blue',
    title: 'Practice spray control without risking your account?',
    excerpt: 'Use Private Match bot lobbies for repeatable AK and VEL 46 drills before live playlists.',
    author: 'guide_team', age: '1 day ago', commentsCount: 2, upvotes: 27, flair: 'Guide Q&A',
    sourceTitle: 'MW4 console commands vs live-server loaders', sourcePath: '/blog/cheat-codes/',
    body: ['Start a Private Match, pick your loadout, and repeat the same wall spray until the pattern is muscle memory. Reset between attempts so every drill starts from the same state.', 'When you are ready for live servers, compare MW4 Cheats tiers and follow the portal setup guide—Private Match practice does not replace a loader on public lobbies.'],
    comments: [
      { author: 'ak_or_nothing', age: '20 hours ago', score: 10, body: 'Start with a wall target and repeat the same spray until the pattern feels automatic.' },
      { author: 'loadout_lab', age: '18 hours ago', score: 5, body: 'Keep presets conservative when you first join Multiplayer after buying Pro.' },
    ],
  },
  ...additionalGuidePosts,
];

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}
