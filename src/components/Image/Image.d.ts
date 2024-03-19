import { ImageProps as NextImageProps, StaticImageData } from 'next/image';

export interface ImageProps extends NextImageProps {
  width?: number;
  height?: number;
  src: StaticImageData | string;
  alt: string;
}
