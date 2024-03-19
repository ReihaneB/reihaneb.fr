import Separator from '@/components/Separator/Separator';

import ProjectHeader from '../ProjectHeader/ProjectHeader';

import type { ProjectsListProps } from './ProjectsList.d';
import styles from './ProjectsList.module.css';

function ProjectsList({
  projects,
}: ProjectsListProps) {
  return projects.map(project => (
    <>
      <div className={styles.separatorContainer}>
        <Separator text={project.id ? project.id.toString() : ''} />
      </div>
      <ProjectHeader
        project={project}
      />
    </>
  ));
}

export default ProjectsList;
