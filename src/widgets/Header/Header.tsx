import NextLink from 'next/link';

import styles from './Header.module.css';

function Header({
  ...rest
}) {
  return (
    <header
      className={styles.root}
      {...rest}
    >
      <NextLink
        href="/"
        className={styles.logo}
      >
        rb.
      </NextLink>
    </header>
  );
}

export default Header;
