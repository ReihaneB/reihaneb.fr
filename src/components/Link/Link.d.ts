import React from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface LinkProps {
  to: string;
  children: React.ReactNode;
  Icon?: StaticImport | string | null;
  autoFocus?: boolean;
  forwardedRef?: React.RefObject<HTMLButtonElement> | null;
}
