import ArticleCard from '../ArticleCard/ArticleCard';

import type { ArticlesListProps } from './ArticlesList.d';
import styles from './ArticlesList.module.css';

function ArticlesList({
  articles,
}: ArticlesListProps) {
  return (
    <>
      <div className={styles.titleContainer}>
        <h2>Articles</h2>
        <p className={styles.description}>
          Découvrez mes articles sur des sujets variés,
          allant du développement front-end au développement back-end, en passant par des sujets plus généraux.
        </p>
      </div>
      <ul className={styles.root}>
        {articles.map(article => (
          <li key={article.id} className={styles.listItem}>
            <ArticleCard
              key={article.id}
              id={article.id}
              title={article.title}
              description={article.description}
              image={article.image}
              to={article.to}
              category={article.category}
              readTime={article.readTime}
              color={article.color}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ArticlesList;
