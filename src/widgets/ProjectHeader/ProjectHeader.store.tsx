import { getProjectHeader } from '@/api/getProjectHeader';

import ProjectHeader from './ProjectHeader';

import { ProjectHeaderStoreProps } from './ProjectHeader.d';

async function ProjectHeaderStore({ id }: ProjectHeaderStoreProps) {
  const project = await getProjectHeader({ id });

  return (
    <ProjectHeader
      project={project}
    />
  );
}

export default ProjectHeaderStore;
