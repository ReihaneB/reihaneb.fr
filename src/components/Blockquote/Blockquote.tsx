import { BlockquoteProps } from './Blockquote.d';
import styles from './Blockquote.module.css';

function Blockquote({
  children,
  ...rest
}: BlockquoteProps) {
  return (
    <blockquote
      className={styles.root}
      {...rest}
    >
      <p className={styles.text}>
        {children}
      </p>
    </blockquote>
  );
}

export default Blockquote;
