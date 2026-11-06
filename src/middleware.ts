import { defineMiddleware } from 'astro:middleware';

/** Checkout hops are served by static pages in src/pages/go/ (self-canonical HTML + JS replace to Zadeyo). */
export const onRequest = defineMiddleware((_context, next) => next());
