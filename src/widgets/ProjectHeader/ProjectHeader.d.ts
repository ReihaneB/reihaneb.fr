import type { Stack } from '@/widgets/MainStack/MainStack.d';

export interface Project {
  id: number;
  title: string;
  jobTitle: string;
  stack: Stack[];
  url: string;
  image: {
    url: string;
    alt: string;
  };
}

export interface ProjectHeaderProps {
  project: Project;
}
