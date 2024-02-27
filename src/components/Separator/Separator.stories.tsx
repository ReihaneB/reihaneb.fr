import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, waitFor, within } from '@storybook/test';

import { lokiPlayDecorator } from '@/testUtils/loki/play-decorator';

import Separator from './Separator';

const meta: Meta<typeof Separator> = {
  title: 'Components/Separator',
  component: Separator,
};

export default meta;
type Story = StoryObj<typeof Separator>;

const defaultArgs = {
  text: 'Seperator content',
};

export const Playground: Story = {
  args: {
    ...defaultArgs,
  },
};

export const WithoutChildren: Story = {
  args: {
    ...defaultArgs,
    text: null,
  },
};

export const NotFocusTab: Story = {
  args: {
    ...defaultArgs,
  },
  play: lokiPlayDecorator(
    async ({ canvasElement }) => {
      const canvas = within(canvasElement);

      await userEvent.tab();

      await waitFor(() => expect(canvas.getByTestId('separator-component')).not.toHaveFocus());
    }
  ),
};
