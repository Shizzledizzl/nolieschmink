import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Local images in /public; unoptimized fallback for missing placeholders
    remotePatterns: [],
  },
};

export default nextConfig;
