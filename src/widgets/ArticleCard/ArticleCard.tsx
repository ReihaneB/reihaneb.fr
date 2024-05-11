import React from 'react';

import Image from '@/components/Image/Image';
import Link from '@/components/Link/Link';
import Tag from '@/components/Tag/Tag';
import routes from '@/utils/routes';

import styles from './ArticleCard.module.css';
import type { ArticleCardProps } from './ArticleCard.d';


function ArticleCard({
  id,
  title,
  description,
  readTime,
  category,
  color,
  image,
  to,
  ...rest
}: ArticleCardProps) {
  return (
    <article
      className={styles.root}
      style={{ '--article-card-color': color } as React.CSSProperties}
      {...rest}
    >
      <div className={styles.imageContainer}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          priority
        />
      </div>
      <div className={styles.content}>
        <div className={styles.tags}>
          <Tag
            color={category.color}
          >
            {category.title}
          </Tag>
          <Tag>
            {readTime}
            {' '}
            min.
          </Tag>
        </div>
        <h2 className={styles.title}>
          {title}
        </h2>
        <p className={styles.description}>
          {description}
        </p>
        <Link
          to={routes.ARTICLE_WITH_ID(to)}
          fullWidth
        >
          Continuer la lecture
        </Link>
      </div>
    </article>
  );
}

export default ArticleCard;
