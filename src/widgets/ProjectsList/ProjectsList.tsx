import Separator from '@/components/Separator/Separator';

import ProjectHeader from '../ProjectHeader/ProjectHeader';

import type { ProjectsListProps } from './ProjectsList.d';
import styles from './ProjectsList.module.css';

function ProjectsList({
  projects,
}: ProjectsListProps) {
  return (
    <>
      <div className={styles.titleContainer}>
        <h2>Works</h2>
        <p className={styles.description}>
          Vous retrouverez ici mes projets professionnels, réalisés pour des clients ou des employeurs.
        </p>
      </div>
      {projects.map((project, idx) => (
        <>
          <div className={styles.separatorContainer}>
            <Separator text={(idx + 1).toString()} />
          </div>
          <ProjectHeader
            project={project}
          />
        </>
      ))}
    </>
  );
}

export default ProjectsList;
