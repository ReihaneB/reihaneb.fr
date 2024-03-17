import { StaticImageData } from 'next/image';

import type { Stack } from '@/widgets/MainStack/MainStack.d';

export interface Project {
  title: string;
  jobTitle: string;
  stack: Stack[];
  url: string;
  image: {
    url: StaticImageData | string;
    alt: string;
  };
}

export interface ProjectHeaderProps {
  project: Project;
}

export interface ProjectHeaderStoreProps {
  id: string;
}
