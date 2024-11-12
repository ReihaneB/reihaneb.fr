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
        hostname: '*.supabase.co',
        port: '',
      },
    ],
  },
};

export default nextConfig;
