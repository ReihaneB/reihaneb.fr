import type { Meta, StoryObj } from '@storybook/react';

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
  src: 'https://via.placeholder.com/1920x1080',
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
    src: 'https://via.placeholder.com/1080x1080',
  },
};

export const _4x3Image: Story = {
  args: {
    ...defaultArgs,
    src: 'https://via.placeholder.com/800x600',
  },
};

export const _16x9Image: Story = {
  args: {
    ...defaultArgs,
    src: 'https://via.placeholder.com/1280x720',
  },
};
