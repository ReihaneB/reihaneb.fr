import type { Meta, StoryObj } from '@storybook/react';

import IconArrow from '@/styles/icons/arrows/arrow.svg';
import _1x1 from '@/styles/assets/placeholder/_1x1.png';
import _16x9 from '@/styles/assets/placeholder/_16x9.png';
import _4x3 from '@/styles/assets/placeholder/_4x3.png';

import HeroHeader from './HeroHeader';

const meta: Meta<typeof HeroHeader> = {
  title: 'Widgets/HeroHeader',
  component: HeroHeader,
};

export default meta;
type Story = StoryObj<typeof HeroHeader>;

const defaultArgs = {
  name: 'John Doe',
  title: 'Software Engineer',
  description: {
    title: 'About me',
    content: 'I am a software engineer with a passion for web development.',
  },
  image: {
    src: _1x1,
    alt: 'John Doe',
  },
  socials: [
    {
      name: 'GitHub',
      url: '',
      icon: IconArrow,
    },
    {
      name: 'Twitter',
      url: '',
      icon: IconArrow,
    },
  ],
};

export const Playground: Story = {
  args: {
    ...defaultArgs,
  },
};

export const LongName: Story = {
  args: {
    ...defaultArgs,
    name: 'Magna aute ex ipsum fugiat velit sunt aliqua enim qui sint culpa sint.',
  },
};

export const LongTitle: Story = {
  args: {
    ...defaultArgs,
    title: 'Magna aute ex ipsum fugiat velit sunt aliqua enim qui sint culpa sint.',
  },
};

export const LongDescription: Story = {
  args: {
    ...defaultArgs,
    description: {
      title: 'Magna aute ex ipsum fugiat velit sunt aliqua enim qui sint culpa sint.',
      content: 'Enim ea labore excepteur excepteur est nostrud aliquip veniam ullamco. Elit incididunt aute dolor officia aute veniam amet pariatur veniam laborum. Eu est tempor amet nulla non excepteur occaecat non cupidatat. Ut aliquip elit dolore culpa dolore eiusmod excepteur tempor veniam id adipisicing ipsum commodo. Dolor sit eu magna duis veniam do laboris laboris esse excepteur officia enim pariatur. Deserunt veniam aliqua in laborum. Cupidatat occaecat laboris incididunt consectetur do est eu cillum non elit fugiat qui mollit.',
    },
  },
};

export const LongData: Story = {
  args: {
    ...defaultArgs,
    name: 'Magna aute ex ipsum fugiat velit sunt aliqua enim qui sint culpa sint.',
    title: 'Magna aute ex ipsum fugiat velit sunt aliqua enim qui sint culpa sint.',
    description: {
      title: 'Velit consequat sint consectetur tempor irure eu. Anim minim aliquip mollit nisi pariatur ea do aute duis sunt exercitation laboris culpa. Excepteur ut ad est laborum et laboris. Laborum sunt ad reprehenderit sunt ullamco esse voluptate reprehenderit. Sunt anim Lorem enim nisi adipisicing aute minim voluptate nostrud labore. Ullamco eu pariatur eu esse aute occaecat ex nostrud aliqua ex nulla consequat non.',
      content: 'Enim ea labore excepteur excepteur est nostrud aliquip veniam ullamco. Elit incididunt aute dolor officia aute veniam amet pariatur veniam laborum. Eu est tempor amet nulla non excepteur occaecat non cupidatat. Ut aliquip elit dolore culpa dolore eiusmod excepteur tempor veniam id adipisicing ipsum commodo. Dolor sit eu magna duis veniam do laboris laboris esse excepteur officia enim pariatur. Deserunt veniam aliqua in laborum. Cupidatat occaecat laboris incididunt consectetur do est eu cillum non elit fugiat qui mollit.',
    },
  },
};

export const _1x1Image: Story = {
  args: {
    ...defaultArgs,
    image: {
      src: _1x1,
      alt: 'John Doe',
    },
  },
};

export const _16x9Image: Story = {
  args: {
    ...defaultArgs,
    image: {
      src: _16x9,
      alt: 'John Doe',
    },
  },
};

export const _4x3Image: Story = {
  args: {
    ...defaultArgs,
    image: {
      src: _4x3,
      alt: 'John Doe',
    },
  },
};
