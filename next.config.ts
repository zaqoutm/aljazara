import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // output: 'export',

  images: {
    unoptimized: true,

    remotePatterns: [
      {
        // protocol: "https",
        hostname: '*',
      },
      {
        protocol: 'https',
        // hostname: "res.cloudinary.com",
        hostname: 'cdn.jsdelivr.net',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
  logging: {
    fetches: { fullUrl: true },
  },
};

export default nextConfig;
