import type { ImageProps } from '@/components/Image/Image.d';

interface ImageWithId extends ImageProps {
  id: number;
}

export interface GalleryProps {
  id?: number;
  name: string;
  description?: string;
  images: ImageWithId[];
}
