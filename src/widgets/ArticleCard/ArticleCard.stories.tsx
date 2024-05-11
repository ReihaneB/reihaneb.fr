import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, waitFor, within } from '@storybook/test';

import { lokiPlayDecorator } from '@/testUtils/loki/play-decorator';
import _16x9 from '@/styles/assets/placeholder/_16x9.png';
import _4x3 from '@/styles/assets/placeholder/_4x3.png';
import _1x1 from '@/styles/assets/placeholder/_1x1.png';

import ArticleCard from './ArticleCard';

import styles from './ArticleCard.stories.module.css';

const meta: Meta<typeof ArticleCard> = {
  title: 'Widgets/ArticleCard',
  component: ArticleCard,
  decorators: [
    Story => (
      <div className={styles.container}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ArticleCard>;

const defaultArgs = {
  id: 1,
  title: 'Id consectetur adipisicing Lorem aute proident.',
  image: {
    src: _1x1,
    alt: 'Article image',
    width: 400,
    height: 400,
  },
  color: '#865959',
  category: {
    title: 'CSS',
    color: '#ffdede',
  },
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, turpis vel luctus tincidunt, erat felis lacinia libero, nec accumsan nunc odio sit amet urna. Sed at urna auctor, tincidunt lacus vitae, ultricies nulla. Nullam euismod, justo sit amet tincidunt vehicula, nunc ex ultricies felis, nec lacinia nunc dolor vel libero. Nulla facilisi. Nullam eget nunc ac libero ultricies ultricies. Suspendisse potenti. Aliquam erat volutpat. Nullam nec ante auctor, ultricies elit ac, lacinia libero.',
  readTime: 5,
  to: 'article-slugged',
};

export const Playground: Story = {
  args: {
    ...defaultArgs,
  },
};

export const WithLongTitle: Story = {
  args: {
    ...defaultArgs,
    title: 'Quis proident deserunt reprehenderit non consectetur cillum est velit eiusmod deserunt id cillum non.',
  },
};

export const WithLongDescription: Story = {
  args: {
    ...defaultArgs,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, turpis vel luctus tincidunt, erat felis lacinia libero, nec accumsan nunc odio sit amet urna. Sed at urna auctor, tincidunt lacus vitae, ultricies nulla. Nullam euismod, justo sit amet tincidunt vehicula, nunc ex ultricies felis, nec lacinia nunc dolor vel libero. Nulla facilisi. Nullam eget nunc ac libero ultricies ultricies. Suspendisse potenti. Aliquam erat volutpat. Nullam nec ante auctor, ultricies elit ac, lacinia libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, turpis vel luctus tincidunt, erat felis lacinia libero, nec accumsan nunc odio sit amet urna. Sed at urna auctor, tincidunt lacus vitae, ultricies nulla. Nullam euismod, justo sit amet tincidunt vehicula, nunc ex ultricies felis, nec lacinia nunc dolor vel libero. Nulla facilisi. Nullam eget nunc ac libero ultricies ultricies. Suspendisse potenti. Aliquam erat volutpat. Nullam nec ante auctor, ultricies elit ac, lacinia libero.',
  },
};

export const _1x1Image: Story = {
  args: {
    ...defaultArgs,
  },
};

export const _4x3Image: Story = {
  args: {
    ...defaultArgs,
    image: {
      src: _4x3,
      alt: 'Article image',
      width: 400,
      height: 300,
    },
  },
};

export const _16x9Image: Story = {
  args: {
    ...defaultArgs,
    image: {
      src: _16x9,
      alt: 'Article image',
      width: 400,
      height: 225,
    },
  },
};

export const LongCategoryName: Story = {
  args: {
    ...defaultArgs,
    category: {
      title: 'This is a very long category name',
      color: '#ffdede',
    },
  },
};

export const LongReadTime: Story = {
  args: {
    ...defaultArgs,
    readTime: 100,
  },
};

export const OnlyFocusLink: Story = {
  args: {
    ...defaultArgs,
  },
  play: lokiPlayDecorator(
    async ({ canvasElement }) => {
      const canvas = within(canvasElement);

      await userEvent.tab();

      await waitFor(() => expect(canvas.getByTestId('link-component')).toHaveFocus());
    }
  ),
};

export const LinkHaveTheRightHref: Story = {
  args: {
    ...defaultArgs,
    to: 'article-slugged',
  },
  play: lokiPlayDecorator(
    async ({ canvasElement }) => {
      const canvas = within(canvasElement);

      await waitFor(() => expect(canvas.getByTestId('link-component')).toHaveAttribute('href', '/blog/article-slugged'));
    }
  ),
};
