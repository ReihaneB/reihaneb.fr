import type { Meta, StoryObj } from '@storybook/react';

import _16x9 from '@/styles/assets/placeholder/_16x9.png';
import _4x3 from '@/styles/assets/placeholder/_4x3.png';
import _1x1 from '@/styles/assets/placeholder/_1x1.png';

import Image from './Image';

const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
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
    src: _1x1,
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
