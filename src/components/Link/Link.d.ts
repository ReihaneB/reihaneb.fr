import React from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface LinkProps {
  to: string;
  color?: 'primary' | 'secondary' | 'transparent';
  size?: 'small' | 'medium';
  children: React.ReactNode;
  rounded?: boolean;
  Icon?: StaticImport | string | null;
  autoFocus?: boolean;
  forwardedRef?: React.RefObject<HTMLButtonElement> | null;
  openInNewTab?: boolean;
  fullWidth?: boolean;
}
