import Section from '@/components/Section/Section';
import ArticleContentStore from '@/widgets/ArticleContent/ArticleContent.store';
import ArticleHeaderStore from '@/widgets/ArticleHeader/ArticleHeader.store';

import type { ArticleProps } from './Article.d';
import styles from './Article.module.css';

// TODO: Add stories when upgrade to Storybook 8: https://storybook.js.org/blog/storybook-react-server-components/?ref=storybookblog.ghost.io
async function Article({
  params,
}: ArticleProps) {
  const { id } = params;

  return (
    <>
      <Section
        id="article-header"
        additionalClasses={styles.headerSection}
      >
        <ArticleHeaderStore id={id} />
      </Section>
      <Section
        id="article-content"
        additionalClasses={styles.contentSection}
      >
        <ArticleContentStore id={id} />
      </Section>
    </>
  );
}

export default Article;
