import type { Meta, StoryObj } from '@storybook/react';

import IconArrow from '@/styles/icons/arrows/arrow.svg';

import StackOverview from './StackOverview';

const meta: Meta<typeof StackOverview> = {
  title: 'Widgets/StackOverview',
  component: StackOverview,
};

export default meta;
type Story = StoryObj<typeof StackOverview>;

const defaultArgs = {
  id: 1,
  name: 'Front-end',
  stackCategory: [
    {
      id: 1,
      name: 'Librairie 1',
      tags: [
        {
          id: 1,
          label: 'React',
          icon: IconArrow,
        },
        {
          id: 2,
          label: 'TypeScript',
          icon: IconArrow,
        },
      ],
    },
    {
      id: 2,
      name: 'Librairie 2',
      tags: [
        {
          id: 3,
          label: 'Redux',
          icon: IconArrow,
        },
        {
          id: 4,
          label: 'Jest',
          icon: IconArrow,
        },
        {
          id: 5,
          label: 'Testing Library',
          icon: IconArrow,
        },
      ],
    },
  ],
};

export const Playground: Story = {
  args: {
    ...defaultArgs,
  },
};

export const WithLongName: Story = {
  args: {
    ...defaultArgs,
    name: 'Duis adipisicing ipsum in exercitation ut tempor voluptate eiusmod adipisicing.',
  },
};

export const CategoryLonger: Story = {
  name: 'Category name is longer than tag width',
  args: {
    ...defaultArgs,
    stackCategory: [
      {
        id: 1,
        name: 'Quis est dolore magna fugiat laborum eiusmod in exercitation labore consectetur sit fugiat.',
        tags: [
          {
            id: 1,
            label: 'React',
            icon: IconArrow,
          },
        ],
      },
      {
        id: 2,
        name: 'Librairie 2',
        tags: [
          {
            id: 3,
            label: 'Redux',
            icon: IconArrow,
          },
        ],
      },
    ],
  },
};

export const _1Category: Story = {
  name: 'One category',
  args: {
    ...defaultArgs,
    stackCategory: [
      {
        id: 1,
        name: 'Librairie 1',
        tags: [
          {
            id: 1,
            label: 'React',
            icon: IconArrow,
          },
          {
            id: 2,
            label: 'TypeScript',
            icon: IconArrow,
          },
          {
            id: 3,
            label: 'Redux',
            icon: IconArrow,
          },
          {
            id: 4,
            label: 'Jest',
            icon: IconArrow,
          },
          {
            id: 5,
            label: 'Testing Library',
            icon: IconArrow,
          },
        ],
      },
    ],
  },
};

export const _2Categories: Story = {
  name: 'Two categories',
  args: {
    ...defaultArgs,
    stackCategory: [
      {
        id: 1,
        name: 'Librairie 1',
        tags: [
          {
            id: 1,
            label: 'React',
            icon: IconArrow,
          },
          {
            id: 2,
            label: 'TypeScript',
            icon: IconArrow,
          },
        ],
      },
      {
        id: 2,
        name: 'Librairie 2',
        tags: [
          {
            id: 3,
            label: 'Redux',
            icon: IconArrow,
          },
          {
            id: 4,
            label: 'Jest',
            icon: IconArrow,
          },
          {
            id: 5,
            label: 'Testing Library',
            icon: IconArrow,
          },
        ],
      },
    ],
  },
};

export const _3Categories: Story = {
  name: 'Three categories',
  args: {
    ...defaultArgs,
    stackCategory: [
      {
        id: 1,
        name: 'Librairie 1',
        tags: [
          {
            id: 1,
            label: 'React',
            icon: IconArrow,
          },
          {
            id: 2,
            label: 'TypeScript',
            icon: IconArrow,
          },
        ],
      },
      {
        id: 2,
        name: 'Librairie 2',
        tags: [
          {
            id: 3,
            label: 'Redux',
            icon: IconArrow,
          },
          {
            id: 4,
            label: 'Jest',
            icon: IconArrow,
          },
          {
            id: 5,
            label: 'Testing Library',
            icon: IconArrow,
          },
        ],
      },
      {
        id: 3,
        name: 'Librairie 3',
        tags: [
          {
            id: 6,
            label: 'React Native',
            icon: IconArrow,
          },
          {
            id: 7,
            label: 'Expo',
            icon: IconArrow,
          },
        ],
      },
    ],
  },
};

export const _4Categories: Story = {
  name: 'Four categories',
  args: {
    ...defaultArgs,
    stackCategory: [
      {
        id: 1,
        name: 'Librairie 1',
        tags: [
          {
            id: 1,
            label: 'React',
            icon: IconArrow,
          },
          {
            id: 2,
            label: 'TypeScript',
            icon: IconArrow,
          },
        ],
      },
      {
        id: 2,
        name: 'Librairie 2',
        tags: [
          {
            id: 3,
            label: 'Redux',
            icon: IconArrow,
          },
          {
            id: 4,
            label: 'Jest',
            icon: IconArrow,
          },
          {
            id: 5,
            label: 'Testing Library',
            icon: IconArrow,
          },
        ],
      },
      {
        id: 3,
        name: 'Librairie 3',
        tags: [
          {
            id: 6,
            label: 'React Native',
            icon: IconArrow,
          },
          {
            id: 7,
            label: 'Expo',
            icon: IconArrow,
          },
        ],
      },
      {
        id: 4,
        name: 'Librairie 4',
        tags: [
          {
            id: 8,
            label: 'Next.js',
            icon: IconArrow,
          },
          {
            id: 9,
            label: 'Gatsby',
            icon: IconArrow,
          },
        ],
      },
    ],
  },
};
