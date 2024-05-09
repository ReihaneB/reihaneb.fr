import classNames from 'classnames';

import type { SectionProps } from './Section.d';
import styles from './Section.module.css';

function Section({
  children,
  id,
  additionalClasses,
  ...rest
}: SectionProps) {
  return (
    <section
      className={classNames(styles.root, additionalClasses)}
      id={id}
      {...rest}
    >
      {children}
    </section>
  );
}

export default Section;
