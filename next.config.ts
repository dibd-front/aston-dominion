import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: false,
  // experimental: {
  //   scrollRestoration: false,
  // },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    deviceSizes: [767, 980, 1156, 1400, 1920],
    formats: ['image/webp'],
  },
};

export default nextConfig;
