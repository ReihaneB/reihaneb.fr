import { Metadata } from 'next';

import Work from '@/pageComponents/Work/Work';
import { getProjectHeader } from '@/api/getProjectHeader';
import { getAboutMe } from '@/api/getAboutMe';
import { getProjectDescription } from '@/api/getProjectDescription';

interface WorkPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { id } = params;
  const about = await getAboutMe();
  const project = await getProjectHeader({ id });
  const projectDescription = await getProjectDescription({ id });

  return {
    title: `${project.meta.title} • ${about.name}`,
    description: `${projectDescription.meta.description}`,
    openGraph: {
      title: `${project.meta.title} • ${about.name}`,
      description: `${projectDescription.meta.description}`,
      type: 'website',
      url: `https://www.reihaneb.fr/work/${id}`,
      images: [
        {
          url: project.image.src,
          width: project.image.width,
          height: project.image.height,
          alt: project.image.alt,
        },
      ],
    },
    robots: project.meta.robots,
  };
}

function WorkPage({ params }: WorkPageProps) {
  return (
    <Work params={params} />
  );
}

export default WorkPage;
