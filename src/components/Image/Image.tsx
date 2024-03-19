import NextImage from 'next/image';

import styles from './Image.module.css';
import type { ImageProps } from './Image.d';

function Image({
  width = 0,
  height = 0,
  src,
  alt,
  ...rest
}: ImageProps) {
  return (
    <NextImage
      src={src}
      alt={alt}
      className={styles.image}
      width={width}
      height={height}
      {...rest}
    />
  );
}

export default Image;
