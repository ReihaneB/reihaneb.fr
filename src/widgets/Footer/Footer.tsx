import NextLink from 'next/link';

import Socials from '../Socials/Socials';

import styles from './Footer.module.css';
import type { FooterProps } from './Footer.d';

function Footer({
  socials,
  ...rest
}: FooterProps) {
  return (
    <footer
      className={styles.root}
      {...rest}
    >
      <p className={styles.text}>
        Designé et développé par
      </p>
      <NextLink
        href="/"
        className={styles.logo}
      >
        reihane b.
      </NextLink>
      <Socials socials={socials} />
    </footer>
  );
}

export default Footer;
