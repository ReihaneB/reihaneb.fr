import { memo } from 'react';
import Image from 'next/image';

import styles from './Tag.module.css';
import type { TagProps } from './Tag.d';

function Tag({
  children,
  Icon = null,
  ...rest
}: TagProps) {
  return (
    <div
      className={styles.rootStyle}
      data-testid="tag-component"
      tabIndex={-1}
      {...rest}
    >
      {Icon && (
        <Image
          src={Icon}
          alt={`Icône de ${children}`}
          width={12}
          height={12}
          className={styles.icon}
        />
      )}
      {children}
    </div>
  );
}

export default memo(Tag);
