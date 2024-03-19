import type { Stack } from '@/widgets/MainStack/MainStack.d';
import enhancedFetch from '@/utils/enhancedFetch/enhancedFetch';
import { getStrapiMedia } from '@/utils/strapiMedia';

interface IGetProjectHeader {
  id: string;
}

interface ProjectResponse {
  data: {
    attributes: {
      project_title: string;
      job_title: string;
      main_stack: Stack[];
      project_url: string;
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
  };
}

export const getProjectHeader = async ({ id }: IGetProjectHeader) => {
  const { body } = await enhancedFetch<ProjectResponse>({
    method: 'GET',
    path: `/works/${id}`,
    tag: 'project',
  });

  const project = body.data.attributes;

  return {
    title: project.project_title,
    jobTitle: project.job_title,
    stack: project.main_stack,
    url: project.project_url,
    image: {
      width: project.featured_image.data.attributes.width,
      height: project.featured_image.data.attributes.height,
      src: getStrapiMedia(project.featured_image.data.attributes.url),
      alt: project.featured_image.data.attributes.alternativeText,
    },
  };
};
