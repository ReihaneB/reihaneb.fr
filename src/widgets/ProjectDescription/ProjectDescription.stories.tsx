import type { Meta, StoryObj } from '@storybook/react';

import _16x9 from '@/styles/assets/placeholder/_16x9.png';
import _4x3 from '@/styles/assets/placeholder/_4x3.png';
import _1x1 from '@/styles/assets/placeholder/_1x1.png';

import ProjectDescription from './ProjectDescription';

import styles from './ProjectDescription.stories.module.css';

const meta: Meta<typeof ProjectDescription> = {
  title: 'Widgets/ProjectDescription',
  component: ProjectDescription,
  decorators: [
    Story => (
      <div className={styles.root}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProjectDescription>;

const defaultArgs = {
  companyDescription: 'Dolor qui amet Lorem aliquip elit sit anim. Adipisicing cupidatat cillum mollit sunt cupidatat cupidatat voluptate ex laborum aute irure. Dolore sit cillum anim eiusmod sit quis dolore id id cupidatat laborum culpa. Consectetur dolor minim nostrud nostrud anim in ullamco eu tempor irure aliqua ullamco culpa ipsum. Laborum in amet sit eu nulla sunt adipisicing qui magna. Sit eu commodo ut laboris esse Lorem velit eiusmod sunt. Esse ipsum pariatur eu nostrud in minim anim ea exercitation.',
  objective: {
    title: 'Do Lorem est aute in sunt non qui cillum occaecat. Non nulla excepteur sunt et fugiat.',
    description: 'Non reprehenderit irure ex occaecat duis nulla officia dolore magna Lorem duis. Dolore culpa aute aliquip sint eu irure aute mollit aliqua. Officia dolore et laboris proident esse deserunt irure minim magna ad ut sint. Incididunt elit Lorem qui cillum dolore duis labore laborum consequat minim. Veniam excepteur incididunt ad labore. Sint pariatur irure consequat id esse anim esse qui. Est adipisicing sit irure aliqua sint culpa nostrud ut laboris reprehenderit Lorem pariatur eiusmod cillum. Cillum magna mollit minim non proident dolor mollit aliquip eu voluptate duis aliquip voluptate. Officia reprehenderit officia amet anim. Magna officia quis aliqua officia anim pariatur officia sit esse laborum. Cupidatat cupidatat id incididunt officia et id cillum. Sint reprehenderit consectetur aute do enim do exercitation ex adipisicing ipsum proident magna consequat. Culpa dolore commodo ullamco occaecat aute cillum cupidatat ad ipsum sint non ea laboris magna.',
    image: {
      src: _16x9,
      alt: 'Project image',
    },
  },
};

export const Playground: Story = {
  args: {
    ...defaultArgs,
  },
};

export const _16x9Image: Story = {
  args: {
    ...defaultArgs,
    objective: {
      ...defaultArgs.objective,
      image: {
        src: _16x9,
        alt: 'Project image',
      },
    },
  },
};

export const _4x3Image: Story = {
  args: {
    ...defaultArgs,
    objective: {
      ...defaultArgs.objective,
      image: {
        src: _4x3,
        alt: 'Project image',
      },
    },
  },
};

export const _1x1Image: Story = {
  args: {
    ...defaultArgs,
    objective: {
      ...defaultArgs.objective,
      image: {
        src: _1x1,
        alt: 'Project image',
      },
    },
  },
};

export const LongDescription: Story = {
  args: {
    ...defaultArgs,
    objective: {
      ...defaultArgs.objective,
      description: 'Non reprehenderit irure ex occaecat duis nulla officia dolore magna Lorem duis. Dolore culpa aute aliquip sint eu irure aute mollit aliqua. Officia dolore et laboris proident esse deserunt irure minim magna ad ut sint. Incididunt elit Lorem qui cillum dolore duis labore laborum consequat minim. Veniam excepteur incididunt ad labore. Sint pariatur irure consequat id esse anim esse qui. Est adipisicing sit irure aliqua sint culpa nostrud ut laboris reprehenderit Lorem pariatur eiusmod cillum. Cillum magna mollit minim non proident dolor mollit aliquip eu voluptate duis aliquip voluptate. Officia reprehenderit officia amet anim. Magna officia quis aliqua officia anim pariatur officia sit esse laborum. Cupidatat cupidatat id incididunt officia et id cillum. Sint reprehenderit consectetur aute do enim do exercitation ex adipisicing ipsum proident magna consequat. Culpa dolore commodo ullamco occaecat aute cillum cupidatat ad ipsum sint non ea laboris magna. Non reprehenderit irure ex occaecat duis nulla officia dolore magna Lorem duis. Dolore culpa aute aliquip sint eu irure aute mollit aliqua. Officia dolore et laboris proident esse deserunt irure minim magna ad ut sint. Incididunt elit Lorem qui cillum dolore duis labore laborum consequat minim. Veniam excepteur incididunt ad labore. Sint pariatur irure consequat id esse anim esse qui. Est adipisicing sit irure aliqua sint culpa nostrud ut laboris reprehenderit Lorem pariatur eiusmod cillum. Cillum magna mollit minim non proident dolor mollit aliquip eu voluptate duis aliquip voluptate. Officia reprehenderit officia amet anim. Magna officia quis aliqua officia anim pariatur officia sit esse laborum. Cupidatat cupidatat id incididunt officia et id cillum. Sint reprehenderit consectetur aute do enim do exercitation ex adipisicing ipsum proident magna consequat. Culpa dolore commodo ullamco occaecat aute cillum cupidatat ad ipsum sint non ea laboris magna.',
    },
  },
};

export const LongCompanyDescription: Story = {
  args: {
    ...defaultArgs,
    companyDescription: 'Dolor qui amet Lorem aliquip elit sit anim. Adipisicing cupidatat cillum mollit sunt cupidatat cupidatat voluptate ex laborum aute irure. Dolore sit cillum anim eiusmod sit quis dolore id id cupidatat laborum culpa. Consectetur dolor minim nostrud nostrud anim in ullamco eu tempor irure aliqua ullamco culpa ipsum. Laborum in amet sit eu nulla sunt adipisicing qui magna. Sit eu commodo ut laboris esse Lorem velit eiusmod sunt. Esse ipsum pariatur eu nostrud in minim anim ea exercitation. Dolor qui amet Lorem aliquip elit sit anim. Adipisicing cupidatat cillum mollit sunt cupidatat cupidatat voluptate ex laborum aute irure. Dolore sit cillum anim eiusmod sit quis dolore id id cupidatat laborum culpa. Consectetur dolor minim nostrud nostrud anim in ullamco eu tempor irure aliqua ullamco culpa ipsum. Laborum in amet sit eu nulla sunt adipisicing qui magna. Sit eu commodo ut laboris esse Lorem velit eiusmod sunt. Esse ipsum pariatur eu nostrud in minim anim ea exercitation.',
  },
};

export const ShortTextsAndBigImage: Story = {
  args: {
    ...defaultArgs,
    companyDescription: 'Dolor qui amet Lorem aliquip elit sit anim.',
    objective: {
      ...defaultArgs.objective,
      title: 'Do Lorem est',
      description: 'Non reprehenderit irure ex occaecat duis nulla.',
      image: {
        src: _16x9,
        alt: 'Project image',
      },
    },
  },
};
