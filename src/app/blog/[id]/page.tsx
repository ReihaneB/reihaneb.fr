import { Metadata } from 'next';

import Article from '@/pageComponents/Article/Article';
import { getAboutMe } from '@/api/getAboutMe';
import { getBlogArticle } from '@/api/getBlogArticle';

interface ArticlePageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { id } = params;
  const about = await getAboutMe();
  const article = await getBlogArticle({ id });

  return {
    title: `${article.meta.title} • ${about.name}`,
    description: `${article.meta.description} • ${about.name}`,
    openGraph: {
      title: `${article.meta.title} • ${about.name}`,
      type: 'article',
      url: `https://www.reihaneb.fr/blog/${id}`,
      images: [
        {
          url: article.image.src,
          width: article.image.width,
          height: article.image.height,
          alt: article.image.alt,
        },
      ],
    },
    robots: article.meta.robots,
  };
}

function ArticlePage({ params }: ArticlePageProps) {
  return (
    <Article params={params} />
  );
}

export default ArticlePage;
