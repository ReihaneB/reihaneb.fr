import { getBlogArticle } from '@/api/getBlogArticle';

import ArticleHeader from './ArticleHeader';

import type { ArticleHeaderStoreProps } from './ArticleHeader.d';

async function ArticleHeaderStore({ id }: ArticleHeaderStoreProps) {
  const { title, image } = await getBlogArticle({ id });

  return (
    <ArticleHeader
      title={title}
      image={image}
    />
  );
}

export default ArticleHeaderStore;
