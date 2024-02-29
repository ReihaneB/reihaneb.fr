import { ImageProps as NextImageProps } from 'next/image';

export interface ImageProps extends NextImageProps {
  id?: string | undefined;
  src: string;
  alt: string;
}
