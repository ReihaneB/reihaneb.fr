import { getProjectsList } from '@/api/getProjectsList';

import ProjectsList from './ProjectsList';

async function ProjectsListStore() {
  const projects = await getProjectsList();

  return (
    <ProjectsList
      projects={projects}
    />
  );
}

export default ProjectsListStore;
