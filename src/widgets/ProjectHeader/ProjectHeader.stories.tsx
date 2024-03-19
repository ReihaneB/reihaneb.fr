import type { Meta, StoryObj } from '@storybook/react';

import _16x9 from '@/styles/assets/placeholder/_16x9.png';
import _4x3 from '@/styles/assets/placeholder/_4x3.png';
import _1x1 from '@/styles/assets/placeholder/_1x1.png';

import ProjectHeader from './ProjectHeader';

const meta: Meta<typeof ProjectHeader> = {
  title: 'Widgets/ProjectHeader',
  component: ProjectHeader,
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
      src: _16x9,
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
        src: _1x1,
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
        src: _16x9,
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
        src: _4x3,
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
