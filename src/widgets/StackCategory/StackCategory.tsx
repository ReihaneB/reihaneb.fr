import Tag from '@/components/Tag/Tag';

import type { StackCategoryProps } from './StackCategory.d';
import styles from './StackCategory.module.css';

function StackCategory({
  stackCategory,
}: StackCategoryProps) {
  return (
    <div>
      <h3 className={styles.name}>
        {stackCategory.name}
      </h3>
      <ul className={styles.tags}>
        {stackCategory.tags.map(tag => (
          <li key={tag.id}>
            <Tag Icon={tag.icon}>
              {tag.label}
            </Tag>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StackCategory;
