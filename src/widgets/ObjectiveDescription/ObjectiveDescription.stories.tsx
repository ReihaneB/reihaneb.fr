import type { Meta, StoryObj } from '@storybook/react';

import ObjectiveDescription from './ObjectiveDescription';

const meta: Meta<typeof ObjectiveDescription> = {
  title: 'Widgets/ObjectiveDescription',
  component: ObjectiveDescription,
};

export default meta;
type Story = StoryObj<typeof ObjectiveDescription>;

export const Playground: Story = {
  args: {
    title: 'Dolore aliquip dolor consectetur esse eu non. Adipisicing cupidatat cillum mollit sunt cupidatat cupidatat voluptate ex laborum aute irure.',
    description: 'Aliqua sint amet reprehenderit commodo. Nisi duis esse incididunt non ad eiusmod labore sunt enim sunt. Anim est nisi veniam veniam ipsum mollit dolor. Labore ad sunt excepteur sunt velit id cillum eiusmod ut cupidatat adipisicing. Tempor ex anim mollit elit adipisicing reprehenderit eiusmod sunt. Ipsum minim deserunt ea culpa aute fugiat ut quis ullamco proident non pariatur et ex.',
  },
};

export const LongDescription: Story = {
  args: {
    title: 'Nisi labore cupidatat esse Lorem dolore quis anim occaecat non culpa.',
    description: 'Non reprehenderit irure ex occaecat duis nulla officia dolore magna Lorem duis. Dolore culpa aute aliquip sint eu irure aute mollit aliqua. Officia dolore et laboris proident esse deserunt irure minim magna ad ut sint. Incididunt elit Lorem qui cillum dolore duis labore laborum consequat minim. Veniam excepteur incididunt ad labore. Sint pariatur irure consequat id esse anim esse qui. Est adipisicing sit irure aliqua sint culpa nostrud ut laboris reprehenderit Lorem pariatur eiusmod cillum. Cillum magna mollit minim non proident dolor mollit aliquip eu voluptate duis aliquip voluptate. Officia reprehenderit officia amet anim. Magna officia quis aliqua officia anim pariatur officia sit esse laborum. Cupidatat cupidatat id incididunt officia et id cillum. Sint reprehenderit consectetur aute do enim do exercitation ex adipisicing ipsum proident magna consequat. Culpa dolore commodo ullamco occaecat aute cillum cupidatat ad ipsum sint non ea laboris magna.',
  },
};

export const ShortDescription: Story = {
  args: {
    title: 'Ut ut ipsum dolor quis id sit fugiat cupidatat sit Lorem laborum ut. Eiusmod proident laborum est mollit in cillum id do proident cupidatat anim enim. Elit ut anim eu reprehenderit. Consequat commodo irure adipisicing in in quis.',
    description: 'Dolor qui amet Lorem aliquip elit sit anim. Adipisicing cupidatat cillum mollit sunt cupidatat cupidatat voluptate ex laborum aute irure. Dolore sit cillum anim eiusmod sit quis dolore id id cupidatat laborum culpa.',
  },
};
