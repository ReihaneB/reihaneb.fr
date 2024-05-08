import classNames from 'classnames';

import Link from '@/components/Link/Link';

import type { SocialsProps } from './Socials.d';
import styles from './Socials.module.css';

function Socials({
  socials,
  additionalClasses,
  ...rest
}: SocialsProps) {
  return (
    <ul
      className={classNames(styles.root, additionalClasses)}
      {...rest}
    >
      {socials.map(social => (
        <li key={social.name}>
          <Link
            rounded
            to={social.url}
            Icon={social.icon}
            openInNewTab
          >
            {social.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Socials;
