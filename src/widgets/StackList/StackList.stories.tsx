import type { Meta, StoryObj } from '@storybook/react';

import IconArrow from '@/styles/icons/arrows/arrow.svg';

import StackList from './StackList';

const meta: Meta<typeof StackList> = {
  title: 'Widgets/StackList',
  component: StackList,
};

export default meta;
type Story = StoryObj<typeof StackList>;

const defaultArgs = {
  stack: [
    {
      id: 1,
      name: 'Front-end',
      stackCategory: [
        {
          id: 1,
          name: 'Librairie 1',
          tags: [
            {
              id: 1,
              label: 'React',
              icon: IconArrow,
            },
            {
              id: 2,
              label: 'TypeScript',
              icon: IconArrow,
            },
          ],
        },
        {
          id: 2,
          name: 'Librairie 2',
          tags: [
            {
              id: 3,
              label: 'Redux',
              icon: IconArrow,
            },
            {
              id: 4,
              label: 'Jest',
              icon: IconArrow,
            },
            {
              id: 5,
              label: 'Testing Library',
              icon: IconArrow,
            },
          ],
        },
      ],
    },
  ],
};

export const Playground: Story = {
  args: {
    ...defaultArgs,
  },
};

export const _1Overview: Story = {
  args: {
    stack: [
      {
        id: 1,
        name: 'Front-end',
        stackCategory: [
          {
            id: 1,
            name: 'Librairie 1',
            tags: [
              {
                id: 1,
                label: 'React',
                icon: IconArrow,
              },
              {
                id: 2,
                label: 'TypeScript',
                icon: IconArrow,
              },
            ],
          },
        ],
      },
    ],
  },
};

export const _2Overviews: Story = {
  args: {
    stack: [
      {
        id: 1,
        name: 'Front-end',
        stackCategory: [
          {
            id: 1,
            name: 'Librairie 1',
            tags: [
              {
                id: 1,
                label: 'React',
                icon: IconArrow,
              },
              {
                id: 2,
                label: 'TypeScript',
                icon: IconArrow,
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: 'Back-end',
        stackCategory: [
          {
            id: 3,
            name: 'Librairie 2',
            tags: [
              {
                id: 3,
                label: 'Redux',
                icon: IconArrow,
              },
              {
                id: 4,
                label: 'Jest',
                icon: IconArrow,
              },
              {
                id: 5,
                label: 'Testing Library',
                icon: IconArrow,
              },
            ],
          },
        ],
      },
    ],
  },
};

export const _3Overviews: Story = {
  args: {
    stack: [
      {
        id: 1,
        name: 'Front-end',
        stackCategory: [
          {
            id: 1,
            name: 'Librairie 1',
            tags: [
              {
                id: 1,
                label: 'React',
                icon: IconArrow,
              },
              {
                id: 2,
                label: 'TypeScript',
                icon: IconArrow,
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: 'Back-end',
        stackCategory: [
          {
            id: 3,
            name: 'Librairie 2',
            tags: [
              {
                id: 3,
                label: 'Redux',
                icon: IconArrow,
              },
              {
                id: 4,
                label: 'Jest',
                icon: IconArrow,
              },
              {
                id: 5,
                label: 'Testing Library',
                icon: IconArrow,
              },
            ],
          },
        ],
      },
      {
        id: 3,
        name: 'Mobile',
        stackCategory: [
          {
            id: 6,
            name: 'Librairie 3',
            tags: [
              {
                id: 7,
                label: 'React Native',
                icon: IconArrow,
              },
              {
                id: 8,
                label: 'TypeScript',
                icon: IconArrow,
              },
            ],
          },
        ],
      },
    ],
  },
};

export const _4Overviews: Story = {
  args: {
    stack: [
      {
        id: 1,
        name: 'Front-end',
        stackCategory: [
          {
            id: 1,
            name: 'Librairie 1',
            tags: [
              {
                id: 1,
                label: 'React',
                icon: IconArrow,
              },
              {
                id: 2,
                label: 'TypeScript',
                icon: IconArrow,
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: 'Back-end',
        stackCategory: [
          {
            id: 3,
            name: 'Librairie 2',
            tags: [
              {
                id: 3,
                label: 'Redux',
                icon: IconArrow,
              },
              {
                id: 4,
                label: 'Jest',
                icon: IconArrow,
              },
              {
                id: 5,
                label: 'Testing Library',
                icon: IconArrow,
              },
            ],
          },
        ],
      },
      {
        id: 3,
        name: 'Mobile',
        stackCategory: [
          {
            id: 6,
            name: 'Librairie 3',
            tags: [
              {
                id: 7,
                label: 'React Native',
                icon: IconArrow,
              },
              {
                id: 8,
                label: 'TypeScript',
                icon: IconArrow,
              },
            ],
          },
        ],
      },
      {
        id: 4,
        name: 'DevOps',
        stackCategory: [
          {
            id: 9,
            name: 'Librairie 4',
            tags: [
              {
                id: 10,
                label: 'Docker',
                icon: IconArrow,
              },
              {
                id: 11,
                label: 'Kubernetes',
                icon: IconArrow,
              },
            ],
          },
        ],
      },
    ],
  },
};

export const _5Overviews: Story = {
  args: {
    stack: [
      {
        id: 1,
        name: 'Front-end',
        stackCategory: [
          {
            id: 1,
            name: 'Librairie 1',
            tags: [
              {
                id: 1,
                label: 'React',
                icon: IconArrow,
              },
              {
                id: 2,
                label: 'TypeScript',
                icon: IconArrow,
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: 'Back-end',
        stackCategory: [
          {
            id: 3,
            name: 'Librairie 2',
            tags: [
              {
                id: 3,
                label: 'Redux',
                icon: IconArrow,
              },
              {
                id: 4,
                label: 'Jest',
                icon: IconArrow,
              },
              {
                id: 5,
                label: 'Testing Library',
                icon: IconArrow,
              },
            ],
          },
        ],
      },
      {
        id: 3,
        name: 'Mobile',
        stackCategory: [
          {
            id: 6,
            name: 'Librairie 3',
            tags: [
              {
                id: 7,
                label: 'React Native',
                icon: IconArrow,
              },
              {
                id: 8,
                label: 'TypeScript',
                icon: IconArrow,
              },
            ],
          },
        ],
      },
      {
        id: 4,
        name: 'DevOps',
        stackCategory: [
          {
            id: 9,
            name: 'Librairie 4',
            tags: [
              {
                id: 10,
                label: 'Docker',
                icon: IconArrow,
              },
              {
                id: 11,
                label: 'Kubernetes',
                icon: IconArrow,
              },
            ],
          },
        ],
      },
      {
        id: 5,
        name: 'Data',
        stackCategory: [
          {
            id: 12,
            name: 'Librairie 5',
            tags: [
              {
                id: 13,
                label: 'PostgreSQL',
                icon: IconArrow,
              },
              {
                id: 14,
                label: 'MongoDB',
                icon: IconArrow,
              },
            ],
          },
        ],
      },
    ],
  },
};
