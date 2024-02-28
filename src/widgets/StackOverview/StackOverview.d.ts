import type { StackCategoryProps} from '@/widgets/StackCategory/StackCategory.d';

export interface StackOverviewProps {
  stackOverview: {
    id: number;
    name: string;
    stackCategory: StackCategoryProps['stackCategory'][]
  }
}
