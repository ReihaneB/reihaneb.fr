import RichText from '@/components/RichText/RichText';

import type { ArticleContentProps } from './ArticleContent.d';

function ArticleContent({
  content,
  ...rest
}: ArticleContentProps) {
  return (
    <RichText
      content={content}
      {...rest}
    />
  );
}

export default ArticleContent;
