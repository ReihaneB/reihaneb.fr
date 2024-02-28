import type { StackCategoryProps} from '@/widgets/StackCategory/StackCategory.d';

export interface StackOverviewProps {
  id?: number;
  name: string;
  stackCategory: StackCategoryProps[]
}
