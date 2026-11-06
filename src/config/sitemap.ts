import type { SitemapItem } from '@astrojs/sitemap';
import { blogPosts } from '../data/blog';
import { forumPosts } from '../data/forum';
import { parseBlogDate } from '../utils/schema';

const buildDate = new Date().toISOString().slice(0, 10);

const blogLastmod = new Map(
  blogPosts.map((post) => [`/blog/${post.slug}/`, parseBlogDate(post.date)] as const),
);

function lastmodForForumPost(slug: string): string {
  const post = forumPosts.find((p) => p.slug === slug);
  if (!post) return buildDate;
  if (post.sourcePath) {
    const blogSlug = post.sourcePath.replace(/^\/blog\//, '').replace(/\/$/, '');
    const article = blogPosts.find((p) => p.slug === blogSlug);
    if (article) return parseBlogDate(article.date);
  }
  return buildDate;
}

const forumThreadLastmods = forumPosts.map((p) => lastmodForForumPost(p.slug));
const forumIndexLastmod = forumThreadLastmods.sort().at(-1) ?? buildDate;

function pathnameFromUrl(url: string): string {
  const path = new URL(url).pathname;
  return path.endsWith('/') ? path : `${path}/`;
}

export function sitemapSerialize(item: SitemapItem): SitemapItem | undefined {
  const path = pathnameFromUrl(item.url);

  if (path.includes('/404') || path.startsWith('/go/') || path.includes('/rss.xml')) {
    return undefined;
  }

  const canonical = new URL(item.url);
  if (canonical.pathname !== '/' && !canonical.pathname.endsWith('/')) {
    canonical.pathname = `${canonical.pathname}/`;
  }
  item.url = canonical.href;

  item.lastmod = buildDate;

  if (path === '/') {
    item.priority = 1;
    item.changefreq = 'weekly';
    return item;
  }

  if (path === '/blog/') {
    item.priority = 0.9;
    item.changefreq = 'weekly';
    return item;
  }

  if (path === '/forum/') {
    item.priority = 0.8;
    item.changefreq = 'daily';
    item.lastmod = forumIndexLastmod;
    return item;
  }

  if (path.startsWith('/forum/')) {
    item.priority = 0.6;
    item.changefreq = 'weekly';
    const slug = path.replace(/^\/forum\//, '').replace(/\/$/, '');
    item.lastmod = lastmodForForumPost(slug);
    return item;
  }

  if (path.startsWith('/blog/')) {
    item.priority = 0.7;
    item.changefreq = 'monthly';
    item.lastmod = blogLastmod.get(path) ?? buildDate;
    return item;
  }

  if (path.startsWith('/products/')) {
    item.priority = 0.8;
    item.changefreq = 'weekly';
    return item;
  }

  if (
    path === '/about/' ||
    path === '/support/' ||
    path === '/privacy/' ||
    path === '/terms/' ||
    path === '/faq/'
  ) {
    item.priority = 0.5;
    item.changefreq = 'yearly';
    return item;
  }

  item.priority = 0.6;
  item.changefreq = 'monthly';
  return item;
}
