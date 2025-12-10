/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/dev',
  assetPrefix: '/dev/',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;