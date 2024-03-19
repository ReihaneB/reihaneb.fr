/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.reihaneb.fr',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
