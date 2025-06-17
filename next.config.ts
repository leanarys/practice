/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }, // if you're using next/image
  trailingSlash: true,           // ensures proper routing on GitHub Pages
};

module.exports = nextConfig;
