import type { Meta, StoryObj } from '@storybook/react';

import Square from '@/styles/assets/placeholder/1x1.png';
import _4x3 from '@/styles/assets/placeholder/4x3.png';
import _16x9 from '@/styles/assets/placeholder/16x9.png';

import Image from './Image';

import styles from './Image.stories.module.css';

const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
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
  src: _16x9,
  alt: 'Placeholder image',
  priority: false,
};

export const Playground: Story = {
  args: {
    ...defaultArgs,
  },
};

export const SquareImage: Story = {
  args: {
    ...defaultArgs,
    src: Square,
  },
};

export const _4x3Image: Story = {
  args: {
    ...defaultArgs,
    src: _4x3,
  },
};

export const _16x9Image: Story = {
  args: {
    ...defaultArgs,
    src: _16x9,
  },
};
