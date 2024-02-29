import type { Meta, StoryObj } from '@storybook/react';

import Square from '@/styles/assets/placeholder/1x1.png';
import _4x3 from '@/styles/assets/placeholder/4x3.png';
import _16x9 from '@/styles/assets/placeholder/16x9.png';

import Gallery from './Gallery';

import styles from './Gallery.stories.module.css';

const meta: Meta<typeof Gallery> = {
  title: 'Widgets/Gallery',
  component: Gallery,
  decorators: [
    Story => (
      <div className={styles.root}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Image>;

const defaultArgs = {
  name: 'Gallery',
  images: [
    {
      id: 1,
      src: _16x9,
      alt: 'Placeholder image',
    },
  ],
};

export const Playground: Story = {
  args: {
    ...defaultArgs,
  },
};

export const SquareImage: Story = {
  args: {
    ...defaultArgs,
    images: [
      {
        id: 1,
        src: Square,
        alt: 'Placeholder image',
      },
    ],
  },
};

export const _4x3Image: Story = {
  args: {
    ...defaultArgs,
    images: [
      {
        id: 1,
        src: _4x3,
        alt: 'Placeholder image',
      },
    ],
  },
};

export const _16x9Image: Story = {
  args: {
    ...defaultArgs,
    images: [
      {
        id: 1,
        src: _16x9,
        alt: 'Placeholder image',
      },
    ],
  },
};

export const SingleImage: Story = {
  args: {
    ...defaultArgs,
    images: [
      {
        id: 1,
        src: _16x9,
        alt: 'Placeholder image',
      },
    ],
  },
};

export const MultipleImages: Story = {
  args: {
    ...defaultArgs,
    images: [
      {
        id: 1,
        src: _16x9,
        alt: 'Placeholder image',
      },
      {
        id: 2,
        src: _16x9,
        alt: 'Placeholder image',
      },
      {
        id: 3,
        src: _16x9,
        alt: 'Placeholder image',
      },
    ],
  },
};

export const LongName: Story = {
  args: {
    ...defaultArgs,
    name: 'Gallery with a really long name that should not be truncated',
  },
};

export const MultipleFormats: Story = {
  name: 'Multiple formats (1:1, 4:3, 16:9)',
  args: {
    ...defaultArgs,
    images: [
      {
        id: 1,
        src: Square,
        alt: 'Placeholder image',
      },
      {
        id: 2,
        src: _4x3,
        alt: 'Placeholder image',
      },
      {
        id: 3,
        src: _16x9,
        alt: 'Placeholder image',
      },
    ],
  },
};
