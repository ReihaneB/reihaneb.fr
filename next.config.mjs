/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.reihaneb.fr',
        port: '',
      },
    ],
  },
};

export default nextConfig;
