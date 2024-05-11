import type { Meta, StoryObj } from '@storybook/react';

import _1x1 from '@/styles/assets/placeholder/_1x1.png';
import _16x9 from '@/styles/assets/placeholder/_16x9.png';
import _4x3 from '@/styles/assets/placeholder/_4x3.png';

import ArticlesList from './ArticlesList';

const meta: Meta<typeof ArticlesList> = {
  title: 'Widgets/ArticlesList',
  component: ArticlesList,
};

export default meta;
type Story = StoryObj<typeof ArticlesList>;

const defaultArgs = {
  articles: [
    {
      id: 1,
      title: 'Est aliqua aute labore fugiat labore dolore.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, turpis vel luctus tincidunt, erat felis lacinia libero, nec accumsan nunc odio sit amet urna. Sed at urna auctor, tincidunt lacus vitae, ultricies nulla. Nullam euismod, justo sit amet tincidunt vehicula, nunc ex ultricies felis, nec lacinia nunc dolor vel libero. Nulla facilisi. Nullam eget nunc ac libero ultricies ultricies. Suspendisse potenti. Aliquam erat volutpat. Nullam nec ante auctor, ultricies elit ac, lacinia libero.',
      image: {
        src: _1x1,
        alt: 'Article image',
        width: 400,
        height: 400,
      },
      category: {
        title: 'CSS',
        color: '#ede4ff',
      },
      color: '#595a86',
      readTime: 5,
      to: 'first-article',
    },
    {
      id: 2,
      title: 'Mollit est ipsum adipisicing labore ipsum minim ad culpa esse exercitation.',
      description: 'Ac, lacinia libero.',
      image: {
        src: _4x3,
        alt: 'Article image',
        width: 400,
        height: 300,
      },
      category: {
        title: 'JavaScript',
        color: '#bdf6ff',
      },
      color: '#3d98a0',
      readTime: 5,
      to: 'second-article',
    },
    {
      id: 3,
      title: 'Ex eiusmod sint excepteur consequat sunt voluptate consectetur anim ullamco consectetur ad ea magna.',
      description: 'Cupidatat do officia sunt esse mollit. Pariatur in qui ut reprehenderit est dolor aute culpa enim exercitation mollit excepteur et exercitation.Id ut adipisicing ex consectetur veniam quis enim eiusmod labore ipsum laboris adipisicing ea est.',
      image: {
        src: _16x9,
        alt: 'Article image',
        width: 400,
        height: 225,
      },
      category: {
        title: 'JavaScript',
        color: '#bdf6ff',
      },
      color: '#3d98a0',
      readTime: 5,
      to: 'third-article',
    },
  ],
};

export const Playground: Story = {
  args: {
    ...defaultArgs,
  },
};

export const _1Article: Story = {
  args: {
    articles: defaultArgs.articles.slice(0, 1),
  },
};

export const _2Articles: Story = {
  args: {
    articles: defaultArgs.articles.slice(0, 2),
  },
};

export const _3Articles: Story = {
  args: {
    ...defaultArgs,
  },
};

export const _4Articles: Story = {
  args: {
    articles: [
      {
        id: 1,
        title: 'Est aliqua aute labore fugiat labore dolore.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, turpis vel luctus tincidunt, erat felis lacinia libero, nec accumsan nunc odio sit amet urna. Sed at urna auctor, tincidunt lacus vitae, ultricies nulla. Nullam euismod, justo sit amet tincidunt vehicula, nunc ex ultricies felis, nec lacinia nunc dolor vel libero. Nulla facilisi. Nullam eget nunc ac libero ultricies ultricies. Suspendisse potenti. Aliquam erat volutpat. Nullam nec ante auctor, ultricies elit ac, lacinia libero.',
        image: {
          src: _1x1,
          alt: 'Article image',
          width: 400,
          height: 400,
        },
        category: {
          title: 'CSS',
          color: '#ede4ff',
        },
        color: '#595a86',
        readTime: 5,
        to: 'first-article',
      },
      {
        id: 2,
        title: 'Mollit est ipsum adipisicing labore ipsum minim ad culpa esse exercitation.',
        description: 'Ac, lacinia libero.',
        image: {
          src: _4x3,
          alt: 'Article image',
          width: 400,
          height: 300,
        },
        category: {
          title: 'JavaScript',
          color: '#bdf6ff',
        },
        color: '#3d98a0',
        readTime: 5,
        to: 'second-article',
      },
      {
        id: 3,
        title: 'Ex eiusmod sint excepteur consequat sunt voluptate consectetur anim ullamco consectetur ad ea magna.',
        description: 'Cupidatat do officia sunt esse mollit. Pariatur in qui ut reprehenderit est dolor aute culpa enim exercitation mollit excepteur et exercitation.Id ut adipisicing ex consectetur veniam quis enim eiusmod labore ipsum laboris adipisicing ea est.',
        image: {
          src: _16x9,
          alt: 'Article image',
          width: 400,
          height: 225,
        },
        category: {
          title: 'JavaScript',
          color: '#bdf6ff',
        },
        color: '#3d98a0',
        readTime: 5,
        to: 'third-article',
      },
      {
        id: 4,
        title: 'Exercitation consectetur cupidatat anim.',
        description: 'Adipisicing ea est.',
        image: {
          src: _1x1,
          alt: 'Article image',
          width: 400,
          height: 400,
        },
        category: {
          title: 'CSS',
          color: '#ffe4f2',
        },
        color: '#8a3265',
        readTime: 5,
        to: 'fourth-article',
      },
    ],
  },
};

export const _5Articles: Story = {
  args: {
    articles: [
      {
        id: 1,
        title: 'Est aliqua aute labore fugiat labore dolore.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, turpis vel luctus tincidunt, erat felis lacinia libero, nec accumsan nunc odio sit amet urna. Sed at urna auctor, tincidunt lacus vitae, ultricies nulla. Nullam euismod, justo sit amet tincidunt vehicula, nunc ex ultricies felis, nec lacinia nunc dolor vel libero. Nulla facilisi. Nullam eget nunc ac libero ultricies ultricies. Suspendisse potenti. Aliquam erat volutpat. Nullam nec ante auctor, ultricies elit ac, lacinia libero.',
        image: {
          src: _1x1,
          alt: 'Article image',
          width: 400,
          height: 400,
        },
        category: {
          title: 'CSS',
          color: '#ede4ff',
        },
        color: '#595a86',
        readTime: 5,
        to: 'first-article',
      },
      {
        id: 2,
        title: 'Mollit est ipsum adipisicing labore ipsum minim ad culpa esse exercitation.',
        description: 'Ac, lacinia libero.',
        image: {
          src: _4x3,
          alt: 'Article image',
          width: 400,
          height: 300,
        },
        category: {
          title: 'JavaScript',
          color: '#bdf6ff',
        },
        color: '#3d98a0',
        readTime: 5,
        to: 'second-article',
      },
      {
        id: 3,
        title: 'Ex eiusmod sint excepteur consequat sunt voluptate consectetur anim ullamco consectetur ad ea magna.',
        description: 'Cupidatat do officia sunt esse mollit. Pariatur in qui ut reprehenderit est dolor aute culpa enim exercitation mollit excepteur et exercitation.Id ut adipisicing ex consectetur veniam quis enim eiusmod labore ipsum laboris adipisicing ea est.',
        image: {
          src: _16x9,
          alt: 'Article image',
          width: 400,
          height: 225,
        },
        category: {
          title: 'JavaScript',
          color: '#bdf6ff',
        },
        color: '#3d98a0',
        readTime: 5,
        to: 'third-article',
      },
      {
        id: 4,
        title: 'Exercitation consectetur cupidatat anim.',
        description: 'Adipisicing ea est.',
        image: {
          src: _1x1,
          alt: 'Article image',
          width: 400,
          height: 400,
        },
        category: {
          title: 'CSS',
          color: '#ffe4f2',
        },
        color: '#8a3265',
        readTime: 5,
        to: 'fourth-article',
      },
      {
        id: 5,
        title: 'Voluptate fugiat ad adipisicing sint officia proident ullamco.',
        description: 'Duis Lorem reprehenderit Lorem proident magna ipsum duis dolore officia occaecat. Ex adipisicing non ad aute in dolor nulla proident cillum voluptate. Ut amet non id consectetur velit mollit enim anim dolor. Cillum ipsum occaecat in cupidatat cillum velit dolore amet cillum ut ea ullamco incididunt commodo.',
        image: {
          src: _1x1,
          alt: 'Article image',
          width: 400,
          height: 400,
        },
        category: {
          title: 'Front-end',
          color: '#e4fff3',
        },
        color: '#778a32',
        readTime: 5,
        to: 'fifth-article',
      },
    ],
  },
};
