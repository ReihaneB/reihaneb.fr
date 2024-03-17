
import { getGalleryList } from '@/api/getGalleryList';

import GalleryList from './GalleryList';

import { GalleryListStoreProps } from './GalleryList.d';

async function GalleryListStore({ id }: GalleryListStoreProps) {
  const galleries = await getGalleryList({ id });

  return (
    <GalleryList
      galleries={galleries}
    />
  );
}

export default GalleryListStore;
