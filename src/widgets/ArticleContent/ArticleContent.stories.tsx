import type { Meta, StoryObj } from '@storybook/react';

import ArticleContent from './ArticleContent';

const meta: Meta<typeof ArticleContent> = {
  title: 'Widgets/ArticleContent',
  component: ArticleContent,
};

export default meta;
type Story = StoryObj<typeof ArticleContent>;

export const Playground: Story = {
  args: {
    content: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'Grid area est une fonctionnalité puissante de CSS Grid qui permet aux développeurs de créer des mises en page complexes de manière intuitive et maintenable. En utilisant ',
            type: 'text',
          },
          {
            code: true,
            text: 'grid-area',
            type: 'text',
          },
          {
            text: ', vous pouvez assigner des éléments à des zones spécifiques de votre grille, facilitant ainsi l\'organisation et la gestion de vos layouts tout en préservant une bonne sémantique.',
            type: 'text',
          },
        ],
      },
      {
        type: 'heading',
        level: 2,
        children: [
          {
            text: 'Définition et Utilité',
            type: 'text',
          },
        ],
      },
      {
        type: 'paragraph',
        children: [
          {
            bold: true,
            text: 'Grid Area',
            type: 'text',
          },
          {
            text: ' vous aide à définir des zones dans une grille où vous pouvez placer vos éléments HTML. Cela se fait en assignant des noms aux lignes ou aux zones spécifiques de votre grille, rendant le CSS plus lisible et facile à maintenir.',
            type: 'text',
          },
        ],
      },
      {
        type: 'heading',
        level: 2,
        children: [
          {
            text: 'Comment utiliser Grid Area pour améliorer la sémantique',
            type: 'text',
          },
        ],
      },
      {
        type: 'code',
        children: [
          {
            text: '```css\n.container {\n display: grid;\n grid-template-areas: \n  "header header header"\n  "menu main sidebar"\n  "footer footer footer";\n}\n\n.header {\n grid-area: header;\n}\n\n.main {\n grid-area: main;\n}\n\n.sidebar {\n grid-area: sidebar;\n}\n\n.footer {\n grid-area: footer;\n}',
            type: 'text',
          },
        ],
      },
      {
        type: 'paragraph',
        children: [
          {
            text: 'Dans cet exemple, grid-template-areas définit un layout de trois rangées avec un en-tête, un contenu principal, un menu, un panneau latéral et un pied de page. Chaque zone est clairement nommée, ce qui contribue à une meilleure sémantique et facilite les ajustements futurs.',
            type: 'text',
          },
        ],
      },
      {
        type: 'heading',
        level: 2,
        children: [
          {
            text: 'Avantages de maintenir une bonne sémantique',
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
                bold: true,
                text: 'Accessibilité ',
                type: 'text',
              },
              {
                text: ': Une meilleure structure sémantique aide les technologies d\'assistance à mieux comprendre le contenu et la structure de votre site web.',
                type: 'text',
              },
            ],
          },
          {
            type: 'list-item',
            children: [
              {
                bold: true,
                text: 'Maintenabilité',
                type: 'text',
              },
              {
                text: ' : Le code est plus facile à lire et à modifier, surtout lorsque vous travaillez en équipe.',
                type: 'text',
              },
            ],
          },
          {
            type: 'list-item',
            children: [
              {
                bold: true,
                text: 'SEO',
                type: 'text',
              },
              {
                text: ' : Les moteurs de recherche favorisent les sites bien structurés qui utilisent correctement les balises sémantiques.',
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
            text: 'Meilleures pratiques',
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
                text: 'Utilisez des noms descriptifs pour ',
                type: 'text',
              },
              {
                code: true,
                text: 'grid-area',
                type: 'text',
              },
              {
                text: ' pour clarifier la fonction de chaque section du layout.',
                type: 'text',
              },
            ],
          },
          {
            type: 'list-item',
            children: [
              {
                text: 'Maintenez une cohérence dans la définition de vos grilles pour faciliter la réutilisation des styles.',
                type: 'text',
              },
            ],
          },
          {
            type: 'list-item',
            children: [
              {
                text: 'Testez l\'accessibilité de votre site pour s\'assurer que la structure sémantique ne nuit pas à l\'expérience utilisateur.',
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
            text: 'Conclusion',
            type: 'text',
          },
        ],
      },
      {
        type: 'paragraph',
        children: [
          {
            text: 'Grid area offre une méthode robuste pour structurer les pages web tout en améliorant leur sémantique. En prenant le temps de bien organiser vos grilles, vous pouvez non seulement créer des sites visuellement attrayants, mais aussi accessibles et faciles à maintenir. Adoptez cette pratique pour enrichir vos compétences en développement web et produire des sites de haute qualité.',
            type: 'text',
          },
        ],
      },
    ],
  },
};
