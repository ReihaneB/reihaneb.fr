import NextLink from 'next/link';

import Link from '@/components/Link/Link';
import Image from '@/components/Image/Image';

import MainStack from '../MainStack/MainStack';

import styles from './ProjectHeader.module.css';
import type { ProjectHeaderProps } from './ProjectHeader.d';

function ProjectHeader({
  project,
  ...rest
}: ProjectHeaderProps) {
  return (
    <div
      className={styles.root}
      {...rest}
    >
      <div className={styles.titleContainer}>
        <h2>{project.title}</h2>
        <p>{project.jobTitle}</p>
      </div>
      <div className={styles.stackContainer}>
        <MainStack stack={project.stack} />
      </div>
      <div className={styles.linkContainer}>
        <Link
          to={project.url}
          color="secondary"
        >
          Voir le projet
        </Link>
      </div>
      <NextLink
        href={project.url}
        passHref
        className={styles.imageContainer}
      >
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          priority
        />
      </NextLink>
    </div>
  );
}

export default ProjectHeader;
