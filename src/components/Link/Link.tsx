'use client';

import { memo } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';

import { useFocusable } from '@/hooks/useFocusable/useFocusable';

import styles from './Link.module.css';
import type { LinkProps } from './Link.d';

function Link({
  to,
  color = 'primary',
  size = 'medium',
  rounded = false,
  children,
  Icon = null,
  autoFocus = false,
  forwardedRef = null,
  openInNewTab = false,
  fullWidth = false,
  ...rest
}: LinkProps) {
  const { ref: elementRef } = useFocusable(forwardedRef, { autoFocus });

  return (
    <NextLink
      href={to}
      className={
        classNames(styles.root, {
          [styles.primary]: color === 'primary',
          [styles.secondary]: color === 'secondary',
          [styles.small]: size === 'small',
          [styles.rounded]: rounded,
          [styles.fullWidth]: fullWidth,
        })
      }
      ref={elementRef}
      data-testid="link-component"
      target={openInNewTab ? '_blank' : '_self'}
      rel={openInNewTab ? 'noreferrer' : undefined}
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
