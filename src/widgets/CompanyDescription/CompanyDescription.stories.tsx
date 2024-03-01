import type { Meta, StoryObj } from '@storybook/react';

import CompanyDescription from './CompanyDescription';

const meta: Meta<typeof CompanyDescription> = {
  title: 'Widgets/CompanyDescription',
  component: CompanyDescription,
};

export default meta;
type Story = StoryObj<typeof CompanyDescription>;

export const Playground: Story = {
  args: {
    description: 'Dolore aliquip dolor consectetur esse eu non.',
  },
};

export const LongDescription: Story = {
  args: {
    description: 'Non reprehenderit irure ex occaecat duis nulla officia dolore magna Lorem duis. Dolore culpa aute aliquip sint eu irure aute mollit aliqua. Officia dolore et laboris proident esse deserunt irure minim magna ad ut sint. Incididunt elit Lorem qui cillum dolore duis labore laborum consequat minim. Veniam excepteur incididunt ad labore. Sint pariatur irure consequat id esse anim esse qui. Est adipisicing sit irure aliqua sint culpa nostrud ut laboris reprehenderit Lorem pariatur eiusmod cillum. Cillum magna mollit minim non proident dolor mollit aliquip eu voluptate duis aliquip voluptate. Officia reprehenderit officia amet anim. Magna officia quis aliqua officia anim pariatur officia sit esse laborum. Cupidatat cupidatat id incididunt officia et id cillum. Sint reprehenderit consectetur aute do enim do exercitation ex adipisicing ipsum proident magna consequat. Culpa dolore commodo ullamco occaecat aute cillum cupidatat ad ipsum sint non ea laboris magna.',
  },
};

export const ShortDescription: Story = {
  args: {
    description: 'Dolor qui amet Lorem aliquip elit sit anim. Adipisicing cupidatat cillum mollit sunt cupidatat cupidatat voluptate ex laborum aute irure. Dolore sit cillum anim eiusmod sit quis dolore id id cupidatat laborum culpa.',
  },
};
