import Separator from '@/components/Separator/Separator';

import StackOverview from '../StackOverview/StackOverview';

import type { StackListProps } from './StackList.d';
import styles from './StackList.module.css';

function StackList({
  stack,
}: StackListProps) {
  return (
    <>
      <div className={styles.separatorContainer}>
        <Separator text="Stack" />
      </div>
      <ul className={styles.stackList}>
        {stack.map(({ id, name, stackCategory }) => (
          <li key={id}>
            <StackOverview
              name={name}
              stackCategory={stackCategory}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default StackList;
