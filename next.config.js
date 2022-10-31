/** @type {import('next').NextConfig} */

const nextConfig = {
  // Append the default value with md extensions
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
