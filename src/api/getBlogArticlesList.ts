import type { BlocksContent } from '@strapi/blocks-react-renderer';

import enhancedFetch from '@/utils/enhancedFetch/enhancedFetch';
import { getStrapiMedia } from '@/utils/strapiMedia';

interface ArticlesResponse {
  data: [
    {
      id: number;
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
        slug: string;
        blog_category: {
          data: {
            attributes: {
              title: string;
              color: string;
            };
          };
        };
        color: string;
        read_time: number;
        meta: {
          description: string;
        };
      },
    }
  ]
}

export const getBlogArticlesList = async () => {
  const { body } = await enhancedFetch<ArticlesResponse>({
    method: 'GET',
    path: `/blogs`,
    tag: 'articles',
    params: '&sort[0]=id:desc',
  });

  const articles = body.data.map(article => ({
    id: article.id,
    title: article.attributes.title,
    description: article.attributes.meta.description,
    image: {
      width: article.attributes.featured_image.data.attributes.width,
      height: article.attributes.featured_image.data.attributes.height,
      src: getStrapiMedia(article.attributes.featured_image.data.attributes.url),
      alt: article.attributes.featured_image.data.attributes.alternativeText,
    },
    color: article.attributes.color,
    category: {
      title: article.attributes.blog_category.data.attributes.title,
      color: article.attributes.blog_category.data.attributes.color,
    },
    readTime: article.attributes.read_time,
    to: article.attributes.slug,
  }));

  return articles;
};
