import Separator from '@/components/Separator/Separator';

import Gallery from '../Gallery/Gallery';

import type { GalleryListProps } from './GalleryList.d';
import styles from './GalleryList.module.css';

function GalleryList({
  galleries,
}: GalleryListProps) {
  return (
    <>
      <div className={styles.separatorContainer}>
        <Separator text="Projets majeurs" />
      </div>
      <ul className={styles.galleryList}>
        {galleries.map(({ id, name, description, images }) => (
          <li key={id}>
            <Gallery
              name={name}
              images={images}
              description={description}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default GalleryList;
