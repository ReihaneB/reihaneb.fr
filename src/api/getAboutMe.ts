import enhancedFetch from '@/utils/enhancedFetch/enhancedFetch';
import { getStrapiMedia } from '@/utils/strapiMedia';

interface ProjectsResponse {
  data: {
    attributes: {
      name: string;
      job_title: string;
      description: {
        title: string;
        content: string;
      }
      profile_picture: {
        data: {
          attributes: {
            width: number;
            height: number;
            url: string;
            alternativeText: string;
          };
        };
      };
      meta: {
        title: string;
        description: string;
        robots: 'index, follow' | 'index, nofollow' | 'noindex, nofollow' ;
      };
    };
  }
}

export const getAboutMe = async () => {
  const { body } = await enhancedFetch<ProjectsResponse>({
    method: 'GET',
    path: `/about-me`,
    tag: 'about-me',
  });

  return {
    name: body.data.attributes.name,
    jobTitle: body.data.attributes.job_title,
    description: {
      title: body.data.attributes.description.title,
      content: body.data.attributes.description.content,
    },
    image: {
      width: body.data.attributes.profile_picture.data.attributes.width,
      height: body.data.attributes.profile_picture.data.attributes.height,
      src: getStrapiMedia(body.data.attributes.profile_picture.data.attributes.url),
      alt: body.data.attributes.profile_picture.data.attributes.alternativeText,
    },
    meta: {
      title: body.data.attributes.meta.title,
      description: body.data.attributes.meta.description,
      robots: body.data.attributes.meta.robots,
    },
  };
};
