'use client';

import { memo } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';

import { useFocusable } from '@/hooks/useFocusable/useFocusable';

import styles from './Link.module.css';
import type { LinkProps } from './Link.d';

function Link({
  to,
  children,
  Icon = null,
  autoFocus = false,
  forwardedRef = null,
  ...rest
}: LinkProps) {
  const { ref: elementRef } = useFocusable(forwardedRef, { autoFocus });

  return (
    <NextLink
      href={to}
      className={styles.root}
      ref={elementRef}
      data-testid="link-component"
      {...rest}
    >
      {Icon && (
        <Image
          src={Icon}
          alt={`Icône de lien vers ${to}`}
          width={12}
          height={12}
          className={styles.icon}
        />
      )}
      {children}
    </NextLink>
  );
}

export default memo(Link);
