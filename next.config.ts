import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbopack: false, // Disable Turbopack
  } as any,
};

export default nextConfig;
