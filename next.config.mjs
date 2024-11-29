/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.reihaneb.fr',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '*.scw.cloud',
        port: '',
      },
    ],
  },
};

export default nextConfig;
