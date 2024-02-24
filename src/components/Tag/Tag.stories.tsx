import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, waitFor, within } from '@storybook/test';

import { lokiPlayDecorator } from '@/testUtils/loki/play-decorator';
import IconArrow from '@/styles/icons/arrows/arrow.svg';

import Tag from './Tag';

import styles from './Tag.stories.module.css';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
};

export default meta;
type Story = StoryObj<typeof Tag>;

const defaultArgs = {
  children: 'Click me',
};

export const Playground: Story = {
  args: {
    ...defaultArgs,
  },
};

export const WithIcon: Story = {
  args: {
    ...defaultArgs,
    Icon: IconArrow,
  },
};

export function LongText() {
  return (
    <div className={styles.container}>
      <Tag>
        This is a very long text that should be going to the next line
      </Tag>
    </div>
  );
}

LongText.storyName = 'Long text';

export function LongTextWithIcon() {
  return (
    <div className={styles.container}>
      <Tag Icon={IconArrow}>
        This is a very long text that should be going to the next line
      </Tag>
    </div>
  );
}

LongTextWithIcon.storyName = 'Long text with icon';

export const NotFocusTab: Story = {
  args: {
    ...defaultArgs,
  },
  play: lokiPlayDecorator(
    async ({ canvasElement }) => {
      const canvas = within(canvasElement);

      await userEvent.tab();

      await waitFor(() => expect(canvas.getByTestId('tag-component')).not.toHaveFocus());
    }
  ),
};
