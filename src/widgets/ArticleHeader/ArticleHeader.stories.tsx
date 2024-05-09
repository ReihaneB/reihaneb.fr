import type { Meta, StoryObj } from '@storybook/react';

import _16x9 from '@/styles/assets/placeholder/_16x9.png';

import ArticleHeader from './ArticleHeader';

const meta: Meta<typeof ArticleHeader> = {
  title: 'Widgets/ArticleHeader',
  component: ArticleHeader,
};

export default meta;
type Story = StoryObj<typeof ArticleHeader>;

const defaultArgs = {
  title: 'Article title',
  image: {
    src: _16x9,
    alt: 'Article image',
    width: 800,
    height: 400,
  },
};

export const Playground: Story = {
  args: {
    ...defaultArgs,
  },
};

export const NoImage: Story = {
  args: {
    title: 'Article title',
    image: undefined,
  },
};

export const LongTitle: Story = {
  args: {
    ...defaultArgs,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi id, lacinia orci. Sed nec metus nec justo lacinia ultricies. Nullam non',
  },
};

export const LongTitleNoImage: Story = {
  args: {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi id, lacinia orci. Sed nec metus nec justo lacinia ultricies. Nullam non',
    image: undefined,
  },
};
