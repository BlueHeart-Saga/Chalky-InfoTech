import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'mediahub-backend-docker-hgh6hzgacraqbhb2.southindia-01.azurewebsites.net',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  cacheComponents: true,
  experimental: {
    instantNavigationDevToolsToggle: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.chalkyinfo.com',
          },
        ],
        destination: 'https://chalkyinfo.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
