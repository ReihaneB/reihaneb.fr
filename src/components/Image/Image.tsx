import NextImage from 'next/image';

import styles from './Image.module.css';
import type { ImageProps } from './Image.d';

function Image({
  id,
  src,
  alt,
  ...rest
}: ImageProps) {
  return (
    <NextImage
      id={id}
      src={src}
      alt={alt}
      className={styles.image}
      width={0}
      height={0}
      {...rest}
    />
  );
}

export default Image;
