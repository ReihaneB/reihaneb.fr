import Tag from '@/components/Tag/Tag';

import type { StackCategoryProps } from './StackCategory.d';
import styles from './StackCategory.module.css';

function StackCategory({
  name,
  tags,
}: StackCategoryProps) {
  return (
    <>
      <h3 className={styles.name}>
        {name}
      </h3>
      <ul className={styles.tags}>
        {tags.map(({ id, label, icon }) => (
          <li key={id}>
            <Tag Icon={icon}>
              {label}
            </Tag>
          </li>
        ))}
      </ul>
    </>
  );
}

export default StackCategory;
