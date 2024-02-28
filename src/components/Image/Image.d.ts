import { ImageProps as NextImageProps } from 'next/image';

export interface ImageProps extends NextImageProps {
  src: string;
  alt: string;
}
