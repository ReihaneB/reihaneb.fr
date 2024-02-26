import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { lokiPlayDecorator } from '@/testUtils/loki/play-decorator';

import MainStack from './MainStack';

const meta: Meta<typeof MainStack> = {
  title: 'Widgets/MainStack',
  component: MainStack,
};

export default meta;
type Story = StoryObj<typeof MainStack>;

const defaultArgs = {
  stack: [
    {
      id: 3,
      name: 'Next',
    },
    {
      id: 2,
      name: 'Express',
    },
    {
      id: 1,
      name: 'Postgres',
    },
  ],
};

export const Playground: Story = {
  args: {
    ...defaultArgs,
  },
};

export const _1Element: Story = {
  args: {
    stack: [
      {
        id: 1,
        name: 'Postgres',
      },
    ],
  },
  play: lokiPlayDecorator(
    async ({ args, canvasElement }) => {
      const canvas = within(canvasElement);

      expect(args.stack).toHaveLength(1);
      expect(canvas.getAllByTestId('tag-component')).toHaveLength(1);
    }
  ),
};

export const _2Elements: Story = {
  args: {
    stack: [
      {
        id: 1,
        name: 'Postgres',
      },
      {
        id: 2,
        name: 'Express',
      },
    ],
  },
  play: lokiPlayDecorator(
    async ({ args, canvasElement }) => {
      const canvas = within(canvasElement);

      expect(args.stack).toHaveLength(2);
      expect(canvas.getAllByTestId('tag-component')).toHaveLength(2);
    }
  ),
};

export const _3Elements: Story = {
  args: {
    stack: [
      {
        id: 1,
        name: 'Postgres',
      },
      {
        id: 2,
        name: 'Express',
      },
      {
        id: 3,
        name: 'Next',
      },
    ],
  },
  play: lokiPlayDecorator(
    async ({ args, canvasElement }) => {
      const canvas = within(canvasElement);

      expect(args.stack).toHaveLength(3);
      expect(canvas.getAllByTestId('tag-component')).toHaveLength(3);
    }
  ),
};

export const _4Elements: Story = {
  args: {
    stack: [
      {
        id: 1,
        name: 'Postgres',
      },
      {
        id: 2,
        name: 'Express',
      },
      {
        id: 3,
        name: 'Next',
      },
      {
        id: 4,
        name: 'React',
      },
    ],
  },
  play: lokiPlayDecorator(
    async ({ args, canvasElement }) => {
      const canvas = within(canvasElement);

      expect(args.stack).toHaveLength(4);
      expect(canvas.getAllByTestId('tag-component')).toHaveLength(4);
    }
  ),
};

export const MoreThan4Elements: Story = {
  name: 'Maxium 4 elements are shown',
  args: {
    stack: [
      {
        id: 1,
        name: 'Postgres',
      },
      {
        id: 2,
        name: 'Express',
      },
      {
        id: 3,
        name: 'Next',
      },
      {
        id: 4,
        name: 'React',
      },
      {
        id: 5,
        name: 'TypeScript',
      },
    ],
  },
  play: lokiPlayDecorator(
    async ({ args, canvasElement }) => {
      const canvas = within(canvasElement);

      expect(args.stack).toHaveLength(5);
      expect(canvas.getAllByTestId('tag-component')).toHaveLength(4);
    }
  ),
};
