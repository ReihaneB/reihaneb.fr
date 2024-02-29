import { ImageProps as NextImageProps, StaticImageData } from 'next/image';

export interface ImageProps extends NextImageProps {
  src: StaticImageData;
  alt: string;
}
