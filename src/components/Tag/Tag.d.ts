import React from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface TagProps {
  children: React.ReactNode;
  Icon?: StaticImport | string | null;
  color?: string;
}
