import type { Meta, StoryObj } from '@storybook/react';

import IconArrow from '@/styles/icons/arrows/arrow.svg';

import Footer from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Widgets/Footer',
  component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;

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
