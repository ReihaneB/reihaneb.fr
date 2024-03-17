import type { Meta, StoryObj } from '@storybook/react';

import _16x9 from '@/styles/assets/placeholder/_16x9.png';
import _4x3 from '@/styles/assets/placeholder/_4x3.png';
import _1x1 from '@/styles/assets/placeholder/_1x1.png';

import GalleryList from './GalleryList';

const meta: Meta<typeof GalleryList> = {
  title: 'Widgets/GalleryList',
  component: GalleryList,
};

export default meta;
type Story = StoryObj<typeof GalleryList>;

const defaultArgs = {
  galleries: [
    {
      id: 1,
      name: 'Gallery 1',
      images: [
        {
          id: '1',
          src: _1x1,
          alt: 'Placeholder image',
        },
        {
          id: '2',
          src: _16x9,
          alt: 'Placeholder image',
        },
      ],
    },
    {
      id: 2,
      name: 'Gallery 2',
      images: [
        {
          id: '1',
          src: _16x9,
          alt: 'Placeholder image',
        },
        {
          id: '2',
          src: _16x9,
          alt: 'Placeholder image',
        },
        {
          id: '3',
          src: _4x3,
          alt: 'Placeholder image',
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

export const _1Gallery: Story = {
  args: {
    galleries: [
      {
        id: 1,
        name: 'Gallery 1',
        images: [
          {
            id: '1',
            src: _16x9,
            alt: 'Placeholder image',
          },
          {
            id: '2',
            src: _16x9,
            alt: 'Placeholder image',
          },
        ],
      },
    ],
  },
};

export const _2Galleries: Story = {
  args: {
    galleries: [
      {
        id: 1,
        name: 'Gallery 1',
        images: [
          {
            id: '1',
            src: _16x9,
            alt: 'Placeholder image',
          },
          {
            id: '2',
            src: _16x9,
            alt: 'Placeholder image',
          },
        ],
      },
      {
        id: 2,
        name: 'Gallery 2',
        images: [
          {
            id: '1',
            src: _16x9,
            alt: 'Placeholder image',
          },
          {
            id: '2',
            src: _16x9,
            alt: 'Placeholder image',
          },
          {
            id: '3',
            src: _4x3,
            alt: 'Placeholder image',
          },
        ],
      },
    ],
  },
};

export const _3Galleries: Story = {
  args: {
    galleries: [
      {
        id: 1,
        name: 'Gallery 1',
        images: [
          {
            id: '1',
            src: _16x9,
            alt: 'Placeholder image',
          },
          {
            id: '2',
            src: _16x9,
            alt: 'Placeholder image',
          },
        ],
      },
      {
        id: 2,
        name: 'Gallery 2',
        images: [
          {
            id: '1',
            src: _16x9,
            alt: 'Placeholder image',
          },
          {
            id: '2',
            src: _16x9,
            alt: 'Placeholder image',
          },
          {
            id: '3',
            src: _4x3,
            alt: 'Placeholder image',
          },
        ],
      },
      {
        id: 3,
        name: 'Gallery 3',
        images: [
          {
            id: '1',
            src: _16x9,
            alt: 'Placeholder image',
          },
          {
            id: '2',
            src: _16x9,
            alt: 'Placeholder image',
          },
          {
            id: '3',
            src: _4x3,
            alt: 'Placeholder image',
          },
          {
            id: '4',
            src: _1x1,
            alt: 'Placeholder image',
          },
        ],
      },
    ],
  },
};
