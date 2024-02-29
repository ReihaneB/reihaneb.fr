import { ImageProps as NextImageProps, StaticImageData } from 'next/image';

export interface ImageProps extends NextImageProps {
  id?: string | undefined;
  src: StaticImageData;
  alt: string;
}
