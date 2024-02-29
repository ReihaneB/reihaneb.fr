import { StaticImageData } from 'next/image';

import type { Stack } from '@/widgets/MainStack/MainStack.d';

export interface Project {
  id: number;
  title: string;
  jobTitle: string;
  stack: Stack[];
  url: string;
  image: {
    url: StaticImageData;
    alt: string;
  };
}

export interface ProjectHeaderProps {
  project: Project;
}
