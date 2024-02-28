import StackCategory from '../StackCategory/StackCategory';

import type { StackOverviewProps } from './StackOverview.d';
import styles from './StackOverview.module.css';

function StackOverview({
  stackOverview,
}: StackOverviewProps) {
  return (
    <div>
      <h2 className={styles.name}>
        {stackOverview.name}
      </h2>
      <ul className={styles.stackCategory}>
        {stackOverview.stackCategory.map(stackCategory => (
          <li key={stackCategory.id}>
            <StackCategory
              stackCategory={stackCategory}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StackOverview;
