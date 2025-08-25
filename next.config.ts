import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Silence local Turbopack root inference warnings
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "img.omdbapi.com",
      },
    ],
  },
};

export default nextConfig;
