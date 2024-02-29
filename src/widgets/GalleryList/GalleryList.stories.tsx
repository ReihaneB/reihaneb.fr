import type { Meta, StoryObj } from '@storybook/react';

import GalleryList from './GalleryList';

import styles from './GalleryList.stories.module.css';

const meta: Meta<typeof GalleryList> = {
  title: 'Widgets/GalleryList',
  component: GalleryList,
  decorators: [
    Story => (
      <div className={styles.root}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof GalleryList>;

const numberOfImages = [
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

const createImages = (nbImages: number) => {
  const images = [];
  for (let i = 0; i < nbImages; i++) {
    images.push({
      id: (i + 1).toString(),
      src: 'https://via.placeholder.com/1920x1080',
      alt: 'Placeholder image',
    });
  }
  return images;
};

const createGalleries = (nbGalleries: number) => {
  const galleries = [];
  for (let i = 0; i < nbGalleries; i++) {
    galleries.push({
      id: i + 1,
      name: `Gallery ${i}`,
      images: createImages(generateRandomly(numberOfImages, i)),
    });
  }
  return galleries;
};

const defaultArgs = {
  galleries: createGalleries(3),
};

export const Playground: Story = {
  args: {
    ...defaultArgs,
  },
};

export const _1Gallery: Story = {
  args: {
    galleries: createGalleries(1),
  },
};

export const _2Galleries: Story = {
  args: {
    galleries: createGalleries(2),
  },
};

export const _4Galleries: Story = {
  args: {
    galleries: createGalleries(4),
  },
};

export const _5Galleries: Story = {
  args: {
    galleries: createGalleries(5),
  },
};

export const _10Galleries: Story = {
  args: {
    galleries: createGalleries(10),
  },
};
