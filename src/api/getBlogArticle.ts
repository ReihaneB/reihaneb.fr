import type { BlocksContent } from '@strapi/blocks-react-renderer';

import enhancedFetch from '@/utils/enhancedFetch/enhancedFetch';
import { getStrapiMedia } from '@/utils/strapiMedia';

interface IGetBlogArticle {
  id: string;
}

interface ArticlesResponse {
  data: {
    attributes: {
      content: BlocksContent;
      title: string;
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
      meta: {
        title: string;
        description: string;
        robots: 'noindex, nofollow' | 'index, follow' | 'index, nofollow';
      };
    };
  }
}

export const getBlogArticle = async ({ id }: IGetBlogArticle) => {
  const { body } = await enhancedFetch<ArticlesResponse>({
    method: 'GET',
    path: `/blogs/${id}`,
    tag: 'article',
  });

  const article = body.data.attributes;

  return {
    title: article.title,
    content: article.content,
    image: {
      width: article.featured_image.data.attributes.width,
      height: article.featured_image.data.attributes.height,
      src: getStrapiMedia(article.featured_image.data.attributes.url),
      alt: article.featured_image.data.attributes.alternativeText,
    },
    meta: {
      title: article.meta.title,
      description: article.meta.description,
      robots: article.meta.robots,
    },
  };
};
