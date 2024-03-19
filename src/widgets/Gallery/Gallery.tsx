import Image from '@/components/Image/Image';

import type { GalleryProps } from './Gallery.d';
import styles from './Gallery.module.css';

function Gallery({
  name,
  images,
}: GalleryProps) {
  return (
    <>
      <h2 className={styles.name}>
        {name}
      </h2>
      <ul className={styles.images}>
        {images.map(({
          id,
          width,
          height,
          src,
          alt,
        }) => (
          <li key={id}>
            <Image
              width={width}
              height={height}
              src={src}
              alt={alt}
              priority
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Gallery;
