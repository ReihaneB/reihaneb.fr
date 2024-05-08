/* eslint-disable @typescript-eslint/ban-ts-comment */
// TODO: Find a way to test images in the RichText component without typescript errors (see below)
// @ts-nocheck

import type { Meta, StoryObj } from '@storybook/react';

import _1x1 from '@/styles/assets/placeholder/_1x1.png';

import RichText from './RichText';

const meta: Meta<typeof RichText> = {
  title: 'Components/RichText',
  component: RichText,
};

export default meta;
type Story = StoryObj<typeof RichText>;

export const Playground: Story = {
  args: {
    content: [
      {
        type: 'heading',
        level: 1,
        children: [
          {
            text: 'Titre de l\'article',
            type: 'text',
          },
        ],
      },
      {
        type: 'paragraph',
        children: [
          {
            text: 'Consequat sunt elit deserunt anim cupidatat id proident mollit deserunt.',
            type: 'text',
          },
        ],
      },
      {
        type: 'heading',
        level: 2,
        children: [
          {
            text: 'Premier paragraphe',
            type: 'text',
          },
        ],
      },
      {
        type: 'paragraph',
        children: [
          {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula ',
            type: 'text',
          },
          {
            url: 'https://liome.fr',
            type: 'link',
            children: [
              {
                text: 'massa',
                type: 'text',
              },
            ],
          },
          {
            text: ', varius a, semper congue, euismod non, mi.',
            type: 'text',
          },
        ],
      },
      {
        type: 'heading',
        level: 2,
        children: [
          {
            text: 'Image',
            type: 'text',
          },
        ],
      },
      {
        type: 'image',
        image: {
          url: _1x1,
          width: 400,
          height: 400,
          alternativeText: 'A placeholder image',
        },
      },
      {
        type: 'heading',
        level: 2,
        children: [
          {
            text: 'Deuxième paragraphe',
            type: 'text',
          },
        ],
      },
      {
        type: 'paragraph',
        children: [
          {
            text: 'Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim.',
            type: 'text',
          },
        ],
      },
      {
        type: 'heading',
        level: 2,
        children: [
          {
            text: 'Liste ordonnée',
            type: 'text',
          },
        ],
      },
      {
        type: 'list',
        format: 'ordered',
        children: [
          {
            type: 'list-item',
            children: [
              {
                text: 'Integer nec odio.',
                type: 'text',
              },
            ],
          },
          {
            type: 'list-item',
            children: [
              {
                text: 'Praesent libero.',
                type: 'text',
              },
            ],
          },
          {
            type: 'list-item',
            children: [
              {
                text: 'Sed cursus ante dapibus diam.',
                type: 'text',
              },
            ],
          },
          {
            type: 'list-item',
            children: [
              {
                text: 'Sed nisi.',
                type: 'text',
              },
            ],
          },
          {
            type: 'list-item',
            children: [
              {
                text: 'Nulla quis sem at nibh elementum imperdiet.',
                type: 'text',
              },
            ],
          },
        ],
      },
      {
        type: 'heading',
        level: 2,
        children: [
          {
            text: 'Quote',
            type: 'text',
          },
        ],
      },
      {
        type: 'quote',
        children: [
          {
            text: 'Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            type: 'text',
          },
        ],
      },
      {
        type: 'heading',
        level: 2,
        children: [
          {
            text: 'Liste non ordonnée',
            type: 'text',
          },
        ],
      },
      {
        type: 'list',
        format: 'unordered',
        children: [
          {
            type: 'list-item',
            children: [
              {
                text: 'Curabitur sodales ligula in libero.',
                type: 'text',
              },
            ],
          },
          {
            type: 'list-item',
            children: [
              {
                text: 'Sed dignissim lacinia nunc.',
                type: 'text',
              },
            ],
          },
          {
            type: 'list-item',
            children: [
              {
                text: 'Curabitur tortor.',
                type: 'text',
              },
            ],
          },
          {
            type: 'list-item',
            children: [
              {
                text: 'Pellentesque nibh.',
                type: 'text',
              },
            ],
          },
          {
            type: 'list-item',
            children: [
              {
                text: 'Aenean quam.',
                type: 'text',
              },
            ],
          },
        ],
      },
      {
        type: 'heading',
        level: 2,
        children: [
          {
            text: 'Troisième paragraphe',
            type: 'text',
          },
        ],
      },
      {
        type: 'paragraph',
        children: [
          {
            text: 'In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.',
            type: 'text',
          },
        ],
      },
      {
        type: 'heading',
        level: 2,
        children: [
          {
            text: 'Code',
            type: 'text',
          },
        ],
      },
      {
        type: 'code',
        children: [
          {
            text: '```python\ndef saluer(nom):\n print(f"Bonjour, {nom}!")\n saluer("Lorem Ipsum")',
            type: 'text',
          },
        ],
      },
      {
        type: 'paragraph',
        children: [
          {
            text: '',
            type: 'text',
          },
        ],
      },
    ],
  },
};

export const Paragraph: Story = {
  args: {
    content: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula ',
            type: 'text',
          },
          {
            url: 'https://liome.fr',
            type: 'link',
            children: [
              {
                text: 'massa',
                type: 'text',
              },
            ],
          },
          {
            text: ', varius a, semper congue, euismod non, mi.',
            type: 'text',
          },
        ],
      },
    ],
  },
  name: 'Paragraph',
};

export const Heading: Story = {
  args: {
    content: [
      {
        type: 'heading',
        level: 1,
        children: [
          {
            text: 'Titre de l\'article',
            type: 'text',
          },
        ],
      },
    ],
  },
  name: 'Heading',
};

// An error occurs when trying to display an image in the RichText component
// because the image object is not correctly typed in the BlocksContent.d.ts file
// to test with a StaticImageData object
export const Image: Story = {
  args: {
    content: [
      {
        type: 'image',
        image: {
          url: _1x1,
          alternativeText: 'A placeholder image',
        },
      },
    ],
  },
  name: 'Image',
};

export const OrderedList: Story = {
  args: {
    content: [
      {
        type: 'list',
        format: 'ordered',
        children: [
          {
            type: 'list-item',
            children: [
              {
                text: 'Integer nec odio.',
                type: 'text',
              },
            ],
          },
          {
            type: 'list-item',
            children: [
              {
                text: 'Praesent libero.',
                type: 'text',
              },
            ],
          },
          {
            type: 'list-item',
            children: [
              {
                text: 'Sed cursus ante dapibus diam.',
                type: 'text',
              },
            ],
          },
          {
            type: 'list-item',
            children: [
              {
                text: 'Sed nisi.',
                type: 'text',
              },
            ],
          },
          {
            type: 'list-item',
            children: [
              {
                text: 'Nulla quis sem at nibh elementum imperdiet.',
                type: 'text',
              },
            ],
          },
        ],
      },
    ],
  },
  name: 'Ordered List',
};

export const UnorderedList: Story = {
  args: {
    content: [
      {
        type: 'list',
        format: 'unordered',
        children: [
          {
            type: 'list-item',
            children: [
              {
                text: 'Curabitur sodales ligula in libero.',
                type: 'text',
              },
            ],
          },
          {
            type: 'list-item',
            children: [
              {
                text: 'Sed dignissim lacinia nunc.',
                type: 'text',
              },
            ],
          },
          {
            type: 'list-item',
            children: [
              {
                text: 'Curabitur tortor.',
                type: 'text',
              },
            ],
          },
          {
            type: 'list-item',
            children: [
              {
                text: 'Pellentesque nibh.',
                type: 'text',
              },
            ],
          },
          {
            type: 'list-item',
            children: [
              {
                text: 'Aenean quam.',
                type: 'text',
              },
            ],
          },
        ],
      },
    ],
  },
  name: 'Unordered List',
};

export const Quote: Story = {
  args: {
    content: [
      {
        type: 'quote',
        children: [
          {
            text: 'Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            type: 'text',
          },
        ],
      },
    ],
  },
  name: 'Quote',
};

export const Code: Story = {
  args: {
    content: [
      {
        type: 'code',
        children: [
          {
            text: '```python\ndef saluer(nom):\n print(f"Bonjour, {nom}!")\n saluer("Lorem Ipsum")',
            type: 'text',
          },
        ],
      },
    ],
  },
  name: 'Code',
};
