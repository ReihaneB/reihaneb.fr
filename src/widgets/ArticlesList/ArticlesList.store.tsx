import { getBlogArticlesList } from '@/api/getBlogArticlesList';

import ArticlesList from './ArticlesList';

async function ArticlesListStore() {
  const articles = await getBlogArticlesList();

  return (
    <ArticlesList
      articles={articles}
    />
  );
}

export default ArticlesListStore;
