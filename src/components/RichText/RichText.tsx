import type React from 'react';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

import Link from '../Link/Link';
import Image from '../Image/Image';
import SyntaxHighlighter from '../SyntaxHighlighter/SyntaxHighlighter';
import Blockquote from '../Blockquote/Blockquote';
import List from '../List/List';

import styles from './RichText.module.css';
import { RichTextProps } from './RichText.d';

function extractLanguage(codeBlock: string) {
  const match = codeBlock.match(/```(\w+)/);
  return match ? match[1] : null;
}

function RichText({
  content,
  ...rest
}: RichTextProps) {
  return (
    <div className={styles.root} {...rest}>
      <BlocksRenderer
        content={content}
        blocks={{
          image: ({ image }) => (
            <Image
              src={image.url}
              alt={image.alternativeText || ''}
              priority
            />
          ),
          link: ({ children, url }) => (
            <Link size="small" to={url}>
              {children}
            </Link>
          ),
          list: ({ children, format }) => (
            <List type={format}>
              {Array.isArray(children) ? children : [children]}
            </List>
          ),
          quote: ({ children }) => (
            <Blockquote>
              {Array.isArray(children) ?
                children.map((child: React.ReactElement) => child.props.text).join('\n') :
                ''}
            </Blockquote>
          ),
          code: ({ children }) => {
            if (Array.isArray(children)) {
              const combinedText = children
                .map((child: React.ReactElement) => child.props.text.replace(/^```(\w+)\n/, ''))
                .join('\n');

              const lang = extractLanguage(children.map((child: React.ReactElement) => child.props.text).join('\n')) || undefined;

              return (
                <SyntaxHighlighter language={lang}>
                  {combinedText}
                </SyntaxHighlighter>
              );
            }
            return null;
          },
        }}
      />
    </div>
  );
}

export default RichText;
