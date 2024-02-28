import { ImageProps as NextImageProps } from 'next/image';

export interface ImageProps extends NextImageProps {
  id?: number;
  src: string;
  alt: string;
}
