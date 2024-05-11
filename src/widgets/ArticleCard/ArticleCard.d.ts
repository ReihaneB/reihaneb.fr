import { ImageProps } from '@/components/Image/Image';

export interface ArticleCardProps {
  id: number;
  title: string;
  image: ImageProps;
  to: string;
  description: string;
  readTime: number;
  color: string;
  category: {
    title: string;
    color: string;
  };
}
