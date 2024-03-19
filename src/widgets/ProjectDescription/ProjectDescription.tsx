import Image from '@/components/Image/Image';

import CompanyDescription from '../CompanyDescription/CompanyDescription';
import ObjectiveDescription from '../ObjectiveDescription/ObjectiveDescription';

import type { ProjectDescriptionProps } from './ProjectDescription.d';
import styles from './ProjectDescription.module.css';

function ProjectDescription({
  companyDescription,
  objective,
  ...rest
}: ProjectDescriptionProps) {
  return (
    <div
      className={styles.root}
      {...rest}
    >
      <div className={styles.company}>
        <CompanyDescription description={companyDescription} />
      </div>
      <div className={styles.objective}>
        <ObjectiveDescription
          title={objective.title}
          description={objective.description}
        />
      </div>
      <div className={styles.image}>
        <Image
          width={objective.image.width}
          height={objective.image.height}
          src={objective.image.src}
          alt={objective.image.alt}
        />
      </div>
    </div>
  );
}

export default ProjectDescription;
