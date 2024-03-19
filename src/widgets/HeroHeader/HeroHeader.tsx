import Image from '@/components/Image/Image';

import Socials from '../Socials/Socials';

import type { HeroHeaderProps } from './HeroHeader.d';
import styles from './HeroHeader.module.css';

function HeroHeader({
  name,
  title,
  description,
  image,
  socials,
  ...rest
}: HeroHeaderProps) {
  return (
    <div
      className={styles.root}
      {...rest}
    >
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          {title}
        </h1>
        <h2 className={styles.name}>
          {name}
        </h2>
      </div>
      <div className={styles.image}>
        <Image
          width={image.width}
          height={image.height}
          src={image.src}
          alt={image.alt}
        />
      </div>
      <div className={styles.content}>
        <Socials
          additionalClasses={styles.socials}
          socials={socials}
        />
        <h3 className={styles.description}>
          {description.title}
        </h3>
        <p>{description.content}</p>
      </div>
    </div>
  );
}

export default HeroHeader;
