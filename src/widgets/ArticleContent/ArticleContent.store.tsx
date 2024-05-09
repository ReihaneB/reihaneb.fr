import { getBlogArticle } from '@/api/getBlogArticle';

import ArticleContent from './ArticleContent';

import { ArticleContentStoreProps } from './ArticleContent.d';

async function ArticleContentStore({ id }: ArticleContentStoreProps) {
  const { content } = await getBlogArticle({ id });

  return (
    <ArticleContent
      content={content}
    />
  );
}

export default ArticleContentStore;
