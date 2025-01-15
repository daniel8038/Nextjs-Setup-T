import { MetadataRoute } from 'next';

// import { env } from '@/env.mjs';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `/sitemap.xml`,
  };
}
