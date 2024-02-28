import type { ImageProps } from '@/components/Image/Image.d';

export interface GalleryProps {
  id?: number;
  name: string;
  images: ImageProps[];
}
