/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  experimental: {
    appDir: true, // Ativa o App Router
  },
};

module.exports = nextConfig;
