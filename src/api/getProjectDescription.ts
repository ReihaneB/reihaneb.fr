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
              url: string;
              alternativeText: string;
            };
          };
        };
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
        src: getStrapiMedia(project.objective.image.data.attributes.url),
        alt: project.objective.image.data.attributes.alternativeText,
      },
    },
  };
};
