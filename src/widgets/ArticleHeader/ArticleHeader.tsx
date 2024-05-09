import { Fragment } from 'react';

import Image from '@/components/Image/Image';

import type { ArticleHeaderProps } from './ArticleHeader.d';
import styles from './ArticleHeader.module.css';

function ArticleHeader({
  title,
  image,
  ...rest
}: ArticleHeaderProps) {
  return (
    <Fragment {...rest}>
      <h1 className={styles.title}>
        {title}
      </h1>
      {image && (
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          priority
        />
      )}
    </Fragment>
  );
}

export default ArticleHeader;
