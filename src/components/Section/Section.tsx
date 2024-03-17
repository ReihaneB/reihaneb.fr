import type { SectionProps } from './Section.d';
import styles from './Section.module.css';

function Section({
  children,
  id,
  ...rest
}: SectionProps) {
  return (
    <section
      className={styles.root}
      id={id}
      {...rest}
    >
      {children}
    </section>
  );
}

export default Section;
