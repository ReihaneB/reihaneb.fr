import type { Stack } from '@/widgets/MainStack/MainStack.d';
import enhancedFetch from '@/utils/enhancedFetch/enhancedFetch';
import { getStrapiMedia } from '@/utils/strapiMedia';

interface ProjectsResponse {
  data: [
    {
      id: number;
      attributes: {
        project_title: string;
        job_title: string;
        main_stack: Stack[];
        slug: string;
        featured_image: {
          data: {
            attributes: {
              width: number;
              height: number;
              url: string;
              alternativeText: string;
            };
          };
        };
      };
    }
  ];
}

export const getProjectsList = async () => {
  const { body } = await enhancedFetch<ProjectsResponse>({
    method: 'GET',
    path: `/works`,
    tag: 'projects',
  });

  const projects = body.data.map(project => ({
    id: project.id,
    title: project.attributes.project_title,
    jobTitle: project.attributes.job_title,
    stack: project.attributes.main_stack,
    url: `/work/${project.attributes.slug}`,
    image: {
      width: project.attributes.featured_image.data.attributes.width,
      height: project.attributes.featured_image.data.attributes.height,
      src: getStrapiMedia(project.attributes.featured_image.data.attributes.url),
      alt: project.attributes.featured_image.data.attributes.alternativeText,
    },
  }));

  return projects;
};
