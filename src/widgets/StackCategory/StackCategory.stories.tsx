import type { Meta, StoryObj } from '@storybook/react';

import IconArrow from '@/styles/icons/arrows/arrow.svg';

import StackCategory from './StackCategory';

const meta: Meta<typeof StackCategory> = {
  title: 'Widgets/StackCategory',
  component: StackCategory,
};

export default meta;
type Story = StoryObj<typeof StackCategory>;

const defaultArgs = {
  stackCategory:
    {
      id: 1,
      name: 'Librairie',
      tags: [
        {
          id: 1,
          label: 'React',
          icon: IconArrow,
        },
        {
          id: 2,
          label: 'Redux',
          icon: IconArrow,
        },
        {
          id: 3,
          label: 'Jest',
          icon: IconArrow,
        },
        {
          id: 4,
          label: 'Next.js',
          icon: IconArrow,
        },
      ],
    },
};

export const Playground: Story = {
  args: {
    ...defaultArgs,
  },
};

export const WithLongName: Story = {
  args: {
    ...defaultArgs,
    stackCategory: {
      ...defaultArgs.stackCategory,
      name: 'Duis adipisicing ipsum in exercitation ut tempor voluptate eiusmod adipisicing.',
    },
  },
};

export const WithLongTags: Story = {
  args: {
    ...defaultArgs,
    stackCategory: {
      ...defaultArgs.stackCategory,
      tags: [
        {
          id: 1,
          label: 'React',
          icon: IconArrow,
        },
        {
          id: 2,
          label: 'Redux',
          icon: IconArrow,
        },
        {
          id: 3,
          label: 'Jest',
          icon: IconArrow,
        },
        {
          id: 4,
          icon: IconArrow,
          label: 'Enzyme',
        },
        {
          id: 5,
          label: 'Webpack',
          icon: IconArrow,
        },
        {
          id: 6,
          label: 'Babel',
          icon: IconArrow,
        },
        {
          id: 7,
          label: 'ESLint',
          icon: IconArrow,
        },
        {
          id: 8,
          label: 'Prettier',
          icon: IconArrow,
        },
        {
          id: 9,
          label: 'TypeScript',
          icon: IconArrow,
        },
        {
          id: 10,
          label: 'Jest',
          icon: IconArrow,
        },
        {
          id: 11,
          label: 'Enzyme',
          icon: IconArrow,
        },
      ],
    },
  },
};
