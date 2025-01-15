import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    // 应用核心配置
    APP_URL: z.string().url().min(1),
    NODE_ENV: z.enum(['development', 'production', 'test']),

    // SEO相关
    GOOGLE_SITE_VERIFICATION_ID: z.string().optional(),
  },

  client: {
    // 以 NEXT_PUBLIC 开头的变量在客户端可用
    NEXT_PUBLIC_APP_URL: z.string().url(),
    NEXT_PUBLIC_GA_TRACKING_ID: z.string().optional(),
    NEXT_PUBLIC_API_URL: z.string().url(),
  },

  runtimeEnv: {
    // 服务端环境变量
    APP_URL: process.env.APP_URL,
    NODE_ENV: process.env.NODE_ENV,
    GOOGLE_SITE_VERIFICATION_ID: process.env.GOOGLE_SITE_VERIFICATION_ID,

    // 客户端环境变量
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_GA_TRACKING_ID: process.env.NEXT_PUBLIC_GA_TRACKING_ID,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
});
