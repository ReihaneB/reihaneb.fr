import StackCategory from '../StackCategory/StackCategory';

import type { StackOverviewProps } from './StackOverview.d';
import styles from './StackOverview.module.css';

function StackOverview({
  name,
  stackCategory,
}: StackOverviewProps) {
  return (
    <>
      <h2 className={styles.name}>
        {name}
      </h2>
      <ul className={styles.stackCategory}>
        {stackCategory.map(({ id, name: categoryName, tags }) => (
          <li key={id}>
            <StackCategory
              name={categoryName}
              tags={tags}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default StackOverview;
