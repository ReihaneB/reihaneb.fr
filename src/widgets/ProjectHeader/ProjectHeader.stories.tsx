import type { Meta, StoryObj } from '@storybook/react';

import ProjectHeader from './ProjectHeader';

import styles from './ProjectHeader.stories.module.css';

const meta: Meta<typeof ProjectHeader> = {
  title: 'Widgets/ProjectHeader',
  component: ProjectHeader,
  decorators: [
    Story => (
      <div className={styles.root}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProjectHeader>;

const defaultArgs = {
  project: {
    id: 1,
    title: 'Project Title',
    jobTitle: 'Job Title',
    url: '/',
    stack: [{
      id: 1,
      name: 'React',
    },
    {
      id: 2,
      name: 'TypeScript',
    },
    {
      id: 3,
      name: 'Next.js',
    },
    {
      id: 4,
      name: 'Tailwind CSS',
    },
    ],
    image: {
      url: 'https://via.placeholder.com/1920x1080',
      alt: 'Project Image',
    },
  },
};

export const Playground: Story = {
  args: {
    ...defaultArgs,
  },
};

export const SquareImage: Story = {
  args: {
    ...defaultArgs,
    project: {
      ...defaultArgs.project,
      image: {
        url: 'https://via.placeholder.com/500x500',
        alt: 'Project Image',
      },
    },
  },
};

export const _16x9Image: Story = {
  args: {
    ...defaultArgs,
    project: {
      ...defaultArgs.project,
      image: {
        url: 'https://via.placeholder.com/1920x1080',
        alt: 'Project Image',
      },
    },
  },
};

export const _4x3Image: Story = {
  args: {
    ...defaultArgs,
    project: {
      ...defaultArgs.project,
      image: {
        url: 'https://via.placeholder.com/800x600',
        alt: 'Project Image',
      },
    },
  },
};

export const LongTitle: Story = {
  args: {
    ...defaultArgs,
    project: {
      ...defaultArgs.project,
      title: 'This is a very long title that should not be truncated',
    },
  },
};

export const LongJobTitle: Story = {
  args: {
    ...defaultArgs,
    project: {
      ...defaultArgs.project,
      jobTitle: 'This is a very long job title that should not be truncated',
    },
  },
};

export const LongStackName: Story = {
  args: {
    ...defaultArgs,
    project: {
      ...defaultArgs.project,
      stack: [
        {
          id: 1,
          name: 'React',
        },
        {
          id: 2,
          name: 'This is a second very long stack name that should not be truncated',
        },
        {
          id: 3,
          name: 'Next.js',
        },
        {
          id: 4,
          name: 'This is a fourth very long stack name that should not be truncated',
        },
      ],
    },
  },
};

export const LongData: Story = {
  args: {
    ...defaultArgs,
    project: {
      ...defaultArgs.project,
      title: 'This is a very long title that should not be truncated',
      jobTitle: 'This is a very long job title that should not be truncated',
      stack: [
        {
          id: 1,
          name: 'React',
        },
        {
          id: 2,
          name: 'This is a second very long stack name that should not be truncated',
        },
        {
          id: 3,
          name: 'Next.js',
        },
        {
          id: 4,
          name: 'This is a fourth very long stack name that should not be truncated',
        },
      ],
    },
  },
};
