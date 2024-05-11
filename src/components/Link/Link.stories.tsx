import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, waitFor, within } from '@storybook/test';

import { lokiPlayDecorator } from '@/testUtils/loki/play-decorator';
import IconArrow from '@/styles/icons/arrows/arrow.svg';

import Link from './Link';

import styles from './Link.stories.module.css';

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
};

export default meta;
type Story = StoryObj<typeof Link>;

const defaultArgs = {
  to: '/',
  children: 'Click on the link',
  autoFocus: false,
  forwardedRef: null,
  fullWidth: false,
};

export const Playground: Story = {
  args: {
    ...defaultArgs,
  },
};

export const Primary: Story = {
  args: {
    ...defaultArgs,
  },
};

export const PrimaryHover: Story = {
  name: 'Primary - Hover',
  args: {
    ...defaultArgs,
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const Secondary: Story = {
  args: {
    ...defaultArgs,
    color: 'secondary',
  },
};

export const SecondaryHover: Story = {
  name: 'Secondary - Hover',
  args: {
    ...defaultArgs,
    color: 'secondary',
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const Active: Story = {
  args: {
    ...defaultArgs,
  },
  parameters: {
    pseudo: { active: true },
  },
};

export const Focus: Story = {
  args: {
    ...defaultArgs,
  },
  parameters: {
    pseudo: { focusVisible: true },
  },
};

export const PrimaryRounded: Story = {
  args: {
    ...defaultArgs,
    rounded: true,
  },
};

export const SecondaryRounded: Story = {
  args: {
    ...defaultArgs,
    color: 'secondary',
    rounded: true,
  },
};

export const PrimarySmall: Story = {
  args: {
    ...defaultArgs,
    size: 'small',
  },
};

export const PrimarySmallRounded: Story = {
  args: {
    ...defaultArgs,
    size: 'small',
    rounded: true,
  },
};

export const SecondarySmall: Story = {
  args: {
    ...defaultArgs,
    color: 'secondary',
    size: 'small',
  },
};

export const SecondarySmallRounded: Story = {
  args: {
    ...defaultArgs,
    color: 'secondary',
    size: 'small',
    rounded: true,
  },
};

export const FullWidth: Story = {
  args: {
    ...defaultArgs,
    fullWidth: true,
  },
};

export const WithIcon: Story = {
  args: {
    ...defaultArgs,
    Icon: IconArrow,
  },
};

export const SmallWithIcon: Story = {
  args: {
    ...defaultArgs,
    size: 'small',
    Icon: IconArrow,
  },
};

export const RoundedWithIcon: Story = {
  args: {
    ...defaultArgs,
    rounded: true,
    Icon: IconArrow,
  },
};

export const SmallRoundedWithIcon: Story = {
  args: {
    ...defaultArgs,
    size: 'small',
    rounded: true,
    Icon: IconArrow,
  },
};

export const AutoFocus: Story = {
  args: {
    ...defaultArgs,
    autoFocus: true,
  },
  play: lokiPlayDecorator(
    async ({ canvasElement }) => {
      const canvas = within(canvasElement);

      await waitFor(() => expect(canvas.getByTestId('link-component')).toHaveFocus());
    }
  ),
};

export const ClickMultipleTimes: Story = {
  args: {
    ...defaultArgs,
  },
  play: lokiPlayDecorator(
    async ({ canvasElement, step }) => {
      const canvas = within(canvasElement);

      await step('Click the link 2 times', async () => {
        await userEvent.click(canvas.getByTestId('link-component'));
        await userEvent.click(canvas.getByTestId('link-component'));
      });

      // TODO: Except Actions when it will be implemented with Storybook Interaction
    }
  ),
};

export const PressEnter: Story = {
  args: {
    ...defaultArgs,
  },
  play: lokiPlayDecorator(
    async ({ canvasElement, step }) => {
      const canvas = within(canvasElement);

      await step('Press the link 2 times', async () => {
        await userEvent.type(canvas.getByTestId('link-component'), '{Enter}');
        await userEvent.type(canvas.getByTestId('link-component'), '{Enter}');
      });

      // TODO: Except Actions when it will be implemented with Storybook Interaction
    }
  ),
};

export const FocusOnClick: Story = {
  name: 'Focused when clicked',
  args: {
    ...defaultArgs,
  },
  play: lokiPlayDecorator(
    async ({ canvasElement }) => {
      const canvas = within(canvasElement);

      await userEvent.click(canvas.getByTestId('link-component'));

      await waitFor(() => expect(canvas.getByTestId('link-component')).toHaveFocus());
    }
  ),
};

export const FocusOnTab: Story = {
  name: 'Focused when tabbed',
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

export function LongText() {
  return (
    <div className={styles.container}>
      <Link
        to="/"
      >
        This is a very long text that should be going to the next line
      </Link>
    </div>
  );
}

LongText.storyName = 'Long text';

export function LongTextWithIcon() {
  return (
    <div className={styles.container}>
      <Link
        to="/"
        Icon={IconArrow}
      >
        This is a very long text that should be going to the next line
      </Link>
    </div>
  );
}

LongTextWithIcon.storyName = 'Long text with icon';
