import type { Meta, StoryObj } from '@storybook/react';

import IconArrow from '@/styles/icons/arrows/arrow.svg';

import StackList from './StackList';

const meta: Meta<typeof StackList> = {
  title: 'Widgets/StackList',
  component: StackList,
};

export default meta;
type Story = StoryObj<typeof StackList>;

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

const createOverviews = (nbOverviews: number) => {
  const overviews = [];
  for (let i = 0; i < nbOverviews; i++) {
    overviews.push({
      id: i + 1,
      name: `Stack ${i}`,
      stackCategory: createCategories(generateRandomly(numberOfTags, i)),
    });
  }
  return overviews;
};

const defaultArgs = {
  stack: createOverviews(3),
};

export const Playground: Story = {
  args: {
    ...defaultArgs,
  },
};

export const _1Overview: Story = {
  args: {
    stack: createOverviews(1),
  },
};

export const _2Overviews: Story = {
  args: {
    stack: createOverviews(2),
  },
};

export const _3Overviews: Story = {
  args: {
    stack: createOverviews(3),
  },
};

export const _4Overviews: Story = {
  args: {
    stack: createOverviews(4),
  },
};

export const _5Overviews: Story = {
  args: {
    stack: createOverviews(5),
  },
};

export const _10Overviews: Story = {
  args: {
    stack: createOverviews(10),
  },
};
