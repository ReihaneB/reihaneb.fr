import type { Meta, StoryObj } from '@storybook/react';

import IconArrow from '@/styles/icons/arrows/arrow.svg';

import StackOverview from './StackOverview';

const meta: Meta<typeof StackOverview> = {
  title: 'Widgets/StackOverview',
  component: StackOverview,
};

export default meta;
type Story = StoryObj<typeof StackOverview>;

const numberOfTags = [
  2,
  3,
  6,
  1,
  4,
  5,
  10,
  9,
];

const generateRandomly = (array: number[], index: number) => array[index % array.length];

const createTags = (nbTags: number) => {
  const tags = [];
  for (let i = 0; i < nbTags; i++) {
    tags.push({
      id: i + 1,
      label: `Tag ${i}`,
      icon: IconArrow,
    });
  }
  return tags;
};

const createCategories = (nbCategories: number) => {
  const categories = [];
  for (let i = 0; i < nbCategories; i++) {
    categories.push({
      id: i + 1,
      name: `Librairie ${i}`,
      tags: createTags(generateRandomly(numberOfTags, i)),
    });
  }
  return categories;
};

const defaultArgs = {
  id: 1,
  name: 'Front-end',
  stackCategory: createCategories(2),
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
      createCategories(1)[0],
    ],
  },
};

export const _1Category: Story = {
  name: 'One category',
  args: {
    ...defaultArgs,
    stackCategory: createCategories(1),
  },
};

export const _2Categories: Story = {
  name: 'Two categories',
  args: {
    ...defaultArgs,
    stackCategory: createCategories(2),
  },
};

export const _3Categories: Story = {
  name: 'Three categories',
  args: {
    ...defaultArgs,
    stackCategory: createCategories(3),
  },
};

export const _4Categories: Story = {
  name: 'Four categories',
  args: {
    ...defaultArgs,
    stackCategory: createCategories(4),
  },
};

export const _5Categories: Story = {
  name: 'Five categories',
  args: {
    ...defaultArgs,
    stackCategory: createCategories(5),
  },
};

export const _10Categories: Story = {
  name: 'Ten categories',
  args: {
    ...defaultArgs,
    stackCategory: createCategories(10),
  },
};
