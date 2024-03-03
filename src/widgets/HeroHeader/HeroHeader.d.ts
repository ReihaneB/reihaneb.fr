import type { ImageProps } from '@/components/Image/Image.d';
import type { Social } from '@/widgets/Socials/Socials.d';

export interface HeroHeaderProps {
  name: string;
  title: string;
  description: {
    title: string;
    content: string;
  }
  image: ImageProps;
  socials: Social[];
}
