import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/oia", destination: "/thinking/oia", permanent: true },
      { source: "/my-work", destination: "/career", permanent: true },
      { source: "/tools", destination: "/thinking/ai", permanent: true },
    ];
  },
};

export default nextConfig;
