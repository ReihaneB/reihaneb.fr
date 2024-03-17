import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, waitFor, within } from '@storybook/test';

import { lokiPlayDecorator } from '@/testUtils/loki/play-decorator';

import Section from './Section';

const meta: Meta<typeof Section> = {
  title: 'Components/Section',
  component: Section,
};

export default meta;
type Story = StoryObj<typeof Section>;

const defaultArgs = {
  children: 'Section content',
  id: 'section-id',
};

export const Playground: Story = {
  args: {
    ...defaultArgs,
  },
};

export const NotFocusTab: Story = {
  args: {
    ...defaultArgs,
  },
  play: lokiPlayDecorator(
    async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      const section = canvas.getByText('Section content');

      expect(section).toBeInTheDocument();

      await userEvent.tab();

      await waitFor(() => expect(section).not.toHaveFocus());
    }
  ),
};

export const SemanticSection: Story = {
  args: {
    ...defaultArgs,
  },
  name: 'Should render a semantic section element',
  play: lokiPlayDecorator(
    async ({ canvasElement }) => {
      const canvas = within(canvasElement);

      const section = canvas.getByText('Section content');

      expect(section).toBeInTheDocument();
      expect(section.tagName).toBe('SECTION');
    }
  ),
};

