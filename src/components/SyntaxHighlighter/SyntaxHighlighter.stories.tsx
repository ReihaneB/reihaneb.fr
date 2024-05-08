import type { Meta, StoryObj } from '@storybook/react';

import SyntaxHighlighter from './SyntaxHighlighter';

const meta: Meta<typeof SyntaxHighlighter> = {
  title: 'Components/SyntaxHighlighter',
  component: SyntaxHighlighter,
};

export default meta;
type Story = StoryObj<typeof SyntaxHighlighter>;

const defaultArgs = {
  language: 'javascript',
  children: 'console.log("Hello, World!");',
};

export const Playground: Story = {
  args: {
    ...defaultArgs,
  },
};

export const JavaScript: Story = {
  args: {
    ...defaultArgs,
    children: (
      `function greet(name) {\n return 'Hello, ' + name + '!';\n}\n\nconsole.log(greet('World'));\n`
    ),
  },
  name: 'JavaScript',
};

export const TypeScript: Story = {
  args: {
    children: (
      `function greet(name: string): string {\n return 'Hello, ' + name + '!';\n}\n\nconsole.log(greet('World'));\n`
    ),
    language: 'typescript',
  },
  name: 'TypeScript',
};

export const CSS: Story = {
  args: {
    language: 'css',
    children: (
      `body {\n font-family: 'Inter', sans-serif;\n font-size: 16px;\n}\n`
    ),
  },
};

export const WithouthLanguage: Story = {
  args: {
    children: (
      `body {\n font-family: 'Inter', sans-serif;\n font-size: 16px;\n}\n`
    ),
  },
};
