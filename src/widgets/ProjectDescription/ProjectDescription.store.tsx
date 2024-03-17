import { getProjectDescription } from '@/api/getProjectDescription';

import ProjectDescription from './ProjectDescription';

import { ProjectDescriptionStoreProps } from './ProjectDescription.d';

async function ProjectDescriptionStore({ id }: ProjectDescriptionStoreProps) {
  const project = await getProjectDescription({ id });

  return (
    <ProjectDescription
      companyDescription={project.companyDescription}
      objective={project.objective}
    />
  );
}

export default ProjectDescriptionStore;
