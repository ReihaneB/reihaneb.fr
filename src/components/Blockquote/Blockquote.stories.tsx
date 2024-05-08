import type { Meta, StoryObj } from '@storybook/react';

import Blockquote from './Blockquote';

const meta: Meta<typeof Blockquote> = {
  title: 'Components/Blockquote',
  component: Blockquote,
};

export default meta;
type Story = StoryObj<typeof Blockquote>;

const defaultArgs = {
  children: 'No one is perfect - that’s why pencils have erasers.',
};

export const Playground: Story = {
  args: {
    ...defaultArgs,
  },
};

export const LongQuote: Story = {
  args: {
    children: (
      `
        Et ad commodo ea ullamco quis irure consectetur sit est elit.
        Commodo amet aliqua incididunt id magna quis consequat aliqua consectetur ad.
        Laborum culpa quis elit eu ad. Est ex elit adipisicing pariatur sunt ipsum nostrud dolore.
        Lorem minim incididunt ullamco laboris magna labore enim.
        Ea qui anim fugiat proident deserunt exercitation id ad enim.
        Duis nulla ut ipsum excepteur pariatur pariatur mollit ex.
      `
    ),
  },
};

export const ShortQuote: Story = {
  args: {
    children: 'No one is perfect.',
  },
};
