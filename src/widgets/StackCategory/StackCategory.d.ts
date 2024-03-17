import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface tags {
  id: number;
  label: string;
  icon: StaticImport | string | null;
}

export interface StackCategoryProps {
  id?: number;
  name: string;
  tags: tags[];
}
