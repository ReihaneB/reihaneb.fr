import Link from '@/components/Link/Link';

import type { SocialsProps } from './Socials.d';
import styles from './Socials.module.css';

function Socials({
  socials,
  ...rest
}: SocialsProps) {
  return (
    <ul
      className={styles.root}
      {...rest}
    >
      {socials.map(social => (
        <li key={social.name}>
          <Link
            to={social.url}
            Icon={social.icon}
          >
            {social.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Socials;
