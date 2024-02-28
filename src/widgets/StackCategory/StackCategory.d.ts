import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface tags {
  id: number;
  label: string;
  icon: StaticImport | null;
}

interface category {
  id: number;
  name: string;
  tags: tags[];
}

export interface StackCategoryProps {
  stackCategory: category;
}
