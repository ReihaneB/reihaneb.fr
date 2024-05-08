import type { Meta, StoryObj } from '@storybook/react';

import List from './List';

const meta: Meta<typeof List> = {
  title: 'Components/List',
  component: List,
};

export default meta;
type Story = StoryObj<typeof List>;

const defaultArgs = {
  children: (
    <>
      <li>
        No one is perfect.
      </li>
      <li>
        But everyone can be better.
      </li>
    </>
  ),
};

export const Playground: Story = {
  args: {
    ...defaultArgs,
  },
};

export const Unordered: Story = {
  args: {
    ...defaultArgs,
    type: 'unordered',
  },
};

export const Ordered: Story = {
  args: {
    ...defaultArgs,
    type: 'ordered',
  },
};

export const LongOrdered: Story = {
  args: {
    ...defaultArgs,
    type: 'ordered',
    children: (
      <>
        <li>
          No one is perfect.
        </li>
        <li>
          But everyone can be better.
        </li>
        <li>
          It is not the strongest of the species that survive,
          nor the most intelligent, but the one most responsive to change.
        </li>
        <li>
          The only way to do great work is to love what you do.
        </li>
        <li>
          The best way to predict the future is to create it.
        </li>
      </>
    ),
  },
};

export const LongUnordered: Story = {
  args: {
    ...defaultArgs,
    children: (
      <>
        <li>
          No one is perfect.
        </li>
        <li>
          But everyone can be better.
        </li>
        <li>
          It is not the strongest of the species that survive,
          nor the most intelligent, but the one most responsive to change.
        </li>
        <li>
          The only way to do great work is to love what you do.
        </li>
        <li>
          The best way to predict the future is to create it.
        </li>
      </>
    ),
  },
};

export const Nested: Story = {
  args: {
    type: 'ordered',
    children: (
      <>
        <li>
          No one is perfect.
          <List type="unordered">
            <li>
              But everyone can be better.
            </li>
            <li>
              It is not the strongest of the species that survive,
              nor the most intelligent, but the one most responsive to change.
            </li>
            <li>
              The only way to do great work is to love what you do.
            </li>
            <li>
              The best way to predict the future is to create it.
            </li>
          </List>
        </li>
        <li>
          The only way to do great work is to love what you do.
          <List type="ordered">
            <li>
              The best way to predict the future is to create it.
            </li>
            <li>
              It is not the strongest of the species that survive,
              nor the most intelligent, but the one most responsive to change.
            </li>
            <li>
              But everyone can be better.
            </li>
            <li>
              No one is perfect.
            </li>
          </List>
        </li>
        <li>
          The best way to predict the future is to create it.
        </li>
      </>
    ),
  },
};
