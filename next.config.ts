import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      { source: "/oia", destination: "/thinking/oia", permanent: true },
      { source: "/my-work", destination: "/career", permanent: true },
      { source: "/tools", destination: "/thinking/ai", permanent: true },
    ];
  },
};

export default nextConfig;
