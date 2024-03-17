import { getStackList } from '@/api/getStackList';

import StackList from './StackList';

import { StackListStoreProps } from './StackList.d';


async function StackListStore({ id }: StackListStoreProps) {
  const stack = await getStackList({ id });

  return (
    <StackList
      stack={stack}
    />
  );
}

export default StackListStore;
