import { ListProps } from './List.d';
import styles from './List.module.css';

function List({
  children,
  type = 'unordered',
  ...rest
}: ListProps) {
  const Tag = type === 'ordered' ? 'ol' : 'ul';
  return (
    <Tag
      className={styles.root}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default List;
