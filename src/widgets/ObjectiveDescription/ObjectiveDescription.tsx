import NextImage from 'next/image';

import IconGoal from '@/styles/icons/meta/goal.svg';

import type { ObjectiveDescriptionProps } from './ObjectiveDescription.d';
import styles from './ObjectiveDescription.module.css';


function ObjectiveDescription({
  title,
  description,
  ...rest
}: ObjectiveDescriptionProps) {
  return (
    <div
      className={styles.root}
      {...rest}
    >
      <div className={styles.header}>
        <NextImage
          src={IconGoal}
          alt="Un icône de cible pour exprimer l'objectif du projet."
          width={24}
          height={24}
          className={styles.icon}
        />
        <h2>L'objectif</h2>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>
          {title}
        </h3>
        <p className={styles.description}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default ObjectiveDescription;
