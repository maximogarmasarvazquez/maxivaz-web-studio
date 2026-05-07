import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  compress: true,
  poweredByHeader: false,

  images: {
    formats: ["image/avif", "image/webp"], // 🚀 mejora performance SEO
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  experimental: {
    scrollRestoration: true,
  },
};

export default nextConfig;