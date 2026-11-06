import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [{ source: "/opaque", destination: "/opaque/index.html" }];
  },
};

export default nextConfig;
