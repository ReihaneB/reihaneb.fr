import React from 'react';

export interface ListProps {
  children: React.ReactNode;
  type?: 'ordered' | 'unordered';
}
