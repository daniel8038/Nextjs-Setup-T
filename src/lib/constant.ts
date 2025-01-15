import { env } from '@/env.mjs';

export const siteConfig = {
  title: () => 'Next.js Starter Template', // 你的网站标题
  description: () =>
    'A starter template for building web applications with Next.js, TypeScript, and Tailwind CSS', // 网站描述
  keywords: () => [
    'next.js',
    'react',
    'typescript',
    'tailwindcss',
    'starter template',
    'web development',
    'frontend',
    'responsive design',
    'SEO friendly',
    'modern web app',
  ],
  url: () => env.APP_URL,
  googleSiteVerificationId: () => env.GOOGLE_SITE_VERIFICATION_ID || '',
};
