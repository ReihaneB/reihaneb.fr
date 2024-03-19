import type { Stack } from '@/widgets/MainStack/MainStack.d';
import { ImageProps } from '@/components/Image/Image';

export interface Project {
  id?: number;
  title: string;
  jobTitle: string;
  stack: Stack[];
  url: string;
  image: ImageProps;
}

export interface ProjectHeaderProps {
  project: Project;
}

export interface ProjectHeaderStoreProps {
  id: string;
}
