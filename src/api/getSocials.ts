import enhancedFetch from '@/utils/enhancedFetch/enhancedFetch';
import { getStrapiMedia } from '@/utils/strapiMedia';

interface SocialsResponse {
  data: {
    attributes: {
      Socials: {
        icon: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
        name: string;
        url: string;
      }[];
    };
  }
}

export const getSocials = async () => {
  const { body } = await enhancedFetch<SocialsResponse>({
    method: 'GET',
    path: '/social',
    tag: 'socials',
  });

  const socialData = body.data.attributes.Socials;

  return socialData.map(item => ({
    icon: getStrapiMedia(item.icon.data.attributes.url) as string,
    name: item.name as string,
    url: item.url as string,
  }));
};
