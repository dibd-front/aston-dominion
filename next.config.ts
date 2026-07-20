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
};

export default nextConfig;
