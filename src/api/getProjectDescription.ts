import enhancedFetch from '@/utils/enhancedFetch/enhancedFetch';
import { getStrapiMedia } from '@/utils/strapiMedia';

interface IGetProjectDescription {
  id: string;
}

interface ProjectResponse {
  data: {
    attributes: {
      company_description: string;
      objective: {
        name: string;
        description: string;
        image: {
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
      meta: {
        title: string;
        description: string;
        robots: 'index, follow' | 'index, nofollow' | 'noindex, nofollow' ;
      };
    };
  };
}

export const getProjectDescription = async ({ id }: IGetProjectDescription) => {
  const { body } = await enhancedFetch<ProjectResponse>({
    method: 'GET',
    path: `/works/${id}`,
    tag: 'project',
  });

  const project = body.data.attributes;

  return {
    companyDescription: project.company_description,
    objective: {
      title: project.objective.name,
      description: project.objective.description,
      image: {
        width: project.objective.image.data.attributes.width,
        height: project.objective.image.data.attributes.height,
        src: getStrapiMedia(project.objective.image.data.attributes.url),
        alt: project.objective.image.data.attributes.alternativeText,
      },
    },
    meta: {
      title: project.meta.title,
      description: project.meta.description,
      robots: project.meta.robots,
    },
  };
};
