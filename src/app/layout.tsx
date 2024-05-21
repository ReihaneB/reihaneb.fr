import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import '@/styles/globals.css';
import Header from '@/widgets/Header/Header';
import Footer from '@/widgets/Footer/Footer';
import { getSocials } from '@/api/getSocials';
import { getAboutMe } from '@/api/getAboutMe';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata(): Promise<Metadata> {
  const about = await getAboutMe();

  return {
    title: `${about.meta.title} • ${about.name}`,
    description: `${about.meta.description}`,
    metadataBase: new URL('https://www.reihaneb.fr'),
    alternates: {
      canonical: 'https://www.reihaneb.fr',
    },
    openGraph: {
      title: `${about.meta.title} • ${about.name}`,
      description: `${about.meta.description}`,
      type: 'website',
      url: 'https://www.reihaneb.fr',
      images: [
        {
          url: about.image.src,
          width: about.image.width,
          height: about.image.height,
          alt: about.image.alt,
        },
      ],
    },
    robots: about.meta.robots,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const socials = await getSocials();

  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer socials={socials} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
