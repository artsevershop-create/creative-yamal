import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: process.cwd(),
  ...(process.env.GITHUB_PAGES === 'true' ? {
    output: 'export',
    basePath: '/creative-yamal',
    trailingSlash: true,
    images: { unoptimized: true },
  } : {}),
};

export default nextConfig;
