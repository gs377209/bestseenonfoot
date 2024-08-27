const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // needed for PWA currently
    webpackBuildWorker: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        hostname: "www.facebook.com",
        pathname: "/tr",
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
  swcMinify: true,
};

module.exports = withPWA(nextConfig);
