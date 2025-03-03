import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  bundlePagesRouterDependencies: true,
  async headers() {
    return [
      {
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
        source: "/(.*)",
      },
      {
        headers: [
          {
            key: "Content-Type",
            value: "application/javascript; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self'",
          },
        ],
        source: "/sw.js",
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    localPatterns: [
      {
        pathname: "/assets/**",
      },
    ],
    minimumCacheTTL: 2592000,
    remotePatterns: [
      {
        hostname: "**.facebook.com",
        pathname: "**",
        protocol: "https",
      },
      {
        hostname: "**.bestseenonfoot.com",
        pathname: "**",
        protocol: "https",
      },
    ],
  },
  // Append the default value with md extensions
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
  async redirects() {
    return [
      {
        destination: "/posts/:slug",
        permanent: true,
        source: "/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug",
      },
    ];
  },
};

export default nextConfig;
