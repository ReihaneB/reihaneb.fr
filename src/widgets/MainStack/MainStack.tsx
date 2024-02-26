import Tag from '@/components/Tag/Tag';

import type { MainStackProps } from './MainStack.d';
import styles from './MainStack.module.css';

function MainStack({
  stack,
  ...rest
}: MainStackProps) {
  const maxElementsDisplayed = 4;

  return (
    <ul
      className={styles.root}
      {...rest}
    >
      {stack
        .slice(0, maxElementsDisplayed)
        .map(element => (
          <li key={element.name}>
            <Tag>
              {element.name}
            </Tag>
          </li>
        ))}
    </ul>
  );
}

export default MainStack;
