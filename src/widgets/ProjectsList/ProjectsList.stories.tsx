import type { Meta, StoryObj } from '@storybook/react';

import ProjectsList from './ProjectsList';

import styles from './ProjectsList.stories.module.css';

const meta: Meta<typeof ProjectsList> = {
  title: 'Widgets/ProjectsList',
  component: ProjectsList,
  decorators: [
    Story => (
      <div className={styles.root}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProjectsList>;

const defaultArgs = {
  projects: [
    {
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
    {
      id: 2,
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
    {
      id: 3,
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
  ],
};

export const Playground: Story = {
  args: {
    ...defaultArgs,
  },
};

export const SingleProject: Story = {
  args: {
    projects: [
      defaultArgs.projects[0],
    ],
  },
};

export const MultipleProjects: Story = {
  args: {
    projects: defaultArgs.projects,
  },
};

export const SingleProjectWithLongTitle: Story = {
  args: {
    projects: [
      {
        ...defaultArgs.projects[0],
        title: 'A very long project title that should not be truncated',
      },
    ],
  },
};

export const MultipleProjectsWithLongTitle: Story = {
  args: {
    projects: defaultArgs.projects.map(project => ({
      ...project,
      title: 'A very long project title that should not be truncated',
    })),
  },
};

export const SingleProjectWithLongJobTitle: Story = {
  args: {
    projects: [
      {
        ...defaultArgs.projects[0],
        jobTitle: 'A very long job title that should not be truncated',
      },
    ],
  },
};

export const MultipleProjectsWithLongJobTitle: Story = {
  args: {
    projects: defaultArgs.projects.map(project => ({
      ...project,
      jobTitle: 'A very long job title that should not be truncated',
    })),
  },
};

export const SingleProjectWithLongStackName: Story = {
  args: {
    projects: [
      {
        ...defaultArgs.projects[0],
        stack: [
          {
            id: 1,
            name: 'React',
          },
          {
            id: 2,
            name: 'A very long stack name that should not be truncated',
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
      },
    ],
  },
};

export const MultipleProjectsWithLongStackName: Story = {
  args: {
    projects: defaultArgs.projects.map(project => ({
      ...project,
      stack: [
        {
          id: 1,
          name: 'React',
        },
        {
          id: 2,
          name: 'A very long stack name that should not be truncated',
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
    })),
  },
};

export const SingleProjectWithLongData: Story = {
  args: {
    projects: [
      {
        ...defaultArgs.projects[0],
        title: 'A very long project title thaht should not be truncated',
        jobTitle: 'A very long job title that should not be truncated',
        stack: [
          {
            id: 1,
            name: 'React',
          },
          {
            id: 2,
            name: 'A very long stack name that should not be truncated',
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
      },
    ],
  },
};

export const MultipleProjectsWithLongData: Story = {
  args: {
    projects: defaultArgs.projects.map(project => ({
      ...project,
      title: 'A very long project title thaht should not be truncated',
      jobTitle: 'A very long job title that should not be truncated',
      stack: [
        {
          id: 1,
          name: 'React',
        },
        {
          id: 2,
          name: 'A very long stack name that should not be truncated',
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
    })),
  },
};


export const MultipleProjectsDifferentImages: Story = {
  name: 'Multiple projects with sizes of images',
  args: {
    projects: [
      {
        ...defaultArgs.projects[0],
        image: {
          url: 'https://via.placeholder.com/1920x1080',
          alt: 'Project Image',
        },
      },
      {
        ...defaultArgs.projects[1],
        image: {
          url: 'https://via.placeholder.com/800x600',
          alt: 'Project Image',
        },
      },
      {
        ...defaultArgs.projects[2],
        image: {
          url: 'https://via.placeholder.com/1000x1000',
          alt: 'Project Image',
        },
      },
    ],
  },
};
