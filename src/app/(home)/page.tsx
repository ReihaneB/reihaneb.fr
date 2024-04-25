import { Metadata } from 'next';

import Home from '@/pageComponents/Home/Home';
import { getAboutMe } from '@/api/getAboutMe';

export async function generateMetadata(): Promise<Metadata> {
  const about = await getAboutMe();

  return {
    title: `${about.jobTitle} • ${about.name}`,
    description: `${about.description}`,
    openGraph: {
      title: `${about.jobTitle} • ${about.name}`,
      description: `${about.description}`,
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
  };
}

function HomePage() {
  return (
    <Home />
  );
}

export default HomePage;
