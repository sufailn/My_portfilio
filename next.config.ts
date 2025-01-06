import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets.aceternity.com'], // Add this line to allow external image domain
  },
};

export default nextConfig;
