import React from 'react';

interface LinkProps {
  to: string;
  children: React.ReactNode;
  Icon?: React.ElementType | null;
  autoFocus?: boolean;
  forwardedRef?: React.RefObject<HTMLButtonElement> | null;
}
