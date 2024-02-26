import type { Meta, StoryObj } from '@storybook/react';

import IconArrow from '@/styles/icons/arrows/arrow.svg';

import Socials from './Socials';

const meta: Meta<typeof Socials> = {
  title: 'Widgets/Socials',
  component: Socials,
};

export default meta;
type Story = StoryObj<typeof Socials>;

const defaultArgs = {
  socials: [
    {
      icon: IconArrow,
      name: 'Facebook',
      url: 'https://facebook.com',
    },
    {
      icon: IconArrow,
      name: 'Twitter',
      url: 'https://twitter.com',
    },
    {
      icon: IconArrow,
      name: 'Instagram',
      url: 'https://instagram.com',
    },
  ],
};

export const Playground: Story = {
  args: {
    ...defaultArgs,
  },
};

export const WithIcons: Story = {
  args: {
    socials: [
      {
        icon: IconArrow,
        name: 'Facebook',
        url: 'https://facebook.com',
      },
      {
        icon: IconArrow,
        name: 'Twitter',
        url: 'https://twitter.com',
      },
      {
        icon: IconArrow,
        name: 'Instagram',
        url: 'https://instagram.com',
      },
    ],
  },
};

export const Single: Story = {
  args: {
    socials: [
      {
        icon: IconArrow,
        name: 'Facebook',
        url: 'https://facebook.com',
      },
    ],
  },
};

export const Multiple: Story = {
  args: {
    socials: [
      {
        icon: IconArrow,
        name: 'Facebook',
        url: 'https://facebook.com',
      },
      {
        icon: IconArrow,
        name: 'Twitter',
        url: 'https://twitter.com',
      },
      {
        icon: IconArrow,
        name: 'Instagram',
        url: 'https://instagram.com',
      },
    ],
  },
};
