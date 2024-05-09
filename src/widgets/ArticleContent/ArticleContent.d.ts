import type { BlocksContent } from '@strapi/blocks-react-renderer';

export interface ArticleContentProps {
  content: BlocksContent;
}

export interface ArticleContentStoreProps {
  id: string;
}
