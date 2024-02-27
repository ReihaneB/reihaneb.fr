import React, { memo } from 'react';

import styles from './Separator.module.css';
import type { SeparatorProps } from './Separator.d';

function Separator({
  text = '',
  ...rest
}: SeparatorProps) {
  const style = text ? (
    { '--separator-text': `"${text}"` } as React.CSSProperties
  ) : undefined;

  return (
    <hr
      className={styles.root}
      data-testid="separator-component"
      style={style}
      {...rest}
    />
  );
}

export default memo(Separator);
