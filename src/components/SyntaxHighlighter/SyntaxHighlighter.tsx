import { Prism as Highlighter } from 'react-syntax-highlighter';
import { coldarkCold } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { SyntaxHighlighterProps } from './SyntaxHighlighter.d';
import styles from './SyntaxHighlighter.module.css';

function SyntaxHighlighter({
  language,
  children,
  ...rest
}: SyntaxHighlighterProps) {
  return (
    <div className={styles.root}>
      {language && (
        <p className={styles.language}>
          {language}
        </p>
      )}
      <Highlighter
        language={language}
        style={coldarkCold}
        customStyle={{
          backgroundColor: 'transparent',
          margin: 0,
        }}
        codeTagProps={{
          style: {
            backgroundColor: 'transparent',
            fontFamily: '"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',
          },
        }}
        {...rest}
      >
        {children}
      </Highlighter>
    </div>
  );
}

export default SyntaxHighlighter;
