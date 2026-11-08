import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/opaque", destination: "/opaque/index.html" },
      { source: "/vasari", destination: "/vasari/index.html" },
    ];
  },
};

export default nextConfig;
